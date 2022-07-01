import React from "react";

export default function Task(props) {
    return (
        <React.Fragment>
            {props.tasks.map(t => (<React.Fragment key={t.id}>
                {
                    props.taskBeingEdited === null || props.taskBeingEdited.id !== t.id ?
                        props.displayTask(t)
                        :
                        props.displayEditTask(t)
                }
            </React.Fragment>
            ))}
        </React.Fragment>
    )
}