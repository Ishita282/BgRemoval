import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Result from "./pages/Result.jsx";
import Navebar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full h-full">
        <ToastContainer />
        <Navebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
