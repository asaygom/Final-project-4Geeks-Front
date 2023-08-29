import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function RoutineCard(props) {
  console.log("Image URL:", props.routine_img);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="div"
          style={{
            height: '140px', 
            backgroundImage: `url(${props.routine_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          alt={props.routine_name}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {props.routine_name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
