import React from 'react';
import "./assets/css/AddNewDocterpage.css";
import Adsidenav from"./Adsidenav";
export default function AddNewDocterPage(){
    return(
        <>
        <Adsidenav/>
        <div className="add-new-docter-page">
            <div className="form-container-1">
                <h2 className="form-title">Add new Docter</h2>
                <form className="docter-form">
                    <div className="form-group">
                        <lable>Docter Name</lable>
                        <input type="text" placeholder="Enter docter's full name"required/>
                    </div>
                    <div className="form-group">
                        <lable>Specialist</lable>
                        <input type="text" placeholder="Enter Specialist(e.g.,cardialogist)"required/>
                    </div>
                    <div className="form-group">
                        <label>years of Experience</label>
                        <input type="text" placeholder="Enter experience in years"required/>
                    </div>
                    <div className="form-group">
                        <label>Email Id</label>
                        <input type="email" placeholder="Enter the Email Id"required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="Password" placeholder="Enter the Password"required/>
                    </div>
                    <div className="form-group">
                        <label>Contact No</label>
                        <input type="text" placeholder="Enter the phone number"required/>
                    </div>
                    <div className="form-group">
                        <label>Bio</label>
                        <textarea placeholder="Enter docter's bio or details" rows="4" required ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Profile Image</label>
                        <input type="file" accept="image/*"/>
                    </div>
                    <button type="Submit" className="submit-btn">Add Docter</button>
             </form>
            </div>
         </div>
    </>
);
}