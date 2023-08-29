import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Fab } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; // Importando el ícono

export default function TrainingPlanCard(props) {
  console.log("Image URL:", props.trainingplan_img);

  return (
    <Card sx={{ maxWidth: 345, position: 'relative', overflow: 'visible' }}>
      <CardActionArea>
        <CardMedia
          component="div"
          style={{
            height: '140px',
            backgroundImage: `url(${props.trainingplan_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          alt={props.trainingplan_name}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {props.trainingplan_name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Fab
        size="small"
        color="primary"
        aria-label="R"
        sx={{ position: 'absolute', top: '-7px', right: '-7px' }}
        onClick={(e) => {
          e.stopPropagation();
          window.location.href = `http://localhost:3000/trainingplan/${props.id}`;
        }}
      >
        <FitnessCenterIcon style={{ color: 'white', fontSize: '1.2em' }} />
      </Fab>
    </Card>
  );
}
