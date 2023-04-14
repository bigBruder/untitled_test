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
import data from "../data";

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
      <Stack spacing={5}>
        {data.map((elem) => (
          <Item key={elem.id} className={item}>
            <SvgIcon sx={{ mr: "65px" }} />
            <Container
              sx={{
                display: "flex",
                // justifyContent: "space-around",
                // mr: "-5vw",
              }}>
              <Typography sx={{ fontWeight: "700", width: "15vw" }}>
                {elem.type}
              </Typography>
              <Typography sx={{ width: "10vw" }}>{elem.subject}</Typography>
              <Typography sx={{ width: "5vw" }}>7</Typography>
              <Typography sx={{ width: "10vw" }}>{elem.person}</Typography>
              <Typography sx={{ width: "10vw" }}>{elem.admin}</Typography>
            </Container>
            <Container sx={{ width: "90vw" }}>
              {elem.groups.map((group) => (
                <Button
                  key={group}
                  variant="contained"
                  sx={{
                    width: "50px",
                    ml: "10px",
                    // backgroundColor: {group.backgroundColor},
                  }}>
                  {group.name}
                </Button>
              ))}
            </Container>
            <Menu />
          </Item>
        ))}
      </Stack>
    </Box>
  );
}
