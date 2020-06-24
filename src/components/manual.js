import React from 'react';
import './mobile.css'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';


// Set the configuration for your app
// TODO: Replace with your project's config object
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTODOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DBURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSGID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function update(u, l, d, r, s) {
  firebaseApp.database().ref("Test").set({
    down_btn: d,
    left_btn: l,
    right_btn: r,
    up_btn: u,
    suction: s

  });
}

function Manual() {

  const updateFwd = (e) => {
    e.preventDefault();
    // alert(`Updating Forward`)
    update(1, 0, 0, 0, 0);
    sleep(5000).then(() => {
      // Do something after the sleep!
      update(0, 0, 0, 0, 0);
    });

  }

  const updateBck = (e) => {
    e.preventDefault();
    //alert(`Updating Backward`)
    update(0, 0, 1, 0, 0);
    sleep(5000).then(() => {
      // Do something after the sleep!
      update(0, 0, 0, 0, 0);
    });
  }
  const updateLeft = (e) => {
    e.preventDefault();
    //alert(`Updating Left`)
    update(0, 1, 0, 0, 0);
    sleep(5000).then(() => {
      // Do something after the sleep!
      update(0, 0, 0, 0, 0);
    });
  }
  const updateRight = (e) => {
    e.preventDefault();
    //alert(`Updating Right`)
    update(0, 0, 0, 1, 0);
    sleep(5000).then(() => {
      // Do something after the sleep!
      update(0, 0, 0, 0, 0);
    });
  }
  const updateDi = (e) => {
    e.preventDefault();
    //alert(`Updating Di`)
    update(0, 0, 0, 0, 1);
    sleep(5000).then(() => {
      // Do something after the sleep!
      update(0, 0, 0, 0, 0);
    });
  }



  return (
    <div style={{ paddingTop: '50px', paddingLeft: '20px' }}>
      <Container>

        <Row>
          <Col></Col>
          <Col>
            <img type="button" className="fwd" src={require('./send.png')} alt="" onClick={updateFwd} />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col><img type="button" className="left" alt="" src={require('./send.png')} onClick={updateLeft} /></Col>
          <Col><img type="button" className="fwd" alt="" src={require('./video.png')} onClick={updateDi} /></Col>
          <Col><img type="button" className="right" alt="" src={require('./send.png')} onClick={updateRight} /></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col><img type="button" className="bck" alt="" src={require('./send.png')} onClick={updateBck} /></Col>
          <Col></Col>
        </Row>

      </Container>
    </div>
  );
}

export default Manual;