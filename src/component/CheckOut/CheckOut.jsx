import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/cartContext";
import TermsAndConditions from "../Users/Register/TermsAndConditions";

const CheckOut = () => {
  const { cart, getTotal } = useContext(CartContext);
  const [terms, setTerms] = useState(false);

  // Cambia el estado de terms para abrir/cerrar los términos y condiciones
  const toggleTerms = () => setTerms(prev => !prev);

  return (
    <div className="font-[sans-serif] bg-white p-4 lg:max-w-7xl max-w-xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 max-lg:order-1">
          <form className="mt-16 max-w-lg">
            <h2 className="text-2xl font-extrabold text-gray-800">
              Métodos de Pago
            </h2>
          <div className="grid gap-4 sm:grid-cols-2 mt-8">
            <div className="flex items-center">
              <div className="ml-4 flex gap-2">
                <img
                  src="https://readymadeui.com/images/visa.webp"
                  className="w-12"
                  alt="card1"
                />
                {/* <img src="https://readymadeui.com/images/american-express.webp" className="w-12" alt="card2" /> */}
                <img
                  src="https://img.icons8.com/?size=100&id=nTLVtpxsNPaz&format=png&color=000000"
                  className="w-12"
                  alt="mercadoPago"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 mt-8">
            <input
              type="text"
              placeholder="Titular de la Tarjeta"
              className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
            />

            <div className="flex bg-white border-b-2 focus-within:border-gray-800 overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 ml-3"
                viewBox="0 0 291.764 291.764"
              >
                <path
                  fill="#2394bc"
                  d="m119.259 100.23-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c.474.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zM85.059 100.23l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021H85.059v-.01z"
                  data-original="#2394bc"
                />
                <path
                  fill="#efc75e"
                  d="M51.916 111.982c-1.787-6.948-7.486-11.634-15.226-11.734H.374L0 101.934c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z"
                  data-original="#efc75e"
                />
              </svg>
              <input
                type="number"
                placeholder="Numero de la Tarjeta"
                className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <input
                type="number"
                placeholder="EXP."
                className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
              />
              <input
                type="number"
                placeholder="CVV"
                className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
              />
            </div>

            <div className="flex items-center mt-4">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm">
                Acepto
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleTerms();
                  }}
                  className="text-blue-600 font-semibold hover:underline ml-1"
                >
                  Términos y Condiciones
                </button>
              </label>
              {/* Muestra el componente de Términos y Condiciones cuando terms es true */}
              {terms && (
                <TermsAndConditions onClose={() => setTerms(false)} />
              )}
            </div>
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:flex-wrap gap-4 mt-8">
            <Link to="/">
              <button
                type="button"
                className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
              >
                Cancelar Compra
              </button>
            </Link>
            <button
              type="button"
              className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-800 text-white rounded-md hover:bg-[#111]"
            >
              Pagar
            </button>
            <button
              type="button"
              className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-800 text-white rounded-md hover:bg-[#111]"
            >
              Ir a MercadoPago
            </button>
          </div>
        </form>
      </div>

      <div className="bg-gray-100 p-1 rounded-md">
        <h2 className="text-2xl text-center font-extrabold text-gray-800">
          $ {getTotal()}
        </h2>
        {cart && cart.length > 0 ? (
          cart.map((productCart) => (
            <ul className="text-gray-800 mt-8 space-y-4">
              <li className="flex flex-wrap p-auto text-sm">
                <img
                  src={productCart.image}
                  alt="vianda"
                  className="shadow-xl transition-shadow w-24 m-auto mb-4 object-cover object-center"
                />
                {productCart.name}{" "}
                <span className="ml-auto font-bold">
                  {productCart.quantity}
                </span>
                <span className="ml-2 font-bold">
                  ${productCart.price * productCart.quantity}
                </span>
              </li>
            </ul>
          ))
        ) : (
          <p className="text-center mt-4">El carrito esta vacío</p>
        )}
      </div>
    </div>
  </div>
  );
};

export default CheckOut;
