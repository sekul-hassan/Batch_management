import React from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";

function CreateBatch({handleCreateBatch,createBatch}) {

    return (
        <Modal show={true} onHide={handleCreateBatch} className="fade carousel-fade">
            <Modal.Header closeButton>
                <Modal.Title>Please complete your batch information.</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Container>
                    <Form>
                        <Row>
                           <Form.Group>
                               <Form.Label>Enter your batch name : </Form.Label>
                               <Form.Control required={true} type="text" placeholder="Name" onChange={handleCreateBatch} />
                           </Form.Group>
                        </Row>
                    </Form>
                </Container>



            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCreateBatch}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCreateBatch}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateBatch;

