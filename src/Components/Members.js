import React from 'react';
import { Button,Container, Table } from "react-bootstrap";

function Members(props) {

    const isAdmin = localStorage.getItem('isAdmin');

    return (
        <Container fluid="true" className="overflow-x-auto mt-2 px-4">
            <Table className="boxWidth" striped bordered hover variant="dark">
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
                            <Button variant="outline-danger" className="w-12 mx-1">Delete</Button>
                            <Button variant="outline-light" className="w-12">Update</Button>
                        </td>
                    )}
                </tr>
                <tr>
                    <td>2</td>
                    <td>XYZ</td>
                    <td>01824340471</td>
                    <td>XYZ.stu2019@gmail.com</td>
                    <td>Mymenshingh</td>
                    <td></td>
                    {isAdmin === 'true' && (
                        <td>
                            <Button variant="outline-danger" className="w-12 mx-1">Delete</Button>
                            <Button variant="outline-light" className="w-12">Update</Button>
                        </td>
                    )}
                </tr>
                <tr>
                    <td>3</td>
                    <td>ABC</td>
                    <td>01824340471</td>
                    <td>ABC.stu2019@gmail.com</td>
                    <td>Mymenshingh</td>
                    <td></td>
                    {isAdmin === 'true' && (
                        <td>
                            <Button variant="outline-danger" className="w-12 mx-1">Delete</Button>
                            <Button variant="outline-light" className="w-12">Update</Button>
                        </td>
                    )}
                </tr>
                <tr>
                    <td>4</td>
                    <td>CED</td>
                    <td>01824340471</td>
                    <td>CDE.stu2019@gmail.com</td>
                    <td>Mymenshingh</td>
                    <td></td>
                    {isAdmin === 'true' && (
                        <td>
                            <Button variant="outline-danger" className="w-12 mx-1">Delete</Button>
                            <Button variant="outline-light" className="w-12">Update</Button>
                        </td>
                    )}
                </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Members;
