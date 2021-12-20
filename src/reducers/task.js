import {
  QUICK_ADD_TASK,
  TOGGLE_TASK,
  SHOW_TASK_DATE,
  SET_TASK_DATE,
  SET_SELECTED_PROJECT,
  SET_PROJECT,
  SET_DARK_MODE,
  
} from "../actions";

const initialState = {
  addtask: "",
  toggle: false,
  showtaskdate: false,
  settaskdate: "",
  setselectedproject: "Inbox",
  setProject: false,
  projectId: "",
  darkMode: false,
  setHover: false,
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case QUICK_ADD_TASK:
      return {
        ...state,
        addtask: action.payload,
      };
    case TOGGLE_TASK:
      return {
        ...state,
        toggle: action.payload,
      };
    case SHOW_TASK_DATE:
      return {
        ...state,
        showtaskdate: action.payload,
      };
    case SET_TASK_DATE:
      return {
        ...state,
        settaskdate: action.payload,
      };
    case SET_SELECTED_PROJECT:
      return {
        ...state,
        setselectedproject: action.payload,
      };
    case SET_PROJECT:
      return {
        ...state,
        setProject: action.payload,
      };
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    
    default:
      return state;
  }
}
