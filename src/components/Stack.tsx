import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { createStyles, makeStyles } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import data from "../data";
import ItemElem from "./Item";

const useStyles = makeStyles(() => {
  return createStyles({
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100px",
    },
  });
});

export default function BasicStack() {
  return (
    <Box sx={{ width: "92vw", marginTop: "20px", margin: "auto" }}>
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          width: "70vw",
          flexDirection: "row",
          justifyContent: "space-around",
          mb: "20px",
          ml: "7vw",
        }}>
        <div style={{ width: "15vw", marginTop: "15px" }}>
          <Typography>Assessment Type</Typography>
        </div>
        <div style={{ width: "15vw" }}>
          <Typography>Subject</Typography>
        </div>
        <div style={{ width: "15vw" }}>
          <Typography>Year</Typography>
        </div>
        <div style={{ width: "15vw" }}>
          <Typography>Shared with</Typography>
        </div>{" "}
        <div style={{ width: "15vw" }}>
          <Typography>Assessment Admin</Typography>
        </div>
        <div style={{ width: "15vw" }}>
          <Typography>Skill Groups</Typography>
        </div>{" "}
      </Stack>
      <Stack spacing={5}>
        {data.map((elem) => (
          <ItemElem key={elem.id} elem={elem} />
        ))}
      </Stack>
    </Box>
  );
}
