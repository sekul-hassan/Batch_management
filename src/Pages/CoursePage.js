import React, {Fragment, useState} from 'react';
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";
import Footer from "../Components/Footer";
import CourseList from "../Components/CourseList";
import CRInfo from "../Components/CRInfo";

function CoursePage(props) {

    const [showAddCourses,setAddCourses] = useState(false);

    const handleShowGlobal = () => {setAddCourses(!showAddCourses);}
    const text = "Add Course";

    return (
        <Fragment>
            <NavBar/>
            <GlobalBackground handleShowGlobal={handleShowGlobal} show={showAddCourses} text={text}/>
            <CourseList/>
            <CRInfo/>
            <Footer/>
        </Fragment>
    );
}

export default CoursePage;

