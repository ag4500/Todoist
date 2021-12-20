import { Navbar, Nav, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {
  quickAddTask,
  toggleTask,
  setShowTaskDate,
  setShowProjectCalender,
  setDarkMode,
} from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, InputGroup } from "react-bootstrap";
import {
  FaRegCalendarAlt,
  FaRegCalendar,
  FaPlus,
  FaPizzaSlice,
} from "react-icons/fa";
import { TaskDate } from "../TaskDate";
import FireBase from "../../firebase";
import ProjectOverlay from "../ProjectOverlay";

const Header = () => {
  
  const select = useSelector((state) => state.tasks);
  const project = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const handleShowToggle = () => {
    dispatch(toggleTask(!select.toggle));
  };
  const handleHideToggle = () => {
    dispatch(toggleTask(!select.toggle));
  };
  const onChange = (e) => {
    dispatch(quickAddTask(e.target.value));
  };
  const OnSubmit = async (e) => {
    e.preventDefault();
    const saveToFirebase = FireBase.firestore();
    saveToFirebase.collection("tasks").add({
      task: select.addtask,
      date: select.settaskdate,
      archived: false,
      projectId: project.projectId,
    });
    dispatch(quickAddTask(""));
    dispatch(toggleTask(!select.toggle));
  };
  const handleCalender = () => {
    dispatch(setShowTaskDate(!select.showtaskdate));
  };
  const handleDarkMode = () => {
    dispatch(setDarkMode(!select.darkMode));
  };
  return (
    <>
      <div>
        <Navbar className={select.darkMode ? "darkmode" : "defaultmode"}>
          <Navbar.Brand>
            <img className="logo-img" src="image/logo.jpg" alt="Todo" />
            <span
              className="todo-header"
              className={select.darkMode ? "pizzadarkmode" : "pizzadefaultmode"}
            >
              {" "}
              Todoist Clone{" "}
            </span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Container>
              <Nav.Link>
                <FaPlus
                  className="add"
                  className={
                    select.darkMode ? "pizzadarkmode" : "pizzadefaultmode"
                  }
                  onClick={() => handleShowToggle()}
                />
              </Nav.Link>
            </Container>
          </Nav>
          <Nav className="me-auto">
            <Container>
              <Nav.Link>
                <FaPizzaSlice
                  className="mx-1"
                  className={
                    select.darkMode ? "pizzadarkmode" : "pizzadefaultmode"
                  }
                  onClick={() => handleDarkMode()}
                />
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
                  <InputGroup.Text id="basic-addon1">Add Task</InputGroup.Text>
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
                  {project.setshowprojectcalender ? (
                    <ProjectOverlay />
                  ) : (
                    <FaRegCalendar
                      onClick={() => {
                        dispatch(
                          setShowProjectCalender(
                            !project.setshowprojectcalender
                          )
                        );
                      }}
                    />
                  )}
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        ) : undefined}
      </div>
    </>
  );
};
export default Header;
