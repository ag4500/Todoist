import { setSelecedProject, getFireBaseData } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import FireBase from "../firebase";
const AddTask = () => {
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.firebaseData.getdata);
  useEffect(() => {
    console.log("useEffect");
    const getFromFirebase = FireBase.firestore().collection("tasks");
    getFromFirebase.onSnapshot((querySnapShot) => {
      querySnapShot.forEach((doc) => {
        getdata.push(doc.data());
      });
      dispatch(getFireBaseData(getdata));
    });
  }, [getdata]);

  return (
    <>
      <div className="col-md-6">
        "AddTask"
        {getdata ? getdata.map((data) => <p>{data.task}</p>) : "Data"}
      </div>
    </>
  );
};
export default AddTask;
