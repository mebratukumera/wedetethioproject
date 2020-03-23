import React from 'react'
import Header from './Header';
import Footer from './Footer';

import Home from '../Home';
import AboutUs from '../AboutUs';
import Restaurants from '../Restaurant';
import Hotels from '../Hotel';
import Hospitals from '../Hospital';
import Automotives from '../Automotive';
import Login from './Accounts/Login';
import SignUp from './Accounts/SignUp';
import { Switch, Route } from 'react-router';
import {BrowserRouter} from 'react-router-dom'

const NotFound = (props) => <h1>404 - Not Found</h1>
export default function Root(props) {
    return (
        <BrowserRouter>
         <Header />
            <div className='container-fluid' >
                <div className="row">
                    {/* <div className="col-xs-10 col-xs-offset-1"> */}
                       <Switch>
                           <Route exact path='/' component={Home} />
                           <Route path='/aboutUs' component={AboutUs} />
                           <Route path='/restaurants' component={Restaurants} />
                           <Route path='/hotels' component={Hotels} />
                           <Route path='/hospitals' component={Hospitals} />
                           <Route path='/automotive' component={Automotives} />
                           <Route exact path='/login' component={Login} />
                           <Route path='/signUp' component={SignUp} />
                           <Route component={NotFound} />
                       </Switch>
                    {/* </div> */}
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div>
        </BrowserRouter>

    )
}
