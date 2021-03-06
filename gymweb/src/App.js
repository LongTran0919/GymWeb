import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect ,useContext} from 'react';
import Navbar from './Frontend/component/Navbar';
import Header from './Frontend/component/Header';
import Form from './Frontend/component/FormRegister/Form';
import FormLoginMain from './Frontend/component/FormLogin/FormLoginMain';
import MainContent from './Frontend/component/product/mainContent';
import Details from './Frontend/component/product/Details';
import DataProvider from './Frontend/component/product/data/DataProvider';
import Footer from './Frontend/component/Footer';
import AdminPro from './Frontend/component/AdminManagement/AdminManagement';
import Profile from './Frontend/component/Profile/Profile';
import AdminAddLesson from './Frontend/component/AdminAddLesson/AdminAddLesson';
import About from './Frontend/component/Info/About';
import ContactUs from './Frontend/component/Info/ContactUs';
import BMI from './Frontend/component/BMIChart/BMIChart';
import AdminUpdate from'./Frontend/component/AdminUpdate/AdminUpdate';
import Plan from './Frontend/component/Planing/Plan';
import AddPlan from './Frontend/component/Planing/AddPlan';
import AdminUpdateLesson from './Frontend/component/AdminUpdateLesson/AdminUpdateLesson';
import {BrowserRouter as Router,Switch,Route} from'react-router-dom';
import NotFound from './Frontend/component/404page/404';
function App() {
  return (
      <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Header}/>
                <Route path="/signup" component={Form}/>
                <Route path="/products" component={MainContent}/>
                <Route path="/product/:id" component={Details}/>
                <Route path="/admin/product/update/:id" component={AdminUpdate}/>
                <Route path="/signin" component={FormLoginMain}/>
                <Route path="/admin/management" component={AdminPro}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/admin/add" component={AdminAddLesson}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={ContactUs}/>
                <Route path="/bmi" component={BMI}/>
                <Route path="/plan" component={Plan}/>
                <Route path="/addplan" component={AddPlan}/>
                <Route component={NotFound} />
              </Switch>
            <Footer/>
      </Router>
    
  );
}

export default App;
