import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ExerciseCard(props) {
  console.log("Image URL:", props.exercise_img);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="div"
          style={{
            height: '140px', 
            backgroundImage: `url(${props.exercise_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          alt={props.exercise_name}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {props.exercise_name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
