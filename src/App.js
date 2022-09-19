import React from "react";
import NavBar from "./components/NavBar.js";
import ItemDetailContainer from "./Containers/container/ItemDetailContainer.jsx";
import ItemListContainer from "./Containers/container/ItemListContainer.jsx"

const App = () => {

  const mensaje = "TIENDA DE JARDINERIA SIEMPRE VERDE"


  return (
    <>
      < NavBar />
      < ItemListContainer greeting= {mensaje}/>
      < ItemDetailContainer />
    </>
  )
}

export default App

