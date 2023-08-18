import { useContext, useEffect } from "react";
import { Button,Typography, Avatar, Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import BottomNav from '../components/BottomNav';
import {useNavigate, useParams} from "react-router-dom";
import { Context } from "../store/context";

const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate=useNavigate()
  
  if (store.user.role==="admin"){
    return (
    <>
      <Button onClick={()=>navigate('/home')} variant="text" size="small">Back</Button>
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
                src={store.user.photo_link}
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
                {store.user.name +" "+ store.user.last_name}
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
                Change password
              </Typography>
              <Button onClick={()=>{actions.logout(); navigate('/')}}>
              <Typography
                gutterBottom
                variant="h6"
              >
                Logout
              </Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <BottomNav />
    </>
  )}

  if (store.user.role==="member" || store.trainer){
    return (
    <>
      <Button onClick={()=>navigate('/home')} variant="text" size="small">Back</Button>
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
                src={store.user.photo_link}
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
                {store.user.name +" "+ store.user.last_name}
              </Typography>
              </Box>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              {store.trainer.name!=="" ? null :
              <>
              <Typography
                gutterBottom
                variant="h6"
              >
                {store.user.trainer_id ? "Trainer: "+store.user.trainer_id : "Trainer: without trainer"}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
              >
                {store.user.is_active ? "Status: Active": "Status: Not active"}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
              >
                {"Since: "+store.user.subscription_date}
              </Typography></> }
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
              <Button onClick={()=>{actions.logout(); navigate('/')}}>
              <Typography
                gutterBottom
                variant="h6"
              >
                Logout
              </Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <BottomNav />
    </>
  )}
  };

export default Profile;