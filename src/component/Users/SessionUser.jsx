import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/variete.svg";

const SessionUser = ({ onClose }) => {
  return (
    <section className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <button
                title="Close Menu"
                className="absolute top-4 right-4 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                onClick={onClose}
              >
                X
              </button>
              <div className="mb-4 text-center md:mb-8">
                <a href="/#" className="mx-auto inline-block max-w-[160px]">
                  <img src={logo} alt="logo" />
                </a>
                <h1 className="mt-4">Iniciar Sesión</h1>
              </div>
              
              <form>
                {/* Email */}
                <label className="text-base font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mb-4 bg-transparent text-center rounded-md border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 transition"
                />

                {/* Contraseña */}
                <label className="mb-2 mt-4 text-base font-medium text-gray-700 dark:text-gray-300">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="w-full bg-transparent text-center rounded-md border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 transition"
                />
                <button
                  type="submit"
                  disabled
                  className="disabled:opacity-60 border rounded-full  items-center justify-center py-3 px-7 text-center text-base font-medium text-black hover:bg-[#0BB489] hover:border-[#0BB489] mt-4"
                >
                  Ingresar
                </button>
              </form>
              <div className="m-4">
                <h3 className="text-gray-700 dark:text-gray-800 text-base">
                  ¿No tenés cuenta?{" "}
                  <Link to="/registro" >
                  <button
                    className="text-[#258778] font-bold hover:underline"
                    onClick={onClose}
                  >
                    Registrate
                  </button>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionUser;
