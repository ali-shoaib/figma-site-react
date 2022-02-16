import React from 'react'
import './feature.css';
import {Row, Col} from 'react-bootstrap';
import art02 from '../../assets/art02.png';
import art03 from '../../assets/art03.png';
import arrowright from '../../assets/arrow-right.png';
import ss1 from '../../assets/ss1.png';
import ss2 from '../../assets/ss2.png';
import ss3 from '../../assets/ss3.png';
import ss4 from '../../assets/ss4.png';

const Feature = () => {
  return (
    <>
    {/* Section 1 */}
      <div className='feature_section'>
        <Row className="align-items-center">
          <Col sm={12} md={6} lg={6}>
            <img src={art02} alt="art02" className='art02'/>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="feature_section_para">
              <h1 className='feature_section_heading mb-4'>A new way to explorer the
                <span className='d-block'>world</span>
              </h1>
              <p className="mb-3">
                A new way to explore the world 
                For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect 
                trip, but now, they can also let Lonely Planet Experiences lead the way
              </p>
              <button className="btn_reg">Learn More</button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Section 2 */}
      <div className='feature_section'>
        <div className='d-flex justify-content-between align-items-center mb-4'>
          <h1 className='feature_section_heading'>Featured destinations</h1>
          <span className="text_see_all">See all <img src={arrowright} alt="arrowright"/></span>
        </div>
        <div className='feature_images d-flex justify-content-between align-items-center flex-wrap'>
          <div className='position-relative'>
            <img src={ss1} alt="ss1" />
            <div className='card_content'>
              <h3>Raja Ampat</h3> 
              <span>Indonesia</span>
            </div>
          </div>
          <div className='position-relative'>
            <img src={ss2} alt="ss1" />
            <div className='card_content'>
              <h3>Fanjingshan</h3> 
              <span>China</span>
            </div>
          </div>
          <div className='position-relative'>
            <img src={ss3} alt="ss1" />
            <div className='card_content'>
              <h3>Vevey</h3> 
              <span>Switzerland</span>
            </div>
          </div>
          <div className='position-relative'>
            <img src={ss4} alt="ss1" />
            <div className='card_content'>
              <h3>Skadar</h3> 
              <span>Montenegra</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className='feature_section'>
        <Row className="align-items-center">
          <Col sm={12} md={6} lg={6}>
            <div className="feature_section_para">
              <h1 className='feature_section_heading mb-4'>Guides by Thousand
                <span className='d-block'>Sunny</span>
              </h1>
              <p className="mb-3 w-75">
                Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.
              </p>
              <button className="btn_reg">Download</button>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img src={art03} alt="art01" className='art01'/>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Feature
