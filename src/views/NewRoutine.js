import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/styles.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";

export default function NewRoutine() {
  const { store, actions } = useContext(Context);

  const isactivevalue = [
    {
      value: true,
      label: "Yes",
    },
    {
      value: false,
      label: "No",
    },
  ];

  // const textfieldstyles = {
  //   display: "block",
  //   margin: "10px auto",
  //   width: "100%",
  // };
  useEffect(() => {
    actions.getTrainingPlan();
  }, []);

  // console.log(store.listOfExercises);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Create a new Routine
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Routine name"
            label="Routine name"
            name="Routine Name"
            autoComplete="Routine name"
            autoFocus
          />
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="monday"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="tuesday"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="wednesday"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="thursday"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="friday"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="saturday"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="sunday"
            />
          </Box>
          <TextField
            margin="normal"
            fullWidth
            id="outlined-select-currency"
            select
            label="Is Completed?"
            defaultValue="No"
            helperText=""
          >
            {isactivevalue.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="normal"
            fullWidth
            id="outlined-select-currency"
            select
            label="Is active?"
            defaultValue="No"
            helperText=""
          >
            {isactivevalue.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
          {store.trainingPlanList?.length > 0 ? (
            <TextField
              margin="normal"
              fullWidth
              id="outlined-select-exercise"
              select
              label="Add exercise"
              defaultValue=""
              helperText="Select an training plan"
            >
              {store.trainingPlanList.map((exercise) => (
                <MenuItem key={exercise.id} value={exercise.id}>
                  {exercise.goal_name}
                </MenuItem>
              ))}
            </TextField>
          ) : (
            <p>Loading...</p>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Routine
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
