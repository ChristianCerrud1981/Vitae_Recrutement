import React from "react";
import Header from "./components/Header/Header";
import Navegation from "./components/Navegation/Navegation";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <body>
      <Header />
      <Navegation />
      <Login />
      <Footer />
    </body>
  );
};

export default App;
