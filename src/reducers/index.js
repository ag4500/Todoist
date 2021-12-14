import { combineReducers } from "redux";
import tasks from "./task";
import firebaseData from './firebaseData'
export default combineReducers({
    tasks,
    firebaseData
});
