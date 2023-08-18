import { useContext, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Paper from '@mui/material/Paper';
import {useNavigate} from "react-router-dom";
import { Context } from "../store/context";

export default function BottomNav(){
  const { store, actions } = useContext(Context);
  const navigate=useNavigate()
  if (store.user.role==="admin"){
    return(
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction onClick={()=>navigate('/home')} label="Home"  />
          <BottomNavigationAction label="Attendance"  />
          <BottomNavigationAction onClick={()=>navigate('/equipment')} label="Equipment"  />
          <BottomNavigationAction onClick={()=>navigate('/members_list')} label="Users"  />
        </BottomNavigation>
        </Paper>
    )}
  if (store.user.role==="member" || store.trainer){
    return(
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction onClick={()=>navigate('/home')} label="Home"  />
          <BottomNavigationAction label="Training plan"  />
          <BottomNavigationAction onClick={()=>navigate('/routines')} label="Routines"  />
          <BottomNavigationAction label="Exercises"  />
        </BottomNavigation>
        </Paper>
    )}
  };

/* con iconos y funcionalidad
<BottomNavigation
showLabels
value={value}
onChange={(event, newValue) => {
  setValue(newValue);
}}
>
<BottomNavigationAction label="Home" icon={<RestoreIcon />} />
<BottomNavigationAction label="Training plan" icon={<FavoriteIcon />} />
<BottomNavigationAction label="Routines" icon={<LocationOnIcon />} />
<BottomNavigationAction label="Exercises" icon={<LocationOnIcon />} />
</BottomNavigation> */
