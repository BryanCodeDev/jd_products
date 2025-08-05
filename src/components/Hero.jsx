import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector('#productos');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white pt-16 sm:pt-20 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-white animate-pulse"></div>
        <div className="absolute top-32 sm:top-40 right-8 sm:right-20 w-10 sm:w-16 h-10 sm:h-16 rounded-full bg-yellow-300 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-green-300 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
            JD Productos
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
            Porque todo empezó con un sueño, que paso a paso se hace realidad...
          </p>
          
          {/* Historia personal */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto text-left mb-8 sm:mb-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                  Pensaba que el fútbol era solo un pasatiempo, ahora se convirtió en mi pasión, es un aprendizaje de vida; 
                  disciplina, constancia, perseverancia, es aprender a trabajar en equipo, respetar la autoridad en la cancha, 
                  de hacer oídos sordos cuando la tribuna te hace desfallecer.
                </p>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                  Ya no es un pasatiempo ahora se convirtió en un sueño que paso a paso se está haciendo realidad porque 
                  cada partido vale la pena, cada medalla y cada trofeo vamos por más.
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-yellow-300">
                  Apoya esta causa JD - Variedad de productos para fondos, un partido más.
                </p>
              </div>
              
              {/* Imagen del fútbol */}
              <div className="relative order-1 lg:order-2">
                <div className="aspect-square max-w-xs sm:max-w-sm mx-auto lg:max-w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/assets/logo1.webp"  // ✅ Ruta corregida (mantiene la correcta)
                    alt="Jugador de fútbol - La pasión que impulsa JD Productos"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center text-4xl sm:text-6xl">
                    ⚽
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <button
            onClick={scrollToProducts}
            className="group bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Ver Nuestros Productos
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;