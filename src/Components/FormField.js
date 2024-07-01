import React from 'react';
import { Form } from "react-bootstrap";

function FormField({ item }) {
    return (
        <Form.Group className="mt-2">
            <Form.Label>{item.label}</Form.Label>
            {
                item.type === "select" ? (
                    <Form.Control as="select" onChange={item.inputChange} name={item.name} defaultValue="">
                        <option value={item.value} disabled>Select an option</option>
                        {
                            item.option.map((option) => (
                                <option key={option.id} value={option.value}>{option.value}</option>
                            ))
                        }
                    </Form.Control>
                ) : (
                    <Form.Control
                        required
                        type={item.type}
                        placeholder={item.placeholder || ''}
                        name={item.name}
                        onChange={item.inputChange}
                    />
                )
            }
        </Form.Group>
    );
}

export default FormField;
