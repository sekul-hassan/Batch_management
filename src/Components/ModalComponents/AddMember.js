import React from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";

function AddMember({showAddMember,handleShowAddMember}) {

    const[member, setMember] = React.useState({
        name:'',
        phone:'',
        email:'',
        district:'',
        profilePic:null,
    });

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setMember(prev => ({...prev, [name]:value}));
    }

    return (
        <Modal show={showAddMember} onHide={handleShowAddMember} className="fade carousel-fade pb-5">
            <Container>
                <Row>
                    <Modal.Header closeButton>
                        <Modal.Title className="title3">Please complete your batch information.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
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
                                    value={member.profilePic}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>


                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" className="btn-outline-danger w-12" onClick={handleShowAddMember}>
                            Close
                        </Button>
                        <Button variant="outline-secondary" className="btn-outline-success w-12" onClick={()=>{}}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Row>
            </Container>
        </Modal>
    );
}

export default AddMember;

