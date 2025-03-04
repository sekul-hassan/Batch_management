import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Modal, Row } from "react-bootstrap";

function UpdateCrInfoForm({ show, handleSowUpdate, data }) {
    const [updateData, setUpdateData] = useState({
        data,
        fcrSpeech:"",
        mcrSpeech:""
    });

    useEffect(() => {
        setUpdateData(data);
    }, [data]);

    const handleShow = () => {
        handleSowUpdate(!show);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setUpdateData((prevState) => ({
            ...prevState,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Data:', updateData);

    };

    return (
        <Modal show={show} onHide={handleShow} className="fade carousel-fade" centered>
            <Container>
                <Row>
                    <Modal.Header closeButton>
                        <Modal.Title className="title3">Update Semester Info</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <Form.Label>Beda CR Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="fcrName"
                                value={updateData.fcrName || ''}
                                onChange={handleChange}
                                placeholder="Enter FCR Name"
                            />

                            <Form.Label>Beda CR Speech</Form.Label>
                            <Form.Control
                                type="text"
                                name="fcrSpeech"
                                value={updateData.fcrName || ''}
                                onChange={handleChange}
                                placeholder="Enter FCR Name"
                            />

                            <Form.Label className="mt-2">Bedi CR Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="mcrName"
                                value={updateData.mcrName || ''}
                                onChange={handleChange}
                                placeholder="Enter MCR Name"
                            />

                            <Form.Label className="mt-2">Beda CR Photo</Form.Label>
                            <Form.Control
                                type="file"
                                name="mcrPhoto"
                                onChange={handleChange}
                            />

                            <Form.Label className="mt-2">Bedi CR Photo</Form.Label>
                            <Form.Control
                                type="file"
                                name="fcrPhoto"
                                onChange={handleChange}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="outline-danger"
                                className="btn-outline-danger w-12"
                                onClick={handleShow}
                            >
                                Close
                            </Button>
                            <Button
                                variant="outline-secondary"
                                type="submit"
                                className="btn-outline-success"
                            >
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Row>
            </Container>
        </Modal>
    );
}

export default UpdateCrInfoForm;
