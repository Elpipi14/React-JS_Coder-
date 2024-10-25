import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { CartProvider } from './Context/cartContext';

import './App.css';

import NavBar from './component/NavBar/NavBar';
import Content from './component/Content/Header';
import ItemListContainerHoc from './component/Products/ItemListContainer';
import ItemDetail from './component/Products/ItemDetail';
import Footer from './component/Footer';





// import Swal from 'sweetalert2';
// import {useEffect, useState } from 'react';


function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/productos" element={<ItemListContainerHoc />} />
            <Route path="/productos/categoria/:idCategory" element={<ItemListContainerHoc />} />
            <Route path="/productos/:id" element={<ItemDetail />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
      
      </>
  );
}

export default App;
