import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;

  margin-top: 25px;
  margin-right: 10px;

  .label {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.scoreColor};
  }
`;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 43px;
  height: 43px;
  margin-right: 5px;

  border-radius: 50px;
  background-color: ${props => props.scoreColor};

  .value {
      color:  #fff;
      text-align: center;
  }
`;
