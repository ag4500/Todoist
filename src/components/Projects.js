import {
  getFireBaseProject,
  setProject,
  setShowProject,
  setProjectName,
  getprojectId,
  deleteProject,
  addProject,
  deleteProjectByID,
} from "../actions";
import { FaTrashAlt } from "react-icons/fa";
import FireBase from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const Projects = () => {
  const getproject = useSelector((state) => state.firebaseData.getproject);
  const setProjectToggle = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  console.log(getproject);
  const handleProject = () => {
    dispatch(setProject(!setProjectToggle.setProject));
  };

  const handleAddProjectSubmit = (e) => {
    e.preventDefault();
    const saveToFirebase = FireBase.firestore();
    saveToFirebase.collection("projects").add({
      name: setProjectToggle.setprojectaddname,
      projectId: new Date().getTime().toString(),
    });
    dispatch(addProject(""));
  };
  const handleDeleteProject = () => {
    console.log(setProjectToggle.delete);
    FireBase.firestore()
      .collection("projects")
      .doc(setProjectToggle.delete)
      .delete();
    dispatch(deleteProject(!setProjectToggle.removeproject))
  };
  useEffect(() => {
    let unsubscribe = FireBase.firestore().collection("projects");
    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newProjects = snapshot.docs.map((task) => ({
        ...task.data(),
        docId: task.id,
      }));
      dispatch(getFireBaseProject(newProjects));
    });
  }, []);

  return (
    <ul>
      <li onClick={() => handleProject()}>Project</li>
      {setProjectToggle.setProject ? (
        <div>
          {getproject.map((data) => (
            <>
              <li
                onClick={() => {
                  dispatch(setShowProject(true));
                  dispatch(
                    setProjectName(
                      (setProjectToggle.setprojectname = data.name)
                    )
                  );
                  dispatch(getprojectId(data.projectId));
                }}
              >
                {data.name}
                {"   "}
              </li>
              
              <span>
                <FaTrashAlt
                  onClick={() => {
                    dispatch(deleteProject(!setProjectToggle.removeproject));
                    dispatch(deleteProjectByID(data.docId));
                  }}
                />
              </span>
            </>
          ))}
          {setProjectToggle.removeproject ? (
            <Modal.Dialog>
              <Modal.Body>
                <p>Are You Wanted to Delete this Project</p>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => handleDeleteProject(setProjectToggle.delete)}
                >
                  Confirm
                </Button>
                <Button
                  variant="primary"
                  onClick={() =>
                    dispatch(deleteProject(!setProjectToggle.removeproject))
                  }
                >
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          ) : undefined}
          <form onSubmit={handleAddProjectSubmit}>
            <label>
              +
              <input
                type="text"
                name="name"
                value={setProjectToggle.setprojectaddname}
                onChange={(e) => dispatch(addProject(e.target.value))}
              />
            </label>
            <button type="submit" value="Submit">
              Add PRoject
            </button>
          </form>
        </div>
      ) : undefined}
    </ul>
  );
};
export default Projects;
