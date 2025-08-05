import React from 'react';
import { ShoppingBag, Star, Phone } from 'lucide-react';

const ProductCard = ({ title, description, features, gradient, icon, image, price, originalPrice, onAddToCart, onContact }) => {
  const handleWhatsAppContact = () => {
    if (onContact) {
      onContact();
    } else {
      const message = `Hola! Me interesa el producto: *${title}*${price ? ` - Precio: $${price.toLocaleString()}` : ''}. ¿Podrían darme más información?`;
      window.open(`https://wa.me/573238957962?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
      <div className="relative">
        <div className={`h-48 bg-gradient-to-r ${gradient} flex items-center justify-center overflow-hidden`}>
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className={`${image ? 'hidden' : 'flex'} items-center justify-center text-6xl`}>{icon}</div>
        </div>
        
        {originalPrice && price && (
          <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
          </span>
        )}
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        {features && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        {/* Precio */}
        {price && (
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-green-600">
                ${price.toLocaleString()}
              </span>
              {originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  ${originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {originalPrice && (
              <p className="text-green-600 text-sm mt-1">
                ¡Ahorras ${(originalPrice - price).toLocaleString()}!
              </p>
            )}
          </div>
        )}
        
        {/* Botones */}
        <div className="space-y-3">
          {onAddToCart && (
            <button 
              onClick={onAddToCart}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Agregar al Carrito
            </button>
          )}
          
          <button 
            onClick={handleWhatsAppContact}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Consultar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;