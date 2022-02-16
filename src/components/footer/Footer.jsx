import React from 'react'
import './footer.css';
import {Row, Col} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import ellipse from '../../assets/ellipse.png';
import vector from '../../assets/Vector.png';
import vector01 from '../../assets/Vector(1).png';
import vector03 from '../../assets/Vector(3).png';
import vector04 from '../../assets/Vector(4).png';

const Footer = () => {
  return (
    <>
        <Row>
          <Col sm={6} md={4} lg={4}>
            <div className="footer_links_logo">
              <img src={ellipse} alt="ellipse" />
              <img src={logo} alt="logo" className='orange_logo'/>
            </div>
            <div>
              <p className='footer_para'>
                Plan and book your perfect trip with 
                expert advice, travel tips destination
                information from us.
              </p>
            </div>
            <div>
              <p className='footer_para'>
                ©2020 Thousand Sunny. All rights reserved
              </p>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <p className="destinations">Destinations</p>
            <div className='countries'>
              <p>Africa</p>
              <p>Antartica</p>
              <p>Asia</p>
              <p>America</p>
              <p>Europe</p>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <p className="destinations">Shop</p>
            <div className='countries'>
              <p>Destination Guides</p>
              <p>Pictorial & Gifts</p>
              <p>Special offers</p>
              <p>Delivery Times</p>
              <p>FAQs</p>
            </div>
          </Col>
          <Col sm={6} md={4} lg={2}>
          <p className="destinations">Interests</p>
            <div className='countries'>
              <p>Adventure Travel</p>
              <p>Art And Culture</p>
              <p>Wildlife And Nature</p>
              <p>Family Holidays</p>
              <p>Food And Drinks</p>
            </div>
          </Col>
        </Row>
        <hr/>
        <div className='footer_icons mt-4 mb-4'>
          <img src={vector} alt="vector"/>
          <img src={vector01} alt="vector01"/>
          <img src={vector03} alt="vector03" style={{width: '22px'}}/>
          <img src={vector04} alt="vector04"/>
        </div>
    </>
  )
}

export default Footer
