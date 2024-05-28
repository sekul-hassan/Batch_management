import React, {Fragment, useState} from 'react';
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";
import Footer from "../Components/Footer";
import SemesterList from "../Components/SemesterList";
import CRInfo from "../Components/CRInfo";

function SemesterPage(props) {

    const [showAddCourses,setAddCourses] = useState(false);

    const handleShowGlobal = () => {setAddCourses(!showAddCourses);}
    const text = "Semester";

    return (
        <Fragment>
            <NavBar/>
            <GlobalBackground handleShowGlobal={handleShowGlobal} show={showAddCourses} text={text}/>
            <SemesterList/>
            <CRInfo/>
            <Footer/>
        </Fragment>
    );
}

export default SemesterPage;

