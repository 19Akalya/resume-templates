import { useState } from 'react'
import {Button} from "@mui/material"
import {Navigate, useNavigate} from "react-router-dom"
import './assets/css/adminpanel.css';
function adminpanel(){
    const navigate=useNavigate();
    return(
        <div className="adminpanel">
        <nav>
         <div className='title'><h3>Resume Management Panel</h3></div>
        </nav>
         <div className='card background-image'>
         <button className='btn medium'>Total Templates</button>
         <button className='btn medium'>Used Templates </button>
         <button className='btn medium'>Pending Approvals</button>
         <button className='btn medium'>Featured Templates</button>
         </div>
       </div>
        );
}
export default adminpanel;