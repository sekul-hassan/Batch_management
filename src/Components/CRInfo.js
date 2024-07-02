import React, {Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import honey from "../Assets/Images/honey.jpg"
import HusbandHoney from "../Assets/Images/husbandHoney.jpg"

function CrInfo({semesters}) {

    const isAdmin = localStorage.getItem('isAdmin');
    return (
        <Container className="mt-3">
            {
                semesters && (
                    <Fragment>
                        <Row>
                            {
                                isAdmin ? (
                                    <Fragment>
                                        <Col sm={6} md={6} lg={6}>
                                            <h2 className="title text-center">Our cr info</h2>
                                        </Col>
                                        <Col sm={6} md={6} lg={6}>
                                            <Button variant="outline-danger" className="w-25 btn-light">Update</Button>
                                            <Button  variant="outline-success" className="w-25 btn-light mx-3">Add</Button>
                                            <Button  variant="outline-info" className="w-25 btn-light">CR list</Button>
                                        </Col>
                                    </Fragment>
                                ): (
                                    <h2 className="title text-center">Our cr info</h2>
                                )
                            }
                        </Row>
                        <Row className="mt-3">
                            <Col sm={12} md={6} lg={6}>
                                <img className="crPic" src={honey} alt=""/>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <h2 className="title2">Speech of our honorable CR ({semesters[0].mcrName})</h2>
                                <p className="description mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur cumque distinctio doloribus excepturi, explicabo in, ipsam ipsum magni nisi nulla quos reiciendis rerum. A labore natus neque nobis placeat.</p>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm={12} md={6} lg={6}>
                                <img className="crPic" src={HusbandHoney} alt=""/>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <h2 className="title2">Speech of our honorable CR (({semesters[0].fcrName}))</h2>
                                <p className="mt-3 description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt eius error iste iure laudantium minus, molestias nulla erunt doloremque eum molestias praesentium.</p>
                            </Col>
                        </Row>
                    </Fragment>
                )
            }
        </Container>
    );
}

export default CrInfo;

