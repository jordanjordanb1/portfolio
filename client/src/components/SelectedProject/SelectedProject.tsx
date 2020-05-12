import React from 'react';
import './SelectedProject.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useLocation } from 'react-router';
import Project from '../../interfaces/ProjectInterface';
import config from '../../config';
import { Helmet } from 'react-helmet';

interface State {
  project: Project;
}

export default function SelectedProject() {
  const location = useLocation(),
    { _id, name, desc, url, github, technology, isHeroku }: any =
      (location.state as State).project || '';

  return (
    <>
      <Helmet>
        <title>{name} | Projects | Jordan Barbosa</title>
      </Helmet>
      <Jumbotron fluid className="page d-flex justify-content-center align-items-center">
        <Container className="mt-4 selected">
          <Row>
            <Col
              xs="12"
              md={{ span: 10, offset: 1 }}
              lg={{ span: 6, offset: 3 }}
              className="d-flex justify-content-center selected-image"
            >
              <Image fluid src={`${config.getUrl()}/images/projects/${_id}.png`} />
            </Col>
          </Row>

          <Row>
            <Col
              xs="12"
              md={{ span: 10, offset: 1 }}
              lg={{ span: 6, offset: 3 }}
              className="selected-body"
            >
              <Row>
                <Col className="mt-4 text-center selected-title">
                  <h1>{name}</h1>
                </Col>
              </Row>

              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>

              <Row>
                <Col>
                  <h6>Description:</h6>
                  <p>{desc}</p>
                </Col>
              </Row>

              <Row>
                <Col xs="auto">
                  <h6>Technologies used:</h6>
                  <div className="d-flex flex-wrap justify-content-between">
                    {technology.map((item: string) => (
                      <span key={item} className="mr-2 mb-2 selected-tech-item">
                        {item}
                      </span>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs="12">
                  {isHeroku ? (
                    <Alert variant="warning">
                      <i className="fas fa-info-circle"></i>{' '}
                      <span className="font-weight-bold">NOTE</span>: This is a heroku app, it may
                      take long to load!
                    </Alert>
                  ) : (
                    ''
                  )}

                  <ButtonGroup className="selected-actions">
                    <Button href={github}>
                      <i className="fab fa-github mr-1"></i> Code
                    </Button>
                    <Button href={url}>
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Visit
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}
