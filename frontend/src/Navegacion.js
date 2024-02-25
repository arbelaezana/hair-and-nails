import React from 'react'
import {Link} from "react-router-dom"
import Nsotros from './Nsotros'
import Home from './home'
import Login from './Login'
import Registro from './Registro'


export default function Navegacion() {
  return (
    <header>

        <nav className="nav">
            <div className="logo">Hair & Nails</div>

            
            <ul className="menu">
                
            <Link to="Nsotros"> Nsotros </Link>
            <Link to="/Home"> Home </Link>
            <Link to="Login"> Login </Link>
            <Link to="Registro"> Registro </Link>

            </ul>
        </nav>

    </header>

  )
}
//este componente muentra la barara de navegacion 
//en la parte superios ara que el usuario pueda ir a otras vistas