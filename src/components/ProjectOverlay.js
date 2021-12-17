import {
  getprojectId,
  getFireBaseProject,
  setShowProjectCalender
} from "../actions";
import FireBase from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const ProjectOverlay = () => {
  
  const getproject = useSelector((state) => state.firebaseData.getproject);
  const setProjectToggle = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribe = FireBase.firestore().collection("projects");
    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newProjects = snapshot.docs.map((task) => ({
        ...task.data(),
        docId:task.id
      }));
      dispatch(getFireBaseProject(newProjects));
    });
  }, []);

  return (
    <ul>
      <div>
        {getproject.map((data) => (
          <li
            onClick={() => {
              dispatch(
                setShowProjectCalender(!setProjectToggle.setshowprojectcalender)
              );
              dispatch(
                getprojectId((setProjectToggle.projectId = data.projectId))
              );
            }}
          >
            {data.name}
          </li>
        ))}
      </div>
    </ul>
  );
};
export default ProjectOverlay;
