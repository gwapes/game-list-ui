import React from 'react';
import { Nav, Navbar, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return <div>
        <Navbar className='color-footer' variant='light' fixed='bottom' >
            <Row>
                <Col>
                    <Nav className='flex-column justify-content-left'>
                        <Nav.Link href=''>Contact Us</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <Nav className='flex-column justify-content-center'>
                        <Nav.Link href=''>Contact Us</Nav.Link>
                        <Nav.Link href=''>Contact Us</Nav.Link>
                        <Nav.Link href=''>Contact Us</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <Nav className='flex-column justify-content-right'>
                        <Nav.Link href=''>Contact Us</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Navbar>
    </div>;
};

export default Footer;
