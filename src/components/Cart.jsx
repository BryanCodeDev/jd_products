import React from 'react';
import { X, Plus, Minus, Phone, ShoppingBag, Gift } from 'lucide-react';

const Cart = ({ isOpen, onClose, cartItems, updateQuantity, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const handleWhatsAppCheckout = () => {
    let message = "¡Hola! Quiero hacer el siguiente pedido:%0A%0A";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*%0A`;
      message += `   Cantidad: ${item.quantity}%0A`;
      message += `   Precio unitario: $${item.price.toLocaleString()}%0A`;
      message += `   Subtotal: $${(item.price * item.quantity).toLocaleString()}%0A%0A`;
    });
    
    message += `*TOTAL: $${total.toLocaleString()}*%0A%0A`;
    message += "¿Podrían confirmar disponibilidad y tiempo de entrega? ¡Gracias!";
    
    window.open(`https://wa.me/573238957962?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full sm:w-96 md:w-[28rem] h-full overflow-y-auto shadow-2xl slide-in-right">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Mi Carrito</h2>
              {itemCount > 0 && (
                <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full cart-count-animate">
                  {itemCount}
                </span>
              )}
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col h-full">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6">
              <div className="bg-gray-100 rounded-full p-6 sm:p-8 mb-4">
                <ShoppingBag className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-500 mb-6 text-sm sm:text-base">
                Agrega algunos productos para comenzar tu compra
              </p>
              <button
                onClick={onClose}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors text-sm sm:text-base"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <>
              {/* Items del carrito */}
              <div className="flex-1 p-4 sm:p-6 space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 ${item.gradient ? `bg-gradient-to-br ${item.gradient}` : 'bg-gray-200'} rounded-lg items-center justify-center text-lg sm:text-xl hidden`}>
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 text-sm sm:text-base">
                          {item.name}
                        </h3>
                        <p className="text-emerald-600 font-bold text-base sm:text-lg">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors"
                        title="Eliminar producto"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {/* Controles de cantidad */}
                    <div className="flex items-center justify-between mt-3 sm:mt-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-white hover:bg-gray-100 border border-gray-300 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-colors"
                        >
                          <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                        </button>
                        <span className="w-8 sm:w-12 text-center font-semibold text-sm sm:text-base">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-white hover:bg-gray-100 border border-gray-300 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-colors"
                        >
                          <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-xs sm:text-sm text-gray-500">Subtotal</p>
                        <p className="font-bold text-gray-900 text-sm sm:text-base">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Footer con total y botón de checkout */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 sm:p-6">
                <div className="space-y-4">
                  {/* Promoción de envío gratis */}
                  {total >= 30000 ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-center gap-2">
                        <Gift className="w-4 h-4 text-green-600" />
                        <p className="text-green-800 text-sm text-center font-medium">
                          ¡Felicidades! Tu pedido califica para envío gratuito
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-800 text-sm text-center">
                        Agrega ${(30000 - total).toLocaleString()} más para envío gratuito
                      </p>
                      <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min((total / 30000) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-base sm:text-lg">
                      Total ({itemCount} {itemCount === 1 ? 'producto' : 'productos'}):
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-emerald-600">
                      ${total.toLocaleString()}
                    </span>
                  </div>
                  
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg text-sm sm:text-base"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    Finalizar pedido por WhatsApp
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Serás redirigido a WhatsApp para confirmar tu pedido
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;