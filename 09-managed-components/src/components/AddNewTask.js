import React from "react";

export default function AddNewTask(props) {
    return (
        <React.Fragment>
            <h1>Add New Task</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" onInput={props.updateNewTask} value={props.newTask} />
                <button className="btn btn-outline-success" type="button" onClick={props.addNewTask}>Add</button>
            </div>
        </React.Fragment>
    )
}