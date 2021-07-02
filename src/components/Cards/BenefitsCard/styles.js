import styled from 'styled-components';

export const BodyCard = styled.div`
	box-sizing: border-box;
	border: transparent;
	border-radius: 8px;
	width: ${({largura})=> largura <=768 ? '100%' : '35%'};
	margin-bottom: 15px;
	box-shadow: 0px 2px 5px rgba(0,0,0,.5);

	img{
		width: 100%;
	}

	> div{
		margin: 10px 0;
		padding: 10px 0;

		h3{
			color: #E8BB15;
			font-size: 15px;
			margin: 5px 0;
		}

		svg{
			color: #BFBFBF;
			transform: scale(1.5);
		}

		p{
			text-align: left;
			font-size: 12px;
		}
	}
`;

export const Container = styled.div`
	width: 90%;
	margin: 0 auto;
`;