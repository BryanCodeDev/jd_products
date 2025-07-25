import React from 'react';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Información de la tienda */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-600 rounded-lg p-2 mr-3">
                🏪
              </div>
              <h3 className="text-xl font-bold">Mi Tienda Virtual</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Tu tienda de barrio de confianza, ahora con la comodidad de comprar online 
              y recibir tus productos en casa. Más de 10 años sirviendo a nuestra comunidad.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/munox09" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-emerald-600"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/santx._09_/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-emerald-600"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/santx_09_" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-emerald-600"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Información de contacto */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contacto</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/573113670631" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mr-3 text-emerald-400" />
                <span>+57 311 367 0631</span>
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-emerald-400 flex-shrink-0" />
                <span>Calle 123 #45-67<br />Barrio Centro<br />Bogotá, Colombia</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="h-4 w-4 mr-3 text-emerald-400" />
                <span>Lun - Dom: 6:00 AM - 10:00 PM</span>
              </div>
              <a 
                href="mailto:info@mitiendavirtual.com" 
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-3 text-emerald-400" />
                <span>info@mitiendavirtual.com</span>
              </a>
            </div>
          </div>
          
          {/* Enlaces útiles */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Enlaces útiles</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Productos
                </a>
              </li>
              <li>
                <a href="/terminos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="/privacidad" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="/devoluciones" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Política de Devoluciones
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Información adicional */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Mi Tienda Virtual. Todos los derechos reservados.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
                <span>💳 Aceptamos efectivo</span>
                <span>🚚 Domicilios gratis {'>'} $30.000</span>
                <span>⭐ Calidad garantizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;