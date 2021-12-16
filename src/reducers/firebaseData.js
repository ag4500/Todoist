import {
  GET_FIREBASE_DATA,
  GET_FIREBASE_PROJECT,
  GET_FIREBASE_TASK_ARRAY,
} from "../actions";
const initialState = {
  getdata: [],
  getproject: [],
  gettaskarrayproject: [],
};

export default function firebaseData(state = initialState, action) {
  switch (action.type) {
    case GET_FIREBASE_DATA:
      return {
        ...state,
        getdata: action.payload,
      };
    case GET_FIREBASE_PROJECT:
      return {
        ...state,
        getproject: action.payload,
      };
    case GET_FIREBASE_TASK_ARRAY:
      return {
        ...state,
        gettaskarrayproject: action.payload,
      };
    default:
      return state;
  }
}
