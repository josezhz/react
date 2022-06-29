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
            // id: this.state.tasks !== [] ? this.state.tasks[this.state.tasks.length - 1].id + 1 : 1,
            id: Math.floor(Math.random()*1000000),
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

    DeleteTask = task => {
        let indexToDelete = this.state.tasks.findIndex(t => t.id === task.id)
        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, indexToDelete),
                ...this.state.tasks.slice(indexToDelete + 1)
            ]
        })
    }

    render() {
        return <React.Fragment>
            <h1>Todo List</h1>
            {this.state.tasks.map(t => (
                <div className="input-group d-flex mb-3" key={t.id}>
                    <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" checked={t.done} onChange={() => { this.UpdateTaskDone(t) }} />
                    </div>
                    <div className="form-control rounded-0">{t.description}</div>
                    <button className="btn btn-outline-primary">Edit</button>
                    <button className="btn btn-outline-danger" onClick={() => { this.DeleteTask(t) }}>Delete</button>
                </div>
            ))}
            <hr className="m-0" />
            <h1>Add New Task</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" onInput={this.UpdateNewTask} />
                <button className="btn btn-outline-success" type="button" onClick={this.AddNewTask}>Add</button>
            </div>
        </React.Fragment>
    }
}