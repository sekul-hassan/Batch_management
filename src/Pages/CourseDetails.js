import React, {Fragment, useEffect, useState} from 'react';
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";
import Course from "../Components/Course";
import Footer from "../Components/Footer";
import ModalForm from "../Components/ModalComponents/ModalForm";
import addCourseDetails from "../Components/ForData/AddCourseDetails";
import {useParams} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

function CourseDetails(props) {
    const [showAddCoursesDetails,setAddCoursesDetails] = useState(false);
    const[reload,setReload] = useState(false);
    const[courses,setCourses] = useState([]);
    const batchId = localStorage.getItem("isLoggedIn");
    const {id,course} = useParams();
    const handleAddCourseDetails = () => {setAddCoursesDetails(!showAddCoursesDetails);}
    const text = "Add Details";

    const submitAddCourseDetails = (e) => {
        const formData = new FormData();
        formData.append("data", JSON.stringify(e));
        formData.append("batchId", batchId);
        formData.append("semesterId", id);
        formData.append("title", course);
        formData.append("image", e.image);
        axios.post("http://localhost:5000/api/courseDetails/addCourseDetails",formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }).then((res)=>{
            console.log(res.status);
            setReload(!reload);
            toast.success("Course creation is successful.")
        }).catch((error)=>{
            console.log(error);
            if(error.response.status===409){
                toast.error("Title already exist.")
            }
            else if(error.response.status===404){
                toast.error("Data not found.")
            }
            else {
                toast.error("Internal server error. Please try later.")
            }
        })

    }

    useEffect(() => {
        axios.get("http://localhost:5000/api/courseDetails/getCourseDetails",{
            headers:{
                'batchid':batchId,
                'semesterid':id,
                'courseid': course,
            }
        }).then((res)=>{
            setCourses(res.data.courseDetails)
        }).catch((error)=>{
            console.log(error);
        })
    }, [batchId,id,course,reload]);


    return (
        <Fragment>
            <NavBar/>
            <GlobalBackground handleShowGlobal={handleAddCourseDetails} text={text}/>
            <ModalForm formData={addCourseDetails} show={showAddCoursesDetails} handleShow={handleAddCourseDetails} handleSubmit={submitAddCourseDetails}/>
            <Course courses={courses}/>
            <Footer/>
        </Fragment>
    );
}

export default CourseDetails;
