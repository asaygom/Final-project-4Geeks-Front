import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import './App.css';
import injectContext from './store/context';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
