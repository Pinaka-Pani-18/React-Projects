import { Card as ChakraCard } from "@chakra-ui/react";
import React from "react";

const Card = ({ children }) => {
  return (
    <ChakraCard
      w={"456px"}
      bg={{
        base: "transparent",
        md: "white",
      }}
      p={{
        base: "0",
        md: "6",
      }}
      borderRadius={{
        base: "none",
        md: "1rem",
      }}
      boxShadow={{
        base: "none",
        md: "0px 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      {children}
    </ChakraCard>
  );
};

export default Card;
