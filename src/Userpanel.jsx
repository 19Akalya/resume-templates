import { useState } from 'react'
import {Button} from "@mui/material"
import {Navigate, useNavigate} from "react-router-dom"
import './assets/css/userpanel.css';
function userpanel(){
    const navigate=useNavigate();
    return(
        <div className='userpanel'>
        <nav>
         <div className='title'><h3>Resume Management Panel</h3></div>
         <div className='links'><a href='/'>Home</a>
         <a href='/profile'>My Profile</a>
         <a href='/logout'>Logout</a></div>
        </nav>
        <div className='main-content'></div>
        <div className='card background-image'>
        <h2>Welcome To Resume Templates Management</h2>
        <Button onClick={()=>navigate("/userpanel")}>view Templates</Button>
        </div>
        </div>
    )
}
export default userpanel; 