import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { MdArrowForward } from 'react-icons/md';
import { getBook } from '../../../services/books';
import React, { useState, useEffect } from 'react';
import { Container, Wrapper, Cover, Info, ActionButtons } from './styles';

const Results = ({ isbn }) => {
  const [book, setBook] = useState();

  useEffect(() => {
    const loadBook = async () => {
      try {
        const response = await getBook(isbn);
        console.log(response);
        setBook(response);
      } catch (err) {
        alert('Não foi possivel achar o livro na base de dados');
      }
    };
    loadBook();
  }, [isbn]);

  return (
    <>
      {book && (
        <Container>
          <Link to={`/book-details/${isbn}`}>
            <Wrapper>
              <Cover src={book.coverURL} />
              <Info>
                <h4 className="name">{book.name}</h4>
                <div className="book-rating">
                  <StarRatings
                    rating={book.rating}
                    starRatedColor="#f1c40f"
                    starDimension="18"
                    starSpancing="0"
                  />{' '}
                  ({book.rating.toFixed(1)})
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
              </Info>
              <ActionButtons>
                <span className="button">
                  <MdArrowForward size={32} color="#fff" />
                </span>
              </ActionButtons>
            </Wrapper>
          </Link>
        </Container>
      )}
    </>
  );
};

Results.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default Results;
