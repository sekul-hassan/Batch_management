import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function CourseList(props) {
    return (
        <Container className="mt-3">
            <Row>
               <h2 className="title2 text-center">Yours course list here.</h2>
               <Col md={6} lg={6} sm={12}>
                   <button>1st year 1st semester</button>
               </Col>
               <Col md={6} lg={6} sm={12}></Col>
            </Row>
        </Container>
    );
}

export default CourseList;

