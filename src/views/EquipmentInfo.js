import { useContext, useEffect } from "react";
import { Stack, Button, Box, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import BottomNav from '../components/BottomNav';
import { Context } from "../store/context";
import {useNavigate, useParams} from "react-router-dom";

function EquipmentInfo(props) {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{actions.getEquipmentInfo(id)},[])

  return(
    <>
      <Stack
      direction="row"
      justifyContent="space-between"
      spacing={4}
      >
        <Button onClick={()=>navigate("/equipment")} variant="text" size="small">Back</Button>
        <Button onClick={()=>navigate("/set_equipment/"+store.equipment.id)} variant="text" size="small">Edit</Button>
      </Stack>
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
            <Box sx={{textAlign: 'center', marginBottom:5}}>
            <Typography
              gutterBottom
              variant="h5"
            >
              Equipment info
            </Typography>
            </Box>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Name: " + store.equipment.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Description: " + store.equipment.description}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Status: " + store.equipment.status}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Active: " + store.equipment.is_active}
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
          </Grid>
        </Grid>
      </Container>
        <Fab onClick={()=>actions.deleteEquipment(id)} color="error" aria-label="delete" sx={{position: 'absolute', bottom: 100, right: 16}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </Fab>
    </Box>
    <BottomNav />
    </>
  )
};

export default EquipmentInfo;