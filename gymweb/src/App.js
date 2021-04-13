import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Frontend/component/Navbar';
import Header from './Frontend/component/Header';
<<<<<<< HEAD
<<<<<<< HEAD
import Register from './Frontend/component/formRegister/Register';
import SignIn from './Frontend/component/formSignIn/SignIn'
=======
import Form from './Frontend/component/Form';
>>>>>>> parent of 6b788a3 (Merge branch 'main' of https://github.com/LongTran0919/GymWeb into main)
=======
import Form from './Frontend/component/Form';
>>>>>>> parent of 6b788a3 (Merge branch 'main' of https://github.com/LongTran0919/GymWeb into main)
import {BrowserRouter as Router,Switch,Route} from'react-router-dom';




function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route path="/home" component={Header}/>
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path="/signup" component={Register}/>
            <Route path="/signin" component={SignIn}/>
=======
            <Route path="/signup" component={Form}/>
>>>>>>> parent of 6b788a3 (Merge branch 'main' of https://github.com/LongTran0919/GymWeb into main)
=======
            <Route path="/signup" component={Form}/>
>>>>>>> parent of 6b788a3 (Merge branch 'main' of https://github.com/LongTran0919/GymWeb into main)
        </Switch>
 </Router>
  );
}

export default App;
