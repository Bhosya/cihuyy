import React from "react";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    quote:
      "Serius ini enak banget, kriuknya pas! Udah cobain semua varian, semuanya top!",
    author: "@jajananhariini",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    quote:
      "Gue sampe rebutan sama adek gue 😭🔥 Biasanya kan adek gue yg pilih-pilih makanan.",
    author: "@makankenyang",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    quote:
      "Cireng terenak yang pernah gue makan! Pas banget buat nemenin kerja. Recommended!",
    author: "@foodiejakarta",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    quote:
      "Udah langganan tiap minggu. Keluarga pada suka, apalagi yang pedas!",
    author: "@keluargabahagia",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonial" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-cihuyy-dark">
            Apa Kata <span className="text-cihuyy-yellow">Mereka</span>
          </h2>
          <div className="w-16 h-1 bg-cihuyy-yellow mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pengalaman lezat dari pelanggan setia Cireng Cihuyy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="absolute -top-5 -right-2">
                <MessageSquare size={32} className="text-cihuyy-yellow" />
              </div>
              <p className="mb-6 italic text-gray-700">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-medium text-cihuyy-dark">
                  {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-cihuyy-dark">
            Jadilah Bagian dari Keluarga{" "}
            <span className="text-cihuyy-yellow">Cihuyy</span>!
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Bagikan pengalaman anda dengan tag kami di sosial media dan dapatkan
            kesempatan untuk mendapatkan produk gratis setiap bulan.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="https://www.instagram.com/gigitt.rn/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full flex items-center hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
            >
              <span className="mr-2">@gigitt.rn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
