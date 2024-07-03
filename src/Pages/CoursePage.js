import React, {Fragment, useState} from 'react';
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";
import CourseList from "../Components/CourseList";
import Footer from "../Components/Footer";
import ModalForm from "../Components/ModalComponents/ModalForm";
import addCourse from "../Components/ForData/AddCourse";

function CoursePage(props) {

    const [showAddCourses,setAddCourses] = useState(false);
    const text = "Add Course";
    const handleShowGlobal = () => {setAddCourses(!showAddCourses);}

    const submitAddCourse = (e) => {
        console.log(e);
    }

    return (
       <Fragment>
           <NavBar/>
           <GlobalBackground handleShowGlobal={handleShowGlobal} text={text}/>
           <ModalForm show={showAddCourses} formData={addCourse} handleShow={handleShowGlobal} handleSubmit={submitAddCourse} />
           <CourseList/>
           <Footer/>
       </Fragment>
    );
}

export default CoursePage;

