/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            style={{
              backgroundColor: selectedCategory === category.name && "#fc1503",
              color: "white",
            }}
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "#fc1503",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
