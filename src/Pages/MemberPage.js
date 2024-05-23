import React, {Fragment} from 'react';
import Members from "../Components/Members";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";

function MemberPage(props) {
    return (
      <Fragment>
          <NavBar/>
          <GlobalBackground/>
          <Members/>
          <Footer/>
      </Fragment>
    );
}

export default MemberPage;
