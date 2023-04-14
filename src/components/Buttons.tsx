import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { NativeSelect } from "@material-ui/core";
import { Container } from "@mui/material";

export default function Buttons() {
  return (
    <Stack spacing={2} direction="row">
      <Container sx={{ ml: "100px" }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#333333", borderRadius: "7px" }}>
          + Create Template
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#333333", ml: "45px" }}>
          ? Search Discovery
        </Button>
      </Container>
      <NativeSelect
        defaultValue={"Alphabetically"}
        style={{ marginRight: "50px" }}>
        <option>Alphabetically</option>
      </NativeSelect>
    </Stack>
  );
}
