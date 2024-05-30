import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Assets/CSS/Custom.css';
import '../src/Assets/CSS/Global.css';
import {useState} from "react";
import Home from "./Pages/Home";
import {Route, Routes} from "react-router-dom";
import MemberPage from "./Pages/MemberPage";
import PermissionContext from "./Importance/PermissionContext";
import SemesterPage from "./Pages/SemesterPage";
import CoursePage from "./Pages/CoursePage";
import CourseDetails from "./Pages/CourseDetails";

function App() {

    const [isLogin, setIsLogin] = useState(false);
    const [isAuthentic, setAuthentic] = useState(false);

    const handleLogin = (e)=>{
        if(e===true){
            localStorage.setItem('isLoggedIn','true');
            localStorage.setItem('isAdmin','true');
        }
        else{
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('isAdmin');
        }
        setIsLogin(!isLogin);
        console.log(e);
    }

    const handleAuthentication = (e)=>{
        if(e===true){
            localStorage.setItem('isPermission',"true")
        }
        else{
            localStorage.removeItem("isPermission");
        }
        setAuthentic(!isAuthentic);
    }

  return (
    <PermissionContext.Provider value={{handleLogin,handleAuthentication}}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/members" element={<MemberPage/>}/>
            <Route path="/semester" element={<SemesterPage/>}/>
            <Route path="/semester/:id" element={<CoursePage/>}/>
            <Route path="/semester/:id/:course" element={<CourseDetails/>}/>
        </Routes>
    </PermissionContext.Provider>
  );
}

export default App;
