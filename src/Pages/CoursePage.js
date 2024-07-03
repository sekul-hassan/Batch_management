import React, {Fragment, useState} from 'react';
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";
import CourseList from "../Components/CourseList";
import Footer from "../Components/Footer";
import ModalForm from "../Components/ModalComponents/ModalForm";
import addCourse from "../Components/ForData/AddCourse";
import {useParams} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

function CoursePage(props) {

    const [showAddCourses,setAddCourses] = useState(false);
    const text = "Add Course";
    const[reload,setReload] = useState(false)
    const batchId = localStorage.getItem("isLoggedIn")
    const {id} = useParams();
    const handleShowGlobal = () => {setAddCourses(!showAddCourses);}

    const submitAddCourse = (e) => {
        const course = {
            ...e,
            batchId: batchId,
            semesterId: id,
        }
       axios.post("http://localhost:5000/api/course/addCourse",course).then((res)=>{
           console.log(res.status===201)
           setReload(!reload);
           toast.success("Course added success.")
       }).catch((err)=>{
           console.log(err.response.status);
           if(err.response.status===500){
               toast.error("Internal server error. Please try later.")
           }else{
               toast.error("This course already exist.")
           }
       })
    }

    return (
       <Fragment>
           <NavBar/>
           <GlobalBackground handleShowGlobal={handleShowGlobal} text={text}/>
           <ModalForm show={showAddCourses} formData={addCourse} handleShow={handleShowGlobal} handleSubmit={submitAddCourse} />
           <CourseList reload={reload}/>
           <Footer/>
       </Fragment>
    );
}

export default CoursePage;

