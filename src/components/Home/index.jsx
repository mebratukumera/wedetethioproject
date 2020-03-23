import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='row' style={{
          // marginTop: '10%',
          margin:'15%'
        }}>
          <div className="col-md-6">
              <div class="input-group mb-2">
               <div class="input-group-prepend">
                <div class="input-group-text" style={{borderRadius:'40px 0px 0px 40px'}}>Find</div>
                </div>
                  <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Restaurants, Hotels, Hospitals, Automotive" style={{borderRadius:'00px 40px 40px 0px', border:'none'}} />
              </div>
          </div>
          <div className="col-md-6">
              <div class="input-group mb-2">
               <div class="input-group-prepend">
                <div class="input-group-text" style={{borderRadius:'40px 0px 0px 40px'}}>Near</div>
                </div>
                  <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Bole" style={{borderRadius:'00px 40px 40px 0px', border:'none'}} />
              </div>
          </div>
      </div>
        <div style={{ marginBottom:'-2%', background:'var(--mainWhite)' }}>
          <div className='Row' style={{textAlign:'center', margin:'2%'}}>
              <h1 style={{color:'var(--mainYellow)'}}>Search by Category</h1>
            <div className='home_menu'>
              <span>Hello World</span>
              <span>Hello World</span>
              <span>Hello World</span>
              <span>Hello World</span>
            </div>
            <h1>HEEEEE</h1>
            <h1>HEEEEE</h1>
            <h1>HEEEEE</h1>
            <h1>HEEEEE</h1>
         </div>
         
      </div>
      </div>
    );
  }
}
