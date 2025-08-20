import React from "react";

export default function TaskCard(props){
    return(
        <>
        <div className="task-card">
        <h1>{props.title}</h1>
        <h2>Due:{props.due_date}</h2>
        </div>
        </>
    )
}