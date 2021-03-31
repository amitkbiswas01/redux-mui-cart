import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import { Link as RouterLink } from "react-router-dom";

import useStyles from "./styles";

function Landing() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper elevation={2} className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Material E-Commerce Site
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          sint aspernatur recusandae reiciendis dolorem voluptatum optio harum
          culpa repellendus corrupti fugit suscipit nihil tempora consequuntur
          explicabo modi, quo architecto. Saepe!
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                <Link component={RouterLink} to="/products" color="inherit">
                  Products
                </Link>
              </Button>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/cart" color="inherit">
                <Button variant="outlined" color="primary">
                  Cart
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Container>
  );
}

export default Landing;
