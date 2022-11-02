import React, { useContext, useEffect } from 'react';
import { Router, Route, Navigate, redirect } from 'react-router';
import history from './utils/history';
import Context from './utils/context';
import AuthCheck from './utils/auth_check';

import Home from './hooks/home';
import Header from './hooks/header';
import HooksContainer1 from './hooks/hook1';
import Callback from './hooks/callback';
import HooksForm from './hooks/hooks_form1';
import PrivateComponent from './hooks/private_component';
import Profile from './hooks/profile';



const PrivateRoute = ({component: Component, auth }) => (
  <Route render={props => auth === true
    ? <Component auth={auth} {...props} />
    : <redirect to={{pathname:'/'}} />
  }
  />
)



const Routes = () => {
    const context = useContext(Context)


      return(
        <div>
          <Router history={history} >
          <Header />
          <br />
          <br />
          <div>
            <Navigate>
              <Route exact path='/' component={Home} />
              <Route path='/hooksform' component={HooksForm} />
              <Route path='/profile' component={Profile} />
              <Route path='/hookscontainer' component={HooksContainer1} />
              <Route path='/authcheck' component={AuthCheck} />

              <PrivateRoute path='/privateroute'
                            auth={context.authState}
                            component={PrivateComponent} />
              <PrivateRoute path="/profile"
                            auth={context.authState}
                            component={Profile} />
              <Route path='/callback'
					 render={(props) => {
                         context.handleAuth(props);                                                            return <Callback />}} />


            </Navigate>
          </div>
          </Router>
        </div>
  )}

export default Routes;