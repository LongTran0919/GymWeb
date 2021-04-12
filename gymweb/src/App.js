import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Frontend/component/Navbar';
import Header from './Frontend/component/Header';
import Form from './Frontend/component/Form';
import {BrowserRouter as Router,Switch,Route} from'react-router-dom';




function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route path="/home" component={Header}/>
            <Route path="/signup" component={Form}/>
        </Switch>
 </Router>
  );
}

export default App;
