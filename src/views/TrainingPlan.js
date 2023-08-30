import { useContext, useEffect } from "react";
import { Stack, Button, Box, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import TrainingPlanCard from '../components/TrainingPlanCard';
import { TopNav } from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { SearchBar } from '../components/SearchBar';
import { Context } from "../store/context";
import {useNavigate} from "react-router-dom";

function TrainingPlan() {
    const { store, actions } = useContext(Context);
    const navigate=useNavigate()
    useEffect(()=>{actions.getTrainingPlan()},[])
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
                      Training Plans
                      </Typography>
                  </Stack>
                  <div>
                      <Button
                      onClick={()=>navigate('/set_trainingplan/new')}
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
                {store.listOfTrainingPlans?.map((trainingplan,index)=>{
                  return <Grid onClick={()=>navigate("/trainingplan_info/"+trainingplan.id)} key={index} xs={6} sm={6} lg={3}>
                    <TrainingPlanCard id={trainingplan.id} trainingplan_name={trainingplan.name} trainingplan_img={trainingplan.photo_link}/>
                    </Grid>})}
              </Grid>
          </Stack>
        </Container>
      </Box>
      <BottomNav navToggle="trainingplans"/>
    </>
  )
};

export default TrainingPlan;