import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "70vh", md: "90vh" }, // Responsive height
        backgroundImage: "url('https://source.unsplash.com/1600x900/?printing,office')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        px: 2,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
        },
      }}
    >
      <Box sx={{ position: "relative", maxWidth: "800px" }}>
        <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}>
          Premium Printing Services
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, fontSize: { xs: "1rem", md: "1.5rem" } }}>
          High-quality prints, business cards, banners, and more.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#FF9900",
            padding: "10px 25px",
            fontSize: "1.2rem",
            "&:hover": { backgroundColor: "#FF6600" },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
