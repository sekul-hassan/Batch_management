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
<<<<<<< HEAD
          {
              text === "Add Member" ? <AddMember showAddMember={show} handleShowAddMember={handleShowGlobal} />:
                  text === "Semester" ?  <AddCourses showAddCourse={show}  handleShowAddCourse={handleShowGlobal}/>:
                      text === "Add Course" ? <AddCourses showAddCourse={show}  handleShowAddCourse={handleShowGlobal}/>:
                        text === "Add Details" ? <AddCourses showAddCourse={show}  handleShowAddCourse={handleShowGlobal}/>:""
          }
=======
          {/*{*/}
          {/*    text === "Add Member" ? <AddMember showAddMember={show} handleShowAddMember={handleShowGlobal} />:*/}
          {/*        text === "Semester" ?  <ModalForm showAddCourse={show} handleShowAddCourse={handleShowGlobal}/>:*/}
          {/*            text === "Add Course" ? <ModalForm showAddCourse={show} handleShowAddCourse={handleShowGlobal}/>:""*/}
          {/*}*/}
>>>>>>> e52eab1bd306b5460586e853227a0646be761476


      </Fragment>
    );
}

export default GlobalBackground;
