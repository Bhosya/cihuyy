import React from "react";
import { MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-cihuyy-dark">
      <div className="container mx-auto px-4 text-center">
        <div className="relative mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Order <span className="text-cihuyy-yellow">Sekarang</span>!
          </h2>
          <p className="text-xl text-gray-300 mt-4">Sebelum Kehabisan</p>

          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 bg-cihuyy-yellow rounded-full opacity-20"></div>
          <div className="absolute bottom-0 right-1/3 w-12 h-12 bg-cihuyy-orange rounded-full opacity-20"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <a
            href="https://wa.me/628123456789?text=Halo,%20saya%20ingin%20memesan%20Cireng%20Cihuyy"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-600 hover:bg-green-700 text-white text-2xl px-8 py-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center mb-8 shadow-lg"
          >
            <MessageSquare size={28} className="mr-3" />
            Pesan via WhatsApp
          </a>

          <p className="text-gray-300 mb-8">
            Kami buka setiap hari dari jam 10:00 - 21:00 <br />
            Pengiriman ke seluruh Semarang dengan minimal order 1 pack
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-5 rounded-lg p-4">
              <h3 className="font-bold text-xl mb-2 text-white">Lokasi</h3>
              <p className="text-gray-300">Politeknik Negeri Semarang</p>
            </div>

            <div className="bg-white bg-opacity-5 rounded-lg p-4">
              <h3 className="font-bold text-xl mb-2 text-white">
                Hubungi Kami
              </h3>
              <p className="text-gray-300">
                WA: 0896-9207-9525
                <br />
                Instagram: @gigitt.rn
              </p>
            </div>

            <div className="bg-white bg-opacity-5 rounded-lg p-4">
              <h3 className="font-bold text-xl mb-2 text-white">
                Jam Operasional
              </h3>
              <p className="text-gray-300">
                Senin - Minggu
                <br />
                10:00 - 21:00 WIB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
