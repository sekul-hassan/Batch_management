import React, {Fragment, useEffect, useState} from 'react';
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";
import Footer from "../Components/Footer";
import SemesterList from "../Components/SemesterList";
import CRInfo from "../Components/CRInfo";
import ModalForm from "../Components/ModalComponents/ModalForm";
import axios from "axios";
import AddSemester from "../Components/ForData/AddSemester";
import {toast} from "react-toastify";


function SemesterPage(props) {

    const [showSemester,setShowSemester] = useState(false);
    const[semesters, setSemesters] = useState([]);
    const batchId = localStorage.getItem('isLoggedIn');
    const handleShowSemester = () => {setShowSemester(!showSemester);}
    const text = "Semester";

    const submitSemester = (e) => {
        const formData = new FormData();
        formData.append("data", JSON.stringify(e));
        formData.append("batchId", batchId);
        formData.append('mcrPhoto', e.mcrPhoto);
        formData.append("fcrPhoto", e.fcrPhoto);

        axios.post("http://localhost:5000/api/semester/addSemester", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then((res) => {
            console.log(res.status===201);
            toast.success("New semester creation is successful.");
        }).catch((err) => {
            if(err.response && err.response.status === 404) {
                toast.error("Batch not found.");
            }
            else if(err.response && err.response.status === 400) {
                toast.error("All fields are required.");
            }
            else if(err.response && err.response.status === 409) {
                toast.error("This semester already exist.");
            }
           else{
                toast.error("Internal Server Error. Please try again later.");
            }
            console.log(err);
        });

    }

    useEffect(() => {
        axios.get("http://localhost:5000/api/semester/getSemesters",{
            headers:{
                "batchid":batchId,
            }
        }).then((res) => {
            const sortedSemesters = res.data.sort((a, b) => {
                const semesterA = a.semester.toLowerCase();
                const semesterB = b.semester.toLowerCase();
                if (semesterA < semesterB) {
                    return -1;
                }
                if (semesterA > semesterB) {
                    return 1;
                }
                return 0;
            });
            setSemesters(sortedSemesters);
        }).catch((err) => {
            // Handle error
            console.error("Error fetching semesters:", err);
        });
    }, [batchId]);

    return (
        <Fragment>
            <NavBar/>
            <GlobalBackground handleShowGlobal={handleShowSemester} text={text}/>
            <SemesterList semesters={semesters}/>
            <ModalForm show={showSemester} handleShow={handleShowSemester} handleSubmit={submitSemester} formData={AddSemester}/>
            <CRInfo semesters={semesters[0]}/>
            <Footer/>
        </Fragment>
    );
}

export default SemesterPage;

