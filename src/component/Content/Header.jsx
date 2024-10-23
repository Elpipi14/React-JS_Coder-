import SampleProducts from './SampleProducts/SampleProducts';

import local from '../../assets/local/local.jpg'
import lunch from '../../assets/local/lunch.jpg'
import lunch2 from '../../assets/local/lunch2.jpg'

const Content = () => {
    return (
      <div className="px-4 text-center pt-12 pb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-custom-gree-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g data-name="3-Food equipment"><path d="M24 48a24 24 0 1 1 24-24 24.028 24.028 0 0 1-24 24zm0-46a22 22 0 1 0 22 22A22.025 22.025 0 0 0 24 2z"/><path d="M12.412 37.765a17.975 17.975 0 0 1-2.126-25.412l1.524 1.294a15.976 15.976 0 0 0 1.89 22.588zM35.645 37.765l-1.29-1.53a15.975 15.975 0 0 0 1.892-22.588l1.524-1.294a17.975 17.975 0 0 1-2.126 25.412zM18 19a5.006 5.006 0 0 1-5-5V7h2v7a3 3 0 0 0 6 0V7h2v7a5.006 5.006 0 0 1-5 5z"/><path d="M17 5h2v21h-2z"/><path d="M18 43a3 3 0 0 1-3-3V28a3 3 0 0 1 6 0v12a3 3 0 0 1-3 3zm0-16a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V28a1 1 0 0 0-1-1zM29 18h2v8h-2z"/><path d="M30 43a3 3 0 0 1-3-3V28a3 3 0 0 1 6 0v12a3 3 0 0 1-3 3zm0-16a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V28a1 1 0 0 0-1-1zM30 19c-2.8 0-5-3.075-5-7s2.2-7 5-7 5 3.075 5 7-2.2 7-5 7zm0-12c-1.626 0-3 2.29-3 5s1.374 5 3 5 3-2.29 3-5-1.374-5-3-5z"/></g></svg>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                SABORES QUE INSPIRAN, PLATOS QUE ENAMORAS...
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Bienvenidos a La Variété, donde cada plato es una celebración del sabor y la frescura. Descubre una amplia variedad de comidas caseras, preparadas con ingredientes de la más alta calidad, listas para deleitar tu paladar y hacerte sentir como en casa. Ya sea para el almuerzo, la cena o cualquier ocasión especial, en La Varieté encontrarás siempre el sabor perfecto y al mejor precio.
              </p>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Sobre Nostros
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={lunch}
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={lunch2}
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={local}
                alt=""
              />
            </div>
          </div>
        </div>
        <SampleProducts />
      </div>
     
    );
  };

export default Content;