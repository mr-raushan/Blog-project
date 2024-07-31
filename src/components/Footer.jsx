import { Container, Link, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

export const Footer = ({ title, description }) => {
  const theme = useTheme();
  return (
    <footer>
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: theme.palette.background.paper,
          marginTop: theme.spacing(4),
          padding: theme.spacing(6, 0),
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright ©
          <Link
            color="inherit"
            href="https://material-ui.com"
            sx={{
              padding: 1,
            }}
          >
            Your Website
          </Link>
          All rights reserved
          {/* {new Date().getFullYear}. */}
        </Typography>
      </Container>
    </footer>
  );
};
