import { useState } from "react";
import TermsAndConditions from "./TermsAndConditions";

const Register = () => {

  const [terms, setTerms] = useState(false);
  const toggleTerms = () => setTerms(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white my-4">
      <h1 className="text-center font-courier-prime m-6 text-3xl font-bold text-black">
        Registro Cliente
      </h1>
      <h2 className="text-center mb-6 text-lg text-black">
        Completa los datos para crear una cuenta, ¡Gracias!
      </h2>
      <form className="flex flex-col items-center bg-white  p-6 rounded-lg shadow-md w-full max-w-md">
        {/* Nombre */}
        <label className="mb-2 text-base font-medium text-gray-700 ">
          Nombre
        </label>
        <input
          type="text"
          placeholder="Nombre"
          className="w-full bg-transparent text-center rounded-md border border-gray-300  py-3 px-5 text-gray-800  focus:border-blue-500 focus:ring focus:ring-blue-200  transition"
        />

        {/* Apellido */}
        <label className="mb-2 mt-4 text-base font-medium text-gray-700 dark:text-gray-300">
          Apellido
        </label>
        <input
          type="text"
          placeholder="Apellido"
          className="w-full bg-transparent text-center rounded-md border border-gray-300  py-3 px-5 text-gray-800  focus:border-blue-500 focus:ring focus:ring-blue-200  transition"
        />

        {/* Email */}
        <label className="mb-2 mt-4 text-base font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-transparent text-center rounded-md border border-gray-300  py-3 px-5 text-gray-800  focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />

        {/* Contraseña */}
        <label className="mb-2 mt-4 text-base font-medium text-gray-700 dark:text-gray-300">
          Contraseña
        </label>
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full bg-transparent text-center rounded-md border border-gray-300  py-3 px-5 text-gray-800  focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />

        <label className="mb-2 mt-4 text-base font-medium text-gray-700 ">
          Repita Contraseña
        </label>
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full bg-transparent text-center rounded-md border border-gray-300 py-3 px-5 text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />

        <div className="flex items-center mt-4">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label for="remember-me" className="text-black ml-3 text-sm">
            Acepto los {" "}
            <button
              type="button"
              className="text-blue-600 font-semibold hover:underline"
              onClick={toggleTerms} // Abre el modal
            >
              Términos y Condiciones
            </button>
          </label>
          {terms && <TermsAndConditions onClose={() => setTerms(false)} />}
        </div>
        <button
          type="submit"
          className="border rounded-full  items-center justify-center py-3 px-7 text-center text-base font-medium text-black hover:bg-[#0BB489] hover:border-[#0BB489] mt-4"
        >
          Registrarse
        </button>
      </form>
      
    </div>
  );
};

export default Register;
