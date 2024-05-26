import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";
import Footer from "../Components/Footer";

function CoursePage(props) {
    return (
        <Fragment>
            <NavBar/>
            <GlobalBackground/>
            <Footer/>
        </Fragment>
    );
}

export default CoursePage;

