import React from "react";
import styles from "../Navegation/Navegation.module.scss";

export default function Navegation() {
  return (
    <div className={`${styles.navegation}`}>
      <div className="d-flex justify-content-space p-10">
        <nav className="d-flex align-items-center">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Team</a>
        </nav>
        <nav
          className={`d-flex flex-row align-items-center justify-content-space-between`}
        >
          <button className="btn">Log in</button>
        </nav>
      </div>
    </div>
  );
}
