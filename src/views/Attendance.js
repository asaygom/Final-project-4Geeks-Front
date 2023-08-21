import { useContext, useEffect } from "react";
import { Stack, Button, Box, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { TopNav } from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { SearchBar } from '../components/SearchBar';
import { Context } from "../store/context";
import {useNavigate} from "react-router-dom";

function Attendance() {
    const { store, actions } = useContext(Context);
    const navigate=useNavigate()

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
          <Stack spacing={1}>
              <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
              >
                  <Stack spacing={1}>
                      <Typography variant="h4">
                      Attendance
                      </Typography>
                  </Stack>
              </Stack>
              <SearchBar />
              <Grid
              container
              spacing={1}
              >
              </Grid>
          </Stack>
        </Container>
      </Box>
      <BottomNav navToggle="attendance"/>
    </>
  )
};

export default Attendance;