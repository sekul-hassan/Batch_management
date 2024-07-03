import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Assets/CSS/Custom.css';
import '../src/Assets/CSS/Global.css';
import React, { useState } from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import MemberPage from "./Pages/MemberPage";
import PermissionContext from "./Importance/PermissionContext";
import SemesterPage from "./Pages/SemesterPage";
import CoursePage from "./Pages/CoursePage";
import CourseDetails from "./Pages/CourseDetails";
import CreateLoginContext from "./Importance/CreateLoginContext";
import ModalForm from "./Components/ModalComponents/ModalForm";
import axios from "axios";
import Toast from "./Components/ModalComponents/Toast";
import createBatchForm from "./Components/ForData/CreateBatchForm";
import loginData from "./Components/ForData/LoginFormData";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [isAuthentic, setAuthentic] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showCreateBatch, setShowCreateBatch] = useState(false);

    const handleLogin = async (e) => {
        try {
            const res = await axios.post("http://localhost:5000/api/batch/login", e);

            localStorage.setItem('isLoggedIn', res.data.batch.id);
            localStorage.setItem('isAdmin', 'true');
            setShowLogin(false);
            toast.success("Login is successful.");
        } catch (err) {
            if (err.response.status === 404) {
                toast.error('Email or password is incorrect.');
            } else if (err.response.status === 400) {
                toast.error('All fields are required.');
            } else {
                toast.error('Internal Server Error. Please try again later.');
            }
        }
    }

    const handleCreateBatch = async (e) => {
        try {
            const formData = new FormData();
            formData.append('data', JSON.stringify(e));
            formData.append('profilePic', e.profilePic);
            formData.append('coverPic', e.coverPic);

            const response = await axios.post('http://localhost:5000/api/batch/createBatch', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log(response.status);
            toast.success('Successfully created batch');
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error('Batch already exists with this email.');
            } else if (error.response && error.response.status === 400) {
                toast.error('Fill all the fields.');
            } else {
                toast.error('Internal Server Error. Please try again later.');
            }
        }
    }

    const handleShowLogin = () => setShowLogin(!showLogin);
    const handleShowCreateBatch = () => setShowCreateBatch(!showCreateBatch);
    const handleAuthentication = (e) => {
        if (e === true) {
            localStorage.setItem('isPermission', "true")
        } else {
            localStorage.removeItem("isPermission");
        }
        setAuthentic(!isAuthentic);
    }

    return (
        <PermissionContext.Provider value={{ handleLogin, handleAuthentication }}>
            <CreateLoginContext.Provider value={{ handleShowLogin, handleShowCreateBatch }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/members" element={<MemberPage />} />
                    <Route path="/semester" element={<SemesterPage />} />
                    <Route path="/semester/:id" element={<CoursePage />} />
                    <Route path="/semester/:id/:course" element={<CourseDetails />} />
                </Routes>
                <ModalForm show={showLogin} handleShow={handleShowLogin} handleSubmit={handleLogin} formData={loginData} />
                <ModalForm show={showCreateBatch} handleShow={handleShowCreateBatch} handleSubmit={handleCreateBatch} formData={createBatchForm} />
                <Toast />
            </CreateLoginContext.Provider>
        </PermissionContext.Provider>
    );
}

export default App;
