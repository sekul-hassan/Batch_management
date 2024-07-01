import React, {Fragment, useState} from 'react';
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";
import Footer from "../Components/Footer";
import SemesterList from "../Components/SemesterList";
import CRInfo from "../Components/CRInfo";
import ModalForm from "../Components/ModalComponents/ModalForm";
import axios from "axios";


function SemesterPage(props) {

    /// batchId will find local storage when i login
    const[semester, setSemester] = useState({
        semester:'',
        mcrName:'',
        fcrName:'',
        batchId:1,
        mcrPhoto:null,
        fcrPhoto:null
    });
    const [showSemester,setShowSemester] = useState(false);

    const handleShowSemester = () => {setShowSemester(!showSemester);}
    const text = "Semester";

    const inputChange = (e) => {
        const { name, type, value, files } = e.target;

        if (type === 'file') {
            setSemester((prevState) => ({
                ...prevState,
                [name]: files[0]
            }));
        } else {
            setSemester((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const submitSemester = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("data", JSON.stringify(semester)); // Convert the data object to a JSON string
        formData.append('mcrPhoto', semester.mcrPhoto);
        formData.append("fcrPhoto", semester.fcrPhoto);

        axios.post("http://localhost:5000/api/semester/addSemester", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
        console.log(semester);
    }

    const AddSemester = [
        {
            label: "Select a semester",
            type:"select",
            name: "semester",
            inputChange: inputChange,
            value: semester.name,
            option:[
                {id:1, value: "1st year 1st semester"},
                {id:2, value: "1st year 2nd semester"},
                {id:3, value: "2st year 1st semester"},
                {id:4, value: "2st year 2nd semester"},
                {id:5, value: "3rd year 1st semester"},
                {id:6, value: "3rd year 2nd semester"},
                {id:7, value: "4th year 1st semester"},
                {id:8, value: "4th year 2nd semester"},
            ]
        },
        {
            label: "CR name (male)",
            type:"text",
            required: true,
            placeholder: "Beda CR",
            name: "mcrName",
            inputChange: inputChange,
            value: semester.mcrName,
        },
        {
            label: "CR name (female)",
            type:"text",
            required: true,
            placeholder: "Bedi CR",
            name: "fcrName",
            inputChange: inputChange,
            value: semester.fcrName
        },
        {
            label: "CR photo (male)",
            type:"file",
            required: true,
            placeholder: "Beda CR",
            name: "mcrPhoto",
            inputChange: inputChange,
            value: semester.mcrPhoto,
        },
        {
            label: "CR photo (female)",
            type:"file",
            required: true,
            placeholder: "Bedi CR",
            name: "fcrPhoto",
            inputChange: inputChange,
            value: semester.fcrPhoto,
        },

    ]

    return (
        <Fragment>
            <NavBar/>
            <GlobalBackground handleShowGlobal={handleShowSemester} text={text}/>
            <SemesterList/>
            <ModalForm show={showSemester} handleShow={handleShowSemester} handleSubmit={submitSemester} formData={AddSemester}/>
            <CRInfo/>
            <Footer/>
        </Fragment>
    );
}

export default SemesterPage;

