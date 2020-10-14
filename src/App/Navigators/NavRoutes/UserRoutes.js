import User from "../../Containers/User"
import Profile from "../../Containers/Profile";

const routes = [
  {
    path: '/user/dashboard',
    auth: true,
    roles: [
      'user',
    ],
    exact: true,
    component: User
  },
  {
    path: '/user/profile',
    auth: true,
    roles: [
      'user',
    ],
    exact: true,
    component: Profile
  },
]
export default routes;