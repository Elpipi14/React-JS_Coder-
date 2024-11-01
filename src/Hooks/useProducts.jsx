import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../Service/FireBaseDB";

// Obtenemos los productos de Firestore y devolvemos una promesa
const getProducts = async () => {
  const productsRef = collection(db, "products");
  const dataDb = await getDocs(productsRef);
  return dataDb.docs.map((productDb) => {
    const data = productDb.data();
    return { id: productDb.id, ...data };
  });
};

// Hook para obtener todos los productos
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [spinners, setSpinners] = useState(true);

  useEffect(() => {
    setSpinners(true);

    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
      .finally(() => setSpinners(false));
  }, []);

  return { products, spinners };
};

// Hook para obtener un producto específico por ID
export const useProductsId = (id) => {
  const [spinners, setSpinners] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setSpinners(true);

    getProducts()
      .then((data) => {
        const findProduct = data.find((product) => product.id === id);
        setProduct(findProduct || null); // Establece null si el producto no se encuentra
      })
      .catch((error) => console.error(error))
      .finally(() => setSpinners(false));
  }, [id]);

  return { product, spinners };
};
