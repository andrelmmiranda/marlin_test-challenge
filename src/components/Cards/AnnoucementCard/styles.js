import styled from 'styled-components';

export const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px 15px;
	background-color: #D6A430;
	border: 1px solid #D6A430;
	border-radius: 12px;
	color: #fff;

	div{
		display: flex;
		flex-direction: row;
	}

	p{
		color: #fff;
	}

	ul{
		list-style-type: none;
		margin: 0;
		padding: 0;

		li{
			text-align: left;
			border-bottom: 1px solid #B47D07;
			padding-bottom: 5px;
			margin-bottom: 10px;

			span{
				display: block;
			}

			span:last-child{
				font-size: 9px;
			}
		}
	}

	.buttonDiv{
		display: flex;
		flex-direction: column;
	}

	.thirdText{
		font-size: 7px;
		text-align: left;
	}

	@media(min-width:768px){
		flex-direction: row;


		.blockDiv{
			width: 50%;
		}
	}


`;