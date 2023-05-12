import React, { useEffect, useState } from 'react'
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'
import Operatingtime from './Operatingtime';
import Review from './Review';



function Restaurantview() {

  const [restList, setRest] = useState([])

  // api to access data
  const getData = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => setRest(data.restaurants))

  }

  // object create for useParams
  const params = useParams()
  console.log(params.id);

  // find single restaurant data
  const singleRest = restList.find(i => i.id == params.id)
  console.log(singleRest);



  useEffect(() => {
    getData()
  }, [])



  return (
    <>
<div className='w-75  m-auto'>
        {
          singleRest ?
            (<Row>
              <Col lg={5} md={5} >
                <div className='ps-5'><img className=' container pt-5 text-center' alt="" src={singleRest.photograph} /></div>
              </Col>
  
              <Col lg={7} md={7} >
            <div className='pe-5'>
                  <ListGroup className='pt-5'>
                    <ListGroup.Item className='ps-4'><h3>{singleRest.name}</h3></ListGroup.Item>
                    <ListGroup.Item className='ps-4'>Address : <strong>{singleRest.address}</strong></ListGroup.Item>
                    <ListGroup.Item className='ps-4'>Neighborhood : <strong>{singleRest.neighborhood}</strong></ListGroup.Item>
                    <ListGroup.Item className='ps-4'>Cusine Type : <strong>{singleRest.cuisine_type}</strong></ListGroup.Item>
                    <ListGroup.Item className='ps-4'>
                      <Operatingtime workingTime={singleRest.operating_hours}></Operatingtime>
                    </ListGroup.Item>
                    <ListGroup.Item><Review reviewList={singleRest.reviews}></Review></ListGroup.Item>
                  </ListGroup>
            </div>
  
              </Col>
            </Row>) : ""
        }
</div>
    </>
  )
}

export default Restaurantview