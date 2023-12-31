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
        <Button onClick={()=>{actions.deleteEquipment(id); navigate("/equipment")}} color="error" variant="text" size="small">Remove</Button>
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
              {store.equipment.status === "not_working" ? "Status: Not working" : store.equipment.status ==="working" ? "Status:  Working" : store.equipment.status ==="malfunction" ? "Status:  Malfunction" : null}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {store.equipment.is_active ? "Active" : "Not active"}
            </Typography>
            <Box sx={{textAlign: 'center', marginBottom:5}}>
                <img height="300px" src={store.equipment.photo_link} alt={store.equipment.name}/>
            </Box>
          </Grid>
        </Grid>
      </Container>
        <Fab onClick={()=>navigate("/set_equipment/"+store.equipment.id)} color="primary" aria-label="delete" sx={{position: 'absolute', bottom: 100, right: 16}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
        </Fab>
    </Box>
    <BottomNav />
    </>
  )
};

export default EquipmentInfo;