import React from 'react';
import {Button, Container, Modal, Row} from "react-bootstrap";
import GlobalForm from "./GlobalForm";


function ModalForm({show,handleShow,submitSemester,formData}) {

    return (
        <Modal show={show} onHide={handleShow} className="fade carousel-fade">
            <Container>
                <Row>
                    <Modal.Header closeButton>
                        <Modal.Title className="title3">Add new semester.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <GlobalForm formData={formData}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" className="btn-outline-danger w-12" onClick={handleShow}>
                            Close
                        </Button>
                        <Button variant="outline-secondary" className="btn-outline-success" onClick={submitSemester} >
                            Submit
                        </Button>
                    </Modal.Footer>
                </Row>
            </Container>
        </Modal>
    );
}

export default ModalForm;
