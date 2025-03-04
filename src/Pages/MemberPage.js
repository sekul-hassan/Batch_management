import React, {Fragment, useState} from 'react';
import Members from "../Components/Members";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import GlobalBackground from "../Components/GlobalBackground";
import AddMember from "../Components/ModalComponents/AddMember";

function MemberPage(props) {

    const [showAddMember, setShowAddMember] = useState(false);

    const handleShowAddMember = () => {setShowAddMember(!showAddMember);}

    const text = "Add Member";
    const formTitle = "Enter member info";

    return (
      <Fragment>
          <NavBar/>
          <GlobalBackground handleShowGlobal={handleShowAddMember} text={text}/>
          <Members/>
          <AddMember show={showAddMember} handleShowAddMember={handleShowAddMember} text={formTitle}/>
          <Footer/>
      </Fragment>
    );
}

export default MemberPage;
