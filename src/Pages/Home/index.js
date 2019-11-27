import React from "react";
import "./styles.css";
import Container from "../../components/Container";

export default function Home() {
  return (
    <div className="home">
      <p>
        <br />
        align-items: stretch;
        <br />
        // Valor padrão, ele que faz com que os flex itens cresçam igualmente.
        <br />
        align-items: flex-start;
        <br />
        // Alinha os itens ao início.
        <br />
        align-items: flex-end;
        <br />
        // Alinha os itens ao final.
        <br />
        align-items: center;
        <br />
        // Alinha os itens ao centro.
        <br />
        align-items: baseline;
        <br />
        // Alinha os itens de acordo com a linha base da tipografia.
      </p>
      <Container />
    </div>
  );
}
