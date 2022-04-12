import React from 'react';
import styled from 'styled-components';

const Botao = styled.button`
  background: transparent;
  border: 2px solid;

  &:hover {
    background-color: palegoldenrod;
    color: white;
  }
`

export const Button = () => {
  return (
    <Botao>Meu Botãozinho</Botao>
  )
};
