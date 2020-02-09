import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Navbar from './Shared/Navbar/Navbar';

const About = React.lazy(() => import('../components/About/About'));
const Projects = React.lazy(() => import('../components/Projects/Projects'));
const SelectedProject = React.lazy(() =>
    import('../components/SelectedProject/SelectedProject'),
);
const Contact = React.lazy(() => import('../components/Contact/Contact'));

export default function Routing() {
    return (
        <>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/projects/:id" component={SelectedProject} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Suspense>
        </>
    );
}