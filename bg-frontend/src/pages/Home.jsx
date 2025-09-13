import React from "react";
import Header from "../components/Header.jsx";
import Steps from "../components/Steps.jsx";
import BigSlide from "../components/BigSlide.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Upload from "../components/Upload.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BigSlide />
      <Testimonial />
      <Upload />
    </div>
  );
};

export default Home;
