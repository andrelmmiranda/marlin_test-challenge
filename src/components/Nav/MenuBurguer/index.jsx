import React from 'react';
import NavMenu from '../NavMenu';
import { StyledBurger } from './styles';


const MenuBurger = ()=>{
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <StyledBurger isOpen = { isOpen } onClick = { ()=> setIsOpen(!isOpen) }>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavMenu isOpen = { isOpen }/>
    </>
  );
}

export default MenuBurger;