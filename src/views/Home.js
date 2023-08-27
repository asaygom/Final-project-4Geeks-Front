import { useContext, useEffect } from "react";
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { UsersSummary } from '../components/UsersSummary';
import { RoutinesSummary } from '../components/RoutinesSummary';
import { EquipmentSummary } from "../components/EquipmentSummary";
import { TopNav } from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { Context } from "../store/context";

const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(()=>{actions.syncTokenFromSessionStorage();actions.getMembers();actions.getActivesMembers();actions.getTrainers();actions.getActivesTrainers();actions.getEquipment();actions.getEquipmentSummary()},[])

  if (store.userLoggedIn.role==="admin" || store.userLoggedIn.role==="trainer"){
    return(
    <>
    <TopNav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
          >
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <UsersSummary
                users="members"
                actives={store.listOfActivesMembers.length}
                sx={{ height: '100%' }}
                value={store.listOfMembers.length}
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <UsersSummary
                users="trainers"
                actives={store.listOfActivesTrainers.length}
                sx={{ height: '100%' }}
                value={store.listOfTrainers.length}
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <EquipmentSummary
                status1={store.listOfWorkingEquipments.length}
                status2={store.listOfMalfunctionEquipments.length}
                status3={store.listOfNotWorkingEquipments.length}
                sx={{ height: '100%' }}
                value={store.listOfEquipments.length}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <BottomNav navToggle="home"/>
    </>
  )};

  if (store.userLoggedIn.role==="member"){
    return(
    <>
    <TopNav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
          >
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <RoutinesSummary
                sx={{ height: '100%' }}
                value={50}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <BottomNav navToggle="home"/>
    </>
  )};

}

export default Home;