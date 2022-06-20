import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Burger = (props) => {

  const showDropDownMenu = () => {
    props.menu == true ? props.setMenu(false) : props.setMenu(true)
  }

  return (
    <StyledBurger onClick={showDropDownMenu} >
      <div />
      <div />
      <div />
    </StyledBurger>

  )
}

export default Burger;

export const StyledBurger = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.background};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    color: white;
  }
`;