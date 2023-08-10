import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { OverviewGoals } from '../components/OverviewGoals';
import { OverviewRoutines } from '../components/OverviewRoutines';
import { TopNav } from '../components/TopNav';
import BottomNav from '../components/BottomNav';

const Home = () => (
  <>
  <TopNav />
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 5
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
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
    <BottomNav />
  </>
);

export default Home;