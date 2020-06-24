import React from 'react';
import Iframe from 'react-iframe'
import './mobile.css'

function Live({ address }) {
  return (
    <div>
      <Iframe url={address}
        width="412px"
        height="250px"
        id="myId"
        className="streaming"
        display="flex"
        position="center" />
    </div >
  );
}

export default Live;