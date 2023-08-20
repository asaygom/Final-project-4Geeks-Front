import { useContext, useEffect } from "react";
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { OverviewGoals } from '../components/OverviewGoals';
import { OverviewRoutines } from '../components/OverviewRoutines';
import { TopNav } from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { Context } from "../store/context";

const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(()=>{actions.syncTokenFromSessionStorage()},[])

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
            <OverviewGoals
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.6k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewRoutines
              sx={{ height: '100%' }}
              value={75.5}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
    <BottomNav navToggle="home"/>
  </>
)};

export default Home;