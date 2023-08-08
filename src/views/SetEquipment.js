import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function SetEquipment() {
    const [equipmentStatus, setEquipmentStatus] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        equipment_name: data.get('equipment_name'),
        equipment_description: data.get('equipment_description'),
        equipment_status: data.get('equipment_status'),
        equipment_active: data.get('is_active')
    });
    };

    const handleChange = (event) => {
      setEquipmentStatus(event.target.value);
    };    

  return (
    <>
        <Button variant="text" size="small">Back</Button>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
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
                    <InputLabel id="equipment_status_label">Status</InputLabel>
                    <Select
                    name='equipment_status'
                    labelId="equipment_status_label"
                    id="equipment_status"
                    value={equipmentStatus}
                    label="Status"
                    onChange={handleChange}
                    >
                        <MenuItem value='malfunction'>Malfunction</MenuItem>
                        <MenuItem value='not_working'>Not working</MenuItem>
                        <MenuItem value='working'>Working</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox name='is_active' value="is_active" color="primary" />}
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
    </>
  );
}