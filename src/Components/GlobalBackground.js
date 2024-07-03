import React, {Fragment} from 'react';
import {Button, Container, Row} from "react-bootstrap";


function GlobalBackground({handleShowGlobal,text}) {

    return (
      <Fragment>
          <Container fluid="true" className="globalBackground">
              <Row className="globalBackgroundOverlay">
                  <div className="profileDiv">
                      <Button onClick={handleShowGlobal} variant="outline-dark" className="addBtn btn-light title3">{text}</Button>
                      <img className="profilePic" src="https://juniv.edu/images/logo-ju-small.png" alt=""/>
                  </div>
              </Row>
          </Container>
      </Fragment>
    );
}

export default GlobalBackground;
