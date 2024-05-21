import React from 'react';
import {Button, Modal} from "react-bootstrap";

function CreateBatch({handleCreateBatch,createBatch}) {

    return (
        <Modal show={createBatch} onHide={handleCreateBatch} className="fade carousel-fade">
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
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

