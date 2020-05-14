import React from 'react';
import './Home.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import config from '../../config';
import { Helmet } from 'react-helmet';
import Analytics from '../../utils/analytics/Analytics';

export default function Home() {
  const handleClick = (e: any) => {
    const dataUrl = e.currentTarget.getAttribute('data-title');

    if (dataUrl) {
      Analytics.onClick(dataUrl);
    }
  };

  return (
    <>
      <Helmet>
        <title>Home | Full Stack Web Dev | Jordan Barbosa</title>
        <link rel="canonical" href="https://jordanbarbosa.com/" />
      </Helmet>
      <Jumbotron
        fluid
        className="home-jumbotron d-flex justify-content-center align-items-center page"
      >
        <div className="item-container">
          <div className="hi-box text-left">
            <h1>Hi,</h1>
          </div>
          <div className="intro-box text-left">
            <h1>I'm Jordan, </h1>
            <h1>a web developer</h1>
            <Button
              as={Link}
              to={{
                pathname: '/contact',
                state: {
                  animation: 'slide-up',
                },
              }}
              className="quick-links mt-2 mr-2 p-2"
              data-title="Contact Me Button"
              onClick={handleClick}
            >
              CONTACT ME
            </Button>
            <Button
              // @ts-ignore
              target="_blank"
              href={`${config.getStatic()}/resume/resume.pdf`}
              className="quick-links mt-2 mr-2 p-2 d-sm-none"
              data-title="Resume Button - Home Page"
              onClick={handleClick}
            >
              RESUME
            </Button>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}
