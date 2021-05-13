import React from 'react';
import img from '../../IMG/soi.jpg'

export default function About(props) {
    return (

        <div className="container">
            <div className="row">
                <h1>About Our Team</h1>
            </div>
            <div className="row">

                <div className="col-md-4 ava-border">
                    <img alt="avatar" className="dev-ava" src={img}/>

                    <h2>Dev-Name</h2>
                    <h4>Working</h4>
                </div>
                
                
                <div className="col-md-4 ava-border">
                    <img alt="avatar" className="dev-ava" src={img}/>

                    <h2>Dev-Name</h2>
                    <h4>Working</h4>
                </div>
                

                <div className="col-md-4 ava-border">
                    <img alt="avatar" className="dev-ava" src={img}/>

                    <h2>Dev-Name</h2>
                    <h4>Working</h4>
                </div>

            </div>
        </div>
    );
}
