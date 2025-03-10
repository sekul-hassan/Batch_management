import React from 'react';
import { Form } from "react-bootstrap";
import { useFormContext } from 'react-hook-form';

function FormField({ item ,value}) {
    const { register, formState: { errors }, setValue } = useFormContext();
    console.log("Value " + value)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setValue(item.name, file);
    };

    return (
        <Form.Group className="mt-2">
            <Form.Label>{item.label}</Form.Label>
            {
                item.type === "select" ? (
                    <>
                        <Form.Control as="select" {...register(item.name, { required: item.required })} >
                            {
                                item.option.map((option) => (
                                    <option key={option.id} value={option.value}>{option.value}</option>
                                ))
                            }
                        </Form.Control>
                        {errors[item.name] && <p className="text-danger">This field is required</p>}
                    </>
                ) : (
                    item.type === "file" ? (
                        <>
                            <Form.Control
                                type="file"
                                onChange={handleFileChange}
                                ref={register(item.name, { required: item.required })}
                            />
                            {errors[item.name] && <p className="text-danger">This field is required</p>}
                        </>
                    ) : (
                        <>
                            <Form.Control
                                {...register(item.name, { required: item.required })}
                                type={item.type}
                                placeholder={item.placeholder || ''}
                                value={value}
                            />
                            {errors[item.name] && <p className="text-danger">This field is required</p>}
                        </>
                    )
                )
            }
        </Form.Group>
    );
}

export default FormField;
