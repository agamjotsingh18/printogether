import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Container,
  Grid,
  Snackbar,
  IconButton,
  Chip
} from "@mui/material";
import { AddShoppingCart, Close, Healing } from "@mui/icons-material";
import copperBottleImg from "../assets/pure-copper-bottle.png";
import copperBottleImg2 from "../assets/pure-copper-bottle.png";
import copperBottleImg3 from "../assets/pure-copper-bottle.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const PureCopperBottle = ({ addToCart }) => {
  const priceMapping = {
    "500ml": 1499,
    "750ml": 1799,
  };

  const availableStyles = [
    "Plain Copper", 
    "Engraved Design", 
    "Hammered Finish"
  ];

  const defaultSize = "500ml";
  const defaultStyle = "Plain Copper";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedStyle, setSelectedStyle] = useState(defaultStyle);
  const [mainImage, setMainImage] = useState(copperBottleImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const copperBottleDetails = {
    name: "Pure Copper Bottle",
    image: copperBottleImg,
    description:
      "Authentic pure copper water bottle with Ayurvedic health benefits. Storing water in copper vessels is known to have numerous health benefits according to ancient Ayurvedic practices.",
    features: [
      "100% pure copper construction",
      "Ayurvedic health benefits",
      "Naturally anti-bacterial",
      "Handcrafted by skilled artisans",
      "Includes copper cleaning kit",
      "Corporate branding options",
      "Develops natural patina over time"
    ],
    sizes: ["500ml", "750ml"],
    extraImages: [copperBottleImg2, copperBottleImg3],
    tags: ["Ayurvedic", "Healthy", "Premium"]
  };

  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...copperBottleDetails,
      selectedSize,
      selectedStyle,
      price,
      quantity: 1,
    };
    addToCart(item);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container sx={{ py: 6, maxWidth: 1200, margin: "40px auto 0 auto", px: { xs: 2, md: 3 }}}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: "10px", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", position: "relative" }}>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              {copperBottleDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Ayurvedic" ? <Healing fontSize="small" /> : null}
                  sx={{ backgroundColor: "#b71c1c", color: "white", fontWeight: 'bold' }}
                />
              ))}
            </Box>
            
            <Zoom>
              <img src={mainImage} alt={copperBottleDetails.name} style={{ width: "100%", borderRadius: "8px", cursor: "zoom-in", maxHeight: "400px", objectFit: "contain" }} />
            </Zoom>

            <Box sx={{ display: "flex", gap: 2, mt: 2, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" }}}>
              {copperBottleDetails.extraImages.map((image, index) => (
                <Paper key={index} onClick={() => setMainImage(image)} sx={{ p: 1, borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", border: mainImage === image ? "2px solid #b71c1c" : "none", "&:hover": { border: "2px solid #b71c1c" }, flexShrink: 0 }}>
                  <img src={image} alt={`Pure Copper Bottle ${index + 1}`} style={{ width: "100px", height: "100px", borderRadius: "6px", objectFit: "cover" }} />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" }}}>
            {copperBottleDetails.name}
          </Typography>
          
          <Typography variant="h5" sx={{ color: "#b71c1c", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" }}}>
            ₹{price}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            {copperBottleDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Features:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "20px", listStyleType: "none", padding: 0 }}>
            {copperBottleDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: "#b71c1c", borderRadius: '50%', marginRight: '8px' }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Available Sizes:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {copperBottleDetails.sizes.map((size, index) => (
              <Paper key={index} onClick={() => setSelectedSize(size)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedSize === size ? "#b71c1c" : "white", color: selectedSize === size ? "white" : "inherit", flex: "1 1 100px" }}>
                {size}
              </Paper>
            ))}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Finish Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableStyles.map((style, index) => (
              <Paper key={index} onClick={() => setSelectedStyle(style)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedStyle === style ? "#b71c1c" : "white", color: selectedStyle === style ? "white" : "inherit", flex: "1 1 100px" }}>
                {style}
              </Paper>
            ))}
          </Box>

          <Button variant="contained" startIcon={<AddShoppingCart />} sx={{ background: "#b71c1c", color: "white", fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" }, padding: { xs: "12px 20px", md: "14px 28px" }, "&:hover": { background: "#8e0000", transform: "translateY(-2px)" }, width: { xs: "100%", md: "auto" }, borderRadius: "8px", boxShadow: "0 4px 12px rgba(183, 28, 28, 0.3)", transition: 'all 0.2s ease' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: "#b71c1c", fontStyle: 'italic', fontWeight: '500' }}>
            * Includes instruction manual for proper use and maintenance
          </Typography>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message="Pure Copper Bottle added to cart!" action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar} sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}><Close fontSize="small" /></IconButton>} sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#b71c1c", color: "white", borderRadius: "8px", fontWeight: 500 } }} />
    </Container>
  );
};

export default PureCopperBottle;