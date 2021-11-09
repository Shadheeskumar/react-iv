import React from "react";
import ReactDOM from "react-dom";
import { Col, Row, Container } from 'react-bootstrap'

function Buttons() {
    return (
        <Container className="bt">
            <Row>
                <Col>
                <div class="col-sm-12 btn btn-info">
                    Undo Batch
                </div>
                </Col>
                <Col>
                <div class="col-sm-12 btn btn-info">
                    Assign Supplier
                </div>
                </Col>
                <Col>
                <div class="col-sm-12 btn btn-info">
                    Generate PO
                </div>
                </Col>
            </Row>
        </Container>
    );


}

export default Buttons;
