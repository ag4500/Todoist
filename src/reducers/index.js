import { combineReducers } from "redux";
import tasks from "./task";
import firebaseData from './firebaseData'
import projects from "./projects";
export default combineReducers({
    tasks,
    firebaseData,
    projects
});
