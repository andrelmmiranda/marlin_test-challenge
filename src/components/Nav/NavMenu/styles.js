import styled from 'styled-components';

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  margin: 0;
  padding: 0;

  background-color: transparent;


  li{
    color: #D6A430;
    padding: 8px 10px;
    margin: 0 5px;
    text-align: left;
    text-transform: uppercase;
    border-bottom: unset;
    transition: .5s ease-in-out;
  }

  li:hover{
    color: #fff;
    background-color: #D6A430;
    border-radius: 5px;
    transition: .5s ease-in-out;
    cursor: pointer;
  }
  
  @media(max-width: 768px){
    flex-flow: column nowrap;
    background-color: #9A6D0C;
    position: fixed;
    transform: ${ ({ isOpen })=> isOpen ? 'translateX(0)' : 'translateX(100%)' };
    top: 0;
    right: 0;
    height: 100vh;
    width: 320px;
    padding-top: 40px;
    transition: transform 0.3s ease-in-out;

    li{
      color: white;
      padding: 18px 10px;
      text-align: left;
      text-transform: uppercase;
      border-bottom: 1px solid #EFC566;
    }
  }
`;

export const StyledSpan = styled.span`
    width: 15px;
    border-radius: 50%;
    background-color: ${ props => props.backgroundColor }; 
    margin-left: 5px;
    padding: 2px;
`;