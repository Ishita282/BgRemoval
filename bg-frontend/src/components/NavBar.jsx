import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const NavBar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AppContext);
  const { userData } = useContext(AppContext);

  return (
    <nav className="w-full sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-3 text-white">
        {/* LOGO */}
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Background Remover Logo"
          className="lg:w-40 w-32 cursor-pointer opacity-90 hover:opacity-100 transition"
        />

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6">
          {/* SIMPLE NAV LINK (optional but cleaner) */}
          <button
            onClick={() => navigate("/")}
            className="hidden md:block text-sm text-gray-400 hover:text-white transition"
          >
            Home
          </button>

          {!userData ? (
            <>
              {/* LOGIN */}
              <button
                onClick={() => navigate("/login")}
                className="text-sm text-gray-300 hover:text-white transition px-3 py-1.5 rounded-md hover:bg-white/5"
              >
                Login
              </button>

              {/* REGISTER */}
              <button
                onClick={() => navigate("/register")}
                className="px-5 py-2 rounded-full text-sm font-medium
                 bg-gradient-to-r from-blue-600 to-fuchsia-500
                 hover:scale-[1.03] active:scale-[0.98]
                 transition-all duration-200 shadow-md shadow-blue-500/20"
              >
                Get Started
              </button>
            </>
          ) : (
            <>
              {/* DASHBOARD */}
              <button
                onClick={() => navigate("/dashboard")}
                className="text-sm text-gray-300 hover:text-white transition px-3 py-1.5 rounded-md hover:bg-white/5"
              >
                Dashboard
              </button>

              {/* LOGOUT */}
              <button
                onClick={logout}
                className="text-sm text-gray-300 hover:text-white transition px-3 py-1.5 rounded-md hover:bg-white/5"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
