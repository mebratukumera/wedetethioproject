import React from 'react';
import { Link } from 'react-router-dom';
// import { Nav } from 'react-bootstrap';
export default class extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark  " style={{backgroundColor: "black", color:'white'}}>
        <Link className="navbar-brand" href="">
          Wedet<span style={{ color: 'var(--mainYellow)' }}>Ethio</span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link " to='/'>Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to='/aboutUs'>About Us</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to='/restaurants'>Restaurants</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to='/hotels'>Hotels</Link>
            </li>
            <li className="nav-item active"><Link className="nav-link" to='/hospitals'>Hospitals</Link></li>
            <li className="nav-item active"><Link className="nav-link" to='/automotive'>Automotive</Link></li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto " >
              <li className="nav-item" ><Link className="nav-link" style={{color:'var(--mainYellow)'}} to='/login'>Login</Link></li>
              <li className="nav-item"><Link className="nav-link" style={{color:'var(--mainYellow)'}} to='/signUp'>Sign Up</Link></li>
            </ul>

            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          </form>
        </div>
      </nav>
      // <div style={{
      //   width: "100%",
      //   backgroundColor: "black",
      //   //position: "fixed",
      //   height: 'auto',
      //   top: "0",
      //   left: "0",
      //   right:'0',
      //   color: '#fff'
      // }}>
      //   <div className="row" style={{
      //     padding: '1%'
      //   }}>
      //     <div className="col-sm-2">Wedet<span style={{ color: 'var(--mainYellow)' }}>Ethio</span></div>
      //     <div className="col-sm-6" >
      //       <Link to='/'>Home</Link>
      //       <Link to='/aboutUs'>About Us</Link>
      //       <Link to='/restaurants'>Restaurants</Link>
      //       <Link to='/hotels'>Hotels</Link>
      //       <Link to='/hospitals'>Hospitals</Link>
      //       <Link to='/automotive'>Automotive</Link>
      //     </div>
      //     <div className="col-sm-4">
      //       <Link to='/login'>Login</Link>
      //       <Link to='/signUp'>Sign Up</Link>
      //     </div>
      //   </div>
      // </div>

    )
  };
}
