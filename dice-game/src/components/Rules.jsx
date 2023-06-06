/* eslint-disable react/prop-types */
import styled from "styled-components";

const Rules = ({ isOpen }) => {
  return !isOpen ? (
    ""
  ) : (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <p>Select any number.</p>
      <p>Click on dice image.</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice.
      </p>
      <p>
        if you get wrong guess then 2 point will be dedcuted Select any number.
      </p>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  margin-top: 20px;
  width: 796px;
  height: 170px;
  background-color: #fbf1f1;
  padding: 20px;
  border-radius: 10px;
  h1 {
    font-weight: 600;
    margin-bottom: 10px;
  }
`;
