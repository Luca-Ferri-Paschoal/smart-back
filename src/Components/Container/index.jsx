import React from "react";
import styled from "styled-components";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";

const DivPrincipal = styled.div`
  height: 90vh;
  padding: 20px;

  background-color: 
    ${ ({ theme }) => theme.body }
  ;
  color:
    ${ ({ theme }) => theme.text }
  ;

  @media (max-width: 800px) {
    height: unset;
  }

  @media (max-height: 700px) {
    height: unset;
  }
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

const Container = () => {
  return (
    <DivPrincipal>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </DivPrincipal>
  );
};

export default Container;
