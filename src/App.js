import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Assets/CSS/Custom.css';
import '../src/Assets/CSS/Global.css';
import React, {useState} from "react";
import Home from "./Pages/Home";
import {Route, Routes} from "react-router-dom";
import MemberPage from "./Pages/MemberPage";
import PermissionContext from "./Importance/PermissionContext";
import SemesterPage from "./Pages/SemesterPage";
import CoursePage from "./Pages/CoursePage";
import CourseDetails from "./Pages/CourseDetails";
import CreateLoginContext from "./Importance/CreateLoginContext";
import ModalForm from "./Components/ModalComponents/ModalForm";
import axios from "axios";
import {toast} from "react-toastify";
import Toast from "./Components/ModalComponents/Toast";

function App() {

    const [isAuthentic, setAuthentic] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = (e)=>{
        axios.post("http://localhost:5000/api/batch/login",e).then(res=>{
            if(res){
                localStorage.setItem('isLoggedIn','true');
                localStorage.setItem('isAdmin','true');
                setShowLogin(!showLogin);
                toast.success("Login is success.")
            }
        }).catch(err=>{
            if(err.response.status === 404){
                toast.error('Email or password is incorrect.');
            }
            else if(err.response.status === 400){
                toast.error('All fields are required.');
            }
            else{
                toast.error('Internal Server Error. Please try again later.');
            }
        })
    }

    const handleShowLogin = () => setShowLogin(!showLogin);
    const handleAuthentication = (e)=>{
        if(e===true){
            localStorage.setItem('isPermission',"true")
        }
        else{
            localStorage.removeItem("isPermission");
        }
        setAuthentic(!isAuthentic);
    }

    const loginData = [
        {
            label: "Enter batch email",
            type:"email",
            required: true,
            placeholder: "Batch E-mail",
            name: "email",
        },
        {
            label: "Enter batch password",
            type:"password",
            required: true,
            placeholder: "Batch password",
            name: "password",
        },
    ]

  return (
    <PermissionContext.Provider value={{handleLogin,handleAuthentication}}>
       <CreateLoginContext.Provider value={{handleShowLogin}}>
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/members" element={<MemberPage/>}/>
               <Route path="/semester" element={<SemesterPage/>}/>
               <Route path="/semester/:id" element={<CoursePage/>}/>
               <Route path="/semester/:id/:course" element={<CourseDetails/>}/>
           </Routes>
           <Toast/>
           <ModalForm show={showLogin} handleShow={handleShowLogin} handleSubmit={handleLogin} formData={loginData}/>
       </CreateLoginContext.Provider>
    </PermissionContext.Provider>
  );
}

export default App;
