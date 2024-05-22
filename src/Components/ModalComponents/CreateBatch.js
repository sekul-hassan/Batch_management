import React, { useState } from 'react';
import { Button, Container, Form, Modal, Row } from 'react-bootstrap';

function CreateBatch({ handleCreateBatch, createBatch }) {

    const [batch, setBatch] = useState({
        name:'',
        email:'',
        password:'',
        session:null,
        profilePic:null,
        coverPhoto:null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBatch(prev => ({...prev, [name]: value}));
        console.log(batch);
    };

    const handleSubmit = () => {

    };

    const years = Array.from({ length: 30 }, (_, index) => {
        const startYear = new Date().getFullYear() - index;
        const endYear = startYear + 1;
        return `${startYear}-${endYear.toString().slice(2)}`;
    });

    return (
        <Modal show={createBatch} onHide={handleCreateBatch} className="fade carousel-fade">
            <Container>
                <Row>
                    <Modal.Header closeButton>
                        <Modal.Title className="title3">Please complete your batch information.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Enter batch name</Form.Label>
                                <Form.Control
                                    required={true}
                                    type="text"
                                    placeholder="Batch Name"
                                    name="name"
                                    value={batch.name}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mt-2">
                                <Form.Label>Enter an email for batch</Form.Label>
                                <Form.Control
                                    required={true}
                                    type="email"
                                    placeholder="Batch email"
                                    name="email"
                                    value={batch.email}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mt-2">
                                <Form.Label>Enter password</Form.Label>
                                <Form.Control
                                    required={true}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={batch.password}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="yearSelect" className="mt-2">
                                <Form.Label>Select academic session</Form.Label>
                                <Form.Control as="select" name="session" value={batch.session} onChange={handleInputChange}>
                                    {years.map((year) => (
                                        <option name="session" key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label>Upload a profile pic</Form.Label>
                                <Form.Control
                                    required={true}
                                    type="file"
                                    name="profilePic"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label>Upload a cover photo</Form.Label>
                                <Form.Control
                                    required={true}
                                    type="file"
                                    name="coverPhoto"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" className="btn-outline-danger w-12" onClick={handleCreateBatch}>
                            Close
                        </Button>
                        <Button variant="outline-secondary" className="btn-outline-success w-12" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Row>
            </Container>
        </Modal>
    );
}

export default CreateBatch;
