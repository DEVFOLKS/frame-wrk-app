import React from 'react'
import { Link } from "react-router-dom";

const User = ({match}) => ( 
    <div> 
            <li>
                <Link to="/user/dashboard">Dashboard</Link>
            </li> 
            <li>
                <Link to="/user/profile">Profile</Link>
            </li>
            <li>
                <Link to="/admin">Try admin</Link>
            </li> 
        
    </div>
  )  

  export default User;