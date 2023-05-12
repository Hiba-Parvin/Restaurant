import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function Review({reviewList}) {
  return (
    <div><Accordion className='mt-2' defaultActiveKey="0" >
    <Accordion.Item eventKey="0" >
      <Accordion.Header><h6>Reviews</h6></Accordion.Header>
      <Accordion.Body>
       {
        reviewList.map(i=>
            <div>
                <h6>{i.name}</h6>
                <p>{i.date}</p>
                <p>Rating : <strong>{i.rating}</strong></p>
                <p>{i.comments}</p>
                <hr></hr>
            </div>
            
            )
       }
      </Accordion.Body>
    </Accordion.Item>
    </Accordion></div>
  )
}

export default Review