import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import gwapesLogo from '../../images/gwapes_logo.png';

const Header = () => {
    return <div>
        <Navbar bg='dark' variant='dark' expand='false' >
            <Navbar.Brand href='#home' style={{paddingLeft: '10px'}} >
                <img
                    alt=''
                    src={gwapesLogo}
                    width='30'
                    height='30'
                    className='d-inline-block align-top'
                />{'  '}
                Gwapes' List Builder
            </Navbar.Brand>
            <Navbar.Toggle style={{marginRight: '10px'}}/>
            <Navbar.Collapse>
                <Nav className='ms-auto'>
                    <Nav.Link href='#fake'>Fake Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>;
}

export default Header;
