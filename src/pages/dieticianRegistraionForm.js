import React from 'react'
import BasicExample from '../components/navBar';
import { Container } from 'react-bootstrap'
import {Row, Image, Col, Card} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListExample from '../components/Foot';

import Button from 'react-bootstrap/Button';





const DieticianRegistraionForm = () => {
  return (
    <div>
        <BasicExample />
        <Container className='' style={{marginBottom: '110px'}}>
         
         <Row className="aboutTop justify-content-center"    style={{ textAlign: 'center', textDecoration: 'none' }}>
         <Col  >
           <Image src="https://impro.usercontent.one/appid/oneComWsb/domain/cordia360.com/media/cordia360.com/onewebmedia/Cordia%20Logo%20Last%20One%7D.png?etag=%2233898-667954dc%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=102%2B105" thumbnail />
         </Col>
         <Col >
             <h3 thumbnail >Cordia® Sense Dietician</h3>
         </Col>
         <Col >
           <Image src="https://impro.usercontent.one/appid/oneComWsb/domain/cordia360.com/media/cordia360.com/onewebmedia/Group%2024780___serialized1.png?etag=W%2F%22a47e-66ed5389%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=62%2B109" thumbnail />
         </Col>
       </Row>
{/* 
            <InputGroup className="mb-3">
                <InputGroup.Text>First and last name</InputGroup.Text>
                <Form.Control aria-label="First name" />
                <Form.Control aria-label="Last name" />
            </InputGroup> */}
           
            <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Full Name *</Form.Label>
                <Form.Control type="email" placeholder="Type Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Phone Number *</Form.Label>
                <Form.Control type="email" placeholder="Type Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" placeholder="Type email" />
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

          <Button type="submit">Submit form</Button>

               

            </Form>
            
         </Container>
         <ListExample />
    </div>
  )
}

export default DieticianRegistraionForm;