import React from 'react';

import  firebase  from '../firebase';

export const CheckBox = (id) => {
  const archiveTask = () => {
      console.log("data",id)
    firebase.firestore().collection('tasks').doc(id.project).update({
      archived: true,
    });
  };

  return (
    <li style={{listStyleType:'circle'}} onClick={()=>archiveTask()}></li>
  );
};

export default CheckBox