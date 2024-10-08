import React, { useEffect, useState } from "react";
import './Show.css'
import Back from "../../components/Back/Back";
import Nc from '../../components/Nc/Nc'
function Show(){

    const [no,setNi]=useState([]);

    useEffect(()=>{
        const savedNi = JSON.parse(localStorage.getItem('no'));
setNi(savedNi)},[])

    return(
        <div>
        <h1 className="txc tp">Your Note 🧾</h1>
{
   no ? no.map((n,index)=>{
        const {heading,description,emoji}=n
        return (
            <div>
            <Nc index={index} heading={heading} description={description} emoji={emoji} />|| ("")
            </div>
        )
    }):null
}
       <Back/>
        </div>
    )
}
export default Show


