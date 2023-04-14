import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Menu from ".//Menu";
import SvgIcon from "@mui/material/SvgIcon";
import { createStyles, makeStyles } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import { url } from "inspector";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

const data = [
  {
    vector: "",
    type: "Critical Analysys",
    subject: "Literature",
    year: "7",
    person: "Alphington Grammar",
    admin: "James Smith",
    groups: ["INTRO", "WHAT", "HOW", "WHY", "IMAGE", "EXPRESSION"],
  },
  {
    vector: "",
    type: "Creative Writing",
    subject: "Literature",
    year: "7",
    person: "Only me",
    admin: "Grace Elliott",
    groups: "",
  },
  {
    vector: "",
    type: "Descriptive Essay",
    subject: "Literature",
    year: "7",
    person: "Public",
    admin: "",
    groups: "",
  },
  {
    vector: "",
    type: "Critical Analysys",
    subject: "Literature",
    year: "8",
    person: "Alphington Grammar",
    admin: "",
    groups: "",
  },
];

export default function BasicStack() {
  const { item } = useStyles();
  return (
    <Box sx={{ width: "95vw", marginTop: "20px", margin: "auto" }}>
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
        <Typography sx={{ width: "15vw", mt: "15px" }}>
          Assessment Type
        </Typography>
        <Typography sx={{ width: "10vw" }}>Subject</Typography>
        <Typography sx={{ width: "5vw" }}>Year</Typography>
        <Typography sx={{ width: "10vw" }}>Shared with</Typography>
        <Typography sx={{ width: "10vw" }}>Assessment Admin</Typography>
        <Typography sx={{ width: "15vw" }}>Skill Groups</Typography>
      </Stack>
      <Stack spacing={3}>
        <Item className={item}>
          <SvgIcon sx={{ mr: "65px" }} />
          <Container
            sx={{
              display: "flex",
              // justifyContent: "space-around",
              // mr: "-5vw",
            }}>
            <Typography sx={{ fontWeight: "700", width: "15vw" }}>
              Critical Analysys
            </Typography>
            <Typography sx={{ width: "10vw" }}>Literature</Typography>
            <Typography sx={{ width: "5vw" }}>7</Typography>
            <Typography sx={{ width: "10vw" }}>Alphington Grammar</Typography>
            <Typography sx={{ width: "10vw" }}>James Smith</Typography>
          </Container>
          <Container sx={{ width: "90vw" }}>
            <Button
              variant="contained"
              sx={{ width: "50px", ml: "10px", backgroundColor: "#AD1A72" }}>
              Intro
            </Button>
            <Button
              variant="contained"
              sx={{ width: "50px", ml: "10px", backgroundColor: "#6940A5" }}>
              What
            </Button>
            <Button
              variant="contained"
              sx={{ width: "50px", ml: "10px", backgroundColor: "#3D9487" }}>
              How
            </Button>
            <Button
              variant="contained"
              sx={{ width: "50px", ml: "10px", backgroundColor: "#0B6E99" }}>
              Why
            </Button>
            <Button
              variant="contained"
              sx={{ width: "50px", ml: "10px", backgroundColor: "#DFAB01" }}>
              IMAGE
            </Button>
            <Button
              variant="contained"
              sx={{ ml: "10px", backgroundColor: "#D9730D" }}>
              EXPRESSION
            </Button>
          </Container>
          <Menu />
        </Item>
      </Stack>
    </Box>
  );
}
