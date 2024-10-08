import '../App.css';
import ColorSchemesExample from '../components/navBar';
// import FormFileExample from './components/form';
import form , { FormFileExample, InputReadOnlyExample } from '../components/form';
import Container from 'react-bootstrap/esm/Container';
import AccordionModul from '../components/jumbotron';
import AboutTop from '../components/AboutTop';
import BasicExample from '../components/navBar';
import Footerr from '../components/footerr';
import ListExample from '../components/Foot';
import Slider from '../components/Slider';
import HowItWorks from '../components/HowItWorksLevel';
import WhatWeOffer from '../components/WhatWeOffer';
import { HashRouter, Router, Route, Routes } from 'react-router-dom';
import React from 'react';



const Home = () => {
  return (
    <div className="Home">
        <h1>This is the home pageasdsadsa</h1>
            <BasicExample/>
              <Container >
                <AboutTop />
                <HowItWorks />
                <WhatWeOffer /> 
                {/* <AccordionModul /> */}
                {/* <InputReadOnlyExample /> */}
                {/* <FormFileExample /> */}
                <Slider />
                <Footerr className="mb-5"/>
                <Footerr />
                <ListExample/>
              </Container> 
    </div>
  );
}

export default Home;
