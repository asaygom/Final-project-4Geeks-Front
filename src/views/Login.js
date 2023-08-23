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
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const { store, actions } = useContext(Context);
  const navigate=useNavigate()
  const [userType, setUserType] = useState("")
  const handleChange = (event) => {
		setUserType(event.target.value)
	}
  useEffect(()=>{},[store.token])
  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {(store.token && store.token!=="" && store.token!==undefined) ? navigate("/home"):
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
                required
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
            <Box component="form" onSubmit={userType==="member" || userType==="admin" ? (event) => {actions.login(event)} : userType==="trainer" ? (event) => {actions.trainerLogin(event)} : null} sx={{ mt: 1 }}>
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
                value={store.userLoggedIn.password}
                onChange={(event) => actions.handleChangeLogin(event)}
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                 }
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
                <Grid item xs sx={{cursor: "pointer"}}>
                    <Link onClick={()=>navigate("/forgot_password")} variant="body2">
                      Forgot password?
                    </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
}</>
        );
}