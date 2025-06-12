import React  from "react"
import { NavLink } from "react-router-dom"
import '../assets/styles.css'

function Home () {
    return(
        <>
        <div className="content"> 
            <h1 style={{textAlign:'center'}}>Bienvenido a Lynk!</h1>
            <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/eventos">Eventos</NavLink>
            <NavLink to="/gestion">Gestión</NavLink>
            <NavLink to="/Agenda">Agenda</NavLink>
            </div>
        </div>
        </>
    ) 
}

export default Home