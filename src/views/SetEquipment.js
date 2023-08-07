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

export default function SetEquipment() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Button variant="text" size="small">Back</Button>
    <Box
        sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}
    >
        <Typography component="h1" variant="h5">
        New equipment
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
                name="equipment_name"
                required
                fullWidth
                id="equipment_name"
                label="Name"
                autoFocus
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                name="equipment_description"
                required
                fullWidth
                id="equipment_description"
                label="Description"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                name="equipment_status"
                required
                fullWidth
                id="equipment_status"
                label="Status"
            />
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox value="is_active" color="primary" />}
                label="Active"
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
  );
}