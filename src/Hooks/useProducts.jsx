import { useState, useEffect } from "react";
import { getProducts } from "../DbLocal/dbProducts";

export const useProducts = () =>{
    const [products, setProducts] = useState([]);
    const [spinners, setSpinners ] = useState(true)

    useEffect(()=>{
        setSpinners(true)

        getProducts()
            .then((data)=> setProducts(data))
            .catch((error)=> console.error(error))
            .finally(()=> setSpinners(false))
    }, [])

    return { products, spinners }
};

export const useProductsId = (id) => {
    const [spinners, setSpinners ] = useState(true)
    const [products, setProduct] = useState(null);
  
    useEffect(() => {
      setSpinners(true);
  
      getProducts()
        .then((data) => {
        const findProduct = data.find((product) => product.id.toString() === id);
        setProduct(findProduct)})
        .catch((error)=> console.error(error))
        .finally(()=> setSpinners(false))
        
    }, [id]);

    return { products, spinners }
}

