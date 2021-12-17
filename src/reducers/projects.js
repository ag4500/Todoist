import {
  SET_SHOW_PROJECT,
  SET_PROJECT,
  SET_PROJECT_NAME,
  SET_SHOW_PROJECT_CALENDER,
  GET_PROJECTID,
  SET_ADD_PROJECT_NAME,
  DELETE_PROJECT,
  DELETE_PROJECT_BY_ID,
  SET_ADD_PROJECT,
} from "../actions";

const initialState = {
  setshowproject: false,
  setProject: false,
  projectId: "",
  setprojectname: "",
  setshowprojectcalender: false,
  setprojectaddname: "",
  removeproject: false,
  delete: "",
  setaddproject:false,
};

export default function projects(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT:
      return {
        ...state,
        setProject: action.payload,
      };
    case SET_SHOW_PROJECT:
      return {
        ...state,
        setshowproject: action.payload,
      };
    case SET_PROJECT_NAME:
      return {
        ...state,
        setprojectname: action.payload,
      };
    case SET_SHOW_PROJECT_CALENDER:
      return {
        ...state,
        setshowprojectcalender: action.payload,
      };
    case GET_PROJECTID:
      return {
        ...state,
        projectId: action.payload,
      };
    case SET_ADD_PROJECT_NAME:
      return {
        ...state,
        setprojectaddname: action.payload,
      };
    case DELETE_PROJECT:
      return {
        ...state,
        removeproject: action.payload,
      };
    case DELETE_PROJECT_BY_ID:
      return {
        ...state,
        delete: action.payload,
      };
    case SET_ADD_PROJECT:
      return{
        ...state,
        setaddproject:action.payload
      }
    default:
      return state;
  }
}
