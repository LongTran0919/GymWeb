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
              </Switch>
            {/* <Footer/> */}
      </Router>
    </DataProvider>
  );
}

export default App;
