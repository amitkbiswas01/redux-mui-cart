import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
      <CircularProgress color="secondary" />
      <CircularProgress color="primary" />
    </Container>
  );
}
export default LoadingSpinner;
