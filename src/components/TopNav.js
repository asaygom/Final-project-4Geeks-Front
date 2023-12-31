import { useContext } from "react";
import PropTypes from 'prop-types';
import {Avatar, Box, Stack} from '@mui/material';
import { alpha } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
import { Context } from "../store/context";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { store } = useContext(Context);
  const navigate=useNavigate()

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: 'sticky',
          right: {
            lg: `${SIDE_NAV_WIDTH}px`
          },
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2
          }}
        >
          <img height="40px" src="http://localhost:3000/FitnessTrackerLogo.png" alt="FitnessTracker Logo"/>
          <Avatar
            onClick={()=>navigate("/profile")}
            sx={{
              cursor: 'pointer',
              height: 40,
              width: 40
            }}
            src={store.userLoggedIn.photo_link}
          />
        </Stack>
      </Box>
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};