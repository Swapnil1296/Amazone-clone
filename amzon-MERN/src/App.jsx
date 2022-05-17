import React from 'react'
import Navbar from './componentes/BottomNav/Navbar';
import Header from "./componentes/Header/Header";
import Home from "./componentes/Home/Home";
import HeadSlider from './componentes/Sliders/HeadSlider/HeadSlider';


const App = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      {/* <HeadSlider/> */}
      <Home></Home>
    </div>
  )
}

export default App
