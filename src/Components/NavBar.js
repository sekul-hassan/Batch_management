import React, {Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavBar({handleAuthentication,isAuthentic,handleLogin,isLogin}) {
    return (
        <Navbar sticky="top" expand="sm" className="bg-body-tertiary navBody">
            <Navbar.Brand href="#home"><span className="logo boldTitle text-white">VENTINOVS</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto"/>
                <Nav>
                    <Link className="text-decoration-none" to="/"><Nav.Link className="navLink">Home</Nav.Link></Link>

                    {
                        !isAuthentic ? (
                            <Fragment>
                                <Link className="text-decoration-none" to="/"><Nav.Link className="navLink">JUCSE</Nav.Link></Link>
                                <Link className="text-decoration-none" to="/"><Nav.Link className="navLink">CSE29</Nav.Link></Link>
                                <Link className="text-decoration-none" to="/"><Nav.Link onClick={handleAuthentication} className="navLink">Authentication</Nav.Link></Link>
                            </Fragment>
                        ):(
                            <Fragment>
                                {
                                    !isLogin ? (
                                        <Fragment>
                                            <Link className="text-decoration-none" to="/"><Nav.Link className="navLink">Create</Nav.Link></Link>
                                            <Link className="text-decoration-none" to="/"><Nav.Link onClick={handleLogin} className="navLink">Login</Nav.Link></Link>
                                            <Link className="text-decoration-none" to="/"><Nav.Link onClick={handleAuthentication} className="navLink">Return</Nav.Link></Link>
                                        </Fragment>
                                    ):(
                                        <Fragment>
                                            <Link className="text-decoration-none" to="/"><Nav.Link className="navLink">Members</Nav.Link></Link>
                                            <Link className="text-decoration-none" to="/"><Nav.Link className="navLink">Courses</Nav.Link></Link>
                                            <Link className="text-decoration-none" to="/"><Nav.Link onClick={handleLogin} className="navLink">Logout</Nav.Link></Link>
                                            <Link className="text-decoration-none" to="/"><Nav.Link onClick={handleAuthentication} className="navLink">Return</Nav.Link></Link>

                                        </Fragment>
                                    )
                                }
                            </Fragment>
                        )
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
