import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-cihuyy-dark bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold font-baloo text-cihuyy-yellow">
            CIHUYY!
          </h1>
        </div>
        <nav className="hidden md:flex gap-8">
          <a
            href="#about"
            className="text-white hover:text-cihuyy-yellow transition-colors"
          >
            Tentang Kami
          </a>
          <a
            href="#why"
            className="text-white hover:text-cihuyy-yellow transition-colors"
          >
            Kenapa Enak
          </a>
          <a
            href="#product"
            className="text-white hover:text-cihuyy-yellow transition-colors"
          >
            Produk
          </a>
          <a
            href="#testimonial"
            className="text-white hover:text-cihuyy-yellow transition-colors"
          >
            Testimoni
          </a>
        </nav>
        <a
          href="https://wa.me/6289692079525?text=Halo,%20saya%20ingin%20memesan%20Cireng%20Cihuyy"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cihuyy-yellow hover:bg-cihuyy-orange text-cihuyy-dark px-4 py-2 rounded-full font-bold transition-colors duration-300"
        >
          Order Now
        </a>
      </div>
    </header>
  );
};

export default Header;
