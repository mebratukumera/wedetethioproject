import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { logo } from '../../logo.svg';
//import side bar components
import Main from './SideBar';
import Reviews from './SideBar/Reviews';
import Comments from './SideBar/Comments';
import Bookmarks from './SideBar/Bookmarks';
import Settings from './SideBar/Settings';

const routes = [
    {
        path: '/signUp',
        exact: true,
        sidebar: () => <div>Sidebar Home</div>,
        main: () => <Main />
    },
    {
        path: '/signUp/reviews',
        sidebar: () => <div>Sidebar reviews</div>,
        main: () => <Reviews />
    },
    {
        path: '/signUp/comments',
        sidebar: () => <div>Sidebar comments</div>,
        main: () => <Comments />
    },
    {
        path: '/signUp/bookmarks',
        sidebar: () => <div>Sidebar bookmarks</div>,
        main: () => <Bookmarks />
    },
    {
        path: '/signUp/setting',
        sidebar: () => <div>Sidebar setting</div>,
        main: () => <Settings />
    }
]
const _sideBarLinks = () => {
    return (

        <ul className='ReviewList'>
            <li><Link to='/signUp' className='btn btn-default'>Main</Link></li>
            <li><Link to='/signUp/reviews' className='btn btn-default'>Reviews</Link></li>
            <li><Link to='/signUp/comments' className='btn btn-default'>Comments</Link></li>
            <li><Link to='/signUp/bookmarks' className='btn btn-default'>Bookmarks</Link></li>
            <li><Link to='/signUp/setting' className='btn btn-default'>Setting</Link></li>
        </ul>

    )
}
const Detail = () => (
    <div className="row" style={{ fontSize: '12px' }}>
        <span className='col-sm-5'>Name</span>
        <span className='col-sm-7'>Hancock Mulu</span><br /><br />
        <span className='col-sm-5'>Birth Date</span>
        <span className='col-sm-7'>09/04/1997</span><br /><br />
        <span className='col-sm-5'>Gender</span>
        <span className='col-sm-7'>Male</span><br /><br />
        <span className='col-sm-5'>Address</span>
        <span className='col-sm-7'>Mexico, Addis Ababa</span><br /><br />
        <span className='col-sm-5'>Email</span>
        <span className='col-sm-7'>Hancock.Mulu@gmail.com</span><br /><br />
        <span className='col-sm-5'>Phone</span>
        <span className='col-sm-7'>+251-929-436614</span><br /><br />
        <span className='col-sm-5'>Registered Date</span>
        <span className='col-sm-7'>03/02/2020</span>
        <span className='col-sm-5'></span>
        <span className='col-sm-7'>
            <button style={{
                borderRadius: '50px',
                padding: '6px',
                width: '60%',
                border: 'none',
                marginTop: '2%',
                color: 'var(--mainWhite)',
                background: 'var(--mainYellow)'
            }} onClick={(e) => e.preventDefault()}>Edit</button>

            {/* <button className="btn col-sm-12" style={{backgroundColor:'var(--mainYellow)', borderRadius:'20%'}}>Edit</button> */}
        </span>
    </div>
)

const SignUp = () => {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">

                        <div className="row">
                            <div className="col-sm-12" style={{ height: '200', backgroundColor: '#dfccdf', padding: '1%' }}>
                                <img src={logo} width='200px' height='200' style={{ borderRadius: '50%', padding: '50px', border: '2px', backgroundColor: 'gray' }} />
                                <h4 style={{ textAlign: 'center', color: '#fff' }}>Hancock Mulu</h4>
                            </div>
                            <_sideBarLinks />
                            {/* {
                                routes.map(route => (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.sidebar}
                                    />
                                ))
                            } */}
                        </div>
                    </div>
                    <div className="col-sm-3" style={{ backgroundColor: '#f3f3f3', padding: '2%' }}>
                        <Detail />
                    </div>

                    <div className="col-sm-7">
                        {/* <Main /> */}
                        {
                                routes.map(route => (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.main}
                                    />
                                ))
                            }
                    </div>

                </div>
            </div>
        </Router>
    )
}

export default SignUp
