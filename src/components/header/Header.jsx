import React from 'react'
import './header.css';
import {Row, Col, Form} from 'react-bootstrap';
import art01 from '../../assets/art01.png';
import Rectangle from '../../assets/Rectangle.png';

const Header = () => {
  return (
    <div className="mt-5">
      <Row>
        <Col sm={12} md={6} lg={6}>
          <h1 className='header_heading'>Explorer and
            <span className='d-block'>Travel</span>
          </h1>
          <div className='mt-5 mb-4'>
            <span className='text_holiday_finder d-block'>Holiday Finder</span>
            <img src={Rectangle} alt="Rectangle" />
          </div>
          <div>
            <Row>
              <Col sm={6} md={6} lg={6} className="mb-4">
                <Form.Select size="lg">
                <option className='select_option_color'>Location</option>
                </Form.Select>
              </Col>
              <Col sm={6} md={6} lg={6} className="mb-4">
                <Form.Select size="lg">
                <option className='select_option_color'>Activity</option>
                </Form.Select>
              </Col>
              <Col sm={6} md={6} lg={6}>
                <Form.Select size="lg">
                <option className='select_option_color'>Grade</option>
                </Form.Select>
              </Col>
              <Col sm={6} md={6} lg={6}>
                <Form.Select size="lg">
                <option className='select_option_color'>Date</option>
                </Form.Select>
              </Col>
            </Row>
            <button className="btn_reg">Register</button>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <img src={art01} alt="art01" className="art01"/>
        </Col>
      </Row>
    </div>
  )
}

export default Header
