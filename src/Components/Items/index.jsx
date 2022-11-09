import React from 'react';
import styled from 'styled-components';

import Item from './../Item';
import ImageFilter from './../ImageFilter';

const ItemsContainer = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

const Items = ({ dado }) => {
    return (
        <ItemsContainer>
            {ImageFilter(dado.type)}
            <Item dado={dado}/>
            <span>{dado.date}</span>
        </ItemsContainer>
    );
}
 
export default Items;
