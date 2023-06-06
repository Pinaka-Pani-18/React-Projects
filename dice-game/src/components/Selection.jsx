/* eslint-disable react/prop-types */
import styled from "styled-components";

const Selection = ({
  selectedNumber,
  setSelectedNumber,
  isActive,
  setIsActive,
}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  function selectedFun(value) {
    setSelectedNumber(value);
    setIsActive("");
  }

  return (
    <SelectionEl>
      <p className="notSelect">{isActive}</p>

      <div className="flex">
        {arrayNumber.map((value, i) => {
          return (
            <Box
              isSelected={value === selectedNumber}
              key={`${i}`}
              onClick={() => {
                selectedFun(value);
              }}
            >
              {value}
            </Box>
          );
        })}
      </div>

      <p className="select">Select Number</p>
    </SelectionEl>
  );
};

export default Selection;

const SelectionEl = styled.div`
  width: 552px;
  height: 138px;
  display: flex;
  flex-direction: column;
  margin: 40px 80px 0 0;
  .flex {
    display: flex;
    justify-content: center;
    gap: 25px;
  }
  .select {
    align-self: flex-end;
    font-size: 18px;
    margin-top: 10px;
    font-weight: 600;
  }
  .notSelect {
    font-size: 16px;
    color: red;
    font-weight: 500;
    align-self: flex-end;
    margin-bottom: 5px;
    margin-top: -10px;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  line-height: 72px;
  text-align: center;
  border: 2px solid black;
  background-color: ${(props) => (!props.isSelected ? "white" : "black")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
  }
`;
