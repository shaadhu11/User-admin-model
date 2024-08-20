import Reactfr from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/loginSignup/SignUp.js';
import SignIn from './components/loginSignIn/SignIn.jsx';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element ={<SignIn/>}/>
          <Route path='/SignUp' element ={<SignUp/>}/>
        </Routes>
      </Router>
    
      
    </>
    
      );
}

export default App;
