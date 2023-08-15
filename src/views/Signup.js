import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
import { Context } from "../store/context";
import {useNavigate} from "react-router-dom";

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

export default function Signup() {
  const { store, actions } = useContext(Context);
  const navigate=useNavigate()
  
  return (
    <>
      <Button onClick={()=>navigate('/members_list')} variant="text" size="small">Back</Button>
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
            Create a new User
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              actions.newUser({
                name: store.user.name,
                last_name: store.user.last_name,
                email: store.user.email,
                password: store.user.password,
                role: store.user.role,
                is_active: store.user.is_active,
                subscription_date: new Date().toISOString()
              });
            }}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => actions.handleOnChange(e, "name")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="last_name"
              label="Last Name"
              name="last_name"
              autoComplete="last_name"
              autoFocus
              onChange={(e) => actions.handleOnChange(e, "last_name")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => actions.handleOnChange(e, "email")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
              onChange={(e) => actions.handleOnChange(e, "password")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="roel"
              label="Role"
              name="role"
              autoComplete="role"
              autoFocus
              onChange={(e) => actions.handleOnChange(e, "role")}
            />

            <TextField
              margin="normal"
              fullWidth
              id="outlined-select-currency"
              select
              label="Is active?"
              defaultValue="No"
              helperText="Select if the new user will be active (select 'NO' for tests)"
            >
              {isactivevalue.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create User
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
