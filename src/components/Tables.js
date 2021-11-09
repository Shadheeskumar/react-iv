import React from "react";
import ReactDOM from "react-dom";
import { Col, Row, Container } from 'react-bootstrap'

function Tables() {
    return (
        <Container>
            <Row>
                <Col className="t">
                    <Row>
                        <Col>
                            <div className="n1">
                                <p>
                                    1
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="tt">Pending</Col>
                    </Row>
                </Col>
                <Col className="t">
                    <Row>
                        <Col>
                            <div className="n2">
                                <p>
                                    2
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="tt" >Executing</Col>
                    </Row>
                </Col>
                <Col className="t">
                    <Row>
                        <Col>
                            <div className="n3">
                                <p>
                                    3
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="tt">Executed</Col>
                    </Row>
                </Col>
                <Col className="t">
                    <Row>
                        <Col>
                            <div className="n4">
                                <p>
                                    4
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="tt">Completed</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );


}

export default Tables;
