import { toggleTask, getFireBaseData } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import FireBase from "../firebase";
import moment from "moment";
import ListGroup from "react-bootstrap/ListGroup";
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
        }));
        dispatch(getFireBaseData(newTasks));
      });
    } else if (select == "Today") {
      let unsubscribe = FireBase.firestore().collection("tasks");
      unsubscribe = unsubscribe.onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((task) => ({
          ...task.data(),
        }));
        dispatch(
          getFireBaseData(
            newTasks.filter(
              (data) => data.date == moment().format("DD/MM/YYYY")
            )
          )
        );
      });
    } else  {
      let unsubscribe = FireBase.firestore().collection("tasks");
      unsubscribe = unsubscribe.onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((task) => ({
          ...task.data(),
        }));
        dispatch(
          getFireBaseData(
            newTasks.filter(
              (data) =>
                moment(data.date, "DD-MM-YYYY").diff(
                  moment().format("MMM D, YYYY")
                ) > 0
            )
          )
        );
      });
    }
  }, [select]);

  return (
    <>
      <div className="col-md-6">
        <h2 className="my-3 text-center fst-italic">{select}</h2>
        {getdata.map((data) => (
          <ListGroup>
            <ListGroup.Item>{data.task}</ListGroup.Item>
          </ListGroup>
        ))}
         <ListGroup className="my-3">
            <ListGroup.Item onClick={() => handleAddTask()}>+ Add Task</ListGroup.Item>
          </ListGroup>
        
      </div>
    </>
  );
};
export default AddTask;
