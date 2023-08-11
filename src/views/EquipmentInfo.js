import { useContext, useEffect } from "react";
import { Button, Box, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import BottomNav from '../components/BottomNav';
import { Context } from "../store/context";

function EquipmentInfo(props) {
    const { store, actions } = useContext(Context);
    useEffect(()=>{actions.getEquipment()},[])

  return(
    <>
    <Box sx={{textAlign: 'space-between'}}>
      <Grid xs={6} sm={6} lg={6}>
        <Button variant="text" size="small">Back</Button>
      </Grid>
      <Grid xs={6} sm={6} lg={6}>
        <Button variant="text" size="small">Edit</Button>
      </Grid>
    </Box>
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
            <Box sx={{textAlign: 'center'}}>
            <Typography
              gutterBottom
              variant="h5"
            >
              Equipment
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
              {"Name: " + props.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Description: " + props.description}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Status: " + props.status}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
            >
              {"Active: " + props.is_active}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <BottomNav />
    </>
  )
};

export default EquipmentInfo;