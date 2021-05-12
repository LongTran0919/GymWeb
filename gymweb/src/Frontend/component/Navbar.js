import React from "react";
import logo from "../IMG/spatan.jpg"
import './Form.css';
function Navbar(){
    


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-blue">
            <div className="container-fluid">
            <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo...."></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/products">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contacts">Contacts</a>
                </li>
                </ul>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <a className="btn-sign-up nav-link" href="/signup">Sign Up</a>
                </li>
                <li className="nav-item">
                    <a className="btn-sign-up nav-link" href="/signin">Sign In</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar

