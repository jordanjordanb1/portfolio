import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Routing.scss';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import SelectedProject from '../components/SelectedProject/SelectedProject';
import Contact from '../components/Contact/Contact';

export default function Routing() {
    return (
        <>
            <Navbar />
            <Route
                render={({ location }) => (
                    <TransitionGroup
                        component={null}
                        childFactory={(child): ReactElement<any> =>
                            React.cloneElement(child, {
                                classNames: location.state
                                    ? (location.state as any).animation
                                    : 'slide-down',
                            })
                        }
                    >
                        <CSSTransition
                            key={location.pathname}
                            timeout={750}
                            mountOnEnter
                            unmountOnExit
                        >
                            <Switch location={location}>
                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                                <Route exact path="/projects" component={Projects} />
                                <Route path="/projects/:id" component={SelectedProject} />
                                <Route path="/contact" component={Contact} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            />
        </>
    );
}
