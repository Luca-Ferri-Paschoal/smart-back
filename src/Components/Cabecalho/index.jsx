import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "./../UI/variaveis";

const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-around;
  padding: 20px;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background-color: ${
    ({ backGroungColor }) => backGroungColor ? backGroungColor : 'transparent'
  };
  color: ${
    ({ color }) => color ? color : 'white'
  }
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho
          href="https://google.com"
          backGroungColor='white'
          color={corPrimaria}
        >
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho 
          href="https://google.com"
          backGroungColor={corPrimaria}
          color='white'
        >
          Sair
        </BtnCabecalho>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
