import React from "react";
// import axios from 'axios';

export default class TaskList extends React.Component {
    state = {
        tasks: [
            {
                id: 1,
                description: 'Walk the dog',
                done: false
            },
            {
                id: 2,
                description: 'Water the plants',
                done: false
            },
            {
                id: 3,
                description: 'Pay the bills',
                done: false
            }
        ],
        newTask: null
    }

    UpdateNewTask = e => {
        this.setState({
            newTask: e.target.value
        })
    }

    AddNewTask = e => {
        let newTaskObject = {
            id: this.state.tasks[this.state.tasks.length - 1].id + 1,
            description: this.state.newTask,
            done: false
        }
        if (this.state.newTask) {
            this.setState({
                tasks: [...this.state.tasks, newTaskObject]
            })
        } else {
            alert("Cannot add an empty task")
        }
    }

    UpdateTaskDone = task => {
        let taskCopy = { ...task, done: !task.done }
        let indexToReplace = this.state.tasks.findIndex(t => t.id === task.id)
        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, indexToReplace),
                taskCopy,
                ...this.state.tasks.slice(indexToReplace + 1)
            ]
        })
    }

    render() {
        return <React.Fragment>
            <h1>Todo List</h1>
            <ul className="list-group list-group-flush">
                {this.state.tasks.map(t => (
                    <li className="list-group-item d-flex">
                        <h5>{t.description}</h5>
                        <input className="form-check-input ms-1" type="checkbox" checked={t.done} onChange={() => { this.UpdateTaskDone(t) }} />
                        <button className="btn btn-primary btn-sm ms-1">Edit</button>
                        <button className="btn btn-danger btn-sm ms-1">Delete</button>
                    </li>
                ))}
            </ul>
            <hr className="m-0 p-1 text-success" />
            <h1>Add New Task</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" onInput={this.UpdateNewTask} />
                <button class="btn btn-success" type="button" onClick={this.AddNewTask}>Add</button>
            </div>
        </React.Fragment>
    }
}