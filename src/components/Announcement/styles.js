import styled from 'styled-components';

export const StyledParagraph = styled.p`
    font-size: 30px;
    text-align: left;
    color: #fff;
    
    width: 300px;
    height: 150px;


    &&:last-child{
        font-size: 12px;
        color: #eee;
    }
`;