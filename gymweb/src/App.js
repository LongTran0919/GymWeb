import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Frontend/component/Navbar';
import Register from './Frontend/component/formRegister/Register';
import SignIn from './Frontend/component/formSignIn/SignIn'
import {BrowserRouter as Router,Switch,Route} from'react-router-dom';
import Home from './Frontend/component/formHome/Home';




function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/signup" component={Register}/>
            <Route path="/signin" component={SignIn}/>
        </Switch>
 </Router>
  );
}

export default App;
