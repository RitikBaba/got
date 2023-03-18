import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Axios from "axios";

// axios.get('/user_login', {
// 	params: {
// 		username: 'john1904',
// 	}
// })
// .then(function (response) {
// 	console.log(response);
// })

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  const [gotdata, setgotdata] = useState([]);
  useEffect(() => {
    Axios.get(`https://www.anapioficeandfire.com/api/books`)
      .then((response) => {
        console.log("response", response.data);
        setgotdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log("gotdata", gotdata);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Company Name
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Books Layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {gotdata?.map((element) => (
              <Grid item key={element} xs={12} sm={6} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <CardContent
                    sx={{
                        textAlign:"center"
                    }}
                  >
                    <Typography gutterBottom variant="h4" component="h2">
                      {element.name}
                    </Typography>
                    <Typography variant="subtitle1">
                      Number of Pages - {element.numberOfPages}
                    </Typography>
                    <Typography>Authors - {element.authors}</Typography>
                    <Typography>Publisher - {element.publisher}</Typography>
                    <Typography>Country - {element.country}</Typography>
                    <Typography>Media Type - {element.mediaType}</Typography>
                    <Typography>ISBN - {element.isbn}</Typography>
                    <Typography>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Officia blanditiis enim nihil possimus distinctio, amet
                      exercitationem suscipit maiores temporibus, debitis ipsum
                      ratione accusantium similique ipsa?
                    </Typography>
                    <CardActions>
                      <Button sx={{ textAlign: "centre" }}>
                        {<a href={element.url}>View</a>}
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
