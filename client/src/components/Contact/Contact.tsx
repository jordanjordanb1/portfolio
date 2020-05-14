import React from 'react';
import './Contact.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from './ContactForm';
import { Helmet } from 'react-helmet';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Full Stack Web Dev | Jordan Barbosa</title>
        <link rel="canonical" href="https://jordanbarbosa.com/contact" />
      </Helmet>
      <Jumbotron fluid className="page">
        <Container fluid>
          <Row>
            <Col
              xs="12"
              md={{ span: 8, offset: 2 }}
              lg={{ span: 4, offset: 4 }}
              className="contact mt-3 mt-md-0"
            >
              <Row>
                <Col className="text-center">
                  <h1>Contact me</h1>
                </Col>
              </Row>

              <hr />

              <Row noGutters>
                <Col xs="12" md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                  <ContactForm />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}
