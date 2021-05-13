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
import AdminPro from './Frontend/component/Admin/AdminProduct';
import Profile from './Frontend/component/Profile/Profile';
import AdminAddLesson from './Frontend/component/Admin/AdminAddLesson';
import About from './Frontend/component/Info/About';
import ContactUs from './Frontend/component/Info/ContactUs';

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
                <Route path="/admin/products" component={AdminPro}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/admin/add" component={AdminAddLesson}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={ContactUs}/>
              </Switch>
            <Footer/>
      </Router>
    </DataProvider>
  );
}

export default App;
