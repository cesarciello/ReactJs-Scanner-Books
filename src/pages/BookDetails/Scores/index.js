import React from 'react';
import PropTypes from 'prop-types';
import { Container, Score, Value } from './styles';
import { calculateScore } from '../../../services/books';

function Scores({ book }) {
  return (
    <Container>
      {book.scores &&
        book.scores.map(b => (
          <Score key={b.id} scoreColor={calculateScore(b.value).color}>
            <Value scoreColor={calculateScore(b.value).color}>
              <span className="value">{b.value}</span>
            </Value>
            <span className="label">{b.name}</span>
          </Score>
        ))}
    </Container>
  );
}

Scores.prototype = {
  book: PropTypes.shape({
    scores: PropTypes.array,
  }).isRequired,
};

export default Scores;
