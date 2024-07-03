import React from 'react';
import { Button, Container, Form, Modal, Row } from "react-bootstrap";
import { useForm, FormProvider } from 'react-hook-form';
import FormField from "../FormField";

function ModalForm({ show, handleShow, handleSubmit, formData }) {
    const methods = useForm();

    return (
        <Modal show={show} onHide={handleShow} className="fade carousel-fade">
            <Container>
                <Row>
                    <Modal.Header closeButton>
                        <Modal.Title className="title3">Add new semester.</Modal.Title>
                    </Modal.Header>
                    <FormProvider {...methods}>
                        <Form onSubmit={methods.handleSubmit(handleSubmit)}>
                            <Modal.Body>
                                {formData && formData.map((item, index) => (
                                    <FormField key={index} item={item} />
                                ))}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="outline-danger" className="btn-outline-danger w-12" onClick={handleShow}>
                                    Close
                                </Button>
                                <Button variant="outline-secondary" type="submit" className="btn-outline-success">
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </FormProvider>
                </Row>
            </Container>
        </Modal>
    );
}

export default ModalForm;
