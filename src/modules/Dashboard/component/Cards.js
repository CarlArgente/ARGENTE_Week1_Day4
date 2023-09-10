import React, { useEffect, useState } from "react";
import {
  Typography,
  Stack,
  CardContent,
  Card,
} from "@mui/material/";
import axios from "axios";
import { getTodo } from "../../../services";

function Cards() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get(getTodo)
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const CustomCard = ({ id, title, completed }) => {
    return (
      <Card sx={{ minWidth: 250, maxWidth: 250 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ID: {id}
          </Typography>
         
          <Typography variant="body2" sx={{ overflowWrap: "break-word" }}>
            {title}
          </Typography>
          <Typography variant="body2" component="div">
            Status: {completed ? "Completed" : "Incomplete"}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 1, sm: 2, md: 4 }}
      mt={2}
      flexWrap="wrap"
      useFlexGap
    >
      {todos.map((todo) => {
        return (
          <React.Fragment key={todo.id}>
            <CustomCard
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          </React.Fragment>
        );
      })}
    </Stack>
  );
}

export default Cards;
