import React from "react";
import styled from "styled-components";

import Titulo from "../Titulo";
import Conta from "../Conta";

const Container = styled.div`
  background-color: 
    ${ ({ theme }) => theme.body }
  ;
  padding: 20px;
  color:
    ${ ({ theme }) => theme.text }
  ;

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
