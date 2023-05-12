import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


function Restview() {

  const [restviewList, setRestview] = useState([])

  //api to access data
  const getData = async () => {
    const result = await fetch('./restaurants.json')
    result.json().then(data=>setRestview(data.restaurants))
  }


  

  //object creation for useParams

  const params = useParams();
  console.log(params.id);

  console.log(restviewList);
  useEffect(() => {
    getData()
  }, [])

  // const singleRest = restList.find(i => i.id == params.id)
  // console.log(singleRest);



  return (
    <div>
      {/* <Row> */}
        {/* <Col lg={6} md={6}>

        </Col>
        <Col lg={6} md={6}>

        </Col>
      </Row> */}
    </div>
  )
}

export default Restview