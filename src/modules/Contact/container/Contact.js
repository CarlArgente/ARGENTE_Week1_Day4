import { Grid, Box } from "@mui/material";
import React, { Component } from "react";
import CardEmail from "../component/CardEmail";
import CardContact from "../component/CardContact";
import CardLocation from "../component/CardLocation";

class Contact extends Component {
  render() {
    return (
      <div>
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
              <CardContact />
            </Grid>
            <Grid item xs={12} md={4}>
              <CardEmail />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            mt={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={8}>
              <CardLocation />
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default Contact;
