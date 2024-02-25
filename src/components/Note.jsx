import React from "react";
import notes from "../notes";
function Note(props){  // names of  React componenets should be captialzed
    return <div className="note">
        <h1 contentEditable="false">{props.title}</h1>
        <p contentEditable="false">{props.content}</p>
    </div>
}

export default Note;