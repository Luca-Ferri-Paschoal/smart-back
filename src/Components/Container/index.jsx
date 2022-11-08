import React from "react";
import styled from "styled-components";

import Titulo from "../Titulo";
import Conta from "../Conta";

const Container = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Conta />
        <Conta />
        <Conta />
      </Conteudo>
    </Container>
  );
};
