import React from 'react';
import { StyledHeader, StyledImages } from './styles';
import { LogoImages } from '../../assests/images';
import { Container } from '../../styles/styles';

const Header = ({ children })=>{

	const imagesWrapper = {
		display: 'flex',
		flexGrow: '0',
		alignItens: 'center',
		alignContent: 'center',
	}


	return(
		<StyledHeader>
			<Container>
				<div style = { imagesWrapper }>
					<StyledImages
						src={ LogoImages[0].img }
						alt={ LogoImages[0].alt }
						width={ LogoImages[0].width }
						heigth={ LogoImages[0].heigth }
					/>
					<StyledImages
						src={ LogoImages[1].img }
						alt={ LogoImages[1].alt }
						width={ LogoImages[1].width }
						heigth={ LogoImages[1].heigth }
					/>
				</div>
				{children}
			</Container>
		</StyledHeader>
	);
}

export default Header;