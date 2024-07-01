import React, {Fragment, useContext, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import CreateBatch from "./ModalComponents/CreateBatch";
import PermissionContext from "../Importance/PermissionContext";
import CreateLoginContext from "../Importance/CreateLoginContext";

function NavBar() {

    const {handleAuthentication} = useContext(PermissionContext);
    const{handleShowLogin} = useContext(CreateLoginContext)
    const [createBatch, setCreateBatch] = useState(false);
    const[refresh,setRefresh] = useState(false);

    const isPermission = localStorage.getItem("isPermission");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    const handleCreateBatch = () => {
        setCreateBatch(!createBatch);
    }
    const logOut = () => {
        localStorage.removeItem("isLoggedIn");
        setRefresh(!refresh);
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
                           !isPermission ? (
                               <Fragment>
                                   <Nav.Link>  <Link className="text-decoration-none navLink" to="/">JUCSE</Link></Nav.Link>
                                   <Nav.Link>  <Link className="text-decoration-none navLink" to="/">CSE29</Link></Nav.Link>
                                   <Nav.Link onClick={()=>handleAuthentication(true)}><Link className="text-decoration-none navLink" to="/">Permission</Link></Nav.Link>
                               </Fragment>
                           ):(
                               <Fragment>
                                   {
                                       !isLoggedIn ? (
                                           <Fragment>
                                               <Nav.Link onClick={handleCreateBatch}><Link className="text-decoration-none navLink" to="/">Create</Link></Nav.Link>
                                               <Nav.Link onClick={handleShowLogin}><Link className="text-decoration-none navLink" to="/">Login</Link></Nav.Link>
                                               <Nav.Link onClick={()=>handleAuthentication(false)}><Link className="text-decoration-none navLink" to="/">Return</Link></Nav.Link>
                                           </Fragment>
                                       ):(
                                           <Fragment>
                                               <Nav.Link><Link className="text-decoration-none navLink" to="/members">Members</Link></Nav.Link>
                                               <Nav.Link><Link className="text-decoration-none navLink" to="/semester">Semester</Link></Nav.Link>
                                               <Nav.Link onClick={logOut}><Link className="text-decoration-none navLink" to="/">Logout</Link></Nav.Link>
                                               <Nav.Link onClick={()=>handleAuthentication(false)}><Link className="text-decoration-none navLink" to="/">Return</Link></Nav.Link>

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
       </Fragment>
    );
}

export default NavBar;
