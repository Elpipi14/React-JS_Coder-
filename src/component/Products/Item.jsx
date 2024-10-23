const Item = ({product}) =>{

    return(
        <div className="flex flex-col items-center h-full w-full my-10">
        {/* Producto */}
        <div className="flex flex-col w-[300px] sm:w-[400px] items-center mx-8 mt-8 border rounded-lg shadow-md p-4">
          <h2 className="text-xl text-center mb-2 font-bold tracking-tight text-gray-900 min-h-[3rem]">
            {product.nombre}
          </h2>
          <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={product.imagen}
              alt={product.nombre}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
  
          <div className="mt-4 flex flex-col items-center mb-4 flex-grow">
            <h3 className="text-sm text-gray-700">{product.descripcion}</h3>
            <p className="text-sm font-medium text-gray-900">${product.precio}</p>
          </div>
          <h3 className="mt-4 flex flex-col">Cantidad:</h3>
          <div className="flex my-2">
            <button className="w-14 mx-2 bg-gray-500 text-black p-2 rounded-full transition duration-100 ease-in  hover:bg-green-500  hover:scale-90">
              -
            </button>
            <p className="text-gray-500 text-xl">1</p>
            <button className="w-14 mx-2 bg-gray-500 text-black p-2 rounded-full transition duration-100 ease-in  hover:bg-green-500  hover:scale-90">
              +
            </button>
          </div>
          <button className="inline-flex items-center justify-center w-full h-12 py-2 px-6 font-medium tracking-wide text-white transition duration-200 bg-green-500 rounded shadow-md hover:bg-green-600 focus:shadow-outline focus:outline-none">
            Agregar al carrito
          </button>
        </div>
      </div>
    );
};

export default Item;