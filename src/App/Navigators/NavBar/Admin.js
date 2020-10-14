import React from 'react'
import { Link } from "react-router-dom";

const Admin = ({match}) => ( 
    <div>
            <li>
                <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/admin/client">Clients</Link>
            </li>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
        
    </div>
) 
export default Admin;