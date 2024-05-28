import React, {Fragment, useState} from 'react';
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";
import CourseList from "../Components/CourseList";
import Footer from "../Components/Footer";

function CoursePage(props) {

    const [showAddCourses,setAddCourses] = useState(false);

    const handleShowGlobal = () => {setAddCourses(!showAddCourses);}
    const text = "Add Course";

    return (
       <Fragment>
           <NavBar/>
           <GlobalBackground handleShowGlobal={handleShowGlobal} show={showAddCourses} text={text}/>
           <CourseList/>
           <Footer/>
       </Fragment>
    );
}

export default CoursePage;

