import React from "react";
import styled from "styled-components";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrado";

const DivPrincipal = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
  height: 90vh;

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
