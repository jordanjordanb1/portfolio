import React from 'react';
import './Projects.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { projects } from './projects_list';
import ProjectItem from './ProjectItem/ProjectItem';

export default function Projects() {
    return (
        <Jumbotron fluid>
            <Container fluid>
                <Row>
                    <Col
                        xs="12"
                        lg={{ span: 10, offset: 1 }}
                        className="d-flex justify-content-center mt-5"
                        style={{ flexWrap: 'wrap' }}
                    >
                        {projects.map(project => (
                            <ProjectItem key={project.id} project={project} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
