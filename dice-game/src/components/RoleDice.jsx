/* eslint-disable react/prop-types */
import styled from "styled-components";

const RoleDice = ({ currentDice, randomNum }) => {
  return (
    <RoleDiceContainer>
      <div onClick={randomNum} className="image">
        <img src={`/images/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on dice to roll</p>
    </RoleDiceContainer>
  );
};

export default RoleDice;

const RoleDiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .image {
    cursor: pointer;
  }
`;
