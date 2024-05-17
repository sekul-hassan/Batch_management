import React, {Fragment, useState} from 'react';
import HomeTop from "../Components/HomeTop";
import NavBar from "../Components/NavBar";

function Home(props) {

    const [isLogin, setIsLogin] = useState(false);
    const authentication = ()=>{
        setIsLogin(!isLogin);
    }

    return (
      <Fragment>
          <NavBar authentication={authentication} isLogin={isLogin} />
          <HomeTop/>
      </Fragment>
    );
}

export default Home;
