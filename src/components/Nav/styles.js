import styled from 'styled-components';

export const Nav = styled.nav`
  width: ${ props => props.width || '100%' };
  height: ${ props => props.heigth || '50px' };
  border-bottom: 0px solid #f1f1f1;
  padding: ${ props => props.padding || '0' };
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a{
    text-decoration: none;
    color: #141414;
    transition: 1s ease;
    margin: 0;
  }

  a:hover{
    text-decoration: underline;
    transition: 1s ease;
  }
`;