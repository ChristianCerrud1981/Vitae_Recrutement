import React from "react";
import styles from "../SignIn/SignIn.mdule.scss";

const Login = () => {
  return (
    <div className={`width: 100%; d-flex justify-content-center `}>
      <div className={`${styles.container} d-flex justify-content-center`}>
        <form action="POST" className="m-10">
          <div>
            <label htmlFor="username">Email: </label>
            <br />
            <input type="email" id="username" name="username"></input>
            <br />
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password"></input>
            <button className={`${styles.btn} btn-primary`}>Log In</button>
          </div>
          <div className="m-10"></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
