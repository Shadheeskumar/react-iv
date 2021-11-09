import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Comp from "./Comp";
import * as FaIcons from 'react-icons/fa';
import { CSVLink, CSVDownload } from "react-csv";

export class HideShowDiv extends Component {
    constructor() {
        super();
        this.state = {
            showHideComp: false
        };
        this.hideComponent = this.hideComponent.bind(this);

        this.data = [
            {
                "uuid": "uuid Test 1",
                "name": "Test",
                "file": "FILE",
                "data": [
                    {
                        "category": "P11",
                        "image": "P11",
                        "desc": "P11",
                        "quantity": "P11",
                    },
                    {
                        "category": "P12",
                        "image": "P12",
                        "desc": "P12",
                        "quantity": "P12",
                    },
                    {
                        "category": "P13",
                        "image": "P13",
                        "desc": "P13",
                        "quantity": "P13",
                    },
                    {
                        "category": "P13",
                        "image": "P13",
                        "desc": "P13",
                        "quantity": "P13",
                    },
                ]
            },
            {
                "uuid": "uuid Test 2",
                "name": "Test",
                "file": "FILE",
                "data": [
                    {
                        "category": "2",
                        "image": "2",
                        "desc": "2",
                        "quantity": "2",
                    }
                ]
            },
            {
                "uuid": "uuid Test 3",
                "name": "Test",
                "file": "FILE",
                "data": [
                    {
                        "category": "3",
                        "image": "3",
                        "desc": "3",
                        "quantity": "3",
                    }
                ]
            },
        ];
    }
    hideComponent(name, key) {
        console.log(name);
        console.log(key);
        switch (name) {
            case "showHideComp":
                this.setState({ showHideComp: !this.state.showHideComp });
                break;
            default:
                break;
        }
    }
    render() {
        const { showHideComp } = this.state;
        return (
            <div>
                <Container className="dt">
                    <Row>
                        <Col>
                            <p>Executing Agri-Input Orders</p>
                        </Col>
                        <Col>
                            <p>Batched By</p>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
                <hr />



                <Container className="dtm">
                    {this.data.map((d, index) => (
                        <div>
                            <Row className="dtmr" onClick={() => this.hideComponent("showHideComp", index)}>
                                <Col>
                                    <p>{d.uuid}</p>
                                </Col>
                                <Col>
                                    <p>{d.name}</p>
                                </Col>
                                <Col>
                                    <p>{d.file}  <CSVLink data={d.data}><FaIcons.FaDownload className="iconCol" /></CSVLink></p>
                                </Col>
                            </Row>

                            {showHideComp && <Comp dataFromParent={d.data} />}
                        </div>
                    ))}


                </Container>
            </div>
        );
    }
}


export default HideShowDiv