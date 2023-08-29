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

export default function SetTrainingPlan() {
    const { store, actions } = useContext(Context);
    const navigate=useNavigate()
    const {id} = useParams()

    
    useEffect(() => {
        actions.getEquipment();             //se obtiene la lista de equipos disponibles
        actions.getRoutine();             //se obtiene la lista de rutinas disponibles
        actions.getTrainers();              //@@@

        if (id === "new") {
            actions.cleanTrainingPlanInfo()
        }
        else {
            actions.getTrainingPlanInfo(id);
        }
    }, []);

    if (id==="new"){
        return (
          <>
              <Button onClick={()=>navigate('/trainingplan')} variant="text" size="small">Back</Button>
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
                  New training plan
                  </Typography>
                  <Box component="form" noValidate onSubmit={(event)=>{actions.handleSubmitTrainingPlan(event);navigate('/trainingplan')}} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                      <Grid item xs={12}>
                      <TextField
                          name="name"
                          value={store.trainingplan.name}
                          onChange={actions.handleChangeTrainingPlan}
                          required
                          fullWidth
                          id="trainingplan_name"
                          label="Name"
                          autoFocus
                      />
                      </Grid>
                      <Grid item xs={12}>
                      <TextField
                          name="goal_name"
                          value={store.trainingplan.goal_name}
                          onChange={actions.handleChangeTrainingPlan}
                          required
                          fullWidth
                          id="trainingplan_goal_name"
                          label="Goal name"
                          autoFocus
                      />
                      </Grid>                      
                      <Grid item xs={12}>
                      <TextField
                          name="goal_description"
                          value={store.trainingplan.goal_description}
                          onChange={actions.handleChangeTrainingPlan}
                          required
                          fullWidth
                          id="trainingplan_goal_description"
                          label="Goal description"
                      />
                      </Grid>
                      <Grid item xs={12}>
                            <TextField
                                type="datetime-local"
                                name="start_time"
                                value={store.trainingplan.start_time}
                                onChange={actions.handleChangeTrainingPlan}
                                required
                                fullWidth
                                id="trainingplan_start_time"
                                label="Start time"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="datetime-local"
                                name="finish_time"
                                value={store.trainingplan.finish_time}
                                onChange={actions.handleChangeTrainingPlan}
                                required
                                fullWidth
                                id="trainingplan_finish_time"
                                label="End time"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                name="completed_percentage"
                                value={store.trainingplan.completed_percentage}
                                onChange={actions.handleChangeTrainingPlan}
                                required
                                fullWidth
                                id="trainingplan_completed_percentage"
                                label="Completed percentage"
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox name='is_completed' checked={store.trainingplan.is_completed} onChange={actions.handleChangeTrainingPlan} color="primary" />}
                            label="Completed"
                        />
                        </Grid>

                        <Grid item xs={12}>
                            <InputLabel id="trainingplan_trainer_label">Trainer</InputLabel>
                            <Select
                                name='trainer_id'
                                labelId="trainingplan_trainer_label"
                                id="trainingplan_trainer"
                                value={store.trainingplan.trainer_id || ""}
                                onChange={actions.handleChangeTrainingPlan}
                                displayEmpty  // Esta propiedad permite mostrar el placeholder
                            >
                                <MenuItem value="" disabled>
                                    <em>Select Trainer</em>
                                </MenuItem>
                                {store.listOfTrainers.map(trainer => (
                                    <MenuItem key={trainer.id} value={trainer.id}>
                                        {trainer.name} {trainer.last_name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                      <Grid item xs={12}>
                      <TextField
                          name="photo_link"
                          value={store.trainingplan.photo_link}
                          onChange={actions.handleChangeTrainingPlan}
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
<Button onClick={() => navigate('/trainingplan_info/' + store.trainingplan.id)} variant="text" size="small">Back</Button>
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
            Edit training plan info
        </Typography>
                <Box component="form" noValidate onSubmit={(event) => { actions.updateTrainingPlanInfo(event, id); navigate('/trainingplan_info/' + store.trainingplan.id) }} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                name="name"
                                value={store.trainingplan.name}
                                onChange={actions.handleChangeTrainingPlan}
                                required
                                fullWidth
                                id="trainingplan_name"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="goal_name"
                                value={store.trainingplan.goal_name}
                                onChange={actions.handleChangeTrainingPlan}
                                required
                                fullWidth
                                id="trainingplan_goal_name"
                                label="Goal name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="goal_description"
                                value={store.trainingplan.goal_description}
                                onChange={actions.handleChangeTrainingPlan}
                                required
                                fullWidth
                                id="trainingplan_goal_description"
                                label="Goal description"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="datetime-local"
                                name="start_time"
                                value={store.trainingplan.start_time}
                                onChange={actions.handleChangeTrainingPlan}
                                required
                                fullWidth
                                id="trainingplan_start_time"
                                label="Start time"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="datetime-local"
                                name="finish_time"
                                value={store.trainingplan.finish_time}
                                onChange={actions.handleChangeTrainingPlan}
                                required
                                fullWidth
                                id="trainingplan_finish_time"
                                label="End time"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                name="completed_percentage"
                                value={store.trainingplan.completed_percentage}
                                onChange={actions.handleChangeTrainingPlan}
                                required
                                fullWidth
                                id="trainingplan_completed_percentage"
                                label="Completed percentage"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox name='is_completed' checked={store.trainingplan.is_completed} onChange={actions.handleChangeTrainingPlan} color="primary" />}
                                label="Completed"
                            />
                        </Grid>                        
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel id="trainingplan_trainer_label">Trainer</InputLabel>
                            <Select
                                name='trainer_id'
                                labelId="trainingplan_trainer_label"
                                id="trainingplan_trainer"
                                value={store.trainingplan.trainer_id || ""}
                                onChange={actions.handleChangeTrainingPlan}
                                displayEmpty  // Esta propiedad permite mostrar el placeholder
                            >
                                <MenuItem value="" disabled>
                                    <em>Select Trainer</em>
                                </MenuItem>
                                {store.listOfTrainers.map(trainer => (
                                    <MenuItem key={trainer.id} value={trainer.id}>
                                        {trainer.name} {trainer.last_name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                name="photo_link"
                                value={store.trainingplan.photo_link}
                                onChange={actions.handleChangeTrainingPlan}
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