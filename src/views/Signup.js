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
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';

export default function Signup() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
          
          <Box
            component="form"
            onSubmit={
              userType === "member" || userType === "admin"
                ? (event) => {
                    actions.signupUser(event);
                  }
                : userType === "trainer"
                ? (event) => {
                    actions.signupTrainer(event);
                  }
                : null
            }
            sx={{ mt: 1 }}
          >
            <FormControl fullWidth sx={{ marginTop: 3}}>
          <InputLabel id="user_type_label">Role</InputLabel>
            <Select
              required
              name="user_type"
              labelId="user_type_label"
              id="user_type"
              value={userType}
              label="User type"
              displayEmpty
              onChange={(event) => handleChange(event)}
            >
              <MenuItem value="member">Member</MenuItem>
              <MenuItem value="trainer">Trainer</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={
                userType === "member" || userType === "admin"
                  ? (event) => actions.handleChangeUser(event)
                  : userType === "trainer"
                  ? (event) => actions.handleChangeTrainer(event)
                  : null
              }
              value={
                userType === "member" || userType === "admin"
                  ? store.user.name
                  : userType === "trainer"
                  ? store.trainer.name
                  : null
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="last_name"
              label="Last Name"
              name="last_name"
              autoComplete="last_name"
              onChange={
                userType === "member" || userType === "admin"
                  ? (event) => actions.handleChangeUser(event)
                  : userType === "trainer"
                  ? (event) => actions.handleChangeTrainer(event)
                  : null
              }
              value={
                userType === "member" || userType === "admin"
                  ? store.user.last_name
                  : userType === "trainer"
                  ? store.trainer.last_name
                  : null
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              type="email"
              onChange={
                userType === "member" || userType === "admin"
                  ? (event) => actions.handleChangeUser(event)
                  : userType === "trainer"
                  ? (event) => actions.handleChangeTrainer(event)
                  : null
              }
              value={
                userType === "member" || userType === "admin"
                  ? store.user.email
                  : userType === "trainer"
                  ? store.trainer.email
                  : null
              }
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
              autoComplete="password"
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
              onChange={
                userType === "member" || userType === "admin"
                  ? (event) => actions.handleChangeUser(event)
                  : userType === "trainer"
                  ? (event) => actions.handleChangeTrainer(event)
                  : null
              }
              value={
                userType === "member" || userType === "admin"
                  ? store.user.password
                  : userType === "trainer"
                  ? store.trainer.password
                  : null
              }
            />
            </FormControl>
            {userType === "member" ? store.user.role="member" : userType === "admin" ? store.user.role="admin" : null
            // (
              // <FormControl fullWidth sx={{ mt: 3 }} variant="outlined">
              //   <InputLabel id="user_role_label">Role</InputLabel>
              //   <Select
              //     required
              //     name="role"
              //     labelId="user_role_label"
              //     id="user_role"
              //     value={store.user.role}
              //     label="Role"
              //     displayEmpty
              //     onChange={(event) => actions.handleChangeUser(event)}
              //   >
              //     <MenuItem value="admin">Admin</MenuItem>
              //     <MenuItem value="member">Member</MenuItem>
              //   </Select>
              // </FormControl>
            // )
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
