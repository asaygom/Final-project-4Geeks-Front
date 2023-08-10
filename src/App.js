<<<<<<< HEAD
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
import Signup from "./views/Signup";
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import ForgotPassword from './views/ForgotPassword'
import ChangePassword from './views/ChangePassword'
import PasswordChanged from './views/PasswordChanged'
import Profile from './views/Profile'
import './App.css';
import injectContext from './store/context';
import MembersList from './views/MembersList';
import Equipment from './views/Equipment';
import SetEquipment from './views/SetEquipment';
>>>>>>> 392df6e2e680a08a7352ae1ce582fecba57c091a

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/change_password" element={<ChangePassword />} />
        <Route path="/password_changed" element={<PasswordChanged />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/members_list" element={<MembersList />} />
        <Route path="/newuser" element={<Signup />} />
=======
        <Route path='/' element={<Login />} />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='/change_password' element={<ChangePassword />} />
        <Route path='/password_changed' element={<PasswordChanged />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/members_list' element={<MembersList />} />
        <Route path='/equipment' element={<Equipment />} />
        <Route path='/set_equipment' element={<SetEquipment />} />
>>>>>>> 392df6e2e680a08a7352ae1ce582fecba57c091a
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
