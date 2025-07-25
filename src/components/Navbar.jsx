import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartItems, setShowCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-teal-600 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl flex items-center">
              <div className="bg-white text-emerald-600 rounded-lg p-2 mr-3">
                🏪
              </div>
              Mi Tienda Virtual
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a 
                href="#inicio" 
                className="text-white hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' })}
              >
                Inicio
              </a>
              <a 
                href="#productos" 
                className="text-white hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => document.getElementById('productos').scrollIntoView({ behavior: 'smooth' })}
              >
                Productos
              </a>
              <a 
                href="#contacto" 
                className="text-white hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              >
                Contacto
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowCart(true)}
              className="relative bg-white text-emerald-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors flex items-center"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Carrito
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button 
              className="md:hidden text-white" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#inicio" 
                className="text-white hover:bg-emerald-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => {
                  document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Inicio
              </a>
              <a 
                href="#productos" 
                className="text-white hover:bg-emerald-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => {
                  document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Productos
              </a>
              <a 
                href="#contacto" 
                className="text-white hover:bg-emerald-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => {
                  document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;