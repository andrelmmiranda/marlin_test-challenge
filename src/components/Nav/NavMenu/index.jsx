
import React from 'react';
import ContactUs from '../../ContactUs';
import { StyledUl, StyledSpan } from './styles';


const NavMenu = ({ isOpen })=>{
  const [clicked, setClicked] = React.useState(false);

  const handleClick = ()=>{
    setClicked(!clicked)
  }
  
  return(
    <StyledUl isOpen = { isOpen }>
      <li>
        sobre
      </li>
      <li>
        hospitais
      </li>
      <li>
          beneficios
      </li>
      <li>
        serviços especiais
      </li>
      <li onClick = { handleClick }>
        contato
      </li>
      { clicked && <ContactUs /> }
    </StyledUl>
  );
}

export default NavMenu;