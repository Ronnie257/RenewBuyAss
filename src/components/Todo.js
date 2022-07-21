import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
function Todo() {
  let [area, setarea] = React.useState("");
  function click() {
    var x = document.getElementById("textarea").value;
    document.getElementById("text").style.display = "block";
    setarea(x);
  }

  return (
    <>
      <button
        className="bt"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Task
              </h5>
              <button
                class="btn-close bt1"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="bt1">
                  <FontAwesomeIcon icon={faClose} />
                </span>
              </button>
            </div>
            <div class="modal-body">
              <textarea id="textarea" rows="5" cols="53"></textarea>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={click}
                data-dismiss="modal"
                class="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="text">
        <span>{area}</span>
      </div>
    </>
  );
}
export default Todo;
