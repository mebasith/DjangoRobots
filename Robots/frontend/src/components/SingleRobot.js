import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchSingleRobot,
  unAssignProject,
  clearRobot,
} from '../redux/singleRobot';
import { Link, Route } from 'react-router-dom';

class SingleRobot extends Component {
  async componentDidMount() {
    try {
      await this.props.loadRobot(this.props.match.params.robotId);
    } catch (error) {
      console.error(error);
    }
  }

  async handleUnassign(projectId) {
    const robot = this.props.robot;
    try {
      await this.props.unassign(robot, projectId);
      await this.props.loadRobot(this.props.match.params.robotId);
    } catch (err) {
      console.log(err);
    }
  }

  componentWillUnmount() {
    this.props.clear();
  }

  render() {
    if (this.props.robot.name !== undefined) {
      const robot = this.props.robot;
      const name = robot.name;
      const image = robot.imageUrl;
      const fuelType = robot.fuelType;
      const fuelLevel = robot.fuelLevel;
      const projects = robot.projects;
      return (
        <div className="centered">
        <div className="Card">
          <div>
          <h1>Name: {name}</h1>
          <div className="Card-data">
          <h3>{`Fuel Type: ${fuelType}`}</h3>
          <h3>{`Fuel Level: ${fuelLevel}`}</h3>
          <div className="Robocard-image">
          <img src={image} />
          </div>
          </div>
          </div>
        </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    robot: state.singleRobot,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadRobot: (id) => dispatch(fetchSingleRobot(id)),
    clear: () => dispatch(clearRobot()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleRobot);