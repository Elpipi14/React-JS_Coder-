const Contact = () => {
    return (
      <div className="flex justify-center items-center min-h-screen my-4 px-4">
        <div className="w-full max-w-lg p-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">Contacto</h1>
          <form className="space-y-4 text-center">
            <div>
              <label className="text-base font-medium text-gray-700 dark:text-gray-300">
                Email *
              </label>
              <input
                type="email"
                className="w-full bg-transparent text-center rounded-md border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 transition"
                placeholder="correo@gmail.com"
              />
            </div>
            <div>
              <label className="text-base font-medium text-gray-700 dark:text-gray-300">
                Nombre
              </label>
              <input
                type="text"
                className="w-full bg-transparent text-center rounded-md border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 transition"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label className="text-base font-medium text-gray-700 dark:text-gray-300">
                Mensaje
              </label>
              <textarea
                id="about"
                name="about"
                rows="3"
                className="w-full bg-transparent text-center rounded-md border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 transition"
                placeholder="Escribe tu mensaje aquí"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-5 mt-4 text-white font-medium rounded-md bg-custom-gree-2 hover:bg-green-400 dark:bg-black dark:hover:bg-custom-green transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  