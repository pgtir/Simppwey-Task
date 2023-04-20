import React from "react";
import Overview from "../components/Overview";
import Projects from "../components/Projects";
import { Box } from "@mui/material";
import HireMe from "../components/HireMe";

const Home = () => {
  return (
    <>
    <Box pt={3}>
      <Overview/>
      <Projects/>
      <HireMe/>
    </Box>
    </>
  );
};

export default Home;
