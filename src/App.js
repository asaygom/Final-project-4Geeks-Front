import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import ForgotPassword from './views/ForgotPassword'
import ChangePassword from './views/ChangePassword'
import PasswordChanged from './views/PasswordChanged'
import './App.css';
import injectContext from './store/context';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='/change_password' element={<ChangePassword />} />
        <Route path='/password_changed' element={<PasswordChanged />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
