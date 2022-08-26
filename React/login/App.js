import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./login/Home.js";
import About from "./login/About.js";
import UserLogin from "./login/UserLogin.js";
// import RegisterNewUser from './login/RegisterComp.js'
import RegisteredUsers from "./login/RegisteredUsers";
import RegisterNewUser from "./login/RegisterUserComp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="register" element={<RegisterNewUser />}></Route>
          <Route path="display_users" element={<RegisteredUsers />}></Route>
          <Route path="login" element={<UserLogin />}></Route>
          <Route path="register/login" element={<UserLogin />}></Route>
          <Route path="login/register" element={<RegisterNewUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
