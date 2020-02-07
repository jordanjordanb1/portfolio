import React from 'react';
import './Home.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Home() {
    return (
        <Jumbotron
            fluid
            className="home-jumbotron d-flex justify-content-center align-items-center"
        >
            <div className="item-container">
                <div className="hi-box text-left">
                    <h1>Hi,</h1>
                </div>
                <div className="intro-box text-left">
                    <h1>I'm Jordan, </h1>
                    <h1>a web developer</h1>
                </div>
            </div>
        </Jumbotron>
    );
}
