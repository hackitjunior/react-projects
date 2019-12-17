import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { FaTrash } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import StarRating from './StarRating';
import { useColors } from "./color-hooks";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Color({ id, title, color, rating }) {
  const classes = useStyles();
  const { rateColor, removeColor } = useColors();
    return (
      <Card className={classes.card}>
        <CardContent>
          <h1>{title}</h1>
          <div style={{ height: 100, backgroundColor: color }} />
        </CardContent>
        <CardActions>
          <StarRating
            selectedStars={rating}
            onRate={rating => rateColor(id, rating)}
          />
          <IconButton aria-label="delete" onClick={() => removeColor(id)}>
            <FaTrash color="red" />
          </IconButton>
        </CardActions>
      </Card>
    );
}
