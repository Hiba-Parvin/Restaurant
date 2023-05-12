import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function Operatingtime({ workingTime }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}  size="sm">
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>Monday : {workingTime.Monday}</ListGroup.Item>
            <ListGroup.Item>Tuesday : {workingTime.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday : {workingTime.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thursday : {workingTime.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday : {workingTime.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday : {workingTime.Saturday}</ListGroup.Item>
            <ListGroup.Item>Sunday : {workingTime.Sunday}</ListGroup.Item>

          </ListGroup>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default Operatingtime