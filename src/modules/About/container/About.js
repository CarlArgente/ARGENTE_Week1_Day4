import React from "react";
import Banner from "../component/Banner";
import { Box, Card, Grid, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {
  xAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: "Jan",
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: "Fev",
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: "Mar",
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: "Apr",
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: "May",
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: "June",
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: "July",
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: "Aug",
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: "Sept",
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: "Oct",
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: "Nov",
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: "Dec",
  },
];
const valueFormatter = (value) => `${value}mm`;
const About = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>About Us</h2>

      <Banner />
      <div style={{ height: "100vh" }}>
        <Typography variant="h4" pt={5}>
          Data From Us
        </Typography>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={4}>
              <Card variant="outlined"  sx={{height: "400px"}}>
                <BarChart
                  series={[
                    { data: [3, 4, 1, 6, 5], stack: "A", label: "series A1" },
                    { data: [4, 3, 1, 5, 8], stack: "A", label: "series A2" },
                    { data: [4, 2, 5, 4, 1], stack: "B", label: "series B1" },
                    { data: [2, 8, 1, 3, 1], stack: "B", label: "series B2" },
                    { data: [10, 6, 5, 8, 9], label: "series C1" },
                  ]}
                  width={600}
                  height={350}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined" sx={{height: "400px"}}>
                <BarChart
                  dataset={dataset}
                  yAxis={[{ scaleType: "band", dataKey: "month" }]}
                  series={[
                    {
                      dataKey: "seoul",
                      label: "Seoul rainfall",
                      valueFormatter,
                    },
                  ]}
                  layout="horizontal"
                  {...chartSetting}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default About;
