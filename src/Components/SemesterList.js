import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function SemesterList({semesters}) {
    return (
        <Container className="mt-3">
            <h2 className="title text-center">Yours course list here.</h2>
            <Row className="mt-2">
                {
                    semesters && semesters.map((semester, index) => (
                        <Col md={6} lg={6} sm={12}>
                            <Button as={Link} to={`/semester/${semester.id}`} variant="outline-dark" className="mt-2 w-100 btn-light title3">{semester.semester}</Button>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default SemesterList;

