import React, {Fragment, useState} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import AddMember from "./ModalComponents/AddMember";

function GlobalBackground(props) {

    const [showAddMember,setShowAddMember] = useState(false);
    const handleShowAddMember = () => {
        setShowAddMember(!showAddMember);
    }

    return (
      <Fragment>
          <Container fluid="true" className="globalBackground">
              <Row className="globalBackgroundOverlay">
                  <div className="profileDiv">
                      <Button onClick={handleShowAddMember} variant="outline-light" className="addBtn btn-dark">Add Member</Button>
                      <img className="profilePic" src="https://juniv.edu/images/logo-ju-small.png" alt=""/>
                  </div>
              </Row>
          </Container>
          <AddMember showAddMember={showAddMember} handleShowAddMember={handleShowAddMember} />
      </Fragment>
    );
}

export default GlobalBackground;
