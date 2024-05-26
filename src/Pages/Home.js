import React, {Fragment} from 'react';
import HomeTop from "../Components/HomeTop";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import AddMember from "../Components/ModalComponents/AddMember";

function Home(props) {
    return (
      <Fragment>
          <NavBar/>
          <HomeTop/>
          <Footer/>
          <AddMember/>
      </Fragment>
    );
}

export default Home;
