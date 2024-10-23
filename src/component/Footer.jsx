import logo from "../assets/logo/piuweb.png";
import lv from "../assets/logo/logo2.svg";

const Footer = () => {
  return (
    <div className="px-4 pt-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border-t">
      <div className="flex flex-col lg:flex-row justify-between items-center my-2">
        <div className="mx-8 sm:col-span-2">
          <a href="/" className="inline-flex items-center lg:mx-auto">
            <img
              src={lv}
              alt="Logo"
              className="text-teal-accent-400 w-50 h-48"
            />
          </a>
        </div>
        <div className="flex flex-col items-center text-sm sm:flex-row">
          <div className="flex my-1 sm:ml-2 sm:mr-2">
            <a
              href="#"
              className="transition-colors duration-300 text-black hover:text-deep-purple-800"
            >
              Sobre nosotros
            </a>
          </div>
          <div className="flex my-1 sm:ml-2 sm:mr-2">
            <a
              href="#"
              className="transition-colors duration-300 text-black hover:text-deep-purple-800"
            >
              Productos
            </a>
          </div>

          <div className="flex my-1 sm:ml-2 sm:mr-2">
            <a
              href="#"
              target="_blank"
              rel="perfil"
              className="transition-colors duration-300 text-black hover:text-deep-purple-800"
            >
              Perfil
            </a>
          </div>

          <div className="flex my-1 sm:ml-2 sm:mr-2">
            <a
              href="#"
              target="_blank"
              rel="Email Contacto"
              className="transition-colors duration-300 text-black hover:text-deep-purple-800"
            >
              Contacto
            </a>
          </div>

          <div className="flex my-1 sm:ml-2 sm:mr-2">
            <a
              href="https://maps.app.goo.gl/FnKohx377fEhMs2m7"
              target="_blank"
              rel="La Variété"
              className="transition-colors duration-300 text-black hover:text-deep-purple-800"
            >
              Ubicación
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center my-2">
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Seguinos en nuestras redes sociales.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-5 pb-10 border-t">
        <img
          src={logo}
          alt="Logo"
          className="text-teal-accent-400 w-38 h-16 mb-4"
        />
        <p className="text-sm text-center text-gray-600">
          ©Copyright 2024 By Developer Ap. All rights reserved.
        </p>
        <p className="text-center">
          <strong>Aviso:</strong> Este sitio web ha sido creado con fines
          educativos como parte de un proyecto de curso. La información y los
          productos aquí mostrados no son reales ni están disponibles para la
          venta.
        </p>
      </div>
    </div>
  );
};

export default Footer;
