import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigate from "./Navigate";
import Home from "../utils/Home";
import About from "../utils/About";
import RegisterNewUser2 from "../components/RegisterNewUser2";
import RegisteredUsers from "../components/RegisteredUsers";
import UserLogin from "../components/UserLogin";

function router() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="register" element={<RegisterNewUser2 />}></Route>
          <Route path="display_users" element={<RegisteredUsers />}></Route>
          <Route path="login" element={<UserLogin />}></Route>
          <Route path="register/login" element={<UserLogin />}></Route>
          <Route path="login/register" element={<RegisterNewUser2 />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}
export default router;
