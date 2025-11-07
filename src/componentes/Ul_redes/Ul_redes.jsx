import React from "react";
const NavbarRedes = [
  {
    id: 1,
    link: "https://wa.me/5493812116964",
    icon: "bi bi-whatsapp",
  },
  {
    id: 2,
    link: "https://www.instagram.com/mutualsaoficial?igsh=MXY2b3czMjlraHAxbA==",
    icon: "bi bi-instagram",
  }
];

const Ul_redes = (props) => {
  return (
    <ul className={props.nombre_clase}>
      {NavbarRedes.map((link) => (
        <li key={link.id}>
          <a href={link.link}
          target="_blank" 
          rel="noopener noreferrer">
            <i className={`${link.icon}`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Ul_redes;