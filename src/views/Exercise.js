import { useContext, useEffect } from "react";
import { Stack, Button, Box, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import ExerciseCard from '../components/ExerciseCard';
import { TopNav } from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { SearchBar } from '../components/SearchBar';
import { Context } from "../store/context";
import {useNavigate} from "react-router-dom";

function Exercise() {
    const { store, actions } = useContext(Context);
    const navigate=useNavigate()
    useEffect(()=>{actions.getExercise()},[])
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
                      Exercise
                      </Typography>
                  </Stack>
                  <div>
                      <Button
                      onClick={()=>navigate('/set_exercise/new')}
                      variant="contained"
                      >
                      Add
                      </Button>
                  </div>
              </Stack>
              <SearchBar />
              <Grid
              container
              spacing={1}
              >
                {store.listOfExercises.data?.map((exercise,index)=>{
                  return <Grid onClick={()=>navigate("/exercise_info/"+exercise.id)} key={index} xs={6} sm={6} lg={3}>
                    <ExerciseCard id={exercise.id} exercise_name={exercise.name} exercise_image="https://www.bestusedgymequipment.com/wp-content/uploads/2020/09/cybex-vr2-chestpress-1-1.jpg"/>
                    </Grid>})}
              </Grid>
          </Stack>
        </Container>
      </Box>
      <BottomNav />
    </>
  )
};

export default Exercise;