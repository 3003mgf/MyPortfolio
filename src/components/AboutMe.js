import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LanguageContext } from '../context/Language';

const AboutMe = () => {

  const data = useContext(LanguageContext);

  const { tr, lS, setLS } = data;

  return (
    <div>
      <div className='about-me-main-wrapper'>
        <div className='about-me-wrapper'>
          <div className="about-me-single-wrapper">
            <h1 className="about-me-single-shadow">A</h1>
            <h1 className="about-me-single-letter">A</h1>
          </div>
          <div className="about-me-single-wrapper">
            <h1 className="about-me-single-shadow">B</h1>
            <h1 className="about-me-single-letter">B</h1>
          </div>
          <div className="about-me-single-wrapper">
            <h1 className="about-me-single-shadow">O</h1>
            <h1 className="about-me-single-letter">O</h1>
          </div>
          <div className="about-me-single-wrapper">
            <h1 className="about-me-single-shadow">U</h1>
            <h1 className="about-me-single-letter">U</h1>
          </div>
          <div className="about-me-single-wrapper">
            <h1 className="about-me-single-shadow">T</h1>
            <h1 className="about-me-single-letter">T</h1>
          </div>
          <div className="about-me-single-wrapper ms-5">
            <h1 className="about-me-single-shadow">M</h1>
            <h1 className="about-me-single-letter">M</h1>
          </div>
          <div className="about-me-single-wrapper">
            <h1 className="about-me-single-shadow">E</h1>
            <h1 className="about-me-single-letter">E</h1>
          </div>
        </div>
      </div>
      <div className='me-details py-5'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} md={6} xl={5} className='d-flex justify-content-center align-items-center'>
                <div className='img-div'></div>
            </Col>
            <Col xs={12} md={6} xl={7} className='px-5 py-5'>
              <h4>{tr[lS].aboutMeTitle}</h4>
              <br />
              <div dangerouslySetInnerHTML={{__html: tr[lS].aboutMe}} className='about-me-container'>

              </div>
            
            </Col>
          </Row>
        </Container>
      </div>
    </div> 
   );
}
 
export default AboutMe;