import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { NativeSelect } from "@material-ui/core";
import { Container } from "@mui/material";

export default function Buttons() {
  return (
    <Stack sx={{ width: "100vw" }} spacing={2} direction="row">
      <Container sx={{ height: 37, ml: "-10px" }}>
        <Button
          variant="contained"
          sx={{
            fontSize: "11px",
            backgroundColor: "#333333",
            width: "160px",
            borderRadius: "7px",
          }}>
          + Create Template
        </Button>
        <Button
          variant="contained"
          sx={{
            fontSize: "11px",
            backgroundColor: "#333333",
            width: "165px",
            ml: "45px",
          }}>
          ? Search Discovery
        </Button>
      </Container>
      <NativeSelect
        defaultValue={"Alphabetically"}
        style={{
          height: "30px",
          padding: " 0 10px",
          marginRight: "50px",
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          textDecoration: "none",
        }}>
        <option>Alphabetically</option>
        <option>Date</option>
      </NativeSelect>
    </Stack>
  );
}
