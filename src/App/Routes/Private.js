import React, {Suspense} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from "history";
const history = createBrowserHistory()

const PrivateRoute = ({ component: Component, role,  props, ...rest }) => {
    console.log('props.isAuthenticated', props.isAuthenticated);
    
      //return <Route {...rest} render={props => {
        return <Suspense fallback={<div>Loading...</div>}>
          {  rest.roles.indexOf(role) > -1 && props.isAuthenticated 
            ? <Component {...props}/>
            : <Redirect to={{
              pathname: '/login',
              state: { from: props.location },
          }}/>
          }
        </Suspense>
}

export default PrivateRoute