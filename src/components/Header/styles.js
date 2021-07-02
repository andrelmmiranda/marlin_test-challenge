import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    height: 50px;
    background-color: #FBFBFB;
    position: fixed;
    top:0;
    left: 0;
    z-index: 2;

    box-shadow: 0px 2px 5px rgba(0,0,0,.3);

    display: flex;
    align-items: center;
    align-content: center;
    flex-grow: 0;
`;

export const StyledImages = styled.img`
    border: ${props => props.border};
    width: ${props => props.width};
    height: ${props => props.height};
    
    &:nth-child(2){
        margin-left: 25px;
    }
`;