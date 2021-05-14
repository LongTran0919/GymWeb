import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
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

import {BrowserRouter as Router,Switch,Route} from'react-router-dom';

function App() {
  return (
    <DataProvider>
      <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Header}/>
                <Route path="/signup" component={Form}/>
                <Route path="/products" component={MainContent}/>
                <Route path="/product/:id" component={Details}/>
                <Route path="/signin" component={FormLoginMain}/>
                <Route path="/admin/management" component={AdminPro}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/admin/add" component={AdminAddLesson}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={ContactUs}/>
                <Route path="/bmi" component={BMI}/>
              </Switch>
            <Footer/>
      </Router>
    </DataProvider>
  );
}

export default App;
