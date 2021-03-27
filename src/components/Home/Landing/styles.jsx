import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    marginTop: theme.spacing(8),
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default useStyles;
