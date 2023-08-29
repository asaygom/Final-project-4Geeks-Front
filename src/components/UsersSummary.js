import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';

export const UsersSummary = (props) => {
  const { users, actives, sx, value } = props;

  if (users==="members"){
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
                Total members
              </Typography>
              <Typography variant="h4">
                {value}
              </Typography>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: 'success.main',
                height: 56,
                width: 56
              }}
            >
              <SvgIcon>
                <PeopleIcon/>
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
                  {actives}
                </Typography>
              </Stack>
              <Typography
                color="text.secondary"
                variant="caption"
              >
                members active
              </Typography>
            </Stack>
        </CardContent>
      </Card>
    );
  }

  if (users==="trainers"){
    return (
      <Card sx={sx}>
        <CardContent>
          <Stack
            alignItems="flex-start"
            direction="row"
            justifyContent="space-between"
            spacing={3}
          >

            <Avatar
              sx={{
                backgroundColor: 'info.main',
                height: 56,
                width: 56
              }}
            >
              <SvgIcon>
                <PeopleIcon/>
              </SvgIcon>
            </Avatar>
            <Stack spacing={1} alignItems="flex-end">
              <Typography
                color="text.secondary"
                variant="overline"
              >
                Total trainers
              </Typography>
              <Typography variant="h4">
                {value}
              </Typography>
            </Stack>
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
                  color={'info.main'}
                  variant="body2"
                >
                  {actives}
                </Typography>
              </Stack>
              <Typography
                color="text.secondary"
                variant="caption"
              >
                trainers active
              </Typography>
            </Stack>
        </CardContent>
      </Card>
    );
  }

};

UsersSummary.propTypes = {
  users: PropTypes.string,
  actives: PropTypes.number,
  value: PropTypes.number.isRequired,
  sx: PropTypes.object
};