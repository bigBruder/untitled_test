import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import data, { DataRow } from "../utils/data";
import { ItemRow } from "./Item";

export default function BasicStack() {
  return (
    <Box sx={{ width: "100vw", marginTop: "20px", margin: "auto" }}>
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          mb: "20px",
        }}>
        <div style={{ width: "17vw", margin: "15px 0 0 20px" }}>
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "700" }}>
            Assessment Type
          </Typography>
        </div>
        <div style={{ width: "8vw" }}>
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "700" }}>
            Subject
          </Typography>
        </div>
        <div style={{ width: "5vw" }}>
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "700" }}>
            Year
          </Typography>
        </div>
        <div style={{ width: "15vw" }}>
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "700" }}>
            Shared with
          </Typography>
        </div>{" "}
        <div style={{ width: "13vw" }}>
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "700" }}>
            Assessment Admin
          </Typography>
        </div>
        <div style={{ width: "20vw" }}>
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "700" }}>
            Skill Groups
          </Typography>
        </div>{" "}
      </Stack>
      <Stack spacing={5}>
        {data.map((row: DataRow) => (
          <ItemRow key={row.id} {...row} />
        ))}
      </Stack>
    </Box>
  );
}
