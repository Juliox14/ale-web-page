import React, { useState } from "react";

const Carousel = ({ images, descriptions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto p-4 gap-4 ">
      {/* Carrusel de fotos */}
      <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>



        {/* Indicadores de posición */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#7d58df]" : "bg-[#ecebfc]"
                }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Sección de descripción */}
      <div className="w-full md:w-1/2 p-6">
        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#DCDAFA] bg-opacity-75 rounded-full p-2 shadow-md hover:bg-[#c3bcf6]  transition"
        >
          &#10094; {/* Icono de flecha izquierda */}
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#DCDAFA] bg-opacity-75 rounded-full p-2 shadow-md hover:bg-[#c3bcf6] transition"
        >
          &#10095; {/* Icono de flecha derecha */}
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {descriptions[currentIndex].date}
        </h2>
        <p className="text-gray-600">{descriptions[currentIndex].text}</p>
      </div>
    </div>
  );
};

export default Carousel;