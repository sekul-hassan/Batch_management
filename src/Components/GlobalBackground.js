import React from 'react';
import {Container, Row} from "react-bootstrap";

function GlobalBackground(props) {
    return (
       <Container fluid="true" className="globalBackground">
           <Row className="globalBackgroundOverlay">
               <div className="profileDiv">
                   <img className="profilePic" src="https://juniv.edu/images/logo-ju-small.png" alt=""/>
               </div>
           </Row>
       </Container>
    );
}

export default GlobalBackground;
