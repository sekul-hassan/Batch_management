import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from "axios";
import { Slide, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../Importance/Loading";
import { Formik } from 'formik';

function CreateBatch({ handleCreateBatch, createBatch }) {
    const [loading, setLoading] = useState(false);
    const years = Array.from({ length: 30 }, (_, index) => {
        const startYear = new Date().getFullYear() - index;
        const endYear = startYear + 1;
        return `${startYear}-${endYear.toString().slice(2)}`;
    });

    const initialValues = {
        name: '',
        email: '',
        password: '',
        session: years[0],
        profilePic: null,
        coverPhoto: null,
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('data', JSON.stringify(values));
            formData.append('profilePic', values.profilePic);
            formData.append('coverPic', values.coverPhoto);

            const response = await axios.post('http://localhost:5000/api/batch/createBatch', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log(response.status === 200);
            setLoading(false);
            toast.success('Successfully created batch');

        } catch (error) {
            setLoading(false);
            if (error.response && error.response.status === 409) {
                toast.error('Batch already exists with this email.');
            } else if (error.response && error.response.status === 400) {
                toast.error('Fill all the fields.');
            } else {
                toast.error('Internal Server Error. Please try again later.');
            }
        }
        setSubmitting(false);
    };

    return (
        <Modal show={createBatch} onHide={handleCreateBatch} className="fade carousel-fade">
            <Modal.Header closeButton>
                <Modal.Title className="title3">Please complete your batch information.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    {({
                          values,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          setFieldValue,
                          isSubmitting,
                      }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Enter batch name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Batch Name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mt-2">
                                <Form.Label>Enter an email for batch</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Batch email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mt-2">
                                <Form.Label>Enter password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="yearSelect" className="mt-2">
                                <Form.Label>Select academic session</Form.Label>
                                <Form.Control as="select" name="session" value={values.session} onChange={handleChange} onBlur={handleBlur}>
                                    {years.map((year) => (
                                        <option name="session" key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="mt-2">
                                <Form.Label>Upload a profile pic</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="profilePic"
                                    onChange={(event) => {
                                        setFieldValue("profilePic", event.currentTarget.files[0]);
                                    }}
                                    onBlur={handleBlur}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mt-2">
                                <Form.Label>Upload a cover photo</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="coverPhoto"
                                    onChange={(event) => {
                                        setFieldValue("coverPhoto", event.currentTarget.files[0]);
                                    }}
                                    onBlur={handleBlur}
                                    required
                                />
                            </Form.Group>

                            <Modal.Footer>
                                <Button variant="outline-danger" className="btn-outline-danger w-12" onClick={handleCreateBatch}>
                                    Close
                                </Button>
                                <Button variant="outline-secondary" className="btn-outline-success w-12" type="submit" disabled={isSubmitting || loading}>
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
            {loading && <Loading />}
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                draggable
                progress={undefined}
                transition={Slide}
                toastClassName="toastCustom"
            />
        </Modal>
    );
}

export default CreateBatch;
