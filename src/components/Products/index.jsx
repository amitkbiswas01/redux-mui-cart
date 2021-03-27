import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Products() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.heroTitle} maxWidth="md">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Wide range of products. Just for you!
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti
          suscipit ipsam. Laudantium facere, voluptas sit omnis possimus quidem
          vitae?
        </Typography>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Product Name
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quae consequuntur necessitatibus perspiciatis aliquid unde
                    labore odit recusandae esse nam nulla!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Details
                  </Button>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Products;
