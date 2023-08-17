import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useState } from "react";
import { Context } from "../store/context";
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { Grid } from "@mui/material";

export default function Signup() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [userType, setUserType] = useState("")
  const handleChange = (event) => {
		setUserType(event.target.value)
	}

  return (
    <>
      <Button
        onClick={() => navigate("/members_list")}
        variant="text"
        size="small"
      >
        Back
      </Button>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up form
          </Typography>
          <Grid sx={{marginTop: 3, textAlign: 'center'}}>
          <InputLabel id="user_type_label">Type of user to create</InputLabel>
              <Select
                name='user_type'
                labelId="user_type_label"
                id="user_type"
                value={userType}
                label="User type"
                displayEmpty
                onChange={(event) => handleChange(event)}
                >
                  <MenuItem value=""><em>Select type of user to create</em></MenuItem>
                  <MenuItem value='member'>Member or Admin</MenuItem>
                  <MenuItem value='trainer'>Trainer</MenuItem>
                </Select>
          </Grid>
          <Box
            component="form"
            onSubmit={userType==="member" ? (event) => {actions.signupUser(event)} : userType==="trainer" ? (event) => {actions.signupTrainer(event)} : null}
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
              onChange={userType==="member" ? (event) => actions.handleChangeUser(event) : userType==="trainer" ? (event) => actions.handleChangeTrainer(event) : null}
              value={userType==="member" ? store.user.name : userType==="trainer" ? store.trainer.name : null}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="last_name"
              label="Last Name"
              name="last_name"
              autoComplete="last_name"
              onChange={userType==="member" ? (event) => actions.handleChangeUser(event) : userType==="trainer" ? (event) => actions.handleChangeTrainer(event) : null}
              value={userType==="member" ? store.user.last_name : userType==="trainer" ? store.trainer.last_name : null}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              onChange={userType==="member" ? (event) => actions.handleChangeUser(event) : userType==="trainer" ? (event) => actions.handleChangeTrainer(event) : null}
              value={userType==="member" ? store.user.email : userType==="trainer" ? store.trainer.email : null}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              onChange={userType==="member" ? (event) => actions.handleChangeUser(event) : userType==="trainer" ? (event) => actions.handleChangeTrainer(event) : null}
              value={userType==="member" ? store.user.password : userType==="trainer" ? store.trainer.password : null}
            />
            {userType==="trainer" ? null : 
            <><InputLabel id="user_role_label">Role</InputLabel>
              <Select
                name='role'
                labelId="user_role_label"
                id="user_role"
                value={store.user.role}
                label="Role"
                displayEmpty
                onChange={(event) => actions.handleChangeUser(event)}
                >
                  <MenuItem value=""><em>Select role</em></MenuItem>
                  <MenuItem value='admin'>Admin</MenuItem>
                  <MenuItem value='member'>Member</MenuItem>
                </Select>
                </>
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create user
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
