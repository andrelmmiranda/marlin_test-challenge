import React from 'react';
import { CardBody } from './styles';
import { announcementInfo, services } from '../../../assests/info';

const AnnoucementCard = ({largura}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleCard = ()=>{
		setIsOpen(!isOpen);
	}
	
	return(
		<CardBody>
			{largura < 768 ?
				<>
					<div>
						<div style = {{width: '50%', display: 'flex', flexDirection: 'column', textAlign: 'left', padding: '0 15px'}}>
							<p style={{color: '#FFD984', fontSize: '15px', margin: '0px'}}>Plano Ouro</p>
							<p style={{fontSize: '15px', fontStyle: 'italic', margin: '0px'}}>{announcementInfo.secondText}</p>
							<p style={{fontSize: '30px', margin: '0px'}}>{announcementInfo.graphicSign}{announcementInfo.price}{announcementInfo.cents}</p>
						</div>
						<div style = {{width: '50%', padding: '10px 15px'}}>
							<p className = 'thirdText'>{announcementInfo.thirdText}</p>
						</div>
					</div>
					<div>
					{isOpen && 
						<ul>
							{services.map(item =>
								<li>
									<span>{ item.texto1 }</span>
									<span>{ item.texto2 }</span>
								</li>
							)}
						</ul>
					}
					</div>
					<div className='buttonDiv'>
						{!isOpen ?
							<button onClick = { handleCard }>veja cobertura completa</button>
						: 
							<button onClick = { handleCard }>Fechar</button>
						}
						<button>Dowload</button>
					</div>
				</>
			:
				<>
					<div style={{display: 'flex', flexDirection: 'column'}}>
						<div>
							<div className = 'blockDiv'>
								<div style = {{width: '50%', display: 'flex', flexDirection: 'column', textAlign: 'left', padding: '0 15px'}}>
								<p style={{color: '#FFD984', fontSize: '15px', margin: '0px'}}>Plano Ouro</p>
								<p style={{fontSize: '15px', fontStyle: 'italic', margin: '0px'}}>{announcementInfo.secondText}</p>
								<p style={{fontSize: '30px', margin: '0px'}}>{announcementInfo.graphicSign}{announcementInfo.price}{announcementInfo.cents}</p>
							</div>
							<div style = {{width: '50%', padding: '10px 15px'}}>
								<p className = 'thirdText'>{announcementInfo.thirdText}</p>
							</div>
							</div>
							<div className='buttonDiv blockDiv'>
								{!isOpen ?
									<button onClick = { handleCard }>veja cobertura completa</button>
								: 
									<button onClick = { handleCard }>Fechar</button>
								}
								<button>Dowload</button>
							</div>
						</div>

						<div>
						{isOpen && 
							<ul>
								{services.map(item =>
									<li>
										<span>{ item.texto1 }</span>
										<span>{ item.texto2 }</span>
									</li>
								)}
							</ul>
						}
					</div>
					</div>
				</>
			}
		</CardBody>
		
	);
}

export default AnnoucementCard;