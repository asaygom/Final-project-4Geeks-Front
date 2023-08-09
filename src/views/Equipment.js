import { useContext, useEffect, useState } from "react";
import { Stack, Button, Box, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import EquipmentCard from '../components/EquipmentCard';
import { TopNav } from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { SearchBar } from '../components/SearchBar';
import { Context } from "../store/context";

function Equipment() {
    const { store, actions } = useContext(Context);
    useEffect(()=>{actions.getEquipment()},[])

  return(
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
          <Stack spacing={3}>
              <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
              >
                  <Stack spacing={1}>
                      <Typography variant="h4">
                      Equipment
                      </Typography>
                  </Stack>
                  <div>
                      <Button
                      variant="contained"
                      >
                      Add
                      </Button>
                  </div>
              </Stack>
              <SearchBar />
              <Grid
              container
              spacing={3}
              >
                {Object.values(store.listOfEquipments.data).map((equipment,index)=>{return <Grid xs={6} sm={6} lg={3}><EquipmentCard key={index} equipment_name={equipment.name} equipment_img="https://www.bestusedgymequipment.com/wp-content/uploads/2020/09/cybex-vr2-chestpress-1-1.jpg"/></Grid>})}
              </Grid>
          </Stack>
        </Container>
      </Box>
      <BottomNav />
    </>
  )
};

export default Equipment;