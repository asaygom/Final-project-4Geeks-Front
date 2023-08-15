import PropTypes from 'prop-types';
import {Avatar, Box, Stack} from '@mui/material';
import { alpha } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
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
          top: 10,
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
        <Stack
          justifyContent="end"
          direction="row"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2
          }}
        >
            <Avatar
              onClick={()=>navigate("/profile")}
              sx={{
                cursor: 'pointer',
                height: 40,
                width: 40
              }}
              src="/assets/avatars/avatar-anika-visser.png"
            />
        </Stack>
      </Box>
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};