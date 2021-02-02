import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';


class Header extends React.Component {
    render() {
        return (
            <Navbar expand="lg" fixed='top' className='navbar-transparent navbar-color-on-scroll py-4'>


                <Navbar.Brand href="#/" style={{ color: 'black', position: 'relative', left: '80px', fontSize: '2.5rem' }}>Jade Luo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto pr-5" style={{ mixBlendMode: 'overlay' }}>
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#3dart">3D Art</Nav.Link>
                        <Nav.Link href="#2dart">2D Art</Nav.Link>
                        <Nav.Link href="#team">Team Project</Nav.Link>
                        <Nav.Link href="#link" disabled={true}>Resume</Nav.Link>
                        <Nav.Link href="#link" disabled={true}>Contact</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown" disabled={true}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>

            </Navbar >
        )
    }
}

export default Header;