import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function EquipmentCard(props) {
  return (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={props.equipment_img}
                alt={props.equipment_name}
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {props.equipment_name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      }