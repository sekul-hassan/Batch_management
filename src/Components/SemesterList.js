import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function SemesterList(props) {
    return (
        <Container className="mt-3">
            <h2 className="title text-center">Yours course list here.</h2>
            <Row className="mt-2">
                <Col md={6} lg={6} sm={12}>
                    <Button as={Link} to={`/semester/${"2-1"}`} variant="outline-dark" className="mt-2 w-100 btn-light title3">1st year 1st semester</Button>
                    <Button as={Link} to={`/semester/${"2-1"}`} variant="outline-dark" className="mt-2 w-100 btn-light title3">1st year 2nd semester</Button>
                    <Button as={Link} to={`/semester/${"2-1"}`} variant="outline-dark" className="mt-2 w-100 btn-light title3">2nd year 1st semester</Button>
                    <Button as={Link} to={`/semester/${"2-1"}`} variant="outline-dark" className="mt-2 w-100 btn-light title3">2nd year 2nd semester</Button>
                </Col>
                <Col md={6} lg={6} sm={12}>
                    <Button as={Link} to={`/semester/${"2-1"}`} variant="outline-dark" className="mt-2 w-100 btn-light title3">1st year 1st semester</Button>
                    <Button as={Link} to={`/semester/${"2-1"}`} variant="outline-dark" className="mt-2 w-100 btn-light title3">1st year 2nd semester</Button>
                    <Button as={Link} to={`/semester/${"2-1"}`} variant="outline-dark" className="mt-2 w-100 btn-light title3">2nd year 1st semester</Button>
                    <Button as={Link} to={`/semester/${"2-1"}`} variant="outline-dark" className="mt-2 w-100 btn-light title3">2nd year 2nd semester</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default SemesterList;

