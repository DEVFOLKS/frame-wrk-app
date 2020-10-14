import React from 'react';
import { Link } from "react-router-dom";
import AdminBar from "../Navigators/NavBar/Admin"
import UserBar from "../Navigators/NavBar/User"

const navBar = function(props){
    switch (props.role) {
        case 'admin':
            return <AdminBar/>
        case 'user':
            return <UserBar/>
        default:
            break;
    }
}
const NavBar = ( props ) => ( 
    <div>
        <ul> 
            {
                props.isAuthenticated 
                ? navBar(props) 
                : ''
            }
        </ul>
        
    </div>
)  

export default NavBar;