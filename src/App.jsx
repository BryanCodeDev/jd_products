import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    // Mostrar notificación (opcional)
    console.log(`${product.name} agregado al carrito`);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar cartItems={cartItems} setShowCart={setShowCart} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Product Catalog */}
      <ProductCatalog addToCart={addToCart} />
      
      {/* Footer */}
      <Footer />
      
      {/* Cart Sidebar */}
      <Cart 
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/573113670631?text=¡Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20productos%20y%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40 animate-pulse"
        title="Contáctanos por WhatsApp"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

export default App;