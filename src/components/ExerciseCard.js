import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ExerciseCard(props) {
  return (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={props.exercise_img}
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