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
import {Row, Col, Card,Image, Button} from 'react-bootstrap'


import React from 'react'
import { Form } from 'react-bootstrap';

const Produ = () => {
  return (
    <div className="Products">
        <BasicExample />
        <Container>
            <div className=" aboutTop">
                    <h1 className="display-4">Global Platform, Local Care</h1>
                    
                    <h3>Empower your Hospital or Clinic with AI and enable 360° care using Cordia® </h3>
                    
                    <p>
                    <Button variant="primary" size="md" role="button">
                        Register as a Doctor &raquo;
                    </Button>
                    </p>
            </div>
           <Row lg={1} className='mb-5 text-center'> 
                <Col xs={1} md={1} lg={4} className="col-md-4 mx-auto">
                <Image src="https://impro.usercontent.one/appid/oneComWsb/domain/cordia360.com/media/cordia360.com/onewebmedia/Cordia%20Website%202.png?etag=W%2F%227ed04-66827d31%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=674%2B379&extract=68%2B6%2B560%2B353" rounded />
                </Col>
                <Col xs={1} md={1} lg={4} className="col-md-4 mx-auto">
                <Card  style={{border: 0,}} >
                    <Card.Body>
                    <Card.Title >Holistic Care</Card.Title>
                    <Card.Text>
                        We focus on holistic care of patients encompassing physical health, mental health and lifestyle improvements.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row lg={1} className="text-center"> 
            <Col xs={1} md={1} lg={4}>
                <Card bg="" style={{border: 0, marginLeft:0}} >
                    <Card.Body>
                    <Card.Title >Holistic Care</Card.Title>
                    <Card.Text>
                        We focus on holistic care of patients encompassing physical health, mental health and lifestyle improvements.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>

                <Col xs={6} md={4} lg={1} className='col-md-4 mx-auto'>
                <Image src="https://impro.usercontent.one/appid/oneComWsb/domain/cordia360.com/media/cordia360.com/onewebmedia/Cordia%20Website%202.png?etag=W%2F%227ed04-66827d31%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=674%2B379&extract=68%2B6%2B560%2B353" rounded />
                </Col>
               
            </Row>
            <Footerr />
            <ListExample />
        </Container>
        
      </div>
  )
}

export default Produ

