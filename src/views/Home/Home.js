import React from "react";
import './Home.css'

import { Link } from "react-router-dom";



function Home(){
    return (
        <div>
        
                         <h1 className="txc ts">Tried carrying 📒 & 🖊️ ? Use this app and take your 📝</h1>
                         <h1 className="txc tp">Note it📕</h1>
            <div className="btncon">
                <Link to='add'>
                <button className="bp">Write notes 🖋️</button></Link>
                <Link to='show'><button className="bp ">See notes 🧾</button></Link>
            </div>
           
                         <h2 className="txc tp">Our Features </h2>
                         <div className="fcc">
                         <div className="fc">
                          
                            <p className="tw">Take Notes at anytime ⌚, anywhere 🌍</p>
                            
                         </div>
                         <div className="fc">
                            
                            <p className="tw">Access directly in your phone 📱</p>
                            
                         </div>
                         <div className="fc">
                            
                            <p className="tw">Note down things at 1 click 👆</p>
                            </div>
                         </div>
                         
  

        </div>
        
    )
}
export default Home