import React, {Fragment, useState} from 'react';
import HomeTop from "../Components/HomeTop";
import NavBar from "../Components/NavBar";

function Home(props) {

    const [isAuthentic, setIsAuthentic] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const authentication = ()=>{
        setIsAuthentic(!isAuthentic);
    }
    const handleLogin = ()=>{
        setIsLogin(!isLogin);
    }

    return (
      <Fragment>
          <NavBar authentication={authentication} isAuthentic={isAuthentic} handleLogin={handleLogin} isLogin={isLogin} />
          <HomeTop/>
      </Fragment>
    );
}

export default Home;
