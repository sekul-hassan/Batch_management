import React from 'react';
import {Container, Row} from "react-bootstrap";

function Footer(props) {
    return (
        <Container fluid="true" className="mt-3 text-center">
            <Row>
               <p>
                   © 2024 <strong><a href="https://recursiveeducation.com/" target="_blank" rel="noreferrer" >RecursiveEducation</a></strong>. All rights reserved. Unauthorized duplication or distribution is prohibited.
               </p>
            </Row>
        </Container>
    );
}

export default Footer;
