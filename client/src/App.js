import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Opportunities  from "./components/Opportunities/Opportunities";
import Form from "./components/Form/Form";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography varaint="h2" align="center">
          Opportunities
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing="{3}"
          >
            <Grid item xs={12} sm={7}>
              <Opportunities />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
