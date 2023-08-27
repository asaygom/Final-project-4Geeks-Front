import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export const EquipmentSummary = (props) => {
  const { status1, status2, status3, sx, value } = props;

    return (
      <Card sx={sx}>
        <CardContent>
          <Stack
            alignItems="flex-start"
            direction="row"
            justifyContent="space-between"
            spacing={3}
          >
            <Stack spacing={1}>
              <Typography
                color="text.secondary"
                variant="overline"
              >
                Total equipments
              </Typography>
              <Typography variant="h4">
                {value}
              </Typography>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: 'secondary.main',
                height: 56,
                width: 56
              }}
            >
              <SvgIcon>
                <FitnessCenterIcon/>
              </SvgIcon>
            </Avatar>
          </Stack>
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Stack
                alignItems="center"
                direction="row"
                spacing={0.5}
              >
                <Typography
                  color={'success.main'}
                  variant="body2"
                >
                  {status1}
                </Typography>
              </Stack>
              <Typography
                color="text.secondary"
                variant="caption"
              >
                working equipments
              </Typography>
            </Stack>
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Stack
                alignItems="center"
                direction="row"
                spacing={0.5}
              >
                <Typography
                  color={'warning.main'}
                  variant="body2"
                >
                  {status2}
                </Typography>
              </Stack>
              <Typography
                color="text.secondary"
                variant="caption"
              >
                malfunction equipments
              </Typography>
            </Stack>
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Stack
                alignItems="center"
                direction="row"
                spacing={0.5}
              >
                <Typography
                  color={'error.main'}
                  variant="body2"
                >
                  {status3}
                </Typography>
              </Stack>
              <Typography
                color="text.secondary"
                variant="caption"
              >
                not working equipments
              </Typography>
            </Stack>
        </CardContent>
      </Card>
    );

};

EquipmentSummary.propTypes = {
  status1: PropTypes.number,
  status2: PropTypes.number,
  status3: PropTypes.number,
  value: PropTypes.number.isRequired,
  sx: PropTypes.object
};