import React from "react";
import "../styles.css";
import Todo from "./Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSignal,
  faFolderOpen,
  faMessage,
  faCalendarDays,
  faCog,
  faSignOut,
  faSearch,
  faBell,
  faLaugh,
  faPlus,
  faChevronCircleDown
} from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <div className="row">
      <div id="top" className="col-3">
        <span className="studio ">.Studio</span>
        <div id="side">
          <table className="table table-hover table-borderless">
            <tbody>
              <div>
                <tr>
                  <td>
                    <span className="icon">
                      <FontAwesomeIcon icon={faHouse} />
                    </span>
                  </td>
                  <td>
                    <span className="name"> OverView </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="icon">
                      <FontAwesomeIcon icon={faSignal} />
                    </span>
                  </td>
                  <td>
                    <span className="name"> Stats </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="icon">
                      <FontAwesomeIcon icon={faFolderOpen} />
                    </span>
                  </td>
                  <td>
                    <span className="name"> Projects </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="icon">
                      <FontAwesomeIcon icon={faMessage} />
                    </span>
                  </td>
                  <td>
                    <span className="name"> Chat </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="icon">
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </span>
                  </td>
                  <td>
                    <span className="name"> Calendar </span>
                  </td>
                </tr>
              </div>
              <div className="icon1">
                <tr>
                  <td>
                    <span className="icon">
                      <FontAwesomeIcon icon={faCog} />
                    </span>
                  </td>
                  <td>
                    <span className="name"> Setting </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="icon">
                      <FontAwesomeIcon icon={faSignOut} />
                    </span>
                  </td>
                  <td>
                    <span className="name"> Log Out </span>
                  </td>
                </tr>
              </div>
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-9">
        <div>
          <input type="text" className="input" placeholder="Search" />
          <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="btn1 btn">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <span className="img">
            <FontAwesomeIcon icon={faLaugh} />
          </span>
          <div className="row">
            <div class="projects col-6">Projects</div>
            <div class="projects col-6">
              This Week <FontAwesomeIcon icon={faChevronCircleDown} />
            </div>
          </div>
        </div>

        <div className="row ff">
          <div className="col-4">
            <div className="co">
              <div className="todo">To do</div>

              <Todo />
            </div>
          </div>
          <div className="col-4">
            <div className="co">
              {" "}
              <div className="todo">In Progress</div>
              <button className=" bt">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <div className="col-4">
            <div className="co">
              {" "}
              <div className="todo">Completed</div>
              <button className=" bt">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
