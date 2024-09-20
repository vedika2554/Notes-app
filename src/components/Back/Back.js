import React from "react";
import imgback from '../../views//Img/reply (1).png'
import './Back.css'
import { Link } from "react-router-dom";
function Back(){
    return(
<div> <Link to='/'>
<img src={imgback} alt='home'className="hbi"/></Link></div>
    )
}
export default Back