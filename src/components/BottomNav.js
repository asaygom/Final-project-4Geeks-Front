import { useContext } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Paper from '@mui/material/Paper';
import {useNavigate} from "react-router-dom";
import { Context } from "../store/context";
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PeopleIcon from '@mui/icons-material/People';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import FlagIcon from '@mui/icons-material/Flag';

export default function BottomNav(props){
  const { store } = useContext(Context);
  const navigate=useNavigate()
  if (store.userLoggedIn.role==="admin"){
    return(
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation showLabels >
          {props.navToggle==="home" ? <BottomNavigationAction onClick={()=>navigate('/home')} label="Home" icon={<HomeIcon />} sx={{ color: 'info.dark' }} /> : <BottomNavigationAction onClick={()=>navigate('/home')} label="Home" icon={<HomeIcon />} /> }
          {props.navToggle==="attendance" ? <BottomNavigationAction onClick={()=>navigate('/attendance')} label="Attendance" icon={<FactCheckIcon />} sx={{ color: 'info.dark' }} /> : <BottomNavigationAction onClick={()=>navigate('/attendance')} label="Attendance" icon={<FactCheckIcon />} /> }
          {props.navToggle==="equipment" ? <BottomNavigationAction onClick={()=>navigate('/equipment')} label="Equipment" icon={<FitnessCenterIcon />} sx={{ color: 'info.dark' }} /> : <BottomNavigationAction onClick={()=>navigate('/equipment')} label="Equipment" icon={<FitnessCenterIcon />} />}
          {props.navToggle==="users" ? <BottomNavigationAction onClick={()=>navigate('/members_list')} label="Users" icon={<PeopleIcon />} sx={{ color: 'info.dark' }} /> : <BottomNavigationAction onClick={()=>navigate('/members_list')} label="Users" icon={<PeopleIcon />} />}
        </BottomNavigation>
        </Paper>
    )}
  if (store.userLoggedIn.role==="member" || store.trainer){
    return(
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation showLabels >
          {props.navToggle==="home" ? <BottomNavigationAction onClick={()=>navigate('/home')} label="Home" icon={<HomeIcon />} sx={{ color: 'info.dark' }} /> : <BottomNavigationAction onClick={()=>navigate('/home')} label="Home" icon={<HomeIcon />} /> }
          {props.navToggle === "training_plan" ? <BottomNavigationAction onClick={() => navigate('/trainingplan')} label="Training plan" icon={<FlagIcon />} sx={{ color: 'info.dark' }} /> : <BottomNavigationAction onClick={() => navigate('/trainingplan')} label="Training plan" icon={<FlagIcon />} />}
          {props.navToggle==="routines" ? <BottomNavigationAction onClick={()=>navigate('/routines')} label="Routines" icon={<FitnessCenterIcon />} sx={{ color: 'info.dark' }} /> : <BottomNavigationAction onClick={()=>navigate('/routines')} label="Routines" icon={<FitnessCenterIcon />} />}
          {props.navToggle==="exercises" ? <BottomNavigationAction onClick={()=>navigate('/exercise')} label="Exercises" icon={<SportsGymnasticsIcon />} sx={{ color: 'info.dark' }} /> : <BottomNavigationAction onClick={()=>navigate('/exercise')} label="Exercises" icon={<SportsGymnasticsIcon />} />}
        </BottomNavigation>
        </Paper>
    )}
  };