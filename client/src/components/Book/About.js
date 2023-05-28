import { Box, Typography } from "@mui/material";
import React from "react";
import "./Book.css";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          sx={{ fontFamily: "cursive", paddingTop: 20, color: "red" }}
          variant="h2"
        >
          This is a CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: "cursive", color: "blue" }} variant="h3">
          By Mern Stack
        </Typography>
      </Box>
    </div>
  );
};

export default About;
