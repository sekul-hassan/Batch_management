import React, {Fragment, useState} from 'react';
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";
import Course from "../Components/Course";
import Footer from "../Components/Footer";

function CourseDetails(props) {

    const [showAddCoursesDetails,setAddCoursesDetails] = useState(false);

    const handleShowGlobal = () => {setAddCoursesDetails(!showAddCoursesDetails);}
    const text = "Add Details";

    return (
        <Fragment>
            <NavBar/>
            <GlobalBackground handleShowGlobal={handleShowGlobal} show={showAddCoursesDetails} text={text}/>
            <Course/>
            <Footer/>
        </Fragment>
    );
}

export default CourseDetails;
