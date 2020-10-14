import Login from "../../Containers/Login"
import signUpComp from "../../Containers/SignUp"
import NotFound from "../../Containers/NotFound"

const routes = [
  {
    path: '/',
    auth: false,
    roles: [],
    exact: true,
    component: Login
  },
  {
    path: '/login',
    auth: false,
    roles: [],
    exact: true,
    component: Login
  },
  {
    path: '/SignUp',
    auth: false,
    roles: [],
    exact: true,
    component: signUpComp
  },
  {
    path: '/404',
    auth: false,
    roles: [],
    exact: true,
    component: NotFound
  },
]

export default routes