import React, {useEffect, useState} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function CourseList({reload}) {
    const[courses,setCourses] = useState(null);
    const batchId = localStorage.getItem("isLoggedIn")
    const {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:5000/api/course/allCourse",{
            headers: {
                "batchid": batchId,
                "semesterId": id,
            }
        }).then((res) => {
            setCourses(res.data.course);
        }).catch((err) => {
            console.error(err.response.status);
        });
    }, [batchId, id,reload]);

    return (
        <Container className="mt-3">
            <Row>
                {
                    courses && courses.map((course,idx)=>(
                        <Button as={Link} to={`/semester/${id}/${course.id}`} variant="outline-dark" className="mt-2 title3">
                            {course.title} <span className="text-uppercase">( {course.code} )</span>
                        </Button>

                    ))
                }
            </Row>
        </Container>
    );
}

export default CourseList;

