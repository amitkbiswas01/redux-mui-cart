import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(18),
    padding: theme.spacing(4),
    width: "100%",
  },
  image: {
    width: "50%",
    height: "auto",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    minWidth: "5rem",
    fontWeight: "bold",
  },
}));

export default useStyles;
