import BasicExample from '../components/navBar';
import { Container, Row, Col, Image } from 'react-bootstrap';
import AboutTop from '../components/AboutTop';
import { Card } from 'react-bootstrap';
import ListExample from '../components/Foot';
import Button from "react-bootstrap/esm/Button";

import React from 'react'
import Footerr from '../components/footerr';
import '../App.css';

const AboutUs = () => {
  return (
    <div>
        <BasicExample />
        <Container>
            <div className=" aboutTop">
                    <h1 className="display-4">About US</h1>
                    
                    <h3>Our mission is to empower the health sector using easy-to-use cross-sectoral welfare technology.</h3>
                    
            </div>
            <Card className='mb-5'>
                <Card.Body>
                    <Card.Text className="text-center">
                    <b className="">The company is driven by the will to make a difference through the use of knowledge, tools and experience gathered from many years of concrete experience in the field.
                    </b>
                    <p>
                    We have the opportunity to draw on a large network of qualified partners to create integrated, coherent solutions that support patient empowerment. 
                    </p>
                    
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="https://impro.usercontent.one/appid/oneComWsb/domain/cordia360.com/media/cordia360.com/onewebmedia/hands-unrecognizable-female-doctor-writing-form-typing-laptop-keyboard.jpg?etag=%22fe090b-640ca997%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=741%2B495&extract=0%2B118%2B741%2B353&quality=85" />
            </Card>

<Row className='mb-5'>
            <Card style={{ width: '13rem', border: 0}}>
      <Card.Img variant="top" src="https://impro.usercontent.one/appid/oneComWsb/domain/cordia360.com/media/cordia360.com/onewebmedia/Khushboo.jpg?etag=%2225e24-654b37c9%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=165%2B180&extract=12%2B0%2B150%2B180&quality=85" />
      <Card.Body>
        
            <Card.Title>KHUSHBOO VERMA
                Domain Expert, Founder, and CEO
                at vCare Denmark ApS </Card.Title>
                        <Card.Text>
                        MBA, B.Tech, 19 years of experience in the USA, UK and DK with EHR systems, telemedicine, patient empowerment and elderly care systems.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            
            <Card style={{ width: '13rem', border: 0, marginLeft: 'auto'}}>
      <Card.Img variant="top" src="https://impro.usercontent.one/appid/oneComWsb/domain/cordia360.com/media/cordia360.com/onewebmedia/Aman.jpg?etag=%22ef53-654b37d7%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=164%2B180&extract=0%2B0%2B150%2B180&quality=85" />
      <Card.Body>
        
            <Card.Title>AMAN JHA

                    Technology, Data Expert,

                    Co-founder, CTO

                    </Card.Title>
                        <Card.Text>
                        More than 19 years of IT experience in leading business transformations, architecting and developing scalable business solutions with data in focus.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

            <Card style={{ width: '13rem', border: 0, marginLeft: 'auto'}}>
      <Card.Img variant="top" src="https://impro.usercontent.one/appid/oneComWsb/domain/cordia360.com/media/cordia360.com/onewebmedia/Christian.jpg?etag=%22127bd-654b37ea%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=193%2B180&extract=25%2B0%2B150%2B180&quality=85" />
      <Card.Body>
        
            <Card.Title>DR. CHRISTIAN BUDTZ

                    Clinical Expert, CMO,

                    Chief Clinical Officer

                    </Card.Title>
                        <Card.Text>
                        MD, B.Eng, Asst. Professor in health technology at the Technical University of Denmark. 5 years of experience as a doctor, from both private practice and secondary health care. 
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            
            <Card style={{ width: '13rem', border: 0, marginLeft: 'auto'}} className='mb-5'>
      <Card.Img variant="top" src="https://impro.usercontent.one/appid/oneComWsb/domain/cordia360.com/media/cordia360.com/onewebmedia/Torben.jpg?etag=W%2F%22186fc-654b3801%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=196%2B180&extract=19%2B0%2B150%2B180&quality=85" />
      <Card.Body>
        
            <Card.Title>TORBEN DAMGAARD
                    Business Expert, Funding,

                    and Investment
                    </Card.Title>
                        <Card.Text>
                        M.Sc. strategy, business development, funding and investment expert. Sustainability and social impact.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            </Row>



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

export default AboutUs;