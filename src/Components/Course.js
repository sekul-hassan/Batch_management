import React from 'react';
import { Container, Row } from "react-bootstrap";

function Course({ courses }) {

    const getFileExtension = (url) => {
        return url.split('.').pop().split(/[#?]/)[0];
    }

    return (
        <Container className="mt-2">
            {
                courses && courses.map((course, idx) => {
                    const fileExtension = getFileExtension(course.image);
                    return (
                        <Row key={idx}>
                            <h3 className="title text-center mt-3">{course.description}</h3>
                            {
                                fileExtension === 'pdf' || fileExtension === 'doc' || fileExtension === 'docx' || fileExtension === 'ppt' ? (
                                    <iframe
                                        src={course.image}
                                        title="Document Viewer"
                                        width="95%"
                                        height="750px"
                                        className="mt-3"
                                    />
                                ) : (
                                    <img className="crPic mt-3" src={course.image} alt=""/>
                                )
                            }
                        </Row>
                    );
                })
            }
        </Container>
    );
}

export default Course;
