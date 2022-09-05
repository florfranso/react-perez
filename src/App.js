import React from "react";
import NavBar from "./components/NavBar"; //o ./components/NavBar/NavBar
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      < NavBar />
      < ItemListContainer greeting= "TIENDA DE JARDINERIA SIEMPRE VERDE"/>
    </>
  )
}

export default App

