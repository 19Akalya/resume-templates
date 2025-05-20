import React from 'react';
import Adsidenav from './adsidenav';
import'./assets/css/AdDashboardpage.css';
export default function AdDashboardpage(){
    const cardData=[
        {title:'Total Docters',count:4},
        {title:'Took patient',count:5},
        {title:'Total Number of Appointment',count:3},{title:'Today Appointment',count:3},
    ];
    return(
        <div className="dashboard-Wrapper">
            <Adsidenav/>
            <div className="AdDashboardpage-container">
                <div className="row g-3">
                    {cardData.map((card,index)=>(
                     <div key={index}className="col-md-6">
                        <div className="card text-center p-3">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text-1">{card.count}</p>
                        </div>
                     </div>          
                    ))}
                </div>
            </div>
        </div>
    );
}