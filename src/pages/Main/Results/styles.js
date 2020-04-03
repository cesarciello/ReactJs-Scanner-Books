import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionButtons = styled.div`
  padding: 0;
  margin-right: 5px;

  .button {
      display: block;
      line-height: 0;
      border-radius: 5px;
      background-color: #2ecc71;
  }
`;

export const Cover = styled.img`
  height: 115px;
  margin-right: 15px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 90px;
    margin-right: 10px;
  }
`;

export const Container = styled.div`
  left: 20px;
  right: 20px;
  bottom: 20px;
  padding: 10px;
  position: fixed;
  border-radius: 12px;
  background-color: #fff;

  a {
      color: "#000";
      padding: 20px;
      display: block;
      text-decoration: none;
  }

  @media (min-width: 320px) and (max-width: 480px) {
      a {
          padding: 10px;
      }
   }

`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .name {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .discount {
    color: #7f8c8d;
    text-decoration: line-through;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .name {
      font-size: 12px;
      margin-bottom: 5px;
    }

    .book-rating {
      font-size: 12px;
    }

    .price {
      font-size: 12px;
    }
  }
`;
