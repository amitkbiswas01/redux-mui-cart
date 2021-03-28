import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

function LoadingSpinner() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <CircularProgress color="primary" />
      <CircularProgress color="primary" />
    </Container>
  );
}
export default LoadingSpinner;
