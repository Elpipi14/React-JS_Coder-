import ProductsItems from "./ItemsSample";
import plato1 from "../../../assets/products/plato1.png";
import plato2 from "../../../assets/products/plato2.png";
import plato3 from "../../../assets/products/plato3.png";
import { Link } from "react-router-dom";

const SampleProducts = () => {
  return (
    <section className="px-4 pt-8 pb-4 text-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 lg:pb-4">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Viandas accesibles y deliciosas
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            Tu comida lista para llevar al mejor precio
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          ¡Gran variedad de opciones diarias!
        </p>
      </div>

      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {/* Primera Card */}
        <ProductsItems
          title={"Vianda Clasica"}
          description={"Incluye arroz, pollo, ensalada."}
          subtitle={"Preparada con ingredientes frescos."}
          price={250}
          img={plato1}
        />

        {/* Segunda Card */}
        <ProductsItems
          title={"Vianda Vegetariana"}
          description={"Incluye quínoa, verduras asadas."}
          subtitle={"100% orgánica y saludable."}
          price={300}
          img={plato2}
        />

        {/* Tercera Card */}
        <ProductsItems
          title={"Vianda Premium"}
          description={"Incluye salmón, espárragos, arroz."}
          subtitle={"Ingredientes gourmet seleccionados."}
          price={500}
          img={plato3}
        />
      </div>

      <div className="mt-10 py-12 m-auto flex flex-col items-center text-center">
        <h1 className="animate-bounce px-3 mx-2 mb-4 w-auto font-semibold tracking-wider text-black uppercase rounded-md bg-teal-accent-400 text-4xl">
          Descrubre Nuestros Productos
        </h1>
        <h3 className="m-2 text-2xl">
          Elige tu comida del día - Gran variedad
        </h3>
        <p className="m-2 text-xl indent-8">
          Descubre nuestras deliciosas viandas caseras, preparadas con
          ingredientes frescos y de la mejor calidad. Tenemos opciones para
          todos los gustos, desde platos tradicionales hasta opciones
          saludables. ¡Elige el tuyo y disfruta!
        </p>
        <Link
          to="/productos"
          onClick={() => window.scrollTo(0, 0)}
          className="text-blue-500 hover:underline m-2 pr-2 text-center"
        >
          Ver más productos
        </Link>
      </div>
    </section>
  );
};

export default SampleProducts;
