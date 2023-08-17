import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import ChangePassword from "./views/ChangePassword";
import PasswordChanged from "./views/PasswordChanged";
import Profile from "./views/Profile";
import "./App.css";
import injectContext from "./store/context";
import MembersList from "./views/MembersList";
import Equipment from "./views/Equipment";
import SetEquipment from "./views/SetEquipment";
import Signup from "./views/Signup";
import EquipmentInfo from "./views/EquipmentInfo";
import Routine from "./views/Routine";
import NewRoutine from "./views/NewRoutine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/change_password" element={<ChangePassword />} />
        <Route path="/password_changed" element={<PasswordChanged />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/members_list" element={<MembersList />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/set_equipment/:id" element={<SetEquipment />} />
        <Route path="/newuser" element={<Signup />} />
        <Route path="/equipment_info/:id" element={<EquipmentInfo />} />
        <Route path="/routines" element={<Routine />} />
        <Route path="/newroutine" element={<NewRoutine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
