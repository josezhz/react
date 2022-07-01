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
        newTask: '',
        taskBeingEdited: null,
        modifiedTaskDescription: '',
    }

    updateNewTask = e => {
        this.setState({
            newTask: e.target.value
        })
    }

    addNewTask = e => {
        let newTaskObject = {
            id: this.state.tasks.length === 0 ? 1 : this.state.tasks[this.state.tasks.length - 1].id + 1,
            description: this.state.newTask,
            done: false
        }
        if (this.state.newTask) {
            this.setState({
                tasks: [...this.state.tasks, newTaskObject],
                newTask: ''
            })
        } else {
            alert("Cannot add an empty task")
        }
    }

    updateTaskDone = task => {
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

    beginEditTask = task => {
        this.setState({
            taskBeingEdited: task,
            modifiedTaskDescription: task.description
        })
    }

    updateTask = () => {
        let modifiedTask = {
            ...this.state.taskBeingEdited,
            description: this.state.modifiedTaskDescription
        }
        let indexToUpdate = this.state.tasks.findIndex(t => t.id === modifiedTask.id)
        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, indexToUpdate),
                modifiedTask,
                ...this.state.tasks.slice(indexToUpdate + 1)
            ],
            taskBeingEdited: null
        })
    }

    deleteTask = task => {
        let indexToDelete = this.state.tasks.findIndex(t => t.id === task.id)
        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, indexToDelete),
                ...this.state.tasks.slice(indexToDelete + 1)
            ]
        })
    }

    displayTask = task => {
        return (
            <div className="input-group d-flex mb-3" key={task.id}>
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" checked={task.done} onChange={() => { this.updateTaskDone(task) }} />
                </div>
                <div className="form-control">{task.description}</div>
                <button className="btn btn-outline-primary" onClick={() => { this.beginEditTask(task) }}>Edit</button>
                <button className="btn btn-outline-danger" onClick={() => { this.deleteTask(task) }}>Delete</button>
            </div>
        )
    }
    displayEditTask = task => {
        return (
            <div className="input-group d-flex mb-3" key={task.id}>
                <input
                    type="text"
                    class="form-control"
                    value={this.state.modifiedTaskDescription}
                    onInput={e => {
                        this.setState({
                            modifiedTaskDescription: e.target.value
                        })
                    }} />
                <button className="btn btn-outline-warning" onClick={this.updateTask}>Update</button>
            </div>
        )
    }

    render() {
        return <React.Fragment>
            <h1>Todo List</h1>
            {this.state.tasks.map(t => (<React.Fragment>
                {
                    this.state.taskBeingEdited === null || this.state.taskBeingEdited.id !== t.id ?
                        this.displayTask(t)
                        :
                        this.displayEditTask(t)
                }
            </React.Fragment>
            ))}
            <hr className="m-0" />
            <h1>Add New Task</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" onInput={this.updateNewTask} value={this.state.newTask} />
                <button className="btn btn-outline-success" type="button" onClick={this.addNewTask}>Add</button>
            </div>
        </React.Fragment>
    }
}