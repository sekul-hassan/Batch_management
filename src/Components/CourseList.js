import React from 'react';
import {Button, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function CourseList(props) {
    return (
        <Container className="mt-3">
            <Row>
                <Button as={Link} to={`/semester/${"1-1"}/${"mathe"}`} variant="outline-dark" className="mt-2 title3">
                    CSE-110 ( Course title here )
                </Button>
                <Button as={Link} to={`/semester/${"1-1"}/${"mathe"}`} variant="outline-dark" className="mt-2 title3">
                    CSE-111 ( Course title here )
                </Button>
                <Button variant="outline-dark" className="mt-2 title3">CSE-111 ( Course title here )</Button>
               <Button variant="outline-dark" className="mt-2 title3">CSE-112 ( Course title here )</Button>
               <Button variant="outline-dark" className="mt-2 title3">CSE-113 ( Course title here )</Button>
               <Button variant="outline-dark" className="mt-2 title3">CSE-114 ( Course title here )</Button>
               <Button variant="outline-dark" className="mt-2 title3">CSE-115 ( Course title here )</Button>
               <Button variant="outline-dark" className="mt-2 title3">CSE-116 ( Course title here )</Button>
               <Button variant="outline-dark" className="mt-2 title3">CSE-117 ( Course title here )</Button>
            </Row>
        </Container>
    );
}

export default CourseList;

