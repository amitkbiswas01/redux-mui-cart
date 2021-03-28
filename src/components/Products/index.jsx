import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import useStyles from "./styles";
import LoadingSpinner from "../Loading/index";
import getProducts from "../../services/getProducts";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading === true ? (
        <LoadingSpinner />
      ) : (
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              deleniti suscipit ipsam. Laudantium facere, voluptas sit omnis
              possimus quidem vitae?
            </Typography>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {products.map((product, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={product.image}
                      title={product.title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Container className={classes.titlePrice}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                          ${product.price}
                        </Typography>
                      </Container>
                      <Typography>{product.description}</Typography>
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
      )}
    </>
  );
}

export default Products;
