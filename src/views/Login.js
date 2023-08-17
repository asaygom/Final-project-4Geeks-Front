import * as React from 'react';
import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useNavigate} from "react-router-dom";

export default function Login() {
  const { store, actions } = useContext(Context);
  const navigate=useNavigate()
  console.log(store.token)
  useEffect(()=>{},[store.token])
  
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
            <Box component="form" onSubmit={(event)=>actions.login(event)} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={store.user.email}
                onChange={actions.handleChangeLogin}
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
                value={store.user.password}
                onChange={actions.handleChangeLogin}
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
}</>
        );
}