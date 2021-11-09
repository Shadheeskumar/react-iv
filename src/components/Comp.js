import React, { Component, useState } from "react";
import { Col, Row, Container } from 'react-bootstrap'

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import Modal from "react-modal";

function Comp(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Container className="dtm2">
        <Row className="dtmrHead">
          <Col>
            <p>Agri Input Category</p>
          </Col>
          <Col>
            <p>Product Image</p>
          </Col>
          <Col>
            <p>Product Description</p>
          </Col>
          <Col>
            <p>Order Quantity</p>
          </Col>
          <Col className="ce">
          </Col>
        </Row>
        {props.dataFromParent.map((d, index) => (
          <div key={index}>
            <Row className="dtmr2">
              <Col>
                <p>{d.category}</p>
              </Col>
              <Col>
                <p>{d.image}</p>
              </Col>
              <Col>
                <p>{d.desc}</p>
              </Col>
              <Col>
                <p>{d.quantity}</p>
              </Col>
              <Col className="ce">
                <FaIcons.FaEdit onClick={toggleModal} />
                <Modal
                  isOpen={isOpen}
                  onRequestClose={toggleModal}
                  contentLabel="Product Info"
                >
                  <div>
                    <h1>Product Info</h1>
                    <p>Category: {d.category}</p>
                    <p>Description: {d.desc}</p>
                    <p>Quantity: {d.quantity}</p>
                  </div>
                  <button onClick={toggleModal}>Close modal</button>
                </Modal>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Comp;