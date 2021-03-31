import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5rem",
  },
  notFound: {
    marginTop: theme.spacing(36),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: "1rem",
    maxWidth: "40rem",
  },
  image: {
    width: "3rem",
    height: "auto",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  quantity: {
    marginRight: "3rem",
    marginTop: "0.3rem",
  },
}));

export default useStyles;
