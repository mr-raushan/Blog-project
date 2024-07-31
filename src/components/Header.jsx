import { Badge, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SidebarDrawer from "./SidebarDrawer.tsx";

export const Header = () => {
  return (
    <>
      <Toolbar>
        <SidebarDrawer>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </SidebarDrawer>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
          }}
        >
          Blogging Website
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar
        sx={{
          fontSize: 20,
          textTransform: "uppercase",
          justifyContent: "center",
          fontFamily: "monospace",
        }}
      >
        Express your emotions through words
      </Toolbar>
    </>
  );
};
