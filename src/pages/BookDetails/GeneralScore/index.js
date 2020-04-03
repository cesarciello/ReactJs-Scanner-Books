import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { calculateScore } from '../../../services/books';

function GeneralScore({ book }) {
  let { color, label, recommended } = calculateScore(book.score);

  return (
    <Container scoreColor={color}>
      <div className="score">
        <span className="summary-core-value">{book.score}</span>
        <span>{label}</span>
      </div>
      {recommended && (
        <p className="score-comment">Recomendado pelos editores</p>
      )}
    </Container>
  );
}

GeneralScore.propTypes = {
  book: PropTypes.shape({
    score: PropTypes.number,
  }).isRequired,
};

export default GeneralScore;
