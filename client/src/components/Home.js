import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="150px"
      >
        <Button
          LinkComponent={Link}
          to="/books"
          style={{ marginTop: "15px", background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">View All Products</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
