import React from "react";
import "./styles.css";
import Container from "../../components/Container";

export default function Home() {
  return (
    <div className="home">
      <div className="instruction">
        <h1>Flex-box</h1>
        <p>
          Bem-vindo: Sua missão aqui é mandar o foguete a lua. Para isso,
          utilize <span>justify-content</span> com alguma propriedade abaixo:
        </p>
        <ul>
          <li>
            <span>flex-start</span>: Alinha os itens no lado esquerdo do
            container
          </li>
          <li>
            <span>flex-end</span>: Alinha os itens no lado direito do container
          </li>
          <li>
            <span>center</span>: Alinha os itens no centro do container
          </li>
          <li>
            <span>space-between</span>: Insere um espaço igual entre os itens
          </li>
          <li>
            <span>space-around</span>: Insere um espaço ao redor dos itens
          </li>
        </ul>
        <p>
          Objetivo: Utilize uma propriedade para para levar o foquete na lua
        </p>
      </div>

      <Container />
    </div>
  );
}
