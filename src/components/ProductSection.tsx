import React from "react";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Cireng Cihuyy Ori",
    description:
      "Cireng dengan cita rasa original yang renyah di luar, kenyal di dalam, cocok untuk cemilan kapan saja.",
    price: "Rp 13.000",
    image:
      "https://down-id.img.susercontent.com/file/9e42ed000895aec87a80ecfa0af6f1d8",
  },
  {
    name: "Cireng Cihuyy Sosis Pedazz",
    description:
      "Cireng original ditambah dengan bumbu cabai khas yang bikin ketagihan, untuk pencinta makanan pedas.",
    price: "Rp 13.000",
    image:
      "https://img-global.cpcdn.com/recipes/10e6dfcf93d0955b/680x482cq70/cireng-isi-sosis-pedas-foto-resep-utama.jpg",
  },
  {
    name: "Cireng Cihuyy Keju",
    description:
      "Cireng dengan topping keju mozarella yang meleleh, memberikan sensasi gurih dan creamy yang sempurna.",
    price: "Rp 13.000",
    image:
      "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/e64da54b29304c26bc10a337c763a8fd~tplv-aphluv4xwc-resize-jpeg:800:800.jpeg?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=maliva&from=1826719393",
  },
];

const ProductSection = () => {
  return (
    <section id="product" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-cihuyy-dark">
            Produk <span className="text-cihuyy-yellow">Unggulan</span>
          </h2>
          <div className="w-16 h-1 bg-cihuyy-yellow mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cireng dengan kualitas premium, dibuat dengan cinta dan resep
            rahasia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col">
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl mb-3 text-cihuyy-dark">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center mb-6">
                      <div className="h-px bg-gray-200 flex-grow"></div>
                      <div className="px-4 py-2 bg-cihuyy-yellow text-cihuyy-dark font-bold rounded-full">
                        {product.price}
                      </div>
                      <div className="h-px bg-gray-200 flex-grow"></div>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/6289692079525?text=Halo,%20saya%20ingin%20memesan%20Cireng%20Cihuyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-cihuyy-dark hover:bg-cihuyy-orange text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center mt-4"
                  >
                    Pesan Sekarang{" "}
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cihuyy-yellow to-cihuyy-orange p-8 rounded-xl text-center">
          <h3 className="font-bold text-2xl md:text-3xl mb-4 text-white">
            Pemesanan Khusus untuk Acara & Katering
          </h3>
          <p className="text-white mb-8">
            Tersedia paket khusus untuk acara gathering, rapat, pesta, dan
            kegiatan lainnya. Hubungi kami untuk informasi lebih lanjut!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6289692079525?text=Halo,%20saya%20ingin%20memesan%20Cireng%20Cihuyy%20untuk%20acara"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-cihuyy-dark px-6 py-3 rounded-full font-bold transition-all duration-300 inline-block"
            >
              Pesan untuk Acara
            </a>
            <a
              href="https://wa.me/6289692079525"
              target="_blank"
              className="border-2 border-white text-white hover:bg-white hover:text-cihuyy-dark px-6 py-3 rounded-full font-bold transition-all duration-300 inline-block"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
