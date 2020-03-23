import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesome } from '@fortawesome/fontawesome-svg-core'
export default class extends React.Component {
    state={
        foot:''
    }
    handelFooter=(e)=>{
        this.setState({
            foot:e.target.value
        })
        console.log(this.state.foot);
        
    }
    onSubmit=(e)=>{
        
    }
    render() {
        return (
            <div style={{
                width: "100%",
                backgroundColor: "black",
                height: 'auto',
                left: "0",
                right: '0',
                color: '#fff',
                bottom: '0'
            }}>
                <div className="row" style={{
                    padding: '1%'
                }}>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-6" >
                        <div className="row">
                            <div className="col-sm-4">
                                <h4 style={{ color: 'var( --mainYellow)' }}>Links</h4>
                                <ul className="navbar-nav ">
                                    <li><Link className='nav-link' to='/'>Home</Link></li>
                                    <li><Link className='nav-link' to='/aboutUs'>About Us</Link></li>
                                    <li> <Link className='nav-link' to='/restaurants'>Restaurants</Link></li>
                                    <li> <Link className='nav-link' to='/hotels'>Hotels</Link></li>
                                    <li><Link className='nav-link' to='/hospitals'>Hospitals</Link></li>
                                    <li> <Link className='nav-link' to='/automotive'>Automotive</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-5">
                                <h4 style={{ color: 'var( --mainYellow)' }}>About Us</h4>
                                <p>
                                   Wedet Ethio is a system that help
                                   locate different service areas in Addis Ababa
                                </p>
                            </div>
                            <div className="col-sm-3">
                                <h4 style={{ color: 'var( --mainYellow)' }}>Contact Us</h4>
                                <p>+251941784150</p>
                                <p>contact@wedetethio.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4">
                        <p>Stay up to date by subscribing to our mail list</p>
                        <form onSubmit={this.onSubmit} className='row'>
                            <input

                                type='email'
                                placeholder='email...'
                                style={{
                                    borderRadius: '50px',
                                    padding: '6px',
                                    width: '60%',
                                    border: 'none',

                                }}
                               // value={this.state.foot}
                                onChange={this.handelFooter}
                            />

                            <button style={{
                                borderRadius: '50px',
                                padding: '6px',
                                width: '60%',
                                border: 'none',
                                marginTop: '2%',
                                background: 'var(--mainYellow)'
                            }} onClick={(e)=>e.preventDefault()}>Sign Up</button>
                        </form>
                    </div>

                </div>
                <hr style={{
                    background: 'var(--mainWhite)',
                    height: '1px',
                    marginLeft: '10%',
                    marginRight: '10%'
                }} />
                <div className='row'>
                    <div className="col-sm-5"></div>
                    <div className="col-sm-5 social-media">
                        <Link className="btn btn-default" >f</Link>
                        <Link className="btn btn-default" >g</Link>
                        <Link className="btn btn-default" >ln</Link>
                        <Link className="btn btn-default" >t</Link>
                    </div>
                </div>

            </div>

        )
    };
}
