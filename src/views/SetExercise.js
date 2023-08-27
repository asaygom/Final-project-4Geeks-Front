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

export default function SetExercise() {
    const { store, actions } = useContext(Context);
    const navigate=useNavigate()
    const {id} = useParams()

    
    useEffect(() => {
        actions.getEquipment();             //se obtiene la lista de equipos disponibles
        actions.getRoutine();             //se obtiene la lista de rutinas disponibles

        if (id === "new") {
            actions.cleanExerciseInfo()
        }
        else {
            actions.getExerciseInfo(id);
        }
    }, []);

    if (id==="new"){
        return (
          <>
              <Button onClick={()=>navigate('/exercise')} variant="text" size="small">Back</Button>
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
                  New exercise
                  </Typography>
                  <Box component="form" noValidate onSubmit={(event)=>{actions.handleSubmitExercise(event);navigate('/exercise')}} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                      <Grid item xs={12}>
                      <TextField
                          name="name"
                          value={store.exercise.name}
                          onChange={actions.handleChangeExercise}
                          required
                          fullWidth
                          id="exercise_name"
                          label="Name"
                          autoFocus
                      />
                      </Grid>
                      <Grid item xs={12}>
                      <TextField
                          name="description"
                          value={store.exercise.description}
                          onChange={actions.handleChangeExercise}
                          required
                          fullWidth
                          id="exercise_description"
                          label="Description"
                      />
                      </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                name="sets"
                                value={store.exercise.sets || ""}
                                onChange={actions.handleChangeExercise}
                                required
                                fullWidth
                                id="exercise_sets"
                                label="Sets"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                name="repetitions"
                                value={store.exercise.repetitions || ""}
                                onChange={actions.handleChangeExercise}
                                required
                                fullWidth
                                id="exercise_repetitions"
                                label="Repetitions"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                name="weight"
                                value={store.exercise.weight || ""}
                                onChange={actions.handleChangeExercise}
                                required
                                fullWidth
                                id="exercise_weight"
                                label="Weight"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <InputLabel id="exercise_routine_label">Routine</InputLabel>
                            <Select
                                name='routine_id'
                                labelId="exercise_routine_label"
                                id="exercise_routine"
                                value={store.exercise.routine_id || ""}
                                onChange={actions.handleChangeExercise}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    <em>Select Routine</em>
                                </MenuItem>
                                {store.listOfRoutines.map(routine => (
                                    <MenuItem key={routine.id} value={routine.id}>
                                        {routine.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>



                        <Grid item xs={12}>
                            <InputLabel id="exercise_equipment_label">Equipment</InputLabel>
                            <Select
                                name='equipment_id'
                                labelId="exercise_equipment_label"
                                id="exercise_equipment"
                                value={store.exercise.equipment_id || ""}
                                onChange={actions.handleChangeExercise}
                                displayEmpty  // Esta propiedad permite mostrar el placeholder
                            >
                                <MenuItem value="" disabled>
                                    <em>Select Equipment</em>
                                </MenuItem>
                                {store.listOfEquipments.map(equipment => (
                                    <MenuItem key={equipment.id} value={equipment.id}>
                                        {equipment.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>



                      <Grid item xs={12}>
                          <InputLabel id="exercise_equipment_issue_label">Equipment issue</InputLabel>
                          <Select
                          name='equipment_issue'
                          labelId="exercise_equipment_issue_label"
                          id="exercise_equipment_issue"
                          value={store.exercise.equipment_issue}
                          label="Equipment_issue"
                          displayEmpty
                          onChange={actions.handleChangeExercise}
                          >
                              <MenuItem value=""><em>Report equipment</em></MenuItem>
                              <MenuItem value='minor_issue'>Minor issue</MenuItem>
                              <MenuItem value='mid_issue'>Middle issue</MenuItem>
                              <MenuItem value='major_issue'>Major issue</MenuItem>
                          </Select>
                      </Grid>
                      <Grid item xs={12}>
                      <FormControlLabel
                          control={<Checkbox name='is_completed' checked={store.exercise.is_completed} onChange={actions.handleChangeExercise} color="primary" />}
                          label="Completed"
                      />
                      </Grid>


                      <Grid item xs={12}>
                      <TextField
                          name="photo_link"
                          value={store.exercise.photo_link}
                          onChange={actions.handleChangeExercise}
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
<Button onClick={() => navigate('/exercise_info/' + store.exercise.id)} variant="text" size="small">Back</Button>
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
            Edit exercise info
        </Typography>
                <Box component="form" noValidate onSubmit={(event) => { actions.updateExerciseInfo(event, id); navigate('/exercise_info/' + store.exercise.id) }} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                name="name"
                                value={store.exercise.name}
                                onChange={actions.handleChangeExercise}
                                required
                                fullWidth
                                id="exercise_name"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="description"
                                value={store.exercise.description}
                                onChange={actions.handleChangeExercise}
                                required
                                fullWidth
                                id="exercise_description"
                                label="Description"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                name="sets"
                                value={store.exercise.sets || ""}
                                onChange={actions.handleChangeExercise}
                                required
                                fullWidth
                                id="exercise_sets"
                                label="Sets"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                name="repetitions"
                                value={store.exercise.repetitions || ""}
                                onChange={actions.handleChangeExercise}
                                required
                                fullWidth
                                id="exercise_repetitions"
                                label="Repetitions"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="number"
                                name="weight"
                                value={store.exercise.weight || ""}
                                onChange={actions.handleChangeExercise}
                                required
                                fullWidth
                                id="exercise_weight"
                                label="Weight"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel id="exercise_routine_label">Routine</InputLabel>
                            <Select
                                name='routine_id'
                                labelId="exercise_routine_label"
                                id="exercise_routine"
                                value={store.exercise.routine_id || ""}
                                onChange={actions.handleChangeExercise}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    <em>Select Routine</em>
                                </MenuItem>
                                {store.listOfRoutines.map(routine => (
                                    <MenuItem key={routine.id} value={routine.id}>
                                        {routine.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel id="exercise_equipment_label">Equipment</InputLabel>
                            <Select
                                name='equipment_id'
                                labelId="exercise_equipment_label"
                                id="exercise_equipment"
                                value={store.exercise.equipment_id || ""}
                                onChange={actions.handleChangeExercise}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    <em>Select Equipment</em>
                                </MenuItem>
                                {store.listOfEquipments.map(equipment => (
                                    <MenuItem key={equipment.id} value={equipment.id}>
                                        {equipment.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel id="exercise_equipment_issue_label">Equipment issue</InputLabel>
                            <Select
                                name='equipment_issue'
                                labelId="exercise_equipment_issue_label"
                                id="exercise_equipment_issue"
                                value={store.exercise.equipment_issue}
                                label="Equipment_issue"
                                displayEmpty
                                onChange={actions.handleChangeExercise}
                            >
                                <MenuItem value=""><em>Report equipment</em></MenuItem>
                                <MenuItem value='minor_issue'>Minor issue</MenuItem>
                                <MenuItem value='mid_issue'>Middle issue</MenuItem>
                                <MenuItem value='major_issue'>Major issue</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox name='is_completed' checked={store.exercise.is_completed} onChange={actions.handleChangeExercise} color="primary" />}
                                label="Completed"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="photo_link"
                                value={store.exercise.photo_link}
                                onChange={actions.handleChangeExercise}
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