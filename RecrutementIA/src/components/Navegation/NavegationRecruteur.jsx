import React from "react";
import styles from "../Navegation/Navegation.module.scss";

export default function Navegation() {
  return (
    <div className={`${styles.navegation}`}>
      <div className="d-flex justify-content-space p-10">
        <nav className="d-flex align-items-center">
          <a href="#">Home</a>
          <a href="#">Apropos</a>
          <a href="#">Notre équipe</a>
        </nav>
        <nav
          className={`flex-row align-items-center justify-content-space-between`}
        >
          <button className="btn btn-primary">Candidates</button>
          <button className="btn btn-primary">LogOut</button>
        </nav>
      </div>
    </div>
  );
}
