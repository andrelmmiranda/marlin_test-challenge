import styled from 'styled-components';
import medicos from '../../assests/img/medicos.png'

export const StyledMain = styled.main`
    height: 100vh;
    background-image: url(${medicos});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;

    &&:before{
        content: '';
        display: block;
        height: 52px;
    }
`;