import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // agrega el producto al array Cart
  const addItemCart = (newProduct) => {
    if (!isInCart(newProduct.id)) {
      setCart([...cart, newProduct]);
    } else {
      alert("El Producto ya fue agregado");
    }
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const getTotalQuantity = () => {
    const quantity = cart.reduce(
      (total, productCart) => total + productCart.quantity,
      0
    );

    return quantity;
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((element) => {
      total += element.quantity * element.price;
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
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
