import React, { ReactElement } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import SelectedProject from './components/SelectedProject/SelectedProject';
import Contact from './components/Contact/Contact';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar/Navbar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TrackedRoute from './hoc/analytics/Tracker';

export default function App() {
  return (
    <>
      <Navbar />
      <Route
        render={({ location }) => (
          <TransitionGroup
            component={null}
            childFactory={(child): ReactElement<any> =>
              React.cloneElement(child, {
                classNames: location.state ? (location.state as any).animation : 'slide-down',
              })
            }
          >
            <CSSTransition key={location.pathname} timeout={750} mountOnEnter unmountOnExit>
              <Switch location={location}>
                <TrackedRoute exact path="/" component={Home} />
                <TrackedRoute path="/about" component={About} />
                <TrackedRoute exact path="/projects" component={Projects} />
                <TrackedRoute path="/projects/:id" component={SelectedProject} />
                <TrackedRoute path="/contact" component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </>
  );
}
