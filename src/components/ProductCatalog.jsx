import React, { useState } from 'react';
import { products, categories } from '../data/products';
import { ShoppingCart, Star, Phone, Eye, Plus } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  const handleWhatsAppContact = () => {
    const message = `Hola! Me interesa el producto: *${product.name}* - Precio: $${product.price.toLocaleString()}. ¿Podrían darme más información?`;
    window.open(`https://wa.me/573238957962?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-600 rounded-full p-2 transition-colors"
          >
            ✕
          </button>
          
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Imagen del producto */}
            <div className="relative">
              <div className={`aspect-square rounded-2xl bg-gradient-to-br ${product.gradient} p-8 flex items-center justify-center mb-4`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center justify-center text-6xl">{product.icon}</div>
              </div>
              {product.discount && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  -{product.discount}%
                </span>
              )}
            </div>
            
            {/* Información del producto */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.longDescription || product.description}</p>
              
              {/* Características */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Características:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Star className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Precio */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-green-600">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {product.discount && (
                  <p className="text-green-600 text-sm mt-1">
                    ¡Ahorras ${(product.originalPrice - product.price).toLocaleString()}!
                  </p>
                )}
              </div>
              
              {/* Botones de acción */}
              <div className="space-y-3 mt-auto">
                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Agregar al Carrito
                </button>
                
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Consultar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
      <div className="relative">
        <div className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden items-center justify-center text-6xl">{product.icon}</div>
        </div>
        
        {product.discount && (
          <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{product.discount}%
          </span>
        )}
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onViewDetails(product)}
            className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{product.description}</p>
        
        {/* Precio */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-green-600">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        
        {/* Estado de stock */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
            {product.inStock ? '✓ Disponible' : '✗ Agotado'}
          </span>
          <span className="text-sm text-gray-500 capitalize">{product.category}</span>
        </div>
        
        {/* Botones */}
        <div className="space-y-2">
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white py-2.5 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Agregar al Carrito
          </button>
          
          <button
            onClick={() => onViewDetails(product)}
            className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-2.5 px-4 rounded-lg font-medium transition-colors"
          >
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductCatalog = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    onAddToCart(product);
    // Opcional: mostrar notificación de éxito
  };

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Productos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra variedad de productos diseñados especialmente para ti
          </p>
        </div>
        
        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos en esta categoría.</p>
          </div>
        )}
      </div>
      
      {/* Modal de detalles del producto */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </section>
  );
};

export default ProductCatalog;