import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './mobile.css'
import Live from './live';
import Manual from './manual';

function Mobile() {

  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Streaming starting at: ${name}`)
  }

  return (
    <div>
      <div style={{ paddingTop: '30px' }} />
      <Card style={{ width: '45rem', height: '70rem' }} className="mobile">
        <Card.Body>
          <Card.Title>
            <h1>El<br /> DisInfecto</h1>
          </Card.Title>

          <Live address={name} />
          <Card.Text>
            Live Streaming
           </Card.Text>

          <form onSubmit={handleSubmit}>
            <label>
              Address:
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <input type="submit" value="Start Streaming" />
          </form>

          <Manual />
        </Card.Body>
      </Card>
    </div >
  );

}

export default Mobile;