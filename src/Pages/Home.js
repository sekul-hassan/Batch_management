import React, {Fragment, useState} from 'react';
import HomeTop from "../Components/HomeTop";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Home(props) {

    const [isLogin, setIsLogin] = useState(false);
    const [isAuthentic, setAuthentic] = useState(false);

    const handleLogin = (e)=>{
        if(e===true){
            localStorage.setItem('isLoggedIn','true');
        }
        else{
            localStorage.removeItem('isLoggedIn');
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
      <Fragment>
          <NavBar handleAuthentication={handleAuthentication} handleLogin={handleLogin} isLogin={isLogin} />
          <HomeTop/>
          <Footer/>
      </Fragment>
    );
}

export default Home;
