import React from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin, Clock, Heart } from 'lucide-react';

const Footer = () => {
  const handleSocialClick = (platform, url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // URLs placeholder - reemplazar con las reales cuando estén disponibles
      console.log(`Redireccionar a ${platform}`);
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:jdproductos12@gmail.com?subject=Consulta desde la web&body=Hola, me gustaría obtener más información sobre sus productos.';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+573238957962';
  };

  const handleWhatsAppClick = () => {
    const message = 'Hola! Vengo desde su página web y me gustaría obtener más información sobre sus productos.';
    window.open(`https://wa.me/573238957962?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      {/* Sección principal de contacto */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">¡Contáctanos!</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros por cualquiera de estos medios.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <div className="text-center group">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-blue-100 mb-3">Respuesta inmediata</p>
                <p className="text-lg font-medium">+57 323 895 7962</p>
              </button>
            </div>
            
            {/* Email */}
            <div className="text-center group">
              <button
                onClick={handleEmailClick}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-blue-100 mb-3">Consultas detalladas</p>
                <p className="text-lg font-medium break-all">jdproductos12@gmail.com</p>
              </button>
            </div>
            
            {/* Teléfono */}
            <div className="text-center group">
              <button
                onClick={handlePhoneClick}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Llamada</h3>
                <p className="text-blue-100 mb-3">Atención personalizada</p>
                <p className="text-lg font-medium">+57 323 895 7962</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Información adicional */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Sobre nosotros */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">JD Productos</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Somos un emprendimiento nacido de la pasión por el fútbol y el deseo de apoyar sueños deportivos. 
                Cada producto que vendemos contribuye a hacer realidad el sueño de un joven futbolista.
              </p>
              <div className="flex items-center text-gray-300 mb-2">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                <span>Apoyando sueños deportivos</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-green-500 mr-2" />
                <span>Colombia</span>
              </div>
            </div>
            
            {/* Productos */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Nuestros Productos</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">🥜 Los Broteinos</li>
                <li className="hover:text-white transition-colors cursor-pointer">💫 Manillas Personalizadas</li>
                <li className="hover:text-white transition-colors cursor-pointer">🔑 Llaveros Únicos</li>
              </ul>
            </div>
            
            {/* Horarios y redes */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Síguenos</h3>
              
              {/* Redes sociales */}
              <div className="flex space-x-4 mb-6">
                <button 
                  onClick={() => handleSocialClick('Instagram')}
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  aria-label="Síguenos en Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handleSocialClick('Facebook')}
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  aria-label="Síguenos en Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">@jdproductos12</p>
              
              {/* Horarios */}
              <div className="flex items-start text-gray-300 text-sm">
                <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p>Sáb: 9:00 AM - 4:00 PM</p>
                  <p>Dom: Por cita previa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 JD Productos. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Con ❤️ para apoyar sueños deportivos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;