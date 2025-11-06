import React from "react";
import MemberCard from "../memberOrganigram/MemberOrganigram";
import "./Organigram.css";
const Organigram = () => {
  return (
    <div className="organigram-container">

        

      {/* Nivel 1: Presidente */}
      {/* Título para Junta Fiscalizadora */}
      <h3 className="organigram-junta-title">Comisión Directiva</h3>
      <div className="organigram-section level-1">
        <MemberCard position="Presidente" name="Ceccotti Oscar Alfredo" />
      </div>

      {/* Espaciador/Divisor */}
      <div className="organigram-spacer"></div>

      {/* Nivel 2: Secretario y Tesorero */}
      <div className="organigram-section level-2">
        <MemberCard position="Secretario" name="Petrella Hugo Daniel" />
        <MemberCard position="Tesorero" name="Di Pietro Luciano" />
      </div>

      {/* Espaciador/Divisor */}
      <div className="organigram-spacer"></div>

      {/* Nivel 3: Vocales Titulares */}
      <div className="organigram-section level-3">
        <MemberCard position="Vocal Titular 1" name="Rubio Agustin" />
        <MemberCard position="Vocal Titular 2" name="Medina Ignacio" />
      </div>

      {/* Espaciador/Divisor */}
      <div className="organigram-spacer"></div>

      {/* Nivel 4: Vocales Suplentes */}
      <div className="organigram-section level-4">
        <MemberCard position="Vocal Suplente 1" name="Chalabe Hernan" />
      </div>

      {/* Título para Junta Fiscalizadora */}
      <h3 className="organigram-junta-title">Junta Fiscalizadora</h3>

      {/* Nivel 5: Junta Fiscalizadora */}
      <div className="organigram-section level-5">
        <MemberCard position="Titular 1" name="Angelet Ignacio" />
        <MemberCard position="Titular 2" name="Orso Alberto" />
        <MemberCard position="Titular 3" name="Jaldin Alejandro" />
        {/* Espaciador/Divisor */}
        {/* <div className="organigram-spacer"></div>

        <MemberCard position="Suplente 1" name="Solbes Ricardo" /> */}
      </div>
      {/* Espaciador/Divisor */}
      <div className="organigram-spacer"></div>
      {/* Título para Puestos de trabajo */}
      <h3 className="organigram-junta-title">Empleados</h3>
      <div className="organigram-section level-1">
        <MemberCard position="Gerente" name="Ceccotti Nicolás Alfredo" />
      </div>
    </div>
  );
};

export default Organigram;
