import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa'

import styled from 'styled-components';
import Button from '../Button';

const StyledDiv = styled.div`
	color: white;

	div > p{
		font-size: 18px;
	}
	
	div > p:nth-child(2){
		font-size: 22px;
	}
`;

const ContactUs = ()=>{
	return(
		<StyledDiv>
			<p>Fale conosco agora mesmo:</p>
			<p>4020-6440</p>
			<Button icon = { <FaWhatsapp /> } text = 'clique aqui para enviar uma mensagem'/>
			<Button icon = { <FaPhoneAlt /> } text = 'clique aqui para ligar' />
		</StyledDiv>
	);
}

export default ContactUs;
