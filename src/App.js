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
import Exercise from './views/Exercise';
import SetExercise from './views/SetExercise';
import ExerciseInfo from './views/ExerciseInfo';
import TrainingPlan from './views/TrainingPlan';  //@@@
import SetTrainingPlan from './views/SetTrainingPlan';  //@@@
import TrainingPlanInfo from './views/TrainingPlanInfo';  //@@@
import Attendance from "./views/Attendance";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/change_password" element={<ChangePassword />} />
        <Route path="/password_changed" element={<PasswordChanged />} />
        <Route path="/newuser" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/members_list" element={<MembersList />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/set_equipment/:id" element={<SetEquipment />} />
        <Route path="/equipment_info/:id" element={<EquipmentInfo />} />
        <Route path="/routines" element={<Routine />} />
        <Route path="/newroutine" element={<NewRoutine />} />
        <Route path='/exercise' element={<Exercise />} />
        <Route path='/set_exercise/:id' element={<SetExercise />} />
        <Route path='/exercise_info/:id' element={<ExerciseInfo />} />
        <Route path='/trainingplan' element={<TrainingPlan />} />
        <Route path='/set_trainingplan/:id' element={<SetTrainingPlan />} />
        <Route path='/trainingplan_info/:id' element={<TrainingPlanInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
