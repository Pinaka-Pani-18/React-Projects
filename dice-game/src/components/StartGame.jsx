/* eslint-disable react/prop-types */
import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <StartGameEl>
      <div>
        <img src="/images/dice.png" alt="dice" />
      </div>
      <div className="startGameContainer">
        <h1>Start Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </StartGameEl>
  );
};

export default StartGame;

const StartGameEl = styled.div`
  width: 1182px;
  margin: 85px auto;
  display: flex;
  .startGameContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      color: black;
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  width: 220px;
  height: 50px;
  align-self: end;
  border: 2px solid black;
  font-size: 16px;
  border-radius: 10px;
  transition: all.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: black;
  }
`;
