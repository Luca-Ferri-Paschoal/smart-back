import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
  }
`

const Item = ({ dado }) => {
  return ( 
    <ItemContainer>
      <span className='text'>
        {dado.type}
      </span>
      <span>
        {dado.from}
      </span>
      <span>
        {dado.value}
      </span>
    </ItemContainer>
  );
}
 
export default Item;
