import React from 'react';
import {Form} from "react-bootstrap";

function FormField({label, value, handleInputChange,placeholder,type,name}) {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                required={true}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleInputChange}
            />
        </Form.Group>
    );
}

export default FormField;

