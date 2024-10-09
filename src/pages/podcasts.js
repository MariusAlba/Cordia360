import BasicExample from '../components/navBar';
import Card from 'react-bootstrap/Card';
import { Button,Row } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import React from 'react'
import { Container } from 'react-bootstrap';
import ListExample from '../components/Foot';

const Podcast = () => {
  return (
    <div>
        <BasicExample />
            <Container>
            <div className="aboutTop">
                <h1 className="display-4 justify-content-center">Podcast</h1>   
            </div>

            <Row className='mb-5' style={{marginBottom:'50px'}} >

                <Card border="secondary" style={{ width: '18rem', border:'0' }}>
        
                        <Card.Body>
                        <Card.Title className='display-6'>Cordia® Podcast</Card.Title>
                        <Card.Text><b>
                            Ep. 1: What is Type 2 Diabetes?
                            Khushboo Verma with Dr. Vijendra Pratap Singh
                            </b>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                  
                    <Card border="primary" style={{ width: '40rem', border:'0', marginLeft:'auto' }}>
                    
                        <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                        <div className="ratio ratio-16x9" style={{aspectRatio: "30%"}}>
                                    <iframe
                                    src="https://www.youtube.com/embed/PCftSs2T2rQ?si=GPXrcu6Y7L1SemkV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                                    // title="YouTube video"
                                    allowfullscreen
                                    ></iframe>
                                </div>
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    
                        
      </Row>

      <Row className='mb-5' style={{marginBottom:'50px'}} >

<Card border="secondary" style={{ width: '18rem', border:'0' }}>

        <Card.Body>
        <Card.Title className='display-6'>Cordia® Podcast</Card.Title>
        <Card.Text><b>
            Ep. 2: Obesity is not a “healthy” condition
            Khushboo Verma with Dr. Banshi Saboo
            </b>
        </Card.Text>
        </Card.Body>
    </Card>
  
    <Card border="primary" style={{ width: '40rem', border:'0', marginLeft:'auto' }}>
    
        <Card.Body>
        <Card.Title>Primary Card Title</Card.Title>
        <Card.Text>
        <div className="ratio ratio-16x9" style={{aspectRatio: "30%"}}>
                    <iframe
                    src="https://www.youtube.com/embed/2-MvCZTdv34?si=1u0rQq8kQ67ObUjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                    // title="YouTube video"
                    allowfullscreen
                    ></iframe>
                </div>
        </Card.Text>
        </Card.Body>
    </Card>

    
        
</Row>

<Row className='mb-5' style={{marginBottom:'50px'}} >

<Card border="secondary" style={{ width: '18rem', border:'0' }}>

        <Card.Body>
        <Card.Title className='display-6'>Cordia® Podcast</Card.Title>
        <Card.Text><b>
            Ep. 3: The Importance of Exercise and Mobility
            Khushboo Verma with Frederik Dahl Andersen
            </b>
        </Card.Text>
        </Card.Body>
    </Card>
  
    <Card border="primary" style={{ width: '40rem', border:'0', marginLeft:'auto' }}>
    
        <Card.Body>
        <Card.Title>Primary Card Title</Card.Title>
        <Card.Text>
        <div className="ratio ratio-16x9" style={{aspectRatio: "30%"}}>
                    <iframe
                    src="https://www.youtube.com/embed/apD41zczTK4?si=3k5gl9yhGxOFytSW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                    // title="YouTube video"
                    allowfullscreen
                    ></iframe>
                </div>
        </Card.Text>
        </Card.Body>
    </Card>

    
        
</Row>

      <ListExample />
      </Container>
    </div>
  )
}

export default Podcast;