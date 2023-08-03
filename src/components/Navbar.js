import { BottomNavigation, BottomNavigationAction } from "@mui/material";

export default function Navbar(){
    return(
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
        </BottomNavigation>
    )
};
