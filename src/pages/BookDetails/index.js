import Info from './Info';
import Extra from './Extra';
import Scores from './Scores';
import { Container } from './styles';
import GeneralScore from './GeneralScore';
import { useParams } from 'react-router-dom';
import { getBook } from '../../services/books';
import React, { useState, useEffect } from 'react';

function BookDetails() {
  const { isbn } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    const loadBook = async () => {
      const response = await getBook(isbn);
      setBook(response);
    };
    loadBook();
  }, [isbn]);

  return (
    <>
      {book && book.isbn && (
        <Container>
          {' '}
          <Info book={book} />{' '}
          <GeneralScore book={book} />
          <Scores book={book} />
          <Extra book={book}  />
        </Container>
      )}
    </>
  );
}

export default BookDetails;
