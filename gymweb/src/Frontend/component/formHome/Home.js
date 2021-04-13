import React, { Component } from 'react';
import { render } from 'react-dom';
import CardUI from "../CardUI/CardUI"

const Home =()=>{
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                    <CardUI/>
                    </div>

                    <div className="col-md-4">
                    <CardUI/>
                    </div>

                    <div className="col-md-4">
                    <CardUI/>
                    </div>
                    
                </div>
            </div>
        )
            
}

export default Home;