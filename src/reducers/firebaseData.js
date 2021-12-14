import { GET_FIREBASE_DATA } from '../actions'
const initialState = {
    getdata:[]
  };
  
  export default function firebaseData(state = initialState, action) {
    switch (action.type) {
      case GET_FIREBASE_DATA:
        return {
          ...state,
          getdata: action.payload,
        };
      default:
        return state;
    }
  }
  