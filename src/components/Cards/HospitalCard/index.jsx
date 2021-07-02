import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { BodyCard, Container } from './styles';

const HospitalCard = ({ img, title, description, adress, phone, largura })=>{
	const [isOpen, setIsOpen] = React.useState(false);

	const handleInformation = ()=>{
		setIsOpen(!isOpen);
	}

	return(
		<BodyCard largura = { largura }>
			<img src={ img } alt={ description } />
			<div>
				<h3>{ title }</h3>
				{!isOpen ?
					<FaChevronDown onClick={ handleInformation }/>
				:
					<FaChevronUp onClick={ handleInformation }/>
				}
				{isOpen &&
					<Container>
						<p>{ description }</p>
						<hr/>
						{/* icon */}<p>Endereço: { adress }</p>
						{/* icon */}<p>Telefone: { phone }</p>
					</Container>
				}
			</div>
		</BodyCard>
	);
}


export default HospitalCard;