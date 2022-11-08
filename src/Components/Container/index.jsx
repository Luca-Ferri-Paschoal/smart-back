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
  justify-content: space-between;
`;

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
      </Conteudo>
    </Container>
  );
};
