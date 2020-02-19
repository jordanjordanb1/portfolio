import React, { useEffect } from 'react';
import './Projects.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectItem from './ProjectItem/ProjectItem';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { setProjectsLoading, setProjectsList, setProjectsError } from '../../redux/ActionCreators';
import Project from '../../interfaces/ProjectInterface';

export default function Projects() {
    const { loading } = useSelector(state => (state as any).projects),
        { list } = useSelector(state => (state as any).projects),
        { error } = useSelector(state => (state as any).projects),
        dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProjectsLoading());

        Axios.get('/api/projects').then(({ data }) => {
            if (data.success) {
                setTimeout(() => dispatch(setProjectsList(data.projects)), 1000);
            } else if (!data.success) {
                console.error(data.err);
                dispatch(setProjectsError());
            }
        });
    }, [dispatch]);

    const loadProjects = () => {
        if (!loading && list.length && !error) {
            return list.map((project: Project) => {
                return <ProjectItem key={project._id} project={project} />;
            });
        } else if (loading && !list.length && !error) {
            return 'Loading...';
        } else if (!loading && !list.length && error) {
            return 'Error...';
        } else {
            return 'No projects';
        }
    };

    return (
        <Jumbotron fluid className="page">
            <Container fluid>
                <Row>
                    <Col
                        xs="12"
                        lg={{ span: 10, offset: 1 }}
                        className="d-flex justify-content-center mt-5 flex-wrap"
                    >
                        {loadProjects()}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
