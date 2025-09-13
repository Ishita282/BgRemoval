import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [image, setImage] = useState(false);

  const [resultImage, setResultImage] = useState(false);

  const backendUrl = "http://localhost:4000";

  const handleRegister = async (username, email, password) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/register`,
        { username, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      );

      if (data.success) {
        Cookies.set("token", data.token, { expires: 7 });
        setToken(data.token);
        toast.success(data.message);
        setUserData(data.user);
        navigate("/");
      }

      console.log(data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error?.message ||
        "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      );

      if (data.success) {
        Cookies.set("token", data.token, { expires: 7 });
        setToken(data.token);
        setUserData(data.user);
        toast.success(data.message);
        navigate("/");
      }

      console.log(data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error?.message ||
        "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  const removeBg = async (image) => {
    try {
      setImage(image);
      setResultImage(false);
      navigate("/result");

      const formData = new FormData();
      image && formData.append("image", image);

      const token = Cookies.get("token");

      const { data } = await axios.post(
        `${backendUrl}/api/images/removeBg`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.success) {
        setResultImage(data.resultImage);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    backendUrl,
    handleRegister,
    handleLogin,
    removeBg,
    setToken,
    setImage,
    setResultImage,
    image,
    resultImage,
    userData,
    token,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
