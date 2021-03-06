import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

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
import data from "../../services/data";
import { addToCart } from "../Cart/cartSlice";
// import getProducts from "../../services/getProducts";

function Products() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const classes = useStyles();

  // useEffect(() => {
  //   getProducts()
  //     .then((products) => {
  //       setProducts(products);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setProducts(data);
      setLoading(false);
    }, 200);
  }, []);

  const showDetails = (id) => {
    history.push(`/products/${id}/`);
  };

  return (
    <>
      {loading === true ? (
        <LoadingSpinner />
      ) : (
        <>
          <Container maxWidth="md" className={classes.header}>
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
                    <div className={classes.description}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6" component="h2">
                          {product.title}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          color="primary"
                          component="h2"
                        >
                          ${product.price}
                        </Typography>
                        <Typography>
                          {product.description.slice(0, 127)} ...
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          variant="outlined"
                          onClick={() => {
                            showDetails(product.id);
                          }}
                        >
                          Details
                        </Button>
                        <Button
                          size="small"
                          color="secondary"
                          variant="contained"
                          onClick={() => dispatch(addToCart(product.id))}
                        >
                          Add to Cart
                        </Button>
                      </CardActions>
                    </div>
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
