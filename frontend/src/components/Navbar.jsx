import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ background: "#f8f9fa", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Typography variant="h5" sx={{ color: "#333", fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}>
          PRINT FUSION
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button sx={{ color: "#333", fontSize: "16px", textTransform: "none" }}>Home</Button>
          <Button sx={{ color: "#333", fontSize: "16px", textTransform: "none" }}>Services</Button>
          <Button sx={{ color: "#333", fontSize: "16px", textTransform: "none" }}>Portfolio</Button>
          <Button sx={{ color: "#333", fontSize: "16px", textTransform: "none" }}>About</Button>
        </Box>

        {/* CTA Button */}
        <Button variant="contained" sx={{ background: "#ff6600", color: "white", textTransform: "none", fontSize: "16px" }}>
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
