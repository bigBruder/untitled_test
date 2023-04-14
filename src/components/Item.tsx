import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import { Group } from "../data";
import Paper from "@mui/material/Paper";
import Menu from ".//Menu";
import Image from "next/image";
import { createStyles, makeStyles } from "@material-ui/core";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ItemElem({ elem }) {
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
  console.log(elem);
  const { item } = useStyles();
  // const elem = {props}
  return (
    <Item key={elem.id} className={item}>
      <Container sx={{ display: "flex" }}>
        <div style={{ width: "5vw" }}>
          {elem.vector ? (
            <Image src={elem.vector} alt="Picture of the author" />
          ) : (
            <div style={{ width: 20, height: 50 }}></div>
          )}
        </div>

        <div style={{ width: "15vw" }}>
          <Typography>{elem.type}</Typography>
        </div>
        <div style={{ width: "15vw" }}>
          <Typography>{elem.subject}</Typography>
        </div>
        <div style={{ width: "15vw" }}>
          <Typography>7</Typography>
        </div>
        <div style={{ width: "15vw" }}>
          <Typography>{elem.person}</Typography>
        </div>
        <div style={{ width: "15vw" }}>
          <Typography>{elem.admin}</Typography>
        </div>
        {elem.groups.map((group: Group) => (
          <Button
            key={group}
            variant="contained"
            sx={{
              width: "50px",
              ml: "10px",
              backgroundColor: group.backgroundColor,
            }}>
            {group.name}
          </Button>
        ))}
      </Container>
      <Menu />
    </Item>
  );
}
