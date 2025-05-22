import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/cf/2f/c9/cf2fc9599eac49fa54a1d6758b30657a.jpg",
          filter: "brightness(0.3)",
        }}
      />

      {/* Steam effects */}
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white rounded-full opacity-0 animate-steam" />
      <div
        className="absolute top-1/3 right-1/3 w-6 h-6 bg-white rounded-full opacity-0 animate-steam"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-2/3 right-1/4 w-10 h-10 bg-white rounded-full opacity-0 animate-steam"
        style={{ animationDelay: "1s" }}
      />

      {/* Sauce splatters */}
      <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-cihuyy-orange opacity-30 sauce-splat rotate-12" />
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-cihuyy-yellow opacity-20 sauce-splat -rotate-12" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
          CIHUYY! <br />
          <span className="text-cihuyy-yellow text-shadow">
            Camilan Seenak Itu.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8">
          Cireng kekinian yang bikin harimu lebih kriuk dan seru!
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6289692079525?text=Halo,%20saya%20ingin%20memesan%20Cireng%20Cihuyy"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-cihuyy-yellow hover:bg-cihuyy-orange text-cihuyy-dark px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center"
          >
            Pesan Sekarang{" "}
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </a>
          <a
            href="#about"
            className="border-2 border-white text-white hover:bg-white hover:text-cihuyy-dark px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
          >
            Tentang Kami
          </a>
        </div>

        {/* Floating cireng illustration */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="relative animate-float">
            <img
              src="https://i.pinimg.com/736x/f0/a7/a2/f0a7a216ce06badbfaa0d54544586981.jpg"
              alt="Cireng"
              className="w-32 h-32 object-cover rounded-full img-food-highlight"
            />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-cihuyy-yellow rounded-full flex items-center justify-center text-cihuyy-dark font-bold text-xs">
              Hot!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
