import { GET_FIREBASE_DATA, GET_FIREBASE_PROJECT } from "../actions";
const initialState = {
  getdata: [],
  getproject: [],
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
    default:
      return state;
  }
}
