import { useState } from 'react';
import vianda from '../../assets/products/plato1.png'
const Cart = ({stock}) =>{
    const [count, setCount] = useState(1)

    const increaseount = () =>{
        if(count == 10){
            alert("stock maximo");  
        };
        if(count < stock){
            setCount(count + 1)
        };
    }

    const decrease = () =>{
        if(count > 1){
            setCount(count - 1)
        }
    }

    return(
        <div className="p-4 w-[250px] md:w-[350px] ">
            <div className="flex flex-col border-b mb-4">
                <div>
                <img src={vianda} alt="Vianda clasica" className="shadow-xl transition-shadow w-24 m-auto mb-4 object-cover object-center" />
                    <div className="flex justify-center text-base font-medium text-gray-900">
                        <h3>
                        <a href="#">Vianda Clasica</a>
                        </h3>
                        <p className="ml-4">$250</p>
                    </div>
                    <p className="mt-1 text-sm text-center text-gray-500">Incluye arroz, pollo, ensalada.</p>
                </div>

                <div className="flex flex-col items-center justify-evenly text-sm my-4">
                    <div className='flex'>
                        <button className="w-12" onClick={decrease}>-</button>
                        <p className="text-gray-500 text-xl">{count}</p>
                        <button className='w-12' onClick={increaseount}>+</button>
                    </div>
                    <div className="flex flex-col my-4 w-24">
                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Eliminar</button>
                    </div>
                </div>

            </div>

        

            <div className="border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total</p>
                    <p>$550</p>
                </div>

                <div className="mt-6">
                    <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-custom-gree-2 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                        Finalizar Compra
                    </a>
                </div>

                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <button type="button" className="font-medium text-custom-gree-2 hover:text-indigo-600">
                        Continuar Comprando
                    </button>
                </div>
            </div>
        </div>    
    )
}

export default Cart;