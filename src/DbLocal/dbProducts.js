const products = [
  {
    "id": 1,
    "nombre": "Milanesa de carnes con Puré",
    "descripcion": "Deliciosa milanesa de carnes acompañada con un cremoso puré de papas.",
    "precio": 350,
    "stock": 25,
    "imagen": "../assets/products/1",
    "disponible": true,
    "categoria": "carnes"
  },
  {
    "id": 2,
    "nombre": "Milanesa de Pollo con Ensalada",
    "descripcion": "Milanesa de pollo crujiente con una fresca ensalada de lechuga, tomate y cebolla.",
    "precio": 300,
    "stock": 18,
    "imagen": "https://example.com/milanesa_pollo_ensalada.jpg",
    "disponible": true,
    "categoria": "carnes"
  },
  {
    "id": 3,
    "nombre": "carnes al Horno con Papas",
    "descripcion": "Tierno corte de carnes al horno con papas asadas y condimentos especiales.",
    "precio": 500,
    "stock": 20,
    "imagen": "https://example.com/carnes_horno_papas.jpg",
    "disponible": true,
    "categoria": "carnes"
  },
  {
    "id": 4,
    "nombre": "Pollo al Horno con Ensalada",
    "descripcion": "Pollo al horno jugoso acompañado con ensalada fresca de estación.",
    "precio": 450,
    "stock": 15,
    "imagen": "https://example.com/pollo_horno_ensalada.jpg",
    "disponible": false,
    "categoria": "carnes"
  },
  {
    "id": 5,
    "nombre": "Lasagna Clásica",
    "descripcion": "Lasagna de carnes con capas de pasta, queso, y salsa de tomate casera.",
    "precio": 400,
    "stock": 12,
    "imagen": "https://example.com/lasagna_clasica.jpg",
    "disponible": true,
    "categoria": "pastas"
  },
  {
    "id": 6,
    "nombre": "Tarta de Verduras",
    "descripcion": "Tarta casera de espinacas, acelga y queso con masa integral.",
    "precio": 250,
    "stock": 22,
    "imagen": "https://example.com/tarta_verduras.jpg",
    "disponible": true,
    "categoria": "light"
  },
  {
    "id": 7,
    "nombre": "Ñoquis con Salsa Bolognesa",
    "descripcion": "Ñoquis de papa con salsa bolognesa de carnes y tomate.",
    "precio": 320,
    "stock": 30,
    "imagen": "https://example.com/noquis_bolognesa.jpg",
    "disponible": false,
    "categoria": "pastas"
  },
  {
    "id": 8,
    "nombre": "Sopa de Verduras",
    "descripcion": "Sopa casera de verduras variadas, perfecta para un día frío.",
    "precio": 200,
    "stock": 35,
    "imagen": "https://example.com/sopa_verduras.jpg",
    "disponible": true,
    "categoria": "light"
  },
  {
    "id": 9,
    "nombre": "Fideos con Salsa",
    "descripcion": "Fideos al dente con una suave salsa de crema y queso.",
    "precio": 370,
    "stock": 17,
    "imagen": "https://example.com/fideos_alfredo.jpg",
    "disponible": true,
    "categoria": "pastas"
  },
  {
    "id": 10,
    "nombre": "Pollo grillado con Ensalada",
    "descripcion": "Pollo a la parrilla con una ensalada mixta de vegetales frescos.",
    "precio": 480,
    "stock": 10,
    "imagen": "https://example.com/pollo_parrilla_ensalada.jpg",
    "disponible": false,
    "categoria": "carnes"
  },
  {
    "id": 11,
    "nombre": "Empanadas de carnes",
    "descripcion": "Empanadas de carnes jugosa, perfectas como plato principal o acompañamiento.",
    "precio": 180,
    "stock": 40,
    "imagen": "https://example.com/empanadas_carnes.jpg",
    "disponible": true,
    "categoria": "carnes"
  },
  {
    "id": 12,
    "nombre": "Hamburguesa Completa",
    "descripcion": "Hamburguesa casera con queso, lechuga, tomate, cebolla y papas fritas.",
    "precio": 420,
    "stock": 25,
    "imagen": "https://example.com/hamburguesa_completa.jpg",
    "disponible": true,
    "categoria": "carnes"
  },
  {
    "id": 13,
    "nombre": "Ensalada César con Pollo",
    "descripcion": "Ensalada Cesar clasica con trozos de pollo grillado y aderezo Cesar.",
    "precio": 300,
    "stock": 16,
    "imagen": "https://example.com/ensalada_cesar_pollo.jpg",
    "disponible": true,
    "categoria": "light"
  },
  {
    "id": 14,
    "nombre": "Pizza Margarita",
    "descripcion": "Pizza de masa fina con salsa de tomate, mozzarella y albahaca fresca.",
    "precio": 600,
    "stock": 8,
    "imagen": "https://example.com/pizza_margarita.jpg",
    "disponible": false,
    "categoria": "pastas"
  },
  {
    "id": 15,
    "nombre": "Ravioles con Salsa de Tomate",
    "descripcion": "Ravioles caseros de ricota y espinaca con salsa de tomate natural.",
    "precio": 380,
    "stock": 14,
    "imagen": "https://example.com/ravioles_tomate.jpg",
    "disponible": true,
    "categoria": "pastas"
  },
  {
    "id": 16,
    "nombre": "Bife de Chorizo con Pure",
    "descripcion": "Bife de chorizo a la parrilla acompañado de papas fritas crujientes.",
    "precio": 550,
    "stock": 10,
    "imagen": "https://example.com/bife_chorizo_papas.jpg",
    "disponible": true,
    "categoria": "carnes"
  },
  {
    "id": 17,
    "nombre": "Polenta con Tuco",
    "descripcion": "Polenta cremosa acompañada con salsa de tomate y carnes molida.",
    "precio": 280,
    "stock": 30,
    "imagen": "https://example.com/polenta_tuco.jpg",
    "disponible": true,
    "categoria": "pastas"
  },
  {
    "id": 18,
    "nombre": "Tarta de Atún",
    "descripcion": "Tarta casera de atún con cebolla y pimientos, ideal para un almuerzo ligero.",
    "precio": 350,
    "stock": 20,
    "imagen": "https://example.com/tarta_atun.jpg",
    "disponible": true,
    "categoria": "light"
  },
  {
    "id": 19,
    "nombre": "Guiso de Lentejas",
    "descripcion": "Guiso de lentejas con chorizo, ideal para los días más frescos.",
    "precio": 400,
    "stock": 22,
    "imagen": "https://example.com/guiso_lentejas.jpg",
    "disponible": false,
    "categoria": "carnes"
  },
  {
    "id": 20,
    "nombre": "Wrap de Pollo",
    "descripcion": "Wrap de pollo con hojas verdes, ideal para los días más calurosos.",
    "precio": 400,
    "stock": 22,
    "imagen": "https://example.com/wrap_pollo.jpg",
    "disponible": false,
    "categoria": "carnes"
  }
]

export const getProducts = () =>{
  return new Promise ((res, rej)=>{
     setTimeout(()=>{
      res(products)
     }, 2000)
  })
}