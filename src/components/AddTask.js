import { toggleTask, getFireBaseData, getFirebaseTaskArray} from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import FireBase from "../firebase";
import moment from "moment";
import ListGroup from "react-bootstrap/ListGroup";
import CheckBox from "./Checkbox";
import { FaPlus } from "react-icons/fa";

const AddTask = () => {

  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.firebaseData.getdata);
  const select = useSelector((state) => state.tasks.setselectedproject);
  const addTaskToggle = useSelector((state) => state.tasks);

  const handleAddTask = () => {
    dispatch(toggleTask(!addTaskToggle.toggle));
  };
  
  useEffect(() => {
    if (select == "Inbox") {
      let unsubscribe = FireBase.firestore().collection("tasks");
      unsubscribe = unsubscribe.onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((task) => ({
          ...task.data(),
          docId: task.id,
        }));
        dispatch(
          getFireBaseData(newTasks.filter((data) => data.archived != true))
        );
        dispatch(
          getFirebaseTaskArray(newTasks.filter((data) => data.archived != true))
        );
       
      });
    } else if (select == "Today") {
      let unsubscribe = FireBase.firestore().collection("tasks");
      unsubscribe = unsubscribe.onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((task) => ({
          ...task.data(),
          docId: task.id,
        }));
        dispatch(
          getFireBaseData(
            newTasks.filter(
              (data) =>
                data.date == moment().format("DD/MM/YYYY") &&
                data.archived != true
            )
          )
        );
     
      });
    } else if (select=='Next 7 days') {
      let unsubscribe = FireBase.firestore().collection("tasks");
      unsubscribe = unsubscribe.onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((task) => ({
          ...task.data(),
          docId: task.id,
        }));

        dispatch(
          getFireBaseData(
            newTasks.filter(
              (data) =>
                moment(data.date, "DD-MM-YYYY").diff(
                  moment().format("MMM D, YYYY")
                ) > 0 && data.archived != true
            )
          )
        );
       
      });
    }
  }, [select]);

  return (
    <>
      <div className="col-md-6">
        <h2
          className="my-3 text-center fst-bold"
          style={{ color: "royalblue" }}
        >
          {select}
        </h2>

        {getdata.map((data) => (
          <ul className="task">
            <CheckBox project={data.docId} />

            {data.task}
          </ul>
        ))}
        <ListGroup className="my-3" style={{ borderRadius: "50px" }}>
          <ListGroup.Item onClick={() => handleAddTask()}>
            <FaPlus /> Add Task
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};
export default AddTask;
