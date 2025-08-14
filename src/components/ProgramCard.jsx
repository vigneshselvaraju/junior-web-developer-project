import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/* Component for displaying a single program card */
const ProgramCard = ({ program }) => {
  const { name, slug, missionStatement } = program;
  const programLink = `https://www.confederationcollege.ca/programs/${slug?.current}`;

  return (
    <Card className="program-card">
      <CardContent className="card-content">
        <Typography variant="h6" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {missionStatement || 'No description yet.'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={programLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Program
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProgramCard;
