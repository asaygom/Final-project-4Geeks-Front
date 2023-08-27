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
import Switch from "@mui/material/Switch";

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

  const [slidervalue, setSlidervalue] = React.useState(0.5);

  const [switches, setSwitches] = React.useState([
    { id: "monday", checked: false, name: "weekday" },
    { id: "tuesday", checked: false, name: "weekday" },
    { id: "wednesday", checked: false, name: "weekday" },
    { id: "thursday", checked: false, name: "weekday" },
    { id: "friday", checked: false, name: "weekday" },
    { id: "saturday", checked: false, name: "weekday" },
    { id: "sunday", checked: false, name: "weekday" },
  ]);

  const handleSwitches = (switchID) => {
    const updateSwitches = switches.map((item) =>
      item.id === switchID
        ? { ...item, checked: true }
        : { ...item, checked: false }
    );
    setSwitches(updateSwitches);
    const checkedSwitches = updateSwitches.filter((item) => item.checked);
    return checkedSwitches.map((item) => item.id);
  };

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
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={(event) => actions.handleNewRoutine(event)}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="Routine name"
            label="Routine name"
            name="name"
            autoComplete="Routine name"
            autoFocus
            onChange={(event) => {
              actions.handleChangeNewRoutine(event);
              console.log(store.newRoutine);
            }}
          />

          <TextField
            margin="normal"
            fullWidth
            id="outlined-select-currency"
            select
            label="Is Completed?"
            defaultValue={false}
            helperText=""
            name="is_completed"
            onChange={(event) => {
              actions.handleChangeNewRoutine(event);
            }}
          >
            {isactivevalue.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {switches.map((item) => (
            <FormControlLabel
              key={item.id}
              control={
                <Switch
                  checked={item.checked}
                  onChange={() => {
                    const p = handleSwitches(item.id);
                    actions.handleChangeNewRoutine({
                      target: { name: "weekday", value: p[0] },
                    });
                    console.log(store.newRoutine);
                  }}
                />
              }
              label={item.id}
              id={item.id}
            />
          ))}
          <TextField
            margin="normal"
            fullWidth
            id="outlined-select-currency"
            select
            label="Is active?"
            defaultValue={false}
            name="is_active"
            helperText=""
            onChange={(event) => {
              actions.handleChangeNewRoutine(event);
            }}
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
            name="completed_percentage"
            onChange={(event) => {
              {
                setSlidervalue(event.target.value / 100);
                actions.handleChangeNewRoutine({
                  target: { name: "completed_percentage", value: slidervalue },
                });
              }
            }}
          />
          {store.trainingPlanList?.length > 0 ? (
            <TextField
              margin="normal"
              fullWidth
              id="outlined-select-exercise"
              select
              label="Training plan"
              defaultValue=""
              helperText="Select an training plan"
              onChange={(event) => {
                actions.handleChangeNewRoutine({
                  target: {
                    name: "training_plan_id",
                    value: event.target.value,
                  },
                });
                console.log(store.newRoutine);
              }}
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
