
import './App.css';
import Navegacion from './Navegacion'
import Piedepagina from './Piedepagina'
import Home from './home'
import Nsotros from './Nsotros'
import Login from './Login'
import Registro from './Registro';

import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom"


function App() {
  return (

    <Router>
      <Navegacion/>
      <Routes>
      <Route path="Home" element={<Home/>} />
      <Route path="Nsotros" element={<Nsotros/>} />
      <Route path="Login" element={<Login/>} />
      <Route path="Registro" element={<Registro/>} />
      </Routes>
      <Piedepagina/>
    
    </Router>
  );
}

export default App;
