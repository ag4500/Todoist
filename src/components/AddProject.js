import ListGroup from "react-bootstrap/ListGroup";
import { toggleTask } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import CheckBox from "./Checkbox";
import { FaPlus } from "react-icons/fa";
const AddProjectTask = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projects);

  const getprojectarray = useSelector(
    (state) => state.firebaseData.gettaskarrayproject
  );
  const addTaskToggle = useSelector((state) => state.tasks);
  const handleAddTask = () => {
    dispatch(toggleTask(!addTaskToggle.toggle));
  };

  return (
    <>
      <div className="col-md-6">
        <h2 className="my-3 text-center fst-italic">
          {project.setprojectname}
        </h2>
        {getprojectarray.map((i) =>
          i.projectId == project.projectId ? (
            <ul className="task">
              <CheckBox project={i.docId} />
              {i.task}
            </ul>
          ) : undefined
        )}
        <ListGroup className="my-3" style={{ borderRadius: "50px" }}>
          <ListGroup.Item onClick={() => handleAddTask()}>
            <FaPlus /> Add Task
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};
export default AddProjectTask;
