import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Container } from "@mui/material";
import { Divider } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <div>
      <Box sx={{ flex: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#DABCCE" }}>
          <Toolbar sx={{ justifyContent: "flex-end" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "#AD1A72" }}>
              <MenuIcon />
            </IconButton>
            <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Divider orientation="vertical" sx={{ my: 0.5 }} />
              <AccountCircleIcon sx={{ mr: "8px" }} />
              <Typography color="inherit" sx={{ color: "#AD1A72" }}>
                James Smith
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
