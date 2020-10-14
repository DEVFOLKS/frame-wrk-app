// import modular routes
import publicRoutes from "../Navigators/NavRoutes/PublicRoutes"
import adminRoutes from "../Navigators/NavRoutes/AdminRoutes"
import userRoutes from "../Navigators/NavRoutes/UserRoutes"


export default [
  ...publicRoutes,
  ...adminRoutes,
  ...userRoutes,
]