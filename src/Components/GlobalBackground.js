import React, {Fragment} from 'react';
import {Button, Container, Row} from "react-bootstrap";


function GlobalBackground({handleShowGlobal,text}) {

    return (
      <Fragment>
          <Container fluid="true" className="globalBackground">
              <Row className="globalBackgroundOverlay">
                  <div className="profileDiv">
                      <Button onClick={handleShowGlobal} variant="outline-dark" className="addBtn btn-light title3">{text}</Button>
                      <img className="profilePic" src="https://juniv.edu/images/logo-ju-small.png" alt=""/>
                  </div>
              </Row>
          </Container>
          {/*{*/}
          {/*    text === "Add Member" ? <AddMember showAddMember={show} handleShowAddMember={handleShowGlobal} />:*/}
          {/*        text === "Semester" ?  <ModalForm showAddCourse={show} handleShowAddCourse={handleShowGlobal}/>:*/}
          {/*            text === "Add Course" ? <ModalForm showAddCourse={show} handleShowAddCourse={handleShowGlobal}/>:""*/}
          {/*}*/}


      </Fragment>
    );
}

export default GlobalBackground;
