import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

const ProductCatalog = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600">
            Encuentra todo lo que necesitas para tu hogar
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Filter className="h-4 w-4" />
              Filtros
            </button>
          </div>

          <div className={`${showFilters ? 'block' : 'hidden'} lg:block mt-4`}>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-emerald-100'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;