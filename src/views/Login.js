import * as React from 'react';
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import {useNavigate} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

export default function Login() {
  const { store, actions } = useContext(Context);
  const navigate=useNavigate()
  const [userType, setUserType] = useState("")
  const handleChange = (event) => {
		setUserType(event.target.value)
	}
  useEffect(() => {
    if (store.token && store.token !== "" && store.token !== undefined) {         //cambio para no navegar en la funcion de renderizado, error chrome
        navigate("/home");
    }
}, [store.token, navigate])  
  return (
    <>
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h3">
              FitnessTracker
            </Typography>
            <Grid sx={{marginTop: 3, textAlign: 'center'}}>
              <InputLabel id="user_type_label">Type of user to login</InputLabel>
              <Select
                name='user_type'
                labelId="user_type_label"
                id="user_type"
                value={userType}
                label="User type"
                displayEmpty
                onChange={(event) => handleChange(event)}
                >
                  <MenuItem value=""><em>Select type of user to login</em></MenuItem>
                  <MenuItem value='member'>Member</MenuItem>
                  <MenuItem value='trainer'>Trainer</MenuItem>
                  <MenuItem value='admin'>Admin</MenuItem>
                </Select>
            </Grid>
            <Box component="form" onSubmit={userType==="member" || userType==="admin" ? (event) => {actions.login(event)} : userType==="trainer" ? (event) => {actions.trainerLogin(event)} : null} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={store.userLoggedIn.email}
                onChange={(event) => actions.handleChangeLogin(event)}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                value={store.userLoggedIn.password}
                onChange={(event) => actions.handleChangeLogin(event)}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                    <Link onClick={()=>navigate("/forgot_password")} variant="body2">
                      Forgot password?
                    </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
</>
        );
}