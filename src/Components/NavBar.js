import React, {Fragment, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import CreateBatch from "./ModalComponents/CreateBatch";
import Login from "./ModalComponents/Login";

function NavBar({handleAuthentication,isAuthentic,handleLogin,isLogin}) {

    const [createBatch, setCreateBatch] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleCreateBatch = () => {
        setCreateBatch(!createBatch);
    }

    const handleShowLogin = () => {
        setShowLogin(!showLogin);
    }


    return (
       <Fragment>
           <Navbar sticky="top" expand="md" className="bg-body-tertiary navBody">
               <Navbar.Brand href="#home"><span className="logo boldTitle text-white">VENTINOVS</span></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="me-auto"/>
                   <Nav>
                       <Nav.Link>  <Link className="text-decoration-none navLink" to="/">Home</Link></Nav.Link>

                       {
                           !isAuthentic ? (
                               <Fragment>
                                   <Nav.Link>  <Link className="text-decoration-none navLink" to="/">JUCSE</Link></Nav.Link>
                                   <Nav.Link>  <Link className="text-decoration-none navLink" to="/">CSE29</Link></Nav.Link>
                                   <Nav.Link onClick={handleAuthentication}><Link className="text-decoration-none navLink" to="/">Permission</Link></Nav.Link>
                               </Fragment>
                           ):(
                               <Fragment>
                                   {
                                       !isLogin ? (
                                           <Fragment>
                                               <Nav.Link onClick={handleCreateBatch}><Link className="text-decoration-none navLink" to="/">Create</Link></Nav.Link>
                                               <Nav.Link onClick={handleShowLogin}><Link className="text-decoration-none navLink" to="/">Login</Link></Nav.Link>
                                               <Nav.Link onClick={handleAuthentication}><Link className="text-decoration-none navLink" to="/">Return</Link></Nav.Link>
                                           </Fragment>
                                       ):(
                                           <Fragment>
                                               <Nav.Link><Link className="text-decoration-none navLink" to="/members">Members</Link></Nav.Link>
                                               <Nav.Link><Link className="text-decoration-none navLink" to="/">Courses</Link></Nav.Link>
                                               <Nav.Link onClick={handleLogin}><Link className="text-decoration-none navLink" to="/">Logout</Link></Nav.Link>
                                               <Nav.Link onClick={handleAuthentication}><Link className="text-decoration-none navLink" to="/">Return</Link></Nav.Link>

                                           </Fragment>
                                       )
                                   }
                               </Fragment>
                           )
                       }

                   </Nav>
               </Navbar.Collapse>
           </Navbar>

           <CreateBatch createBatch={createBatch} handleCreateBatch={handleCreateBatch} />
           <Login handleShowLogin={handleShowLogin} showLogin={showLogin} handleLogin={handleLogin} />

       </Fragment>
    );
}

export default NavBar;
