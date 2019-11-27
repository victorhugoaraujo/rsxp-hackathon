import React, { useEffect, useState } from "react";
import "./styles.css";
import rocket from "../../images/rocket.svg";
import moon from "../../images/moon.svg";
import { Rocket } from "./styles.js";
// import logo from './assets/logo.svg';

export default function Container() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    setResult(code);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="box-code">
          <div className="sdjak">
            <p>Instruções de codigo</p>
          </div>
          <input onChange={event => setCode(event.target.value)} />
          <button>Validar</button>
        </div>

        <div className="box-result">
          <Rocket result={result}>
            <img src={rocket} alt="" />
          </Rocket>
          <div className="moon">
            <img src={moon} alt="" />
          </div>
        </div>
      </div>
    </form>
  );
}
