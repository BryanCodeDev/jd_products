export const products = [
  {
    id: 1,
    name: "Los Broteinos",
    title: "Los Broteinos",
    price: 4500,
    originalPrice: 5000,
    category: "snacks",
    image: "/assets/broteinos.webp", // ✅ Ruta corregida
    description: "Come un Snack saludable... Barras de proteínas para después de un partido, entrenamiento, esfuerzo físico o mental.",
    features: [
      "Ideal después del ejercicio",
      "Rico en proteínas",
      "Sabor delicioso",
      "Energía instantánea",
      "Ingredientes naturales"
    ],
    gradient: "from-green-400 to-green-600",
    icon: "🥜",
    inStock: true,
    discount: 10,
    longDescription: "Nuestras barras Los Broteinos están especialmente diseñadas para deportistas y personas activas. Elaboradas con ingredientes naturales de alta calidad, proporcionan la energía y proteínas necesarias para la recuperación post-entrenamiento."
  },
  {
    id: 2,
    name: "Manillas Personalizadas",
    title: "Manillas",
    price: 8500,
    originalPrice: 10000,
    category: "accesorios",
    image: "/assets/manillas.webp", // ✅ Ruta corregida (era /img/manillas.webp)
    description: "¿No te pasa que se te dificulta hallar algo que te luzca con tu outfit? Pues eso ya no es problema.",
    features: [
      "Colores personalizados",
      "Combinaciones únicas",
      "Estilo propio",
      "Complementa tu look",
      "Materiales de calidad"
    ],
    gradient: "from-purple-400 to-pink-600",
    icon: "💫",
    inStock: true,
    discount: 15,
    longDescription: "Con nuestras manillas personalizadas puedes crear el accesorio perfecto para tu estilo. Elige los colores que más te gusten, ya sea en combinaciones o unicolor. Tú decides cómo lucir."
  },
  {
    id: 3,
    name: "Llaveros Únicos",
    title: "Llaveros",
    price: 3200,
    category: "accesorios",
    image: "/assets/llaveros.webp", // ✅ Ruta correcta
    description: "¿No te pasa que cuando te dan una llave no sabes qué hacer para no perderla? Tenemos la solución.",
    features: [
      "Diseños únicos",
      "Colores a elección",
      "Prácticos y llamativos",
      "Nunca pierdas tus llaves",
      "Resistentes y duraderos"
    ],
    gradient: "from-blue-400 to-cyan-600",
    icon: "🔑",
    inStock: true,
    longDescription: "Nuestros llaveros son la solución perfecta para mantener tus llaves organizadas y visibles. Son prácticos, llamativos y puedes elegir el color que más te guste para que combine con tu estilo."
  }
];

export const categories = [
  { id: 'all', name: 'Todos los productos', icon: '🛒' },
  { id: 'snacks', name: 'Snacks Saludables', icon: '🥜' },
  { id: 'accesorios', name: 'Accesorios', icon: '💫' }
];