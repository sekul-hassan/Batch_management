import React, {Fragment, useState} from 'react';
import HomeTop from "../Components/HomeTop";
import NavBar from "../Components/NavBar";

function Home(props) {

    const [isLogin, setIsLogin] = useState(true);
    function handleLogin() {
        setIsLogin(!isLogin);
    }

    return (
      <Fragment>
          <NavBar handleLogin={handleLogin} isLogin={isLogin} />
          <HomeTop/>
      </Fragment>
    );
}

export default Home;
