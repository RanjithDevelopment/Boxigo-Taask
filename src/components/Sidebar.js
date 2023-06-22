import React, { useState } from "react";

import "../css/sidebar.css";
import Grid from "@mui/material/Grid";
import { FaTruckMoving, FaUser,FaNewspaper,FaArrowCircleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
    const menuItem = [
        {
            path: "/",
            name: "Moves",
            icon: <FaTruckMoving/>,
        },
        {
           path:"/user",
           name:"User",
           icon: <FaUser/>
        },
       
        {
            path:"/queries",
            name:"Queries",
            icon:<FaNewspaper/>
        },
        {
            path:"/logout",
            name:"LogOut",
            icon:<FaArrowCircleLeft/>
        }
    ];
    
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>

            <div className="container p-0 sidebar-cont mb-0 pb-0">
                <div className="row">
                   
                    <div className="col">
                        <div  className="sidebar" >

                            <Grid >
                                <Grid item xs={2}>
                                    <div className="top_section">
                                       
                                    </div>
                                </Grid>

                            </Grid>
                           
                            {menuItem.map((item, index) => (
                               
                                <NavLink to={item.path} key={index} className="link" activeclassname="active-left-bar ">
                                    <div className="icon">{item.icon}</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                                        {item.name}
                                    </div>
                                </NavLink>
                          
                            ))}
                               
                        </div>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sidebar;
