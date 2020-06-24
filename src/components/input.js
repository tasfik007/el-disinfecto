import React, { Component } from 'react';

class Mobile extends Component {
  render() {
    return (
      <div>
      <div style={{ paddingTop: '30px' }} />
      <Card style={{ width: '45rem', height: '70rem' }} className="mobile">
        <Card.Body>
          <Card.Title>
            <h1>La<br /> DisInfecto</h1>
          </Card.Title>
          <Live />
          <Card.Text>
            Live Streaming
           </Card.Text>
          <Button variant="primary">Click Here</Button>
        </Card.Body>
      </Card>
    </div >
    );
  }
}