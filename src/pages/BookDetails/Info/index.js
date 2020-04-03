import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Cover } from './styles';
import { MdArrowBack } from 'react-icons/md';
import StarRatings from 'react-star-ratings';

const Info = ({ book }) => {
  return (
    <Container>
      <Link className="go-back" to="/">
        <MdArrowBack size={32} color="#2ecc71" />
      </Link>
      <Cover src={book.coverURL} />
      <h4 className="name">{book.name}</h4>
      <div className="book-rating">
        <StarRatings
          rating={book.rating}
          starRatedColor="#f1c40f"
          starDimension="18"
          starSpancing="0"
        />{' '}
        (4.5)
      </div>
      <div className="price">
        <span className="discount">
          {Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL',
          }).format(book.price)}
        </span>{' '}
        por{' '}
        <span>
          {Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL',
          }).format(book.promotinalPrice)}
        </span>
      </div>
    </Container>
  );
};

Info.propTypes = {
    book: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        rating: PropTypes.number,
        coverURL: PropTypes.string,
        promotinalPrice: PropTypes.number
    }).isRequired
};

export default Info;
