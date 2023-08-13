import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Paper from '@mui/material/Paper';
import {useNavigate} from "react-router-dom";

export default function BottomNav(){
  const navigate=useNavigate()

    return(
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction onClick={()=>navigate('/home')} label="Home"  />
          <BottomNavigationAction label="Training plan"  />
          <BottomNavigationAction label="Routines"  />
          <BottomNavigationAction label="Exercises"  />
        </BottomNavigation>
        </Paper>
    )
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
