import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Group } from "../utils/data";
import Menu from "./Menu";
import Image from "next/image";
import { createStyles, makeStyles } from "@material-ui/core";
import { DataRow } from "../utils/data";

const useStyles = makeStyles(() => {
  return createStyles({
    item: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      height: "100px",
      width: "100vw",
    },
    container: {
      display: "flex",
      justifyContent: "flex-end",
      ml: "20px",
    },
    typography: {
      "@media (max-width: 768px)": {
        fontSize: "11px",
      },
    },
  });
});

export const ItemRow = ({
  id,
  icon,
  type,
  subject,
  year,
  admin,
  person,
  groups,
}: DataRow) => {
  const { item, container, typography } = useStyles();
  return (
    <div className={item} key={id}>
      <div className={container}>
        <div style={{ width: "2vw", marginLeft: "20px" }}>
          {icon ? (
            <Image src={icon} alt="Clip" />
          ) : (
            <div style={{ width: 20 }}></div>
          )}
        </div>

        <div style={{ width: "15vw" }}>
          <Typography
            className={typography}
            sx={{
              fontWeight: "800",
              fontSize: "16px",
            }}>
            {type}
          </Typography>
        </div>
        <div style={{ width: "8vw" }}>
          <Typography className={typography}>{subject}</Typography>
        </div>
        <div style={{ width: "5vw" }}>
          <Typography className={typography}>{year}</Typography>
        </div>
        <div style={{ width: "15vw" }}>
          <Typography className={typography}>{person}</Typography>
        </div>
        <div style={{ width: "13vw" }}>
          <Typography className={typography}>{admin}</Typography>
        </div>
        {groups.map((group: Group) => (
          <Button
            key={group.name}
            variant="contained"
            sx={{
              fontSize: 8,
              width: "auto",
              height: "20px",
              mr: "10px",
              backgroundColor: group.backgroundColor,
              color: group.color,
            }}>
            {group.name}
          </Button>
        ))}
      </div>
      <Menu />
    </div>
  );
};
