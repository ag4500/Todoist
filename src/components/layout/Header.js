import { Navbar, Nav, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { quickAddTask, toggleTask, setShowTaskDate } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, InputGroup } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TaskDate } from "../TaskDate";
import FireBase from "../../firebase";
const Header = () => {
  const select = useSelector((state) => state.tasks);
  console.log(select);
  const dispatch = useDispatch();

  const handleShowToggle = () => {
    dispatch(toggleTask(!select.toggle));
  };
  const handleHideToggle = () => {
    dispatch(toggleTask(!select.toggle));
  };
  const onChange = (e) => {
    const { name, value } = e.target;

    dispatch(quickAddTask(value));
  };
  const OnSubmit = async (e) => {
    e.preventDefault();
    const saveToFirebase = FireBase.firestore();
    saveToFirebase.collection("tasks").add({
      task: select.addtask,
      date:select.settaskdate,
      archived: false,
      userId:'hfNENnqoWk7flzO8Iov4'
    });

    dispatch(toggleTask(!select.toggle));
  };
  const handleCalender = () => {
    dispatch(setShowTaskDate(!select.showtaskdate));
  };
  return (
    <>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Todoist Clone</Navbar.Brand>
          <Nav className="me-auto">
            <Container>
              <Nav.Link>
                <li onClick={() => handleShowToggle()}>+</li>
              </Nav.Link>
            </Container>
          </Nav>
        </Navbar>
        {select.toggle ? (
          <Modal show={select.toggle} onHide={handleHideToggle}>
            <Modal.Header closeButton>
              <Modal.Title>Quick Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={OnSubmit}>
                <InputGroup className=" p-2 -3 ">
                  <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                  <FormControl
                    type="text"
                    name="addtask"
                    value={select.addtask}
                    onChange={(event) => onChange(event)}
                  />
                </InputGroup>

                <Modal.Footer>
                  <Button variant="success" type="submit">
                    Add Task
                  </Button>

                  {select.showtaskdate ? (
                    <TaskDate />
                  ) : (
                    <FaRegCalendarAlt onClick={() => handleCalender()} />
                  )}
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        ) : (
          console.log("Model of Quick Add")
        )}
      </div>
    </>
  );
};
export default Header;
