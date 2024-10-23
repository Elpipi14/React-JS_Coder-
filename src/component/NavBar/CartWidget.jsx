import { useState } from "react";
import cart from '../../assets/products/cart.svg';
import Cart from "./Cart";

export const CartWidget = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prevState => !prevState);
    const closeMenu = () => setIsMenuOpen(false);
    
    return (
        <div className="relative">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center size-14 font-medium tracking-wide transition duration-200 rounded shadow-md transform hover:scale-105 ">
                <img src={cart} alt="Cart" width={40} />
            </button>
            <span
                className="relative bottom-10 right-3 rounded-full bg-red-500 px-[0.45em] py-[0.15em] text-[1rem] font-bold leading-none text-black"
            >1</span>
            
            {isMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-auto">
                    <div className="flex items-center justify-between border-b border-gray-200">
                        <h1 className="p-4 font-bold">Tu Carrito</h1>
                        <button title="Close Menu" className="m-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" onClick={closeMenu}>
                            X
                        </button>
                    </div>
                    <Cart  stock={10}/>
                </div>
            )}
        </div>
    );
};