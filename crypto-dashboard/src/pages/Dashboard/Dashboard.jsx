import { Grid, GridItem } from "@chakra-ui/react";
import DashBoardLayout from "../../components/DashBoardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";

const Dashboard = () => {
  return (
    <DashBoardLayout title={"DashBoard"}>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={"6"}
      >
        <GridItem colSpan={2}>
          <PortfolioSection />
        </GridItem>
        <GridItem>
          <PriceSection colSpan={1} />
        </GridItem>
        <GridItem>
          <Transactions colSpan={1} />
        </GridItem>
      </Grid>
    </DashBoardLayout>
  );
};

export default Dashboard;
