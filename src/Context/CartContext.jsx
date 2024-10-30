import { createContext, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // agrega el producto al array Cart
  const addItemCart = (newProduct) => {
    if (!isInCart(newProduct.id)) {
      setCart([...cart, newProduct]);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se agrego al carrito",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Ya se agrego al carrito",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  //   Condicion si el producto ya esta agregado
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  //   Suma la cantidad del producto agregado
  const getTotalQuantity = () => {
    const quantity = cart.reduce(
      (total, productCart) => total + productCart.quantity,
      0
    );

    return quantity;
  };

  const increaseQuantity = (itemId) => {
    setCart((disStock) =>
      disStock.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((aumStock) =>
      aumStock.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  //   Elimina producto agregado en el carrito
  const removeProduct = (itemId) => {
    const cartDeleteProduct = cart.filter((product) => product.id !== itemId);
    setCart(cartDeleteProduct);
  };

  //   Limpia el Carrito
  const clearCart = () => {
    setCart([]);
  };

  //   Suma el total del los productos agregados
  const getTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity * product.price;
    });
    return total;
  };

  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        getTotal,
        addItemCart,
        getTotalQuantity,
        removeProduct,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
