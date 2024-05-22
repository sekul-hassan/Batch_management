import React from 'react';
import {Container, Row} from "react-bootstrap";

function HomeTop(props) {
    return (
        <Container fluid="true" className="topBackground">
            <Row className="topOverlay">
                <div className="contentArea">
                    <h4 className="title2 text-white my-2">Welcome to Department of Computer Science and Engineering</h4>
                    <h3 className="title text-white">Jahangirnagar University</h3>
                </div>
            </Row>
        </Container>
    );
}

export default HomeTop;
