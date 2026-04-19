import React from "react";
import Header from "../components/Header.jsx";
import Steps from "../components/Steps.jsx";
import BigSlide from "../components/BigSlide.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Upload from "../components/Upload.jsx";

const Home = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-black via-[#070A12] to-black text-white">

      {/* HERO / PRIMARY CONVERSION */}
      <section className="relative">
        <Header />
      </section>

      {/* TRUST + SIMPLICITY */}
      <section className="relative py-10">
        <Steps />
      </section>

      {/* VISUAL PROOF */}
      <section className="relative py-10 bg-white/0">
        <BigSlide />
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative py-10 bg-gradient-to-b from-transparent to-black/40">
        <Testimonial />
      </section>

      {/* FINAL CTA */}
      <section className="relative py-16 bg-black/40 border-t border-white/10">
        <Upload />
      </section>

    </div>
  );
};

export default Home;