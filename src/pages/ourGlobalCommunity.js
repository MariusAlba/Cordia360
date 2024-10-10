import React from 'react'
import BasicExample from '../components/navBar'
import { Container } from 'react-bootstrap'
import {Row, Image, Col, Card} from 'react-bootstrap'

const OurGlobalCommunity = () => {
  return (
    <div>
        <BasicExample />
        <Container>
         
        <Row className="aboutTop justify-content-center"    style={{ textAlign: 'center', textDecoration: 'none' }}>
        <Col  >
          
        </Col>
        <Col >
            <h3 thumbnail >Cordia® Sense Dietician</h3>
        </Col>
        <Col >
         
        </Col>
      </Row>
            
        </Container>
    </div>
  )
}

export default OurGlobalCommunity