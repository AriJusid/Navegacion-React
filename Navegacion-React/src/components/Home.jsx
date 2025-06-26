import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles.css";
import fondo from "../assets/fotcio.jpg";
function Home() {
  return (
    <>
      <div style={{ backgroundImage: `url(${fondo})`, backgroundRepeat:'no-repeat' }}>
        <div className="view">
          <div className="header">
            <NavLink className="title" to="/">
              L Y N K
            </NavLink>
            <div className="nav">
              <NavLink className="button" to="/">
                Home
              </NavLink>
              <NavLink className="button" to="/eventos">
                Eventos
              </NavLink>
              <NavLink className="button" to="/gestion">
                Gestión
              </NavLink>
              <NavLink className="button" to="/Agenda">
                Agenda
              </NavLink>
            </div>
          </div>
          <h1 style={{ textAlign: "center",    color: "#fff", paddingTop:250}}>Bienvenido a Lynk!</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
