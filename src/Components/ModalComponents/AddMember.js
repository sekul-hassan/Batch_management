import React, { useState } from 'react';
import { Button, Container, Form, Modal, Row } from "react-bootstrap";

function AddMember({ show, handleShowAddMember, text }) {
    const [member, setMember] = useState({
        name: '',
        phone: '',
        email: '',
        district: '',
        profilePic: null,
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        setMember((prev) => ({
            ...prev,
            [name]: files ? files[0] : value, // Use `files[0]` for file input
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        for (const key in member) {
            formData.append(key, member[key]);
        }

        console.log('member:', member);

        // Send formData to your API
        // Example:
        // fetch('/api/endpoint', {
        //     method: 'POST',
        //     body: formData,
        // });
    };

    return (
        <Modal show={show} onHide={handleShowAddMember} className="fade carousel-fade pb-5">
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Modal.Header closeButton>
                            <Modal.Title className="title3">{text}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label>Enter name</Form.Label>
                                <Form.Control
                                    required={true}
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={member.name}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mt-2">
                                <Form.Label>Enter phone number</Form.Label>
                                <Form.Control
                                    required={true}
                                    type="tel"
                                    placeholder="Enter phone number"
                                    name="phone"
                                    value={member.phone}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label>Enter email</Form.Label>
                                <Form.Control
                                    required={true}
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={member.email}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mt-2">
                                <Form.Label>Enter home district</Form.Label>
                                <Form.Control
                                    required={true}
                                    type="text"
                                    placeholder="Enter district"
                                    name="district"
                                    value={member.district}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label>Upload a picture</Form.Label>
                                <Form.Control
                                    required={true}
                                    type="file"
                                    name="profilePic"
                                    onChange={handleInputChange} // File input handled here
                                />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="outline-danger"
                                className="btn-outline-danger w-12"
                                onClick={handleShowAddMember}
                            >
                                Close
                            </Button>
                            <Button
                                type="submit"
                                variant="outline-secondary"
                                className="btn-outline-success w-12"
                            >
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Row>
                </Form>
            </Container>
        </Modal>
    );
}

export default AddMember;
