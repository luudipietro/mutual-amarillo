import React, { useState } from "react";
import {NavLink } from 'react-router-dom';
import Logo from "../../assets/logo_mutual_sin_fondo.png";
import "./Navbar.css";
import Ul_redes from "../Ul_redes/Ul_redes";

const NavbarLinks = [
  {
    id: 1,
    name: "Inicio",
    link: "/",
  },
  {
    id: 2,
    name: "Nuestra Mutual",
    link: "/nuestra-mutual",
  },
  {
    id: 3,
    name: "Turismo",
    link: "/turismo",
  },
  {
    id: 4,
    name: "Contacto",
    link: "/contacto",
  },
];
const NavbarRedes = [
  {
    id: 5,
    link: "#",
    icon: "bi bi-whatsapp",
  },
  {
    id: 6,
    link: "#",
    icon: "bi bi-instagram",
  },
  {
    id: 7,
    link: "#",
    icon: "bi bi-facebook",
  },
];


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav>
      <div className="navbar">
        <div>
          <NavLink to="/">
          <img
            className="logo"
            src={Logo}
            alt="Logo de la mutual sueño amarillo"
          />
          </NavLink>
        </div>

        {/* Boton hamburguesa */}
        <div>
          <button onClick={toggleMenu} className="boton_hamburguesa">
            {isOpen ? (
              <i className="bi bi-x-lg"></i>
            ) : (
              <i className="bi bi-list"></i>
            )}
          </button>
        </div>
        <div className="links">
          <ul className="links__ul">
            {NavbarLinks.map((link) => (
              <li key={link.id}>
                <NavLink to={link.link} className={ ({ isActive }) => ( isActive ? 'menu-selected' : '' ) }>
                {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="redes">
          <Ul_redes nombre_clase='redes__ul'/>
        </div>

        
      </div>
      {/*Menu mobile  */}
        <div className={`${isOpen ? "menu_mobile" : "menu_mobile_escondido"} `}>
          <ul className="links_menu_mobile">
            {NavbarLinks.map((link) => (
              <li key={link.id}>
              <NavLink 
              to={link.link} 
              className={ ({ isActive }) => ( isActive ? 'menu-selected' : '' )}
              onClick={toggleMenu}
              >
                {link.name}
                </NavLink>
              </li>
            
            ))}
          </ul>

          <Ul_redes nombre_clase='redes_menu_mobile'/>
        </div>
    </nav>
  );
};

export default Navbar;
