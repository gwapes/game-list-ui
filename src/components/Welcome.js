import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import gwapesIcon from '../images/grapes_icon.png';
import Header from './common/Header';
import Footer from './common/Footer';

const Welcome = () => {
    return <div>
        <Header />
        <Container style={{paddingTop: '20px', paddingBottom: '20px'}}  fluid>
            <Row>
                <Col></Col>
                <Col xs={4}>
                    <Card className='text-center'>
                        <Card.Img variant='top' src={gwapesIcon} />
                        <Card.Body>
                            <Card.Title>Welcome to the list builder!</Card.Title>
                            <Card.Text>
                                This site is currently under construction.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        <Footer />
    </div>;
}

export default Welcome;
