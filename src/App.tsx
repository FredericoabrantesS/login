import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./assets/components/Home"
import Sobre from "./assets/components//Sobre"
import Cadastro from "./assets/components/Cadastro"


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastro" element={<Cadastro />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
