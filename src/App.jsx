import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Home/Welcome";
import Menu from "./menu/menu";
import "./App.css";
import Juego from "./Plays/juego";
import Reglasj from "./ReglasJ/reglasj";
import  Descripcion  from "./descripcion/descripcion";
import Registro from "./registro/registro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Juego" element={<Juego />} />
        <Route path="/Reglas" element={<Reglasj />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
