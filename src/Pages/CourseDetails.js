import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";
import Course from "../Components/Course";
import Footer from "../Components/Footer";

function CourseDetails(props) {
    return (
        <Fragment>
            <NavBar/>
            <GlobalBackground/>
            <Course/>
            <Footer/>
        </Fragment>
    );
}

export default CourseDetails;
