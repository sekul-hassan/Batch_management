import React, {Fragment, useState} from 'react';
import Members from "../Components/Members";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";

function MemberPage(props) {

    const [showAddMember,setShowAddMember] = useState(false);
    const handleShowGlobal = () => {setShowAddMember(!showAddMember);}
    const text = "Add Member";

    return (
      <Fragment>
          <NavBar/>
          <GlobalBackground handleShowGlobal={handleShowGlobal} show={showAddMember} text={text}/>
          <Members/>
          <Footer/>
      </Fragment>
    );
}

export default MemberPage;
