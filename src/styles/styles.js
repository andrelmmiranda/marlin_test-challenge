import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.width || '90%'};
    margin: ${props => props.margin || '0 auto'};

    display: ${props => props.display || 'inherit'};
    align-items: ${props => props.alignItems || 'inherit'};
    align-content: ${props => props.alignContent || 'inherit'};
    flex-grow: ${props => props.flexGrow || 'inherit'};
`;

export const CardBody = styled.div`

`;