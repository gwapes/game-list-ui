import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import gwapesIcon from '../images/grapes_icon.png';
import Header from './common/Header';

const Welcome = () => {
    return <div>
        <Header />
        <Container fluid>
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
    </div>;
}

export default Welcome;
