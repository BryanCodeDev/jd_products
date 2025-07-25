import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  const handleScrollToProducts = () => {
    const productsSection = document.getElementById('productos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tu tienda de barrio
              <span className="text-emerald-600 block">ahora online</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Compra todos tus productos favoritos desde la comodidad de tu hogar. 
              Entregas rápidas y precios justos, como siempre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleScrollToProducts}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                type="button"
              >
                Ver Productos
              </button>
              <a 
                href="https://wa.me/573113670631?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20productos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-100 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🚚</div>
                  <div className="font-semibold text-emerald-800">Domicilios</div>
                  <div className="text-sm text-emerald-600">Gratis sobre $30.000</div>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">⏰</div>
                  <div className="font-semibold text-blue-800">Horarios</div>
                  <div className="text-sm text-blue-600">6AM - 10PM</div>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-semibold text-purple-800">Precios</div>
                  <div className="text-sm text-purple-600">Competitivos</div>
                </div>
                <div className="bg-orange-100 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">⭐</div>
                  <div className="font-semibold text-orange-800">Calidad</div>
                  <div className="text-sm text-orange-600">Garantizada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;