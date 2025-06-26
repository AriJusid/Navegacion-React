import React  from "react"
import { NavLink } from "react-router-dom"
import fondo from "../assets/fotcio.jpg";


function Eventos () {
    return(
        <>
              <div style={{ backgroundImage: `url(${fondo})`, backgroundRepeat:'no-repeat' }}>

        <div className="view">
        <div className="header"> 
        <NavLink className="title" to="/">L Y N K</NavLink>
            <div className="nav">
                <NavLink className="button" to="/">Home</NavLink>
                <NavLink className="button"  to="/eventos">Eventos</NavLink>
                <NavLink className="button"  to="/gestion">Gestión</NavLink>
                <NavLink className="button"  to="/Agenda">Agenda</NavLink>
            </div>
        </div>
        <h1 style={{ color: "#fff",paddingTop:250}}>Lleva tus eventos al máximo!</h1>
        <NavLink className="back" to="/"> 🡰   Go Back</NavLink>
        </div>
        </div>

        </>
    ) 
}

export default Eventos