import React from 'react'
import { StyledTitle } from './styles';

const Title = ({ title, color, fontSize, width, borderBottom, titleWidth })=>{

	return(
		<StyledTitle
			color = { color }
			fontSize = { fontSize }
			width = { width }
			borderBottom = { borderBottom }
			titleWidth = { titleWidth }
		>
			<h2>{ title }</h2>
		</StyledTitle>
		
	);
}

export default Title;