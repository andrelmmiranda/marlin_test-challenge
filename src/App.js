
import './App.css';
import { useState } from 'react';
import { sectionTitles } from './assests/info';
import { Benefits, HospitalImages } from './assests/images';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Section from './components/Section';
import AnnoucementCard from './components/Cards/AnnoucementCard';
import HospitalCard from './components/Cards/HospitalCard';
import BenefitsCard from './components/Cards/BenefitsCard';



function App(){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getWindowWidth = ()=>{
    let windowWidth = window.innerWidth;
    // let windowHeight = window.innerHeight;
    // let screenWidth = window.screen.width;
    // let screenHeight = window.screen.height;

    return windowWidth;
  };
  

  window.addEventListener('resize', ()=>{
    setWindowWidth(getWindowWidth);
  });

  console.log(windowWidth);

  return(
    <div className="App">
      <GlobalStyle/>
      <Header>
        <Nav />
      </Header>
      <Main largura = { windowWidth }/>
      <Section
        title = { sectionTitles.section1.title }
        description = { sectionTitles.section1.description}
        color = '#000'
        fontSize = '22px'
        borderBottom = '3px solid #D6A430'
        titleWidth = '230px'
      >
        <AnnoucementCard largura = {windowWidth}/>
      </Section>
      <Section
        title = { sectionTitles.section2.title }
        description = { sectionTitles.section2.description}
        color = '#000'
        fontSize = '22px'
        borderBottom = '3px solid #D6A430'
        titleWidth = '230px'
      >
        <div style={windowWidth >= 768 ? {display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}: undefined}>
          {HospitalImages.map((item, index)=> 
            <HospitalCard
              key = { index }
              largura = { windowWidth }
              img = { item.img }
              title = { item.title }
              description = { item.description }
              adress = { item.adress }
              phone = { item.phone }
            />
          )}
        </div>
      </Section>
      <Section
        title = { sectionTitles.section3.title }
        color = '#000'
        fontSize = '22px'
        borderBottom = '3px solid #D6A430'
        titleWidth = '230px'
      >
        <div style={windowWidth >= 768 ? {display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}: undefined}>
        {Benefits.map((item,index)=>
          <BenefitsCard
            key = { index }
            largura = { windowWidth }
            img = { item.img }
            title = { item.title }
            description = { item.description }
            plan = { item.plan }
            haveButton = { item.haveButton.isTrue }
            information = {item.haveButton.information}
          />
        )}
        </div>
      </Section>
      <Section
        title = { sectionTitles.section4.title }
        color = '#000'
        fontSize = '22px'
        borderBottom = '3px solid #D6A430'
        titleWidth = '230px'
      >
      </Section>
      <Section
        title = { sectionTitles.section5.title }
        color = '#000'
        fontSize = '22px'
        borderBottom = '3px solid #D6A430'
        titleWidth = '230px'
      >
      </Section>
    </div>
  );
}

export default App;
