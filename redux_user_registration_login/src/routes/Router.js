import { Route, Routes } from "react-router-dom";
import Navigate from "./Navigate";
import Home from "pages/Home";
import About from "pages/About";
import RegsiterForm from "components/RegisterForm";
import EditUserForm from "components/EditUserForm";
import DisplayUsers from "containers/DisplayUsers";
import UserLogin from "components/UserLogin";
import UserLogOut from "components/UserLogout";

function router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="register" element={<RegsiterForm />}></Route>
        <Route path="displayusers" element={<DisplayUsers />}></Route>
        <Route path="edituser/:id" element={<EditUserForm />}></Route>
        <Route path="login" element={<UserLogin />}></Route>
        <Route path="logout" element={<UserLogOut />}></Route>
      </Route>
    </Routes>
  );
}
export default router;
