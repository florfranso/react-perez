import React from "react";
import NavBar from "./components/NavBar.js";
import ItemDetailContainer from "./Containers/container/ItemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from "./Containers/container/ItemListContainer/ItemListContainer.jsx";
import Cart from "../src/Containers/container/CartView/Cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./Context/CartContext.jsx";

const App = () => {

  const mensaje = "TIENDA DE JARDINERIA SIEMPRE VERDE"


  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          < NavBar />
          <Routes>
            <Route path="/" element={< ItemListContainer greeting={mensaje} />} />
            <Route path="/categoria/:IdCategoria" element={< ItemListContainer greeting={mensaje} />} />
            <Route path="/product/:IdProducto" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </>
  )
}

export default App

