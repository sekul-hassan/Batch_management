import React, {Fragment} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import AddMember from "./ModalComponents/AddMember";
import AddCourses from "./ModalComponents/AddCourses";

function GlobalBackground({handleShowGlobal,text,show}) {

    return (
      <Fragment>
          <Container fluid="true" className="globalBackground">
              <Row className="globalBackgroundOverlay">
                  <div className="profileDiv">
                      <Button onClick={handleShowGlobal} variant="outline-light" className="addBtn btn-dark">{text}</Button>
                      <img className="profilePic" src="https://juniv.edu/images/logo-ju-small.png" alt=""/>
                  </div>
              </Row>
          </Container>
          {
              text === "Add Member" ? <AddMember showAddMember={show} handleShowAddMember={handleShowGlobal} />:
                  text === "Add Course" ?  <AddCourses showAddCourse={show}  handleShowAddCourse={handleShowGlobal}/>:""
          }


      </Fragment>
    );
}

export default GlobalBackground;
