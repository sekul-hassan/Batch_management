import React from 'react';
import {Container, Form, Row} from "react-bootstrap";
import FormField from "../FormField";

function GlobalForm({ formData }) {

    return (
      <Container>
         <Row>
             <Form>
                 {formData && formData.map((item, index) => (
                     <FormField key={index} item={item} />
                 ))}
             </Form>
         </Row>
      </Container>
    );
}

export default GlobalForm;
