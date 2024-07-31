import { Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

export const Sidebar = ({ archives, description, social, title }) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        textAlign: {
          xs: "center",
          md: "left",
        },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          padding: "1rem",
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>

      <Typography
        variant="h6"
        gutterBottom
        sx={{
          marginTop: "24px",
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.title}
          sx={{
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          {archive.title}
        </Link>
      ))}

      <Typography
        variant="h6"
        gutterBottom
        sx={{
          marginTop: "24px",
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        Social
      </Typography>
      {social.map((dot) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={dot.name}
          sx={{
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          <Grid
            container
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent={{
              xs: "center",
              md: "left",
            }}
          >
            <Grid item>{React.isValidElement(dot.icon) ? dot.icon : null}</Grid>
            <Grid item>{dot.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};
