import * as React from 'react';
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import {useNavigate} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

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
            <Box sx={{textAlign: 'center', marginBottom:3}}>
                <img width="300px" src="http://localhost:3000/FitnessTrackerLogo.png" alt="FitnessTracker Logo"/>
            </Box>
            <FormControl fullWidth sx={{marginTop: 3}}>
              <InputLabel id="user_role_label">Role</InputLabel>
              <Select
                required
                name='role'
                labelId="user_role_label"
                id="user_role"
                value={userType}
                label="Role"
                displayEmpty
                onChange={(event) => handleChange(event)}
                >
                  <MenuItem value='member'>Member</MenuItem>
                  <MenuItem value='trainer'>Trainer</MenuItem>
                  <MenuItem value='admin'>Admin</MenuItem>
                </Select>
            </FormControl>
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
              <FormControl fullWidth sx={{ mt: 2 }} variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
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
                onChange={(event) => actions.handleChangeLogin(event)}
                value={store.userLoggedIn.password}
                autoComplete="current-password"
              />
              </FormControl>
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