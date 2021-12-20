export const QUICK_ADD_TASK = "QUICK_ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const SHOW_TASK_DATE = "SHOW_TASK_DATE";
export const SET_TASK_DATE = "SET_TASK_DATE";
export const SET_SELECTED_PROJECT="SET_SELECTED_PROJECT";
export const GET_FIREBASE_DATA="GET_FIREBASE_DATA";
export const GET_FIREBASE_PROJECT="GET_FIREBASE_PROJECT";
export const SET_PROJECT="SET_PROJECT";
export const SET_PROJECT_NAME="SET_PROJECT_NAME";
export const SET_SHOW_PROJECT="SET_SHOW_PROJECT";
export const SET_SHOW_PROJECT_CALENDER="SET_SHOW_PROJECT_CALENDER";
export const GET_PROJECTID="GET_PROJECTID";
export const GET_FIREBASE_TASK_ARRAY="GET_FIREBASE_TASK_ARRAY";
export const SET_ADD_PROJECT_NAME="SET_ADD_PROJECT_NAME";
export const DELETE_PROJECT="DELETE_PROJECT";
export const DELETE_PROJECT_BY_ID="DELETE_PROJECT_BY_ID";
export const SET_ADD_PROJECT="SET_ADD_PROJECT";
export const SET_DARK_MODE="SET_DARK_MODE";


export const quickAddTask = (payload) => ({
  type: QUICK_ADD_TASK,
  payload,
});

export const toggleTask = (payload) => ({
  type: TOGGLE_TASK,
  payload,
});

export const setShowTaskDate = (payload) => ({
  type: SHOW_TASK_DATE,
  payload,
});
export const setTaskDate = (payload) => ({
  type: SET_TASK_DATE,
  payload,
});
export const setSelecedProject = (payload) => ({
  type:SET_SELECTED_PROJECT,
  payload,
}); 

export const getFireBaseData = (payload) => ({
  type:GET_FIREBASE_DATA,
  payload,
});
export const getFireBaseProject = (payload) => ({
  type:GET_FIREBASE_PROJECT,
  payload,
});
export const setProject = (payload) => ({
  type:SET_PROJECT,
  payload,
});
export const setShowProject = (payload) => ({
  type:SET_SHOW_PROJECT,
  payload,
});

export const setProjectName = (payload) => ({
  type:SET_PROJECT_NAME,
  payload,
});
export const setShowProjectCalender = (payload) => ({
  type:SET_SHOW_PROJECT_CALENDER,
  payload,
});
export const getprojectId = (payload) => ({
  type:GET_PROJECTID,
  payload,
});
export const getFirebaseTaskArray=(payload)=>({
  type:GET_FIREBASE_TASK_ARRAY,
  payload
})
export const addProject=(payload)=>({
  type:SET_ADD_PROJECT_NAME,
  payload
})
export const deleteProject=(payload)=>({
  type:DELETE_PROJECT,
  payload
})
export const deleteProjectByID=(payload)=>({
  type:DELETE_PROJECT_BY_ID,
  payload
})
export const setAddProject=(payload)=>({
  type:SET_ADD_PROJECT,
  payload
})
export const setDarkMode=(payload)=>({
  type:SET_DARK_MODE,
  payload
})
