import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const CardContact = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="body2" sx={{ overflowWrap: "break-word" }}>
          Contact Us
        </Typography>
        <Typography sx={{ fontSize: 24, overflowWrap: "break-word" }} color="text.secondary" gutterBottom>
          0945-866-2584
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardContact;
