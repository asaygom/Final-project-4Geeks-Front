import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import "./App.css";
import injectContext from "./store/context";
import Signup from "./views/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createuser" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
