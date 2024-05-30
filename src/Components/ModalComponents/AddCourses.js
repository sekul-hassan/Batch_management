import React from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";

function AddCourses({showAddCourse,handleShowAddCourse}) {

    const [courses, setCourses] = React.useState({
        title:'',
        semester:'',
        code:'',
    });

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setCourses(prev => ({...prev, [name]:value}));
    }

    return (
        <Modal show={showAddCourse} onHide={handleShowAddCourse} className="fade carousel-fade">
            <Container>
                <Row>
                    <Modal.Header closeButton>
                        <Modal.Title className="title3">Please complete add course form.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Select a semester</Form.Label>
                                <Form.Control as = "select" name="semester" onChange={handleInputChange} value={courses.semester}>
                                    <option value="1-1">1st year 1st semester</option>
                                    <option value="1-2">1st year 2nd semester</option>
                                    <option value="2-1">2nd year 1st semester</option>
                                    <option value="2-2">2nd year 2nd semester</option>
                                    <option value="3-1">3rd year 1st semester</option>
                                    <option value="3-2">3rd year 2nd semester</option>
                                    <option value="4-1">4th year 1st semester</option>
                                    <option value="4-2">4th year 2nd semester</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="mt-2">
                                <Form.Label>Add course title</Form.Label>
                                <Form.Control
                                    required={true}
                                    type="text"
                                    placeholder="CourseList title"
                                    name="title"
                                    value={courses.title}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mt-2">
                                <Form.Label>Add course code</Form.Label>
                                <Form.Control
                                    required={true}
                                    type="text"
                                    placeholder="CourseList code"
                                    name="code"
                                    value={courses.code}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" className="btn-outline-danger w-12" onClick={handleShowAddCourse}>
                            Close
                        </Button>
                        <Button variant="outline-secondary" className="btn-outline-success" onClick={()=>{}} >
                            Submit
                        </Button>
                    </Modal.Footer>
                </Row>
            </Container>
        </Modal>
    );
}

export default AddCourses;
