import { useContext, useEffect } from "react";
import { Stack, Button, Box, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import EquipmentCard from '../components/EquipmentCard';
import { TopNav } from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { SearchBar } from '../components/SearchBar';
import { Context } from "../store/context";
import {useNavigate} from "react-router-dom";

function Equipment() {
    const { store, actions } = useContext(Context);
    const navigate=useNavigate()
    useEffect(()=>{actions.getEquipment()},[])
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
                      Equipment
                      </Typography>
                  </Stack>
                  <div>
                      <Button
                      onClick={()=>navigate('/set_equipment/new')}
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
                {store.listOfEquipments.data?.map((equipment,index)=>{
                  return <Grid onClick={()=>navigate("/equipment_info/"+equipment.id)} key={index} xs={6} sm={6} lg={3}>
                    <EquipmentCard id={equipment.id} equipment_name={equipment.name} equipment_img={equipment.photo_link}/>
                    </Grid>})}
              </Grid>
          </Stack>
        </Container>
      </Box>
      <BottomNav />
    </>
  )
};

export default Equipment;