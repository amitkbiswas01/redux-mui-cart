import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import { useParams } from "react-router-dom";

import useStyles from "./styles";
import LoadingSpinner from "../Loading/index";
// import getSingleProduct from "../../services/getSingleProduct";
import data from "../../services/data";
import { addToCart } from "../Cart/cartSlice";

function Product() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getSingleProduct(id).then((data) => {
  //     setProduct(data);
  //     setLoading(false);
  //   });
  // }, [id]);

  useEffect(() => {
    setTimeout(() => {
      const productData = data.find((elem) => elem.id.toString() === id);
      setProduct(productData);
      setLoading(false);
    }, 2000);
  }, [id]);

  return (
    <>
      {loading === true ? (
        <LoadingSpinner />
      ) : (
        <Container maxWidth="md" className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item md={6} sm={12}>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt={product.title}
                    src={product.image}
                  />
                </ButtonBase>
              </Grid>
              <Grid item container md={6} sm={12}>
                <Grid item container direction="column" spacing={2}>
                  <Grid item className={classes.title}>
                    <Typography gutterBottom variant="h3" component="h1">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h2"
                      className={classes.price}
                      color="primary"
                    >
                      $ {product.price}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" gutterBottom>
                      {product.description}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => dispatch(addToCart(product.id))}
                      variant="outlined"
                      color="primary"
                    >
                      Add to Cart
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      )}
    </>
  );
}

export default Product;
