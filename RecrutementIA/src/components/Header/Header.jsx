import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/Logo1.png";

export default function Header() {
  return (
    <div className={`${styles.header} d-flex align-items-center`}>
      <div>
        <img src={logo} alt="vitaeLogo" />
      </div>
    </div>
  );
}
