import React from 'react'
import BasicExample from '../components/navBar';
import { Container } from 'react-bootstrap'
import {Row, Image, Col, Card} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListExample from '../components/Foot';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';

const DoctorRegistrationForm = () => {

    const [email, setEmail] = useState('')
    const [phonenumber, setNumber] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(email + + phonenumber)
        
        
    }   

  return (
    <div><BasicExample />
    <Container className='' style={{marginBottom: '110px'}}>
     
     <Row className="aboutTop justify-content-center"    style={{ textAlign: 'center', textDecoration: 'none' }}>
        <h3 className='mb-5'>Join the Global Community of Cordia® Clinicians</h3>
     <Col >
     <h5>1</h5>
      <b>Complete the Pre-Registration Form</b>
       <p>Fill out all required fields</p>
     </Col>
     <Col >
     <h5>2</h5>
     <b>Review Process</b>
     <p>We will review your submitted data and approve</p>
     </Col>
     <Col >
     <h5>3</h5>
     <b>Platform Listing</b>
     <p>Once approved, your profile will go live on the Cordia® platform</p>
     </Col>
   </Row>

       
        <Form>
            <h3 className='justify-content-center mb-5'>Pre-Register as a Doctor</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Full Name *</Form.Label>
            <Form.Control type="email" placeholder="Type Full Name"  value={email} onChange={ (e) => setEmail(e.target.value) }/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Phone Number *</Form.Label>
            <Form.Control type="number" placeholder="Type Phone Number" value={phonenumber} onChange={ (e) => setNumber(e.target.value) }/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email *</Form.Label>
            <Form.Control type="text" placeholder="Type email" />
        </Form.Group>

        <Form>
        <p>Gender</p>
        {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check
                inline
                label="Man"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
            />
            <Form.Check
                inline
                label="Woman"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
            />
            <Form.Check
                inline
                label="Other"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
            />
            </div>
        ))}
        </Form>

        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label> Permanent Address*</Form.Label>
            <Form.Control type="email" placeholder="Type Permanent Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Country*</Form.Label>
            <Form.Control type="email" placeholder="Type Country" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>State*</Form.Label>
            <Form.Control type="email" placeholder="Type State" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>City*</Form.Label>
            <Form.Control type="email" placeholder="Type City" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Pincode*</Form.Label>
            <Form.Control type="email" placeholder="Type Pincode" />
        </Form.Group>

        <Form>
            <p>Establishment Details*</p>
            {['radio'].map((type) => (
                    <div key={`establishment-${type}`} className="mb-4">
                    <Form.Check
                        inline
                        label="I own an establishment"
                        name="group1"
                        type={type}
                        id={`establishment-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="I visit an establishment"
                        name="group1"
                        type={type}
                        id={`establishment-${type}-2`}
                    />
                    </div>
                ))}
             </Form>

             <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Establishment Name*</Form.Label>
                <Form.Control type="email" placeholder="Type Establisment Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Establishment Address *</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Educational Qualifications with Year of Completion (e.g. MBBS in 2005) *</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

                
        <Form>
            <p>Are you a registered Dietician?*</p>
            {['radio'].map((type) => (
                    <div key={`registration-${type}`} className="mb-4">
                    <Form.Check
                        inline
                        label="Yes"
                        name="group1"
                        type={type}
                        id={`registration-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="No"
                        name="group1"
                        type={type}
                        id={`registration-${type}-2`}
                    />
                    </div>
                ))}
             </Form>

             <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Registration Number (Optional) </Form.Label>
                <Form.Control type="email" placeholder="Registration Number (Optional)" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Registration Council (Optional)</Form.Label>
                <Form.Control type="email" placeholder="Registration Council (Optional)" />
            </Form.Group><Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Registration Year (Optional)</Form.Label>
                <Form.Control type="email" placeholder="Registration Year (Optional)" />
            </Form.Group>
            

             <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Area of Specialisation *</Form.Label>
                <Form.Control type="email" placeholder="Area of Specialisation" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formGroupEmail">
                <Form.Label>Years of Experience (e.g. 2) *</Form.Label>
                <Form.Control type="email" placeholder="Years of Experience (e.g. 2)" />
            </Form.Group>

            <Form>
            <p>What services would you like to offer via Cordia® Platform?*</p>
            {['checkbox'].map((type) => (
                    <div key={`registration-${type}`} className="mb-4">
                    <Form.Check
                        inline
                        label="Diabetes Management"
                        name="group1"
                        type={type}
                        id={`registration-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="Hypertension Management"
                        name="group1"
                        type={type}
                        id={`registration-${type}-2`}
                    />
                      <Form.Check
                        inline
                        label="Obesity Management"
                        name="group1"
                        type={type}
                        id={`registration-${type}-3`}
                    />
                    <Form.Check
                        inline
                        label="Maternity Care"
                        name="group1"
                        type={type}
                        id={`registration-${type}-4`}
                    />
                    </div>
                ))}
             </Form>

    <Form.Group className="position-relative mb-3">
        <Form.Label>Identity Proof & Profile Picture - Please upload your Profile Picture and Aadhar Card/Driving License/Any Other Govt. ID *</Form.Label>
        <Form.Control className='mb-5'
          type="file"
          required
          name="file"
        //   onChange={handleChange}
        //   isInvalid={!!errors.file}
        />

    <Form.Label>Uploade Profile Picture </Form.Label>
        <Form.Control className='mb-5 '
          type="file"
          required
          name="file"
        //   onChange={handleChange}
        //   isInvalid={!!errors.file}
        />
        <Form.Control.Feedback type="invalid" tooltip>
          {/* {errors.file} */}
        </Form.Control.Feedback>
      </Form.Group>
  

      <Form.Group className="mb-5" controlId="formGroupEmail" style={{border:''}}>
                <Form.Label>How many patients do you intend to counsel using Cordia® platform in a month?*</Form.Label>
                <Form.Control type="email" placeholder="Type how many patients do you intend to counsel usine Corida in a month" />
        </Form.Group>

        <Form.Group className="position-relative mb-3">
        <Form.Check className='mb-5'
        //   required
        //   name="terms"
          label="Agree to terms and conditions"
        //   onChange={handleChange}
        //   isInvalid={!!errors.terms}
        //   feedback={errors.terms}
        //   feedbackType="invalid"
        //   id="validationFormik106"
        //   feedbackTooltip
        />
      </Form.Group>

      <Button type="submit" onClick={handleSubmit}>Submit form</Button>

           

        </Form>
        
     </Container>
     <ListExample /></div>
  )
}

export default DoctorRegistrationForm