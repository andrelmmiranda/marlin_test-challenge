import styled from 'styled-components';


export const StyledTitle = styled.div`
	border: solid transparent	;
	position: relative;

	h2{
		color: ${ props => props.color || 'white' };
		font-size: ${ props => props.fontSize || '30px' };
		text-align: left;
		width: ${props => props.titleWidth || '320px'};
	}

	&&:after{
		position: absolute;
		left: 0;
		bottom: 0;
		content: '';
		display: block;
		width: ${ props => props.underlineLength || '150px' };
		height: 1px;
		border-bottom: ${ props => props.borderBottom || '3px solid white' };
	}
`;