import React from 'react'
import './trending.css';
import trend1 from '../../assets/trend1.png';
import trend2 from '../../assets/trend2.png';
import trend3 from '../../assets/trend3.png';
import trend4 from '../../assets/trend4.png';
import arrowright from '../../assets/arrow-right.png';

const Article = () => {
  return (
    <div className='trending_section'>
      <div className='d-flex justify-content-between align-items-center mb-4'>
            <h1 className='trending_section_heading'>Trending Stories</h1>
            <span className="text_see_all">See all <img src={arrowright} alt="arrowright"/></span>
          </div>
          <div className='d-flex justify-content-between align-items-center flex-wrap'>
            <div className='trending_card'>
              <img src={trend1} alt="ss1" />
              <h2 className='mt-3'>The many benefits of  
                  taking a healing holiday
              </h2>
              <p className='mt-3'>‘Helaing holidays’ are on the rise 
                  tohelp maximise your health and happines...
              </p>
              <span>Read more</span>
            </div>
            <div className='trending_card'>
              <img src={trend2} alt="ss1"/>
              <h2 className='mt-3'>The many benefits of  
                  taking a healing holiday
              </h2>
              <p className='mt-3'>‘Helaing holidays’ are on the rise 
                  tohelp maximise your health and happines...
              </p>
              <span>Read more</span>
            </div>
            <div className='trending_card'>
              <img src={trend3} alt="ss1" />
              <h2 className='mt-3'>The many benefits of  
                  taking a healing holiday
              </h2>
              <p className='mt-3'>‘Helaing holidays’ are on the rise 
                  tohelp maximise your health and happines...
              </p>
              <span>Read more</span>
            </div>
            <div className='trending_card'>
              <img src={trend4} alt="ss1" />
              <h2 className='mt-3'>The many benefits of  
                  taking a healing holiday
              </h2>
              <p className='mt-3'>‘Helaing holidays’ are on the rise 
                  tohelp maximise your health and happines...
              </p>
              <span>Read more</span>
            </div>
      </div>
    </div>
  )
}

export default Article
