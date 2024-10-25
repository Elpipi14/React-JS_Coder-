import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";

const Cart = () => {
  const { cart, getTotal, getTotalProduct, removeItem, clearCart } = useContext(CartContext);

  return (
    <div className="p-4 w-[250px] md:w-[350px] ">
      {cart && cart.length > 0 ? (
        cart.map((productCart) => (
          <div key={productCart.id} className="flex flex-col border-b mb-4">
            <div>
              <img
                src={productCart.image}
                alt={productCart.name}
                className="shadow-xl transition-shadow w-24 m-auto mb-4 object-cover object-center"
              />
              <div className="flex justify-center text-base font-medium text-gray-900">
                <h3>{productCart.name}</h3>
                <p className="ml-4">${productCart.price}</p>
              </div>
              <p className="mt-1 text-sm text-center text-gray-500"></p>
            </div>

            <div className="flex flex-col items-center justify-evenly text-sm my-4">
              <div className="flex">
                <button className="w-12">-</button>

                <p className="text-gray-500 text-xl"> {productCart.quantity}</p>
               
                <button className="w-12">+</button>
                
              </div>
              <div className="flex flex-col my-4 w-24">
                <button
                  onClick={()=>removeItem(productCart.id)}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>El carrito está vacío</p>
      )}

      <div className="border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Total</p>
          <p>${getTotal()}</p>
        </div>

        <div className="mt-6">
        <button
        onClick={() => clearCart()}
          type="button"
          className="flex items-center justify-center rounded-md border border-transparent bg-custom-gree-2 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Vaciar Carrito
        </button>
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-custom-gree-2 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Finalizar Compra
          </a>
        </div>


        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <button
            type="button"
            className="font-medium text-custom-gree-2 hover:text-indigo-600"
          >
            Continuar Comprando
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
