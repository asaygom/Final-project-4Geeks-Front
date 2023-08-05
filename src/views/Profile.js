import { Button,Typography, Avatar, Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import BottomNav from '../components/BottomNav';

const Profile = () => (
  <>
    <Button variant="text" size="small">Back</Button>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={12}
            lg={12}
          >
            <Avatar
              sx={{
                height: 200,
                width: 200,
                margin: 'auto'
              }}
              src="/assets/avatars/avatar-anika-visser.png"
            />
            <Box sx={{textAlign: 'center'}}>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="overline"
            >
              Change profile picture
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
            >
              John Doe
            </Typography>
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <Typography
              gutterBottom
              variant="h6"
            >
              Members
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              Status
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              Since
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <Typography
              gutterBottom
              variant="h6"
            >
              Change password
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              Logout
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <BottomNav />
  </>
);

export default Profile;