import React, {useState} from "react";
import {Button,Card,Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "./assets/css/AdLoginPage.css";

export function AdLoginPage(){
    const navigate = useNavigate();
    const [formData,setFormData]= useState({
        email:"",
        password:""
    });
    const handleChange= (e)=> {
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();

        const validEmail="Admin@gmail.com";
        const validPassword = "admin123";

    if(formData.email=== validEmail && formData.password===validPassword) {
        alert("Admin Login Successful!");
        navigate("/addashboard");
    }
    else 
    alert("Insert the correct Email and Password");
    }


return (<div className="login-container-ad">
    <Card className='login-card-ad'>
        <Typography variant="h5" className='login-title-ad'>
            Admin Login
        </Typography>
        <form onSubmit={handleSubmit} className="login-form-ad">
            <div className="form-group-ad">
                <label className="form-label-ad" htmlFor="">Email ID</label>
                <input className="input-1-ad" placeholder="Enter email" type="email" name="email" required onChange={handleChange} />
            </div>
            <div classsName="form-group-ad">
                <label className="form-label-ad" >Password</label>
                <input className="input-2-ad" placeholder="Enter Password" type="password" name="password" required onChange={handleChange} />
            </div>
            <Button type="submit" className="login-button-add" fullWidth>Login</Button>
        </form>
    </Card>
</div>)
};
