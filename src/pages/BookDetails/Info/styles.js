import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  flex-direction: column;

  .go-back {
    top: 15px;
    left: 15px;
    position: fixed;
  }

  .name {
    margin: 10px 0;
    font-size: 26px;
    text-align: center;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 22px;
    }
  }

  .book-rating {
    margin: auto;
    display: flex;
    justify-content: center;
  }

  .discount {
    color: #7f8c8d;
    text-decoration: line-through;
  }
`;

export const Cover = styled.img`
  margin: auto;
  height: 220px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 150px;
  }
`;
