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
import Loader from '../Shared/Loader/Loader';
import { Helmet } from 'react-helmet';

export default function Projects() {
  const { loading } = useSelector(state => (state as any).projects),
    { list } = useSelector(state => (state as any).projects),
    { error } = useSelector(state => (state as any).projects),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProjectsLoading());

    Axios.get('/api/projects').then(({ data }) => {
      if (data.success) {
        dispatch(setProjectsList(data.projects));
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
      return <Loader />;
    } else if (!loading && !list.length && error) {
      return 'Error...';
    } else if (!loading && !list.length && !error) {
      return (
        <div className="no-projects d-flex justify-content-center align-items-center">
          <h1>
            NO PROJECTS <i className="far fa-frown"></i>
          </h1>
        </div>
      );
    } else {
      return <Loader />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Projects | Full Stack Web Dev | Jordan Barbosa</title>
        <link rel="canonical" href="https://jordanbarbosa.com/projects" />
      </Helmet>
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
    </>
  );
}
