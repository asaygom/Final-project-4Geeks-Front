import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import {useNavigate, useParams} from "react-router-dom";

export default function SetEquipment() {
    const { store, actions } = useContext(Context);
    const navigate=useNavigate()
    const {id} = useParams()
    useEffect(() => {
        if (id === "new") {
            actions.cleanEquipmentInfo()
        }
        else {
            actions.getEquipmentInfo(id);
        }
    }, []);

    if (id==="new"){
        return (
          <>
              <Button onClick={()=>navigate('/equipment')} variant="text" size="small">Back</Button>
              <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                  sx={{
                  marginTop: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  }}
              >
                  <Typography component="h1" variant="h5">
                  New equipment
                  </Typography>
                  <Box component="form" noValidate onSubmit={(event)=>{actions.handleSubmitEquipment(event);navigate('/equipment')}} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                      <Grid item xs={12}>
                      <TextField
                          name="name"
                          value={store.equipment.name}
                          onChange={actions.handleChangeEquipment}
                          required
                          fullWidth
                          id="equipment_name"
                          label="Name"
                          autoFocus
                      />
                      </Grid>
                      <Grid item xs={12}>
                      <TextField
                          name="description"
                          value={store.equipment.description}
                          onChange={actions.handleChangeEquipment}
                          required
                          fullWidth
                          id="equipment_description"
                          label="Description"
                      />
                      </Grid>
                      <Grid item xs={12}>
                          <InputLabel id="equipment_status_label">Status</InputLabel>
                          <Select
                          name='status'
                          labelId="equipment_status_label"
                          id="equipment_status"
                          value={store.equipment.status}
                          label="Status"
                          displayEmpty
                          onChange={actions.handleChangeEquipment}
                          >
                              <MenuItem value=""><em>Select status</em></MenuItem>
                              <MenuItem value='malfunction'>Malfunction</MenuItem>
                              <MenuItem value='not_working'>Not working</MenuItem>
                              <MenuItem value='working'>Working</MenuItem>
                          </Select>
                      </Grid>
                      <Grid item xs={12}>
                      <FormControlLabel
                          control={<Checkbox name='is_active' checked={store.equipment.is_active} onChange={actions.handleChangeEquipment} color="primary" />}
                          label="Active"
                      />
                      </Grid>
                      <Grid item xs={12}>
                      <TextField
                          name="photo_link"
                          value={store.equipment.photo_link}
                          onChange={actions.handleChangeEquipment}
                          fullWidth
                          id="photo_link"
                          label="Image url"
                      />
                      </Grid>
                  </Grid>
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                  >
                      Apply
                  </Button>
                  </Box>
              </Box>
              </Container>
          </>
        );
    }
    else {
        return (
          <>
              <Button onClick={()=>navigate('/equipment_info/'+store.equipment.id)} variant="text" size="small">Back</Button>
              <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                  sx={{
                  marginTop: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  }}
              >
                  <Typography component="h1" variant="h5">
                  Edit equipment info
                  </Typography>
                  <Box component="form" noValidate onSubmit={(event)=>{actions.updateEquipmentInfo(event,id);navigate('/equipment_info/'+store.equipment.id)}} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                      <Grid item xs={12}>
                      <TextField
                          name="name"
                          value={store.equipment.name}
                          onChange={actions.handleChangeEquipment}
                          required
                          fullWidth
                          id="equipment_name"
                          label="Name"
                          autoFocus
                      />
                      </Grid>
                      <Grid item xs={12}>
                      <TextField
                          name="description"
                          value={store.equipment.description}
                          onChange={actions.handleChangeEquipment}
                          required
                          fullWidth
                          id="equipment_description"
                          label="Description"
                      />
                      </Grid>
                      <Grid item xs={12}>
                          <InputLabel id="equipment_status_label">Status</InputLabel>
                          <Select
                          name='status'
                          labelId="equipment_status_label"
                          id="equipment_status"
                          value={store.equipment.status}
                          label="Status"
                          displayEmpty
                          onChange={actions.handleChangeEquipment}
                          >
                              <MenuItem value=""><em>Select status</em></MenuItem>
                              <MenuItem value='malfunction'>Malfunction</MenuItem>
                              <MenuItem value='not_working'>Not working</MenuItem>
                              <MenuItem value='working'>Working</MenuItem>
                          </Select>
                      </Grid>
                      <Grid item xs={12}>
                      <FormControlLabel
                          control={<Checkbox name='is_active' checked={store.equipment.is_active} onChange={actions.handleChangeEquipment} color="primary" />}
                          label="Active"
                      />
                      </Grid>
                      <Grid item xs={12}>
                      <TextField
                          name="photo_link"
                          value={store.equipment.photo_link}
                          onChange={actions.handleChangeEquipment}
                          fullWidth
                          id="photo_link"
                          label="Image url"
                      />
                      </Grid>
                  </Grid>
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                  >
                      Apply
                  </Button>
                  </Box>
              </Box>
              </Container>
          </>
        );
    }
}