import { styled } from "styled-components";
import Score from "./Score";
import Selection from "./Selection";
import RoleDice from "./RoleDice";
import { useState } from "react";

const StartPlay = () => {
  const array = [1, 2, 3, 4, 5, 6];
  let ranNum;

  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  function randomNum() {
    ranNum = Math.floor(Math.random() * array.length + 1);
    setCurrentDice(ranNum);
    if (ranNum == selectedNumber) {
      setScore(score + 1);
    }
  }

  return (
    <StartPlayContainer>
      <div className="scoreSelection">
        <Score score={score} />
        <Selection
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} randomNum={randomNum} />
    </StartPlayContainer>
  );
};

export default StartPlay;

const StartPlayContainer = styled.main`
  height: 100vh;
  .scoreSelection {
    display: flex;
    justify-content: space-between;
  }
`;
