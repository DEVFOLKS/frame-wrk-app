
import Admin from "../../Containers/Admin" 
import Client from "../../Containers/Client";
import { Children } from "react";

const routes = [
  {
    path: '/admin/dashboard',
    auth: true,
    roles: [
      'admin',
    ],
    exact: true,
    component: Admin
  },
  {
    path: '/admin/client',
    auth: true,
    roles: [
      'admin',
    ],
    exact: true,
    component: Client
  },
]
export default routes;