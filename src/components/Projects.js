import { Dropdown } from "react-bootstrap";
import { getFireBaseProject ,setProject } from "../actions";
import FireBase from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
const Projects = () => {
  const getproject = useSelector((state) => state.firebaseData.getproject);
  const setProjectToggle= useSelector((state) => state.tasks);
  console.log(setProjectToggle.setProject)
  const dispatch = useDispatch();
  const handleProject=()=>{
      console.log("Data")
      dispatch(setProject(!setProjectToggle.setProject))
  }
  console.log(getproject);
  useEffect(() => {
    let unsubscribe = FireBase.firestore().collection("projects");
    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newProjects = snapshot.docs.map((task) => ({
        ...task.data(),
      }));
      dispatch(getFireBaseProject(newProjects));
    });
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Projects
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {getproject.map((data) => (
          <Dropdown.Item onClick={()=>handleProject()}>{data.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default Projects;
