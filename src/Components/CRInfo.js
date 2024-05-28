import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import honey from "../Assets/Images/honey.jpg"
import HusbandHoney from "../Assets/Images/husbandHoney.jpg"

function CrInfo(props) {
    return (
        <Container className="mt-3">
            <h2 className="title text-center">Our cr info</h2>
            <Row className="mt-3">
                <Col sm={12} md={6} lg={6}>
                    <img className="crPic" src={honey} alt=""/>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <h2 className="title2">Speech of our honorable CR (HONEY)</h2>
                    <p className="description mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur cumque distinctio doloribus excepturi, explicabo in, ipsam ipsum magni nisi nulla quos reiciendis rerum. A labore natus neque nobis placeat.</p>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={12} md={6} lg={6}>
                    <img className="crPic" src={HusbandHoney} alt=""/>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <h2 className="title2">Speech of our honorable CR (HONEY)</h2>
                    <p className="mt-3 description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt eius error iste iure laudantium minus, molestias nulla erunt doloremque eum molestias praesentium.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default CrInfo;

