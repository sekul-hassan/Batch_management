import React, {Fragment} from 'react';
import Members from "../Components/Members";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

function MemberPage(props) {
    return (
      <Fragment>
          <NavBar/>
          <Members/>
          <Footer/>
      </Fragment>
    );
}

export default MemberPage;
