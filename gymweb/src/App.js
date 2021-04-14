import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Frontend/component/Navbar';
import Header from './Frontend/component/Header';
import Form from './Frontend/component/FormRegister/Form';
import FormLoginMain from './Frontend/component/FormLogin/FormLoginMain';
import MainContent from './Frontend/component/product/mainContent';



import {BrowserRouter as Router,Switch,Route} from'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route path="/home" component={Header}/>
            <Route path="/signup" component={Form}/>
            <Route path="/products" component={MainContent}/>
            <Route path="/login" component={FormLoginMain}/>
        
        </Switch>
 </Router>
  );
}

export default App;
