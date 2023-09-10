import React from "react";
import Cards from "../component/Cards";
import {
    Typography,
    Stack,
  } from "@mui/material/";
const Dashboard = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={2}
        flexWrap="wrap"
        useFlexGap
      >
        <Typography variant="h2" sx={{ overflowWrap: "break-word" }}>
          Todo List
        </Typography>
      </Stack>
      <Cards />
    </>
  );
};

export default Dashboard;
