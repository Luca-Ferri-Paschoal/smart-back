import React from 'react';
import styled from 'styled-components';

import ThemeOn from './../../assets/images/themeOn.svg';
import ThemeOff from './../../assets/images/themeOff.svg';
import { Icone } from './../UI';

const BtnTema = styled.button`
    position: absolute;
    top: 32px;
    right: 20px;
    background-color: inherit;
    border: none;
    cursor: pointer; 
`;

const claro = 
    <Icone 
        src={ThemeOn}
        alt="Tema Claro"
    />
;

const escuro = 
    <Icone
        src={ThemeOff}
        alt="Tema Escuro"
    />
;

const SwitcherTema = ({ tema, trocaTema }) => {
    return (  
        <BtnTema 
            onClick={trocaTema}
        >
            {tema ? escuro : claro}
        </BtnTema>
    );
}
 
export default SwitcherTema;
