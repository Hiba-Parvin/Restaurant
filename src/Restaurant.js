import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './Restaurant.css'
import { Link } from 'react-router-dom';

function Restaurant() {

  const [restList, setRest] = useState([])

  //api to access data
  const getData = async () => {
    const result = await fetch('./restaurants.json')
    result.json().then(data => setRest(data.restaurants))
  }

  console.log(restList);
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <Row className='ms-5'>

      {
        restList.map(rest => (
          <Col className='' lg={4} md={6} >
            
           <Link id='l1' to={`/viewRest/${rest.id}`}>
              <Card style={{ width: '20rem' }} className='mt-5 p-2 c1'>
                <Card.Img variant="top" style={{height:"450px"}} src={rest.photograph} />
                <Card.Body>
                  <Card.Title>{rest.name}</Card.Title>
                  <Card.Text>{rest.address}</Card.Text>
             
                </Card.Body>
              </Card>
           </Link>
          </Col>

        ))
      }

    </Row>
  )
}

export default Restaurant