import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "0, 0" significa coordenadas x=0, y=0 (arriba a la izquierda)
    window.scrollTo(0, 0);
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta (pathname)

  return null; // No renderiza nada visualmente
}