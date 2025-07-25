# 🏪 Mi Tienda Virtual

Una moderna tienda virtual diseñada para comercios de barrio que quieren digitalizar sus ventas y ofrecer servicios de domicilio a través de WhatsApp.

## 🚀 Características

### ✨ **Diseño Moderno y Atractivo**
- Interfaz moderna con gradientes y animaciones suaves
- Completamente responsive (móvil, tablet, desktop)
- Tema verde que transmite confianza y naturaleza
- Efectos hover y transiciones fluidas

### 🛒 **Funcionalidades Principales**
- **Catálogo de productos** con filtros por categoría
- **Buscador** en tiempo real
- **Carrito de compras** funcional
- **Integración directa con WhatsApp** para finalizar compras
- **Botón flotante de WhatsApp** siempre visible
- **Contador de productos** en el carrito

### 📱 **Experiencia de Usuario**
- Navegación intuitiva con smooth scroll
- Carrito deslizante lateral
- Mensajes automáticos para WhatsApp
- Indicadores visuales (descuentos, stock, envío gratis)
- Optimizado para conversiones

## 🛠 **Tecnologías Utilizadas**

- **React 18** - Framework de JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Lucide React** - Iconos modernos
- **Create React App** - Herramienta de desarrollo

## 📦 **Instalación**

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona o descarga el proyecto**
```bash
git clone <tu-repositorio>
cd tienda-virtual-barrio
```

2. **Instala las dependencias**
```bash
npm install
# o
yarn install
```

3. **Inicia el servidor de desarrollo**
```bash
npm start
# o
yarn start
```

4. **Abre el navegador en** `http://localhost:3000`

## ⚙️ **Configuración**

### 🔧 **Personalización Requerida**

1. **Número de WhatsApp**
   - Cambia `573113670631` por tu número real en todos los archivos
   - Buscar y reemplazar en: `App.jsx`, `ProductCard.jsx`, `Cart.jsx`, `Hero.jsx`, `Footer.jsx`

2. **Información de la tienda**
   - Actualiza el nombre en `Navbar.jsx` y `Footer.jsx`
   - Modifica la dirección en `Footer.jsx`
   - Cambia los horarios de atención

3. **Productos**
   - Edita `src/data/products.js`
   - Actualiza precios, nombres, descripciones e imágenes
   - Agrega o elimina categorías según tu inventario

4. **Imágenes**
   - Reemplaza las imágenes de Unsplash por fotos reales de tus productos
   - Optimiza las imágenes para web (formato WebP recomendado)

5. **Colores y marca**
   - Modifica los colores en `tailwind.config.js` si deseas otra paleta
   - Actualiza el favicon y logos

### 📋 **Estructura de Productos**

```javascript
{
  id: 1,
  name: "Nombre del producto",
  price: 4500,
  originalPrice: 5000, // Opcional para mostrar descuentos
  category: "categoria",
  image: "url-de-la-imagen",
  description: "Descripción del producto",
  inStock: true,
  discount: 10 // Opcional, porcentaje de descuento
}
```

### 🏷️ **Categorías Disponibles**
- `abarrotes` - Productos básicos como arroz, aceite, pasta
- `bebidas` - Gaseosas, agua, jugos, cerveza
- `snacks` - Papas, chocolates, galletas
- `limpieza` - Detergentes, jabones, papel higiénico
- `lacteos` - Leche, queso, yogurt, mantequilla
- `carnes` - Embutidos, jamones, salchichón

## 🚀 **Despliegue**

### Build para producción
```bash
npm run build
# o
yarn build
```

### Opciones de hosting recomendadas
- **Netlify** (Gratis, fácil)
- **Vercel** (Gratis, optimizado para React)
- **GitHub Pages** (Gratis)
- **Hosting tradicional** (cPanel/FTP)

## 💡 **Flujo de Ventas**

1. **Cliente navega** por los productos
2. **Agrega productos** al carrito
3. **Revisa su pedido** en el carrito deslizante
4. **Hace clic en "Finalizar por WhatsApp"**
5. **Se abre WhatsApp** con el pedido pre-formateado
6. **Tú confirmas** disponibilidad, precio y coordinas la entrega
7. **Se concreta la venta** por WhatsApp

## 📊 **Ventajas del Sistema**

- ✅ **Sin comisiones** de plataformas de e-commerce
- ✅ **Control total** sobre las ventas
- ✅ **Relación directa** con el cliente
- ✅ **Flexibilidad** en precios y promociones
- ✅ **Fácil gestión** del inventario
- ✅ **Costos mínimos** de operación

## 🎯 **Próximas Mejoras**

- [ ] Sistema de notificaciones
- [ ] Integración con redes sociales
- [ ] Programa de fidelización
- [ ] Gestión de inventario básica
- [ ] Estadísticas de ventas
- [ ] Sistema de cupones/descuentos
- [ ] Chat en vivo
- [ ] App móvil con PWA

## 📞 **Soporte**

Si necesitas ayuda con la implementación o personalización:

- 📧 Email: soporte@tuempresa.com
- 💬 WhatsApp: +57 311 367 0631
- 🐛 Issues: Reporta bugs en GitHub

## 📄 **Licencia**

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para tu negocio.

---

**¡Empieza a vender online hoy mismo! 🚀**

Transforma tu tienda de barrio en una moderna tienda virtual y llega a más clientes que nunca.