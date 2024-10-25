import { useState } from "react";

const ItemCount = ({stock, addProduct}) => {
  const [count, setCount] = useState(1);

  const handleClickincrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleClickdecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="flex my-2">
        <button onClick={handleClickdecrease} className="w-14 mx-2 bg-gray-500 text-black p-2 rounded-full transition duration-100 ease-in  hover:bg-green-500  hover:scale-90">
          -
        </button>
        
        <p className="text-gray-500 text-xl">{count}</p>

        <button onClick={handleClickincrease} className="w-14 mx-2 bg-gray-500 text-black p-2 rounded-full transition duration-100 ease-in  hover:bg-green-500  hover:scale-90">
          +
        </button>
      </div>
      <button onClick={()=>addProduct(count)} className="inline-flex items-center justify-center w-full h-12 py-2 px-6 font-medium tracking-wide text-white transition duration-200 bg-green-500 rounded shadow-md hover:bg-green-600 focus:shadow-outline focus:outline-none">
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
