
import React from 'react';

const reasons = [
  {
    title: "Renyah Tahan Lama",
    description: "Tetap kriuk meski sudah tidak hangat, cocok untuk cemilan kapan saja",
    icon: "🥟"
  },
  {
    title: "Bumbu Original Racikan Sendiri",
    description: "Resep rahasia yang dikembangkan selama bertahun-tahun untuk cita rasa sempurna",
    icon: "🌶️"
  },
  {
    title: "Cocok untuk Semua Umur",
    description: "Dari anak-anak hingga dewasa, semua suka dengan kelezatan Cireng Cihuyy",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    title: "Enak Digoreng Dadakan atau Frozen",
    description: "Siap santap langsung atau simpan untuk digoreng nanti, tetap lezat!",
    icon: "❄️"
  }
];

const WhyItsSoGood = () => {
  return (
    <section id="why" className="py-20 bg-cihuyy-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            Kenapa <span className="text-cihuyy-yellow">Enak Banget</span>?
          </h2>
          <div className="w-16 h-1 bg-cihuyy-yellow mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ada beberapa alasan mengapa Cireng Cihuyy menjadi favorit banyak orang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-10 transition-all duration-300 border border-white border-opacity-10"
            >
              <div className="text-4xl mb-4 bg-cihuyy-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span>{reason.icon}</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">
                {reason.title}
              </h3>
              <p className="text-gray-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a 
            href="#product" 
            className="bg-cihuyy-yellow hover:bg-cihuyy-orange text-cihuyy-dark px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-block"
          >
            Lihat Produk Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyItsSoGood;
