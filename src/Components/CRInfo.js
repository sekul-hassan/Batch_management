import React, {Fragment, useEffect, useState} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";

import UpdateCRInfoForm from "./ModalComponents/UpdateCRInfoForm";

function CrInfo({semesters}) {
    const [semester, setSemester] = useState(null);
    const [data,setData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showCRUpdateModal, setShowCRUpdateModal] = useState(false);
    const [update,setUpdate] = useState(false);
    const [showUpdate,setShowUpdate] = useState(false);

    const isAdmin = localStorage.getItem('isAdmin');

    useEffect(() => {
        setSemester(semesters[0]);
    }, [semesters]);

    const showCRList = (e) => {
        if(e==='update'){
            setUpdate(true);
            setShowModal(true);
        }
        else{
            setShowModal(true);
        }
    };

    const handleShowUpdateCR = ()=>{
        setShowCRUpdateModal(!showCRUpdateModal);
        setShowUpdate(true)
    }

    const hideModal = () => {
        setShowModal(false);
        setUpdate(false);
        setShowUpdate(false)
    };

    const handleCRInfo = (e) => {
        console.log(e);
        if(update) {
            setData(e);
            handleShowUpdateCR();

        }
        else setSemester(e);
    }

    return (
        <Container className="mt-3">
            {
                semester && (
                    <Fragment>
                        <Row>
                            {
                                isAdmin ? (
                                    <Fragment>
                                        <Col sm={6} md={6} lg={6}>
                                            <h2 className="title text-center">Our CR Info</h2>
                                        </Col>
                                        <Col sm={6} md={6} lg={6}>
                                            <Button onClick={()=>showCRList("update")} variant="outline-danger" className="w-25 btn-light mx-3">Update</Button>
                                            <Button onClick={showCRList} variant="outline-info" className="w-25 btn-light">CR List</Button>
                                        </Col>
                                    </Fragment>
                                ) : (
                                    <h2 className="title text-center">Our CR Info</h2>
                                )
                            }
                        </Row>
                        <Row className="mt-3">
                            <Col sm={12} md={6} lg={6}>
                                <img className="crPic" src={semester.mcrPhoto} alt=""/>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <h2 className="title2">Speech of our honorable CR ({semester.mcrName})</h2>
                                <p className="description mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur cumque distinctio doloribus excepturi, explicabo in, ipsam ipsum magni nisi nulla quos reiciendis rerum. A labore natus neque nobis placeat.</p>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm={12} md={6} lg={6}>
                                <img className="crPic" src={semester.fcrPhoto} alt=""/>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <h2 className="title2">Speech of our honorable CR ({semester.fcrName})</h2>
                                <p className="mt-3 description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt eius error iste iure laudantium minus, molestias nulla, rerum praesentium doloremque eum molestias praesentium.</p>
                            </Col>
                        </Row>
                    </Fragment>
                )
            }

            {/* Modal for Semester List */}
            <Modal show={showModal} onHide={hideModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="subTitle">CR's of those semesters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {semesters.length > 0 ? (
                        semesters.map((sem, index) => (
                            <Button
                                onClick={() => handleCRInfo(sem)} // Corrected arrow function
                                variant="outline-dark"
                                className="mt-2 w-100 btn-light title3"
                                key={index}
                            >
                                {sem.semester}
                            </Button>
                        ))
                    ) : (
                        <Button variant="outline-dark" className="mt-2 w-100 btn-light title3">
                            Not Found
                        </Button>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {
                showUpdate && (
                    <UpdateCRInfoForm show={showUpdate} handleSowUpdate={setShowUpdate} data={data} />
                )
            }

        </Container>
    );
}

export default CrInfo;
