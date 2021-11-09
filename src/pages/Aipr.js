import React from "react";
import ReactDOM from "react-dom";
import { Col, Row, Container } from 'react-bootstrap'
import Tables from '../components/Tables'
import Buttons from '../components/Buttons'
import HideShowDiv from '../components/HideShowDiv'

function Reports() {
  return (
    <div className="aipr">
      <h1 style={{ marginTop: 20 }}>Agri-Input Purchase Requests</h1>

      <Tables />
      
      <Buttons />

      <HideShowDiv />  

    </div>
  );
}

export default Reports;
