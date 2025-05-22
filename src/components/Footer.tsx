import React from "react";
import { Instagram, Facebook, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cihuyy-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-3xl font-bold font-baloo text-cihuyy-yellow mb-4">
              CIHUYY!
            </h3>
            <p className="text-gray-300 mb-4">
              Cireng kekinian yang bikin harimu lebih kriuk dan seru! Dibuat
              dengan bahan berkualitas dan penuh cinta.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/cihuyy_official"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cihuyy-yellow transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/cihuyycireng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cihuyy-yellow transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/6289692079525"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cihuyy-yellow transition-colors"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-cihuyy-yellow transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#why"
                  className="text-gray-300 hover:text-cihuyy-yellow transition-colors"
                >
                  Kenapa Enak
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  className="text-gray-300 hover:text-cihuyy-yellow transition-colors"
                >
                  Produk
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="text-gray-300 hover:text-cihuyy-yellow transition-colors"
                >
                  Testimoni
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Jam Buka</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Senin-Jumat: 10:00 - 21:00</li>
              <li>Sabtu & Minggu: 11:00 - 22:00</li>
              <li>Tanggal Merah: 12:00 - 20:00</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Kontak</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Politeknik Negeri Semarang</p>
              <p>WA: 0896-9207-9525</p>
              <p>Instagram: @gigitt.rn</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Cihuyy. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-cihuyy-yellow transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-cihuyy-yellow transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
