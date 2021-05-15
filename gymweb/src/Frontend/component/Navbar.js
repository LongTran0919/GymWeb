import React,{useContext} from "react";
import logo from "../IMG/spatan.jpg"
import './Form.css';
import { AuthContext } from '../../Backend/Context/AuthContext';
import Authservice from '../../Backend/Service/AuthService'
import {FaUserAlt,FaSignOutAlt,FaExpeditedssl}    from 'react-icons/fa';
import {GrLogin,GrContactInfo} from "react-icons/gr";
import {ImHome} from "react-icons/im";
import {GiWeightLiftingUp}   from "react-icons/gi";
import {FcAbout} from "react-icons/fc"
function Navbar(){
    const {isAuthenticated,user,setisAuthenticated,setUser} = useContext(AuthContext);
    const logout= e=>{
        e.preventDefault();
        Authservice.logout().then(
            data=>{
              const {isAuthenticated,user}=data;
                console.log("logout "+isAuthenticated)
                setUser(user);
                 setisAuthenticated(isAuthenticated);
            }
      
          )
    }
    
    const unAuthenticatednav=()=>{
        return(  <nav className="navbar navbar-expand-lg navbar-light bg-blue">
        <div className="container-fluid">
        <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo...."></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
        </button>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/"> <ImHome/> Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/products"> <GiWeightLiftingUp/> Products </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/about"> <FcAbout/>  About </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contacts"> <GrContactInfo/> Contacts </a>
            </li>
            </ul>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <a className="btn-sign-up nav-link " href="/signup"> <FaExpeditedssl/> Sign up  </a>
            </li>
            <li className="nav-item">
             <a className="btn-sign-up nav-link" href="/signin">Sign in <GrLogin/> </a>
            </li>
            </ul>
        </div>
        </div>
    </nav>)
    }
    const Authenticatednav=()=>{
        return( <nav className="navbar navbar-expand-lg navbar-light bg-blue">
        <div className="container-fluid">
        <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo...."></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
        </button>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/"> <ImHome/> Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/products"> <GiWeightLiftingUp/> Products </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/about">  <FcAbout/> About </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contacts"><GrContactInfo/> Contacts </a>
            </li>
            </ul>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
           <a className=" nav-link" href="/profile"> <FaUserAlt/> {user.username}</a>
            </li>
            <li className="nav-item">
                <a className="btn-sign-up nav-link" onClick={logout} href="/"> Logout <FaSignOutAlt/></a>
            </li>
            </ul>
        </div>
        </div>
    </nav>)
    }
    return (
        !isAuthenticated ?unAuthenticatednav():Authenticatednav()
       
    );
}

export default Navbar

