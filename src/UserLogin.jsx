import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {Card,Typography,Button} from "@mui/material"

export function UsLoginPage(){
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

        const validEmail="user@gmail.com";
        const validPassword = "user123";

    if(formData.email=== validEmail && formData.password===validPassword) {
        alert("Login Successful!");
        navigate("/dashboard");
    }
    else 
    alert("Insert the correct Email and Password");
    }


return (<div className="login-container-ad">
    <Card className='login-card-ad'>
        <Typography variant="h5" className='login-title-ad'>
            User Login
        </Typography>
        <form onSubmit={handleSubmit} className="login-form-ad">
            <div className="form-group-ad">
                <label className="form-label-ad" htmlFor="">Email ID</label>
                <input className="input-1-ad" placeholder="Enter email" type="email" name="email" required onChange={handleChange} />
            </div>
            <div className="form-group-ad">
                <label className="form-label-ad" >Password</label>
                <input className="input-2-ad" placeholder="Enter Password" type="password" name="password" required onChange={handleChange} />
            </div>
            <Button type="submit" className="login-button-add" fullWidth>Login</Button>
        </form>
    </Card>
</div>)
};