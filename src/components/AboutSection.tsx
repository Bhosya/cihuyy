import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-cihuyy-dark">
            Cerita Cihuyy
          </h2>
          <div className="w-16 h-1 bg-cihuyy-yellow mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dari dapur rumahan ke meja makan Anda, kami ingin berbagi
            kebahagiaan melalui cireng kekinian
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.pinimg.com/736x/af/2a/6e/af2a6e77038cea18531cdafbd0d657dc.jpg"
              alt="Cireng close-up"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <blockquote className="text-2xl font-baloo text-cihuyy-dark italic">
              "Cireng Cihuyy dibuat dari resep rumahan yang kriuknya bikin
              kangen."
            </blockquote>
            <div className="flex items-center mt-6">
              <div className="w-12 h-1 bg-cihuyy-yellow mr-4"></div>
              <p className="text-gray-600">Resep turun temurun</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.pinimg.com/736x/5f/31/3e/5f313e696d82ec83fa3a928d05cd6c67.jpg"
              alt="Behind the scenes"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="bg-cihuyy-yellow bg-opacity-10 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-cihuyy-dark">
                  Dari Hati untuk Pecinta Camilan
                </h3>
                <p className="text-gray-700 mb-6">
                  Berawal dari hobi memasak dan kecintaan akan jajanan
                  tradisional, kami berinovasi menciptakan cireng dengan cita
                  rasa kekinian yang tetap mempertahankan keaslian dan
                  kelezatannya.
                </p>
                <p className="text-gray-700">
                  Setiap gigitan Cireng Cihuyy adalah hasil dari pemilihan bahan
                  berkualitas dan proses pembuatan yang teliti, sehingga
                  menghasilkan tekstur yang sempurna - renyah di luar, kenyal di
                  dalam.
                </p>
              </div>
              <div className="relative">
                <div className="blob bg-cihuyy-yellow p-1 animate-pulse-slow">
                  <img
                    src="https://i.pinimg.com/736x/fc/ed/7c/fced7c74db9d6639cee6fc843965cf99.jpg"
                    alt="Cireng serving"
                    className="w-full h-64 object-cover rounded-3xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-cihuyy-dark text-white p-2 rounded-lg transform rotate-3">
                  <p className="font-baloo font-bold">Renyah & Nikmat!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
