import {
  CardActionArea,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import React from "react";

export const PostCard = ({ post }) => {
  return (
    <Grid item xs={12} md={6} sm={3}>
      <CardActionArea component="a" href="#">
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            sx={{
              flex: 1,
            }}
          >
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Button variant="outlined" style={{ color: "skyblue" }}>
                Continue reading...
              </Button>
            </CardContent>
          </div>

          <Box
            sx={{
              display: { xs: "none", md: "block", width: 160 },
            }}
          >
            <CardMedia
              className="cardMedia"
              image={post.image}
              title={post.imageTitle}
            />
          </Box>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
