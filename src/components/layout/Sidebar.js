import React from "react";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";
import { NavLink } from "react-bootstrap";
import AddTask from "../AddTask";
export const Sidebar = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-sm-3 "  style={{ background: "red" ,marginRight:'50px'}}>
          <ul
            className="top-filters p-0 m md:m-0"
            style={{ listStyle: "none" }}
          >
            <NavLink to="project" activeClassName="current">
              <li className="filter">
                <span className="filter__icon">
                  <FaInbox color="#246fe0" />
                </span>
                <span className="filter__content">Inbox</span>
              </li>
            </NavLink>
            <NavLink to="today" activeClassName="current">
              <li className="filter">
                <span className="filter__icon">
                  <FaRegCalendar />
                </span>
                <span className="filter__content">Today</span>
              </li>
            </NavLink>
            <NavLink to="upcoming" activeClassName="current">
              <li className="filter">
                <span className="filter__icon">
                  <FaRegCalendarAlt />
                </span>
                <span className="filter__content">Next 7 days</span>
              </li>
            </NavLink>
          </ul>
        </div>
        <div class="col-sm"><AddTask/></div>
      </div>
    </div>
  </div>
);
