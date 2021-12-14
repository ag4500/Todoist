export const QUICK_ADD_TASK = "QUICK_ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const SHOW_TASK_DATE = "SHOW_TASK_DATE";
export const SET_TASK_DATE = "SET_TASK_DATE";
export const SET_SELECTED_PROJECT="SET_SELECTED_PROJECT";
export const GET_FIREBASE_DATA="GET_FIREBASE_DATA";

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
