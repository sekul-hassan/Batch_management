import React from 'react';
import {Container, Form, Row} from "react-bootstrap";
import FormField from "../FormField";
import { useForm } from 'react-hook-form';

function GlobalForm({ formData }) {
    const { register, reset } = useForm();
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
