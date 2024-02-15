import React from 'react'
import './Common.css'
import { Col, Row } from 'react-bootstrap'
import member from '../Assets/membership.jpg'
import { Link } from 'react-router-dom'
import Slider from './Slider'


function Home() {
  return (
    <>
{/* Links */}

<div className='links'>
        <ul className="d-flex align-items-center justify-content-center list-unstyled">
          <li>Home</li>
          <li>Dash board</li>
          <li>Products</li>
          <li>Transaction</li>
          <li>Journal</li>
        </ul>
        <div className="text-center">
        <i class="fa-solid fa-id-card-clip fa-2x "></i>
        <p>Joseph lazer</p>
        </div>
      </div>

    <div className="container">
      <h4>New Arrival</h4>
      <Row id='row'>
      <Col>
        <p className='join' style={{fontSize:'13px',fontWeight:'bold'}}>JOIN TODAY</p><p className='slash'></p>
        <div className='display-none align-items-center justify-content-center'>
        <img id='imglogo'  src={member} alt="frame" width={'70%'} height={'420px'} />
        </div>
      
      <div>
        <Link id='button' to={'/site'} className='btn btn-light text-decoration-none text-primary mb-5 '>JOIN NOW</Link>
      </div>

      </Col>
      <Col >
      <Slider/>
      </Col>
    </Row>
    </div>

    </>
  )
}

export default Home