import React, {Fragment} from 'react';
import HomeTop from "../Components/HomeTop";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Home(props) {
    return (
      <Fragment>
          <NavBar/>
          <HomeTop/>
          <Footer/>
      </Fragment>
    );
}

export default Home;
