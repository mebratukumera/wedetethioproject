import React, { Component } from 'react';

const Overview = () => (
    <div className='row' style={{ textAlign: 'center', }}>
        <h4 className='col-sm-12'>Overview of Activity</h4>
        <div className="col-sm-12">
            <div className="row" >
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <div className="row">
                        <div className='col-sm-3'>
                            <div className='ReviewCircle'>
                                <span>175</span>
                            </div>
                            <span>Reviews</span>
                        </div>
                        <div className='col-sm-3' >
                            <div className='ReviewCircle'>
                                <span >54</span>
                            </div>
                            <span>Comments</span>
                        </div>
                        <div className='col-sm-3' >
                            <div className='ReviewCircle' >
                                <span >12</span>
                            </div>
                            <span>Photos</span>
                        </div>
                        <div className='col-sm-3 '>
                            <div className='ReviewCircle' >
                                <span>24</span>
                            </div>
                            <span >Bookmarks</span>
                        </div>
                    </div>

                </div>
                <div className="col-sm-3"></div>

            </div>

        </div>
    </div>

)
// this is the comment section for
const Reviews = props => {
    return (
        <div className='row' style={{ textAlign: 'center' }}>
            <h4 className='col-sm-12'>Review by Catagory</h4>
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-4 ">
                        <ul className='reviewCatagory'>
                            <h5 style={{ textAlign: 'left', }}>Price</h5>
                            <li style={{ width: '90%' }}>5 Stars</li>
                            <li style={{ width: '30%' }}>4 Stars</li>
                            <li style={{ width: '50%' }}>3 Stars</li>
                            <li style={{ width: '40%' }}>2 Stars</li>
                            <li>1 Stars</li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <ul className='reviewCatagory'>
                            <h5 style={{ textAlign: 'left', }}>Service</h5>
                            <li style={{ width: '70%' }}>5 Stars</li>
                            <li style={{ width: '50%' }}>4 Stars</li>
                            <li style={{ width: '55%' }}>3 Stars</li>
                            <li style={{ width: '40%' }}>2 Stars</li>
                            <li>1 Stars</li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <ul className='reviewCatagory'>
                            <h5 style={{ textAlign: 'left', }}>Quality</h5>
                            <li style={{ width: '70%' }}>5 Stars</li>
                            <li style={{ width: '50%' }}>4 Stars</li>
                            <li style={{ width: '55%' }}>3 Stars</li>
                            <li style={{ width: '40%' }}>2 Stars</li>
                            <li>1 Stars</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
const _reviewResponse = props => {
    return (
        <div className='row' style={{ textAlign: 'center', }}>
            <h5 className='col-sm-12'>Review Response</h5>
            <div className="col-sm-12">
                <div className="row" >
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <div className="row">

                            <div className='col-sm-4' >
                                <div className='reviewResponseCircle'>
                                    <span >3</span>
                                </div>
                                <span>Exellent</span>
                            </div>
                            <div className='col-sm-4' >
                                <div className='reviewResponseCircle' >
                                    <span >12</span>
                                </div>
                                <span>Good</span>
                            </div>
                            <div className='col-sm-4 '>
                                <div className='reviewResponseCircle' >
                                    <span>10</span>
                                </div>
                                <span >Funny</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-4"></div>

                </div>

            </div>

        </div>
    )
}
export default class extends Component{
    render() {
        return (
            <div>
            <Overview />
            <br />
            <hr />
            <br />
            <Reviews />
            <br />
            <hr />
            <br />
            <_reviewResponse />
            <br />
            <br />
        </div>
        )
    }
}