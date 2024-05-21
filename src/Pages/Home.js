import React, {Fragment, useState} from 'react';
import HomeTop from "../Components/HomeTop";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Home(props) {

    const [isLogin, setIsLogin] = useState(false);
    const [isAuthentic, setAuthentic] = useState(false);

    const handleLogin = ()=>{
        setIsLogin(!isLogin);
    }

    const handleAuthentication = ()=>{
        setAuthentic(!isAuthentic);
    }

    return (
      <Fragment>
          <NavBar handleAuthentication={handleAuthentication} isAuthentic={isAuthentic} handleLogin={handleLogin} isLogin={isLogin} />
          <HomeTop/>
          <Footer/>
      </Fragment>
    );
}

export default Home;
