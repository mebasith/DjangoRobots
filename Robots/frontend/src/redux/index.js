import { combineReducers } from 'redux';
import robotsReducer from './robots';
import singleRobotReducer from './singleRobot';


const appReducer = combineReducers({
  robots: robotsReducer,
  singleRobot: singleRobotReducer,
});

export default appReducer;