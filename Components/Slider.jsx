import React from 'react'
import './Common.css'
import { Card, Carousel } from 'react-bootstrap'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'




function Slider() {
  return (
    <>
    <div className="carousal">
        <p className='feature' style={{fontSize:'40px'}}>Unlock Premium Features Now</p>
        <div id='underline'  className='d-flex align-items-center'>
        <hr style={{width:'60px'}} /> <p className='fa-2x'>✤</p>  <hr style={{width:'60px'}} />
        </div>
    </div>

    {/* Carousal  */}

    <Carousel id='carousal1'>
      <Carousel.Item className='d-flex'>
      <Card id='card'>
      <Card.Img variant="top" src={img1} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} />
      <Card.Body>
        
        <Card.Text className='carousaltext'>
          Discount On Meterials
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card id='card'>
      <Card.Img variant="top" src={img2} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} />
      <Card.Body>
        
        <Card.Text className='carousaltext' >
        Lower Interest Rates
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card id='card'>
      <Card.Img variant="top" src={img3} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} />
      <Card.Body>
        
        <Card.Text className='carousaltext' >
          Interest free Payments
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Carousel.Item>
    </Carousel>

    <div id='carousalbutton' className="d-flex flex-column align-items-center mt-4">
        <button id='btn1' className='btn mb-2'>UNLOCK NOW</button>
        <button id='btn2' className='btn mb-5'>DETAILS</button>
    </div>
    </>
  )
}

export default Slider