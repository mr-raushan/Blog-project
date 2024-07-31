import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

const FeaturedPost = () => {
  return (
    <Card
      sx={{
        backgroundImage: `url(https://images.unsplash.com/photo-1516571137133-1be29e37143a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D)`,
        backgroundPosition: "center",
        padding: "15px 25px",
      }}
    >
      <CardContent className="textContainer">
        <Typography
          sx={{
            fontSize: 40,
            fontFamily: "monospace",
          }}
          gutterBottom
        >
          Title of a longer featured blog post
        </Typography>
        <Typography variant="h5">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          content
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="error" size="small">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
