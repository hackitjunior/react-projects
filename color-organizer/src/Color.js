import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { FaTrash } from "react-icons/fa";

import StarRating from './StarRating';

export default function Color({ id, title, color, rating, onRemove = f => f }) {
    return (
      <section>
        <h1>{title}</h1>
        <IconButton aria-label="delete" onClick={() => onRemove(id)}>
          <FaTrash color="red" />
        </IconButton>
        <div style={{ height: 50, backgroundColor: color }} />
        <StarRating selectedStars={rating} />
      </section>
    );
}
