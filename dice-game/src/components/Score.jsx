/* eslint-disable react/prop-types */
import styled from "styled-components";

const Score = ({ score }) => {
  return (
    <ScoreEl>
      <h2>{score}</h2>
      <p>Total Score</p>
    </ScoreEl>
  );
};

export default Score;

const ScoreEl = styled.div`
  max-width: 135px;
  height: 150px;
  text-align: center;
  margin: 20px;
  h2 {
    font-size: 100px;
    line-height: 100px;
    font-weight: 600;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
