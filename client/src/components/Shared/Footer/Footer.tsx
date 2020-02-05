import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.scss';

export default function Footer() {
    return (
        <Container fluid className="mt-2 footer">
            <Row>
                <Col xs="12">Footer</Col>
            </Row>
        </Container>
    );
}
