import React,{useState} from "react";
import {Button,card,Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "../styles/AdLoginpage.css";
export function AdLoginpage(){
    const navigate=useNavigate();
    const[formData,setFormData]=useState({
        email:"",
        password:"",
    });
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit=(e)=>{
        e.perventDefault();
        const validEmail="Admin@gmail.com";
        const validPassword="admin123";
        if(formData.email===validEmail&&formData.password===validPassword){
            alert ("Admin Login sucessful!");
            navigate("/addashborad");
        }else{
            alert("Insert the correct Email and Password");
        }
    };
    return(
        <div className="login-container-ad">
            <card className="login-card-ad">
                <Typography variant="h5"className="login-title-ad">
                    Admin Login
                </Typography>
                <form onSubmit={handleSubmit}className="login-form-ad">
                    <div className="form-group-ad">
                        <lable className="form-lable-ad">Email Id</lable>
                        <input className="input-1-ad"
                        placeholder="Enter Email"
                        type="email"
                        name="email"required
                        onChange={handleChange}/>
                    </div>
                    <div className="form-group-ad">
                        <lable className="form-lable-ad">Password</lable>
                        <input className="input-2-ad"
                        placeholder="Enter Password"
                        name="password"required
                        onChange={handleChange}/>
                    </div>
                    <Button type="submit"className="login-button-ad"fullwidth>
                        Login
                    </Button>
                </form>
            </card>
        </div>
    );
} 