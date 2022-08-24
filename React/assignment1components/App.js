import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './components/Home.js';
import About from './components/About.js';
import UserLogin from './components/UserLogin.js'
import PersonList from './components/RegisterComp.js'
import RegisteredUsers from './components/RegisteredUsers';

function App() {
  return (
    <div>
      <Router>
      <Routes> 
        <Route path="*" element={<Home/>} ></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="register" element ={<PersonList/>} ></Route>
        <Route path="display_users" element ={<RegisteredUsers/>} ></Route>
        <Route path="login" element ={<UserLogin/>}></Route>
        <Route path="register/login" element ={<UserLogin/>}></Route>
        <Route path="login/register" element ={<PersonList/>}></Route>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
