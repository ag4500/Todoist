import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import firebase from "../firebase";

export const CheckBox = (id) => {
  const archiveTask = () => {
    firebase.firestore().collection("tasks").doc(id.project).update({
      archived: true,
    });
  };

  return (
    <AiOutlineCheckCircle
      onClick={() => archiveTask()}
      style={{ marginRight: "10px", color: "royalblue", fontSize: "20px" }}
    />
  );
};

export default CheckBox;
