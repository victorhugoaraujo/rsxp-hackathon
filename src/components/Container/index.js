import React from "react";
import "./styles.css";
import rocket from "../../images/rocket.svg";
import moon from "../../images/moon.svg";
// import logo from './assets/logo.svg';

export default function Container() {
  return (
    <div className="container">
      <div className="box-code">
        <div className="sdjak">
          <p>Instruções de codigo</p>
        </div>
        <input></input>
      </div>

      <div className="box-result">
        <div className="rocket">
          <img src={rocket} alt="" />
        </div>
        <div className="moon">
          <img src={moon} alt="" />
        </div>
      </div>
    </div>
  );
}
