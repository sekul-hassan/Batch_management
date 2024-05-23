import React from 'react';
import { Button, Col, Container, Row, Table } from "react-bootstrap";

function Members(props) {

    const isAdmin = localStorage.getItem('isAdmin');

    return (
        <Container style={{ overflowX: 'auto' }}>
            <Table striped hover bordered hoverColor="gray">
                <thead>
                <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Home D.</th>
                    <th>Profile</th>
                    {isAdmin === 'true' && (
                        <th>Action</th>
                    )}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>SEKUL</td>
                    <td>01824340471</td>
                    <td>sakul.stu2019@gmail.com</td>
                    <td>Mymenshingh</td>
                    <td></td>
                    {isAdmin === 'true' && (
                        <td>
                            <Container>
                                <Row>
                                    <Col md={6} sm={6} lg={6}>
                                        <Button>Delete</Button>
                                    </Col>
                                    <Col md={6} sm={6} lg={6}>
                                        <Button>Update</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </td>
                    )}
                </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Members;
