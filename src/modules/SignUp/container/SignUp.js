import React, { Component } from "react";
import { Stack } from "@mui/material";
import FormSign from "../component/FormSign";

class SignUp extends Component {
  render() {
    return (
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        component="main"
        spacing={2}
        mt={4}
      >
        <FormSign />
      </Stack>
    );
  }
}

export default SignUp;
