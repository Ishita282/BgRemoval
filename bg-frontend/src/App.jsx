import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Result from "./pages/Result.jsx";

// Components
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

// Context
import ScrollToTop from "./context/ScrollToTop.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#070A12] to-black text-white">
      <ScrollToTop />

      {/* TOAST SYSTEM (THEMED FOR SAAS) */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN APP AREA */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/result" element={<Result />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
