import React from 'react';
import { Phone, Star } from 'lucide-react';

const ProductCard = ({ product, addToCart }) => {
  const handleWhatsAppOrder = () => {
    const message = `Hola! Me interesa este producto:%0A%0A*${product.name}*%0APrecio: $${product.price.toLocaleString()}%0A%0A¿Está disponible?`;
    window.open(`https://wa.me/573113670631?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            -{product.discount}%
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold">Agotado</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through ml-2">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg font-semibold transition-colors"
          >
            {product.inStock ? 'Agregar al Carrito' : 'Agotado'}
          </button>
          <button
            onClick={handleWhatsAppOrder}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors"
            title="Preguntar por WhatsApp"
          >
            <Phone className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;