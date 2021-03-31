import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";
import LoadingSpinner from "../Loading/index";
import data from "../../services/data";
import { selectProducts, addToCart, removeFromCart } from "../Cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectProducts);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      for (const cartProduct in cartProducts) {
        const product = data.find((elem) => elem.id.toString() === cartProduct);
        product.quantity = cartProducts[cartProduct].quantity;
        setProducts((products) => [...products, product]);
      }
      setLoading(false);
    }, 200);

    return () => {
      setProducts([]);
    };
  }, [cartProducts]);
  return (
    <>
      {loading === true ? (
        <LoadingSpinner />
      ) : (
        <div className={classes.root}>
          {products.length === 0 ? (
            <div className={classes.notFound}>
              <Typography
                variant="h3"
                component="h1"
                align="center"
                color="inherit"
              >
                Nothing's in the Cart!
              </Typography>
            </div>
          ) : (
            products.map((product, index) => {
              return (
                <Paper key={index} className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt="complex"
                          src={product.image}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            {product.title}
                          </Typography>
                        </Grid>
                        <Grid item container xs>
                          <Grid item className={classes.quantity}>
                            <Typography variant="body1" color="inherit">
                              Quantity: {product.quantity}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Button
                              variant="outlined"
                              onClick={() => dispatch(addToCart(product.id))}
                              color="primary"
                              style={{ marginRight: "0.5rem" }}
                            >
                              Add
                            </Button>
                            <Button
                              variant="outlined"
                              onClick={() =>
                                dispatch(removeFromCart(product.id))
                              }
                              color="primary"
                            >
                              Remove
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body1"
                          style={{ fontWeight: "bold" }}
                          color="primary"
                        >
                          Total: ${product.price * product.quantity}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              );
            })
          )}
        </div>
      )}
    </>
  );
}

export default Cart;
