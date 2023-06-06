/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { useState, useEffect } from "react";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFoodData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      setLoading(false);

      console.log(json);

      setData(json);

      console.log(data);
    } catch (error) {
      setError("Unable to fetch the data.");
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, []);

  if (error) return <div>{error}</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <MainContainer>
      <TopContainer>
        <div className="logo">
          <img src="images/logo.svg" alt="" />
        </div>
        <div className="search">
          <input type="search" placeholder="Search Food..." />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>BreakFast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      <SearchResult data={data} />
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div``;

const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: 140px;
  align-items: center;
  padding: 0 120px;
  .search input {
    width: 285px;
    height: 40px;
    padding: 0 15px;
    background-color: transparent;
    border: 2px solid red;
    color: white;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    border-radius: 10px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  gap: 14px;
  padding-bottom: 38px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 5px;
  line-height: 20px;
  cursor: pointer;
`;
