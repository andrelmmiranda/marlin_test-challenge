import styled from 'styled-components';

export const StyledButton = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	justify-content: space-around;
	width: ${props => props.width || '100%'};
	border-radius: ${props => props.borderRadius};

	div{
		color: white;
		font-size: 50px;
		margin-left: 50px;
	}
		
	div ~ p{
		color: red;
		font-size: 18px;
		text-align: left;
	}
`;