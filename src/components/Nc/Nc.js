import React from "react";
import './Nc.css'
function deleteNote(index){
    const notesSaved = JSON.parse(localStorage.getItem('no')) || [];
    notesSaved.splice(index,1);
    localStorage.setItem("no",JSON.stringify(notesSaved))
    window.location.reload();
}

function Nc({index,heading,description,emoji}){
return (
    <div className="ncc">

   
        <h1 className="h">{heading}</h1>
<p className="pll">{description}</p>
    <div className="e">{emoji}</div>
<img src={'https://cdn-icons-png.flaticon.com/128/484/484662.png'} className="ndi"alt="Delete" onClick={()=>{
    deleteNote(index)
}}/>||[]
</div>

)
}

export default Nc