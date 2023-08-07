import { Stack, Button, Box, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import EquipmentCard from '../components/EquipmentCard';
import { TopNav } from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { SearchBar } from '../components/SearchBar';

const Equipment = () => (
  <>
  <TopNav />
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 5
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
            <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
            >
                <Stack spacing={1}>
                    <Typography variant="h4">
                    Equipment
                    </Typography>
                </Stack>
                <div>
                    <Button
                    variant="contained"
                    >
                    Add
                    </Button>
                </div>
            </Stack>
            <SearchBar />
            <Grid
            container
            spacing={3}
            >
                <Grid
                xs={6}
                sm={6}
                lg={3}
                >
                <EquipmentCard equipment_img="https://www.bestusedgymequipment.com/wp-content/uploads/2020/09/cybex-vr2-chestpress-1-1.jpg" equipment_name="CHEST PRESS MACHINE" />
                </Grid>
                <Grid
                xs={6}
                sm={6}
                lg={3}
                >
                <EquipmentCard equipment_img="https://www.bestusedgymequipment.com/wp-content/uploads/2021/01/buge-adjustable-bench-m037.jpg" equipment_name="ADJUSTABLE BENCH" />
                </Grid>
            </Grid>
        </Stack>
      </Container>
    </Box>
    <BottomNav />
  </>
);

export default Equipment;