import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const CardEmail = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="body2" sx={{ overflowWrap: "break-word" }}>
          Email Us
        </Typography>
        <Typography
          sx={{ fontSize: 24, overflowWrap: "break-word" }}
          color="text.secondary"
          gutterBottom
        >
          carlargente@gmail.com
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardEmail;
