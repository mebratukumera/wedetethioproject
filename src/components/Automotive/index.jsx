import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
// import logo from '../image/img1'
const ele = <FontAwesomeIcon icon={faCog} />
export default class Automotive extends Component {
  render() {

    return (
      <div className="container-fluid">
       
        <div className="row">
          <div className="col-sm-6">
            <h1>Automotive</h1>
            {ele}
            <h1>Automotive</h1>
            <h1>Automotive</h1>
            <h1>Automotive</h1>
            <h1>Automotive</h1>
            <h1>Automotive</h1>
            <img src='./' alt="" srcset="" />
          </div>
          <div className="col-sm-6">
            <h1>Automotive</h1>
            <h1>Automotive</h1>
            <h1>Automotive</h1>
            <h1>Automotive</h1>
            <h1>Automotive</h1>
            <h1>Automotive</h1>
          </div>

        </div>
      </div>
    );
  }
}
