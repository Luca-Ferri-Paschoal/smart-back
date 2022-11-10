import React from 'react';
import { Box, Botao } from './../UI';
import { extratoLista } from '../../info';
import Items from '../Items';

const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map(
                dado => {
                    return (
                        <Items 
                            key={dado.id} dado={dado}
                        >
                        </Items>
                    );
                }
            )}
            <Botao>Ver mais</Botao>
        </Box>
    );
}
 
export default Extrato;
