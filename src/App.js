import React from "react";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./Containers/ItemListContaine/ItemListContainer";

const App = () => {

  const mensaje = "TIENDA DE JARDINERIA SIEMPRE VERDE"


  return (
    <>
      < NavBar />
      < ItemListContainer greeting= {mensaje}/>
    </>
  )
}

export default App

