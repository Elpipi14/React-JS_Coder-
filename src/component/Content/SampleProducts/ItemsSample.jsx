import { Link } from "react-router-dom";

const ProductsItems = ({title, price, description, subtitle, img}) =>{
    return(
        <div className="flex flex-col justify-between p-8 drop-shadow-lg transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
          <img
            src={img}
            alt="Vianda 1"
            className="object-cover w-full h-48 rounded mb-4"
          />
          <div className="text-center">
            <div className="text-lg font-semibold">{title}</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-3xl font-bold">${price}</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">{description}</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              to="/productos"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex hover:underline items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-green-500 rounded shadow-md hover:bg-green-600 focus:shadow-outline focus:outline-none"
            >
              Ver más productos
            </Link>
            <p className="mt-6 text-xs text-gray-600">
                {subtitle}
            </p>
          </div>
        </div>
    )
};

export default ProductsItems;