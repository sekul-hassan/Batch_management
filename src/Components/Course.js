import React from 'react';
import { Container, Row } from "react-bootstrap";
import ct from "../Assets/Images/ct.jpg";
import labUrl from "../Assets/Images/report.pdf";

function Course(props) {

    return (
        <Container className="mt-3">
            <Row>
                <h3 className="title text-center">ct-1</h3>
                <img className="crPic mt-3" src={ct} alt=""/>
                <h3 className="title text-center mt-3">Note from labib</h3>
                <iframe
                    src={labUrl}
                    title="PDF Viewer"
                    width="95%"
                    height="750px"
                    className="mt-3"
                />
            </Row>
        </Container>
    );
}

export default Course;
