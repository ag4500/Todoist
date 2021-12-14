import {
  QUICK_ADD_TASK,
  TOGGLE_TASK,
  SHOW_TASK_DATE,
  SET_TASK_DATE,
  SET_SELECTED_PROJECT,
} from "../actions";

const initialState = {
  addtask: "",
  toggle: false,
  showtaskdate: false,
  settaskdate: "",
  setselectedproject: "Inbox",
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

    default:
      return state;
  }
}
