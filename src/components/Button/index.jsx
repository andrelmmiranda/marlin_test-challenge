import React from 'react';
import { StyledButton } from './styles';

const Button = ({ icon, text })=>{
	return(
		<StyledButton><div>{ icon }</div><p>{ text }</p></StyledButton>
	);
}

export default Button;