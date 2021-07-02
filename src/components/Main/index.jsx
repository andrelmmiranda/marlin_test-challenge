import React from 'react';
import { StyledMain } from './styles';
import styled from 'styled-components';
import Announcement from '../Announcement';

const Container = styled.div`
  position: relative;
  z-index : 1;
  background: transparent;

	height: 90vh;
	width: 90%;
	margin: 0 auto;

`;

const Main = ({largura})=>{
	return(
		<StyledMain>
				<Container>
					<Announcement largura = {largura}/>
				</Container>
		</StyledMain>
	);
}

export default Main;
