import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "./AppContext";

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

  const api = useMemo(() => {
    return axios.create({
      baseURL: backendUrl,
    });
  }, [backendUrl]);

  const getToken = useCallback(
    () => token || localStorage.getItem("token"),
    [token],
  );

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  const handleLogin = useCallback(
    async (email, password) => {
      try {
        setLoading(true);

        const { data } = await api.post("/users/login", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          setUserData(data.user);

          toast.success(data.message);
          navigate("/");
        }
      } catch (err) {
        toast.error(err.response?.data?.message || "Login failed");
      } finally {
        setLoading(false);
      }
    },
    [api, navigate],
  );

  const handleRegister = useCallback(
    async (email, password) => {
      try {
        setLoading(true);

        const { data } = await api.post("/users/register", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          setUserData(data.user);

          toast.success(data.message);
          navigate("/");
        }
      } catch (err) {
        toast.error(err.response?.data?.message || "Register failed");
      } finally {
        setLoading(false);
      }
    },
    [api, navigate],
  );

const logout = useCallback(() => {
  try {
    localStorage.removeItem("token");
    setToken(null);
    setUserData(null);
    setImage(null);
    setResultImage(null);

    toast.success("Logged out successfully");
    navigate("/login");
  } catch {
    toast.error("Logout failed");
  }
}, [navigate]);

  const removeBg = useCallback(
    async (file) => {
      if (!file) return toast.error("No file selected");

      try {
        setLoading(true);
        setResultImage(null);
        setImage(file);

        const formData = new FormData();
        formData.append("image", file);

        const headers = {
          "Content-Type": "multipart/form-data",
        };

        const savedToken = getToken();
        if (savedToken) headers.Authorization = `Bearer ${savedToken}`;

        const { data } = await api.post("/images/removeBg", formData, {
          headers,
        });

        if (data.success) {
          setResultImage(data.resultImage);
          toast.success("Background removed!");
          navigate("/result");
        } else {
          toast.error(data.message || "Failed");
        }
      } catch (err) {
        toast.error(err.response?.data?.message || "Server error");
      } finally {
        setLoading(false);
      }
    },
    [api, getToken, navigate],
  );

const resetImage = useCallback(() => {
  setImage(null);
  setResultImage(null);
}, []);

  const value = useMemo(
    () => ({
      token,
      image,
      resultImage,
      userData,
      loading,
      setToken,
      setImage,
      setResultImage,
      handleLogin,
      handleRegister,
      logout,
      removeBg,
      resetImage,
    }),
    [
      token,
      image,
      resultImage,
      userData,
      loading,
      handleLogin,
      handleRegister,
      logout,
      removeBg,
      resetImage,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
