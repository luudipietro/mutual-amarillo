import React from "react";
const NavbarRedes = [
  {
    id: 1,
    link: "#",
    icon: "bi bi-whatsapp",
  },
  {
    id: 2,
    link: "#",
    icon: "bi bi-instagram",
  },
  {
    id: 3,
    link: "#",
    icon: "bi bi-facebook",
  },
];

const Ul_redes = (props) => {
  return (
    <ul className={props.nombre_clase}>
      {NavbarRedes.map((link) => (
        <li key={link.id}>
          <a href={link.link}>
            <i className={`${link.icon}`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Ul_redes;