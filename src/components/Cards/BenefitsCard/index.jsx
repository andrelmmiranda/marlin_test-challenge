import React from 'react';
import { BodyCard, Container } from './styles';
import AlertDialog from '../../Modal';

const HospitalCard = ({ img, title, description, plan, haveButton, information, largura })=>{

	return(
		<BodyCard largura = {largura}>
			<img src={ img } alt={ description } />
			<div>
				<h3>{ title }</h3>
					<Container>
						<p>{ description }</p>
						<p>{ plan }</p>
						{haveButton && <AlertDialog information={information}/>}
					</Container>
			</div>
		</BodyCard>
	);
}


export default HospitalCard;