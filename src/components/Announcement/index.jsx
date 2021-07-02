import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import { announcementInfo } from '../../assests/info';

const Wrapper = styled.div`
	text-align: left;
	width: ${({largura}) => largura < 1024 ? '320px' : '360px'};
	color: #FFF;

	&&:before{
		content: '';
		display: block;
		height: ${({ largura }) => largura < 1024 ? '250px' : '100px'};
		transform: ${ ({ isOpen })=> isOpen ? 'rotate(45deg)' : 'rotate(0)' };
	}

	p{
		font-size: 30px;
		text-align: left;
		color: #FFF;
		width: 300px;
		margin: 10px 0;
	}

	div > p{
		color: inherit;
		font-size: 17px;
		font-style: italic;
	}

	div > p span:first-child{
		display: block;
		font-size: 17px;
		font-weight: unset;
		transform: translateY(8px);
	}

	div > p span{
		display: block;
		color: inherit;
		font-size: 45px;
		font-weight: bold;
	}

	div > p span:last-child{
		display: block;
		color: inherit;
		font-size: 24px;
		transform: translateY(8px);
	}

	p:last-child{
		font-size: 12px;
		text-align: left;
		color: inherit;
		width: ${({largura})=> largura >= 1024 ? 'inherit' : ''}
	}

`;

const Btn = styled.button`
	padding: 5px;
	width: 110px; 
	height: 37px;
	background-color: #F7B53D;
	color: #fff;
	border: none;
	box-shadow: 3px 2px 2px rgba(0,0,0,0.7);
	border-radius: 25px;

	&&:active{
		transform: translateY(2px);
		box-shadow: none;
	}
`;

const Announcement = ({ largura })=>{
	return(
		<Wrapper largura = {largura}>
			<Title
				title = { announcementInfo.mainText }
			/>
			{largura >= 1024 && <p style = {{fontSize: '25px'}}>Conheça o plano Ouro da Porto Seguro Saúde.</p> }
			<div style = {{display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: 'flex-start'}}>
				<p style = {{display: 'flex'}}>
						<span>{ announcementInfo.secondText }</span>
						<span>{ announcementInfo.price },</span>
						<span>{announcementInfo.cents}*</span>
				</p>
				<Btn>VER MAIS</Btn></div>
			<p>{ announcementInfo.thirdText }</p>
		</Wrapper>
	);
}


export default Announcement;
