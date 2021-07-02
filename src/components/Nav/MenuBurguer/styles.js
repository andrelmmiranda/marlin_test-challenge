import styled from 'styled-components';

export const StyledBurger = styled.div`
  width: 30px;
  height:30px;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 1;
  display: none;

  @media(max-width: 768px){
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div{
    width: 30px;
    height: 4px;
    background-color: #333;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1){
      transform: ${ ({ isOpen })=> isOpen ? 'rotate(45deg)' : 'rotate(0)' };
    }

    &:nth-child(2){
      transform: ${ ({ isOpen })=> isOpen ? 'translateX(100%)' : 'translateX(0)' };
      opacity: ${ ({ isOpen })=> isOpen ? 0 : 1 };
    }

    &:nth-child(3){
      transform: ${ ({ isOpen })=> isOpen ? 'rotate(-45deg)' : 'rotate(0)' };
    }
  }
`;