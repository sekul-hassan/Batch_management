import React from 'react';
import { Form } from "react-bootstrap";
import { useFormContext } from 'react-hook-form';

function FormField({ item }) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <Form.Group className="mt-2">
            <Form.Label>{item.label}</Form.Label>
            {
                item.type === "select" ? (
                    <>
                        <Form.Control as="select" {...register(item.name, { required: item.required })} defaultValue="">
                            <option value="" disabled>Select an option</option>
                            {
                                item.option.map((option) => (
                                    <option key={option.id} value={option.value}>{option.value}</option>
                                ))
                            }
                        </Form.Control>
                        {errors[item.name] && <p className="text-danger">This field is required</p>}
                    </>
                ) : (
                    <>
                        <Form.Control
                            {...register(item.name, { required: item.required })}
                            type={item.type}
                            placeholder={item.placeholder || ''}
                        />
                        {errors[item.name] && <p className="text-danger">This field is required</p>}
                    </>
                )
            }
        </Form.Group>
    );
}

export default FormField;
