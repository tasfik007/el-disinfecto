import React from 'react';
import './App.css'

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mobile from './components/mobile'


function App() {

  return (
    <div >

      <Container>
        <Row>
          <Col></Col>
          <Col className="fix"><Mobile /></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
