import "./App.css";
import Container from "@mui/material/Container";
import { Header } from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FeaturedPost from "./components/FeaturedPost";
import { Grid } from "@mui/material";
import { featuredPosts, sidebar } from "./data/Data";
import { PostCard } from "./components/PostCard";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid
          container
          spacing={5}
          sx={{
            marginTop: "24px",
          }}
        >
          <Main title="From the Firehose" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
            // 44 minutes ke aage se dekhna hai RoadsideCoder
          />
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default App;
