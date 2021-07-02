import React from 'react';
import Title from '../Title';
import { Container } from './styles';


const Section = ({ title, color, fontSize, borderBottom, titleWidth, description, children })=>{
	return(
		<section>
			<Container>
				<Title
					title = { title }
					color = { color }
					fontSize = { fontSize }
					borderBottom = { borderBottom }
					titleWidth = { titleWidth }
				/>
				<p style={{textAlign:'left'}}>{ description }</p>

				{ children }
			</Container>
		</section>
	)
}

export default Section;
