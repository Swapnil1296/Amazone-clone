import React from 'react'
import Navbar from './componentes/BottomNav/Navbar';
import Header from "./componentes/Header/Header";
import Home from "./componentes/Home/Home";


const App = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}

export default App
