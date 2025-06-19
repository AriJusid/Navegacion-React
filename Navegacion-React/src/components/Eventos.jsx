import React  from "react"
import { NavLink } from "react-router-dom"


function Gestion () {
    return(
        <>
        <div className="header"> 
        <NavLink className="title" to="/">L Y N K</NavLink>
            <div className="nav">
                <NavLink className="button" to="/">Home</NavLink>
                <NavLink className="button"  to="/eventos">Eventos</NavLink>
                <NavLink className="button"  to="/gestion">Gestión</NavLink>
                <NavLink className="button"  to="/Agenda">Agenda</NavLink>
            </div>
        </div>
        <h1>Los mejores eventos!</h1>
        <NavLink className="back" to="/">🡰 Go Back</NavLink>
        </>
    ) 
}

export default Gestion