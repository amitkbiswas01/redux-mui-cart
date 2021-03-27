import React from "react";
import { Box, Typography } from "@material-ui/core";

const style = {
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function NotFound() {
  return (
    <Box component="div" style={style}>
      <Typography variant="h2">Page Not Found.</Typography>
    </Box>
  );
}
