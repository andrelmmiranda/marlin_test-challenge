import logo_porto_seguro from './img/logo_porto-seguro.png';
import logo_norte_a_sul from './img/logo_norte-a-sul.png';

import vitoria_barra from './img/vitoria-barra.png';
import perinatal_laranjeiras from './img/perinatal-laranjeiras.png';
import copador from './img/copador.png';

import Recepcao_principal from './img/02_Recepcao_principal-860x560.png';
import piggybank from './img/human-hand-inserting-coin-piggybank.png'


export const LogoImages = [
    {
        img: logo_norte_a_sul,  
        alt: 'descrição',
        width: '42px',
        height: '30px',
    },
    {
        img: logo_porto_seguro,
        alt: 'descrição',
        width: '73px',
        height: '23px',
    }
]

export const HospitalImages = [
    {
        img: vitoria_barra,
        title: 'Hospital Vitoria Barra',
        description: 'O Complexo Pediátrico do Hospital Vitória conta com uma equipe de pronto atendimento formada por pediatras, cirurgiões e ortopedistas, além de profissionais de diversas subespecialidades da pediatria, capacitados para assistência a urgências e emergências de pacientes recém-nascidos e até os 18 anos de idade.',
        adress: 'Av. Jorge Curi, 550 Barra da Tijuca, Rio de Janeiro - RJ 22775-001',
        phone: '(21) 3263-2000',
    },
    {
        img: perinatal_laranjeiras,
        title: 'Hospital Perinatal Laranjeiras',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        adress: 'Rua das Laranjeiras, 445 - Laranjeiras, Rio de Janeiro - RJ, 22240-005',
        phone: '(21) 2102-2300',
    },
    {
        img: copador,
        title: 'Hospital Copa D\'Or',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        adress: ' Rua Figueiredo de Magalhães, 875 - Térreo - Copacabana, Rio de Janeiro - RJ, 22031-011',
        phone: '(21) 2545-3600',
    },
]

export const Benefits = [
    {
        img: Recepcao_principal,
        title: 'Rede referenciada',
        description: 'Com o plano Ouro da Porto Seguro Saúde, você conta com uma rede referenciada de hospitais com toda a comodidade que você e seus funcionários precisam.',
        haveButton: {
            isTrue: true,
            information: 'veja a lista completa de hospitais',
        }                 
    },
    {
        img: piggybank,
        title: 'Reembolso de consultas e exames simples',
        description: 'Com o plano Ouro, receba o reembolso de seus exames e consultas em até 48 horas úteis, a partir da data de entrega de todos os documentos necessários.',
        plan: 'Plano Ouro Max: R$280,00',
        haveButton: {
            isTrue: false,
            information: '',
        }
    }
]