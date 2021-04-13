import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Frontend/component/Navbar';
import Header from './Frontend/component/Header';
import Register from './Frontend/component/formRegister/Register';
import SignIn from './Frontend/component/formSignIn/SignIn'
import {BrowserRouter as Router,Switch,Route} from'react-router-dom';




function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route path="/home" component={Header}/>
            <Route path="/signup" component={Register}/>
            <Route path="/signin" component={SignIn}/>
        </Switch>
 </Router>
  );
}

export default App;
