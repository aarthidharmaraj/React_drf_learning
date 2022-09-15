import { Route, Routes } from "react-router-dom";
import Navigate from "./Navigate";
import Home from "../pages/Home";
import About from "../pages/About";

// import RegisteredUsers from "../components/RegisteredUsers";
import RegisteredUsers from "../pages/RegisteredUsers";
import AddUsers from "../pages/AddUsers";
import EditUser from "../pages/EditUser";
import LogIn from "../pages/LogIn";
import LogOut from "../pages/LogOut";
// import UserLogin from "../components/UserLogin";

function router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="register" element={<AddUsers />}></Route>
        <Route path="displayusers" element={<RegisteredUsers />}></Route>
        <Route path="edituser/:id" element={<EditUser />}></Route>
        <Route path="login" element={<LogIn />}></Route>
        <Route path="logout" element={<LogOut />}></Route>
        {/*<Route path="register/login" element={<UserLogin />}></Route>
        <Route path="login/register" element={<RegisterForm2 />}></Route> */}
      </Route>
    </Routes>
  );
}
export default router;
