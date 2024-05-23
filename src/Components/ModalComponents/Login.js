import React, {useState} from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";

function Login({showLogin, handleShowLogin, handleLogin}) {

    const [login, setLogin] = useState({
        email:'',
        password:'',
    });

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setLogin({...login,[name]:value});
    }

    const loginSubmit = (e)=>{
        e.preventDefault();
        handleLogin(true);
        handleShowLogin();
    }

    return (
        <Modal show={showLogin} onHide={handleShowLogin} className="fade carousel-fade">
            <Container>
                <Row>
                    <Modal.Header closeButton>
                        <Modal.Title className="title3">Please complete your batch information.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Enter email</Form.Label>
                                <Form.Control
                                    required={true}
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={login.email}
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
                                    value={login.password}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" className="btn-outline-danger w-12" onClick={handleShowLogin}>
                            Close
                        </Button>
                        <Button variant="outline-secondary" className="btn-outline-success" onClick={loginSubmit} >
                            Submit
                        </Button>
                    </Modal.Footer>
                </Row>
            </Container>
        </Modal>
    );
}

export default Login;