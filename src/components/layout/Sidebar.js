import React from "react";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";
import { NavLink } from "react-bootstrap";
import AddTask from "../AddTask";
import {
  setSelecedProject,
  setShowProject,
  setProjectName,
} from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Projects from "../Projects";
import AddProjectTask from "../layout/../AddProject";
import { getprojectId } from "../../actions";
export const Sidebar = () => {
 
  const dispatch = useDispatch();
  const setProjectToggle = useSelector(
    (state) => state.projects.setshowproject
  );

  const handleInbox = () => {
    dispatch(setSelecedProject("Inbox"));
    dispatch(setShowProject(false));
    dispatch(setProjectName(""));
    dispatch(getprojectId(""));
  };
  const handleToday = () => {
    dispatch(setSelecedProject("Today"));
    dispatch(setShowProject(false));
    dispatch(setProjectName(""));
    dispatch(getprojectId(""));
  };
  const handleNext = () => {
    dispatch(setSelecedProject("Next 7 days"));
    dispatch(setShowProject(false));
    dispatch(setProjectName(""));
    dispatch(getprojectId(""));
  };
  return (
    <div style={{backgroundImage:"linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.2))",height:'38rem'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-3" style={{ marginRight: "50px" }}>
            <ul className="header">
              <NavLink to="project" activeClassName="current">
                <li className="filter" onClick={() => handleInbox()}>
                  <span className="filter__icon">
                    <FaInbox />
                  </span>
                  <span className="filter__content">Inbox</span>
                  
                </li>
              </NavLink>
              <NavLink to="today" activeClassName="current">
                <li className="filter" onClick={() => handleToday()}>
                  <span className="filter__icon">
                    <FaRegCalendar />
                  </span>
                  <span className="filter__content">Today</span>
                </li>
              </NavLink>
              <NavLink to="upcoming" activeClassName="current">
                <li className="filter" onClick={() => handleNext()}>
                  <span className="filter__icon">
                    <FaRegCalendarAlt />
                  </span>
                  <span className="filter__content">Next 7 days</span>
                </li>
              </NavLink>
            </ul>
            <div>
              <Projects />
            </div>
          </div>

          {setProjectToggle ? (
            <div className="col-sm">
              <AddProjectTask />
            </div>
          ) : (
            <div className="col-sm">
              <AddTask />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
