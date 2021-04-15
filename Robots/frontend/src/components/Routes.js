import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AllRobots from './AllRobots';
import SingleRobot from './SingleRobot';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-item">
          <Link to="/">HOME</Link>
          </div>
          <div className="nav-item">
          <Link to="/robots">ROBOTS</Link>
          </div>
        </nav>
        <main>
          <h1>
            Welcome to StackBot Project Management
          </h1>
        </main>
        <Switch>
          <Route exact path="/" component={AllRobots} />
          <Route exact path="/robots" component={AllRobots} />
          <Route path="/robots/:robotId" component={SingleRobot} />
          <Route render = {() => <p>Sorry this page does not exist</p>} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;