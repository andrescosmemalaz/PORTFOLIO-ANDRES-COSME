import React from "react"
import Header from "./Components/Header/Header"
import Home from "./Components/Principal/Home"
import Features from "./Components/Habilidades/Features"
import Portfolio from "./Components/Proyectos/Portfolio"
import "./App.css"
import  Tskill from "./Components/Tech_Skill/Tskill"
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Tskill/>
      <Portfolio />
    </>
  )
}

export default App