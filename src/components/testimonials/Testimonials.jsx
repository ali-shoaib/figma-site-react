import React from 'react'
import './testimonials.css';
import {Row, Col} from 'react-bootstrap';
import person from '../../assets/person.png';
import star1 from '../../assets/star1.png';
import plus from '../../assets/plus.png';
import ring from '../../assets/ring.png';

const Testimonials = () => {
  return (
    <div className='testimonials_section'>
      <h2 className='testimonials_heading'>Testimonials</h2>
      <Row className="align-items-center">
        <Col  sm={12} md={6} lg={6}>
          <div className='testimonials_section'>
            <div className="stars mb-4">
              <img src={star1} alt="star1" className="me-2"/>
              <img src={star1} alt="star1" className="me-2"/>
              <img src={star1} alt="star1" className="me-2"/>
              <img src={star1} alt="star1" className="me-2"/>
              <img src={star1} alt="star1" className="me-2"/>
            </div>
            <p>
              “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
            </p>
            <span className='person_edward mt-5'>Edward Newgate</span>
            <span className="founder">Founder Circle</span>
          </div>
        </Col>
        <Col  sm={12} md={6} lg={6}>
          <div className="testimonials_person position-relative">
            <img src={ring} alt="ring" className='ring_img'/>
            <img src={person} alt="person"/>
            <img src={plus} alt="plus" className='plus_img'/>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Testimonials
