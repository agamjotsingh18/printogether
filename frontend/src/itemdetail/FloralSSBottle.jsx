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
import { AddShoppingCart, Close, LocalFlorist } from "@mui/icons-material";
import floralBottleImg from "../assets/floral-ss-bottle.png";
import floralBottleImg2 from "../assets/floral-ss-bottle.png";
import floralBottleImg3 from "../assets/floral-ss-bottle.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const FloralSSBottle = ({ addToCart }) => {
  const priceMapping = {
    "500ml": 899,
    "750ml": 1099,
  };

  const availableDesigns = [
    "Rose Gold Floral", 
    "Silver Vine", 
    "Gold Blossom"
  ];

  const defaultSize = "500ml";
  const defaultDesign = "Rose Gold Floral";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedDesign, setSelectedDesign] = useState(defaultDesign);
  const [mainImage, setMainImage] = useState(floralBottleImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const floralBottleDetails = {
    name: "Floral Stainless Steel Bottle",
    image: floralBottleImg,
    description:
      "Elegant stainless steel water bottle featuring beautiful floral designs. Keeps beverages hot for 12 hours or cold for 24 hours. Perfect for corporate gifting or personal use.",
    features: [
      "Double-walled vacuum insulation",
      "18/8 food-grade stainless steel",
      "Hand-painted floral designs",
      "Leak-proof flip-top lid",
      "Copper insulation layer",
      "Corporate branding options"
    ],
    sizes: ["500ml", "750ml"],
    extraImages: [floralBottleImg2, floralBottleImg3],
    tags: ["Elegant", "Floral", "Insulated"]
  };

  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...floralBottleDetails,
      selectedSize,
      selectedDesign,
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
              {floralBottleDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Floral" ? <LocalFlorist fontSize="small" /> : null}
                  sx={{ backgroundColor: "#e91e63", color: "white", fontWeight: 'bold' }}
                />
              ))}
            </Box>
            
            <Zoom>
              <img src={mainImage} alt={floralBottleDetails.name} style={{ width: "100%", borderRadius: "8px", cursor: "zoom-in", maxHeight: "400px", objectFit: "contain" }} />
            </Zoom>

            <Box sx={{ display: "flex", gap: 2, mt: 2, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" }}}>
              {floralBottleDetails.extraImages.map((image, index) => (
                <Paper key={index} onClick={() => setMainImage(image)} sx={{ p: 1, borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", border: mainImage === image ? "2px solid #e91e63" : "none", "&:hover": { border: "2px solid #e91e63" }, flexShrink: 0 }}>
                  <img src={image} alt={`Floral SS Bottle ${index + 1}`} style={{ width: "100px", height: "100px", borderRadius: "6px", objectFit: "cover" }} />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" }}}>
            {floralBottleDetails.name}
          </Typography>
          
          <Typography variant="h5" sx={{ color: "#e91e63", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" }}}>
            ₹{price}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            {floralBottleDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Features:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "20px", listStyleType: "none", padding: 0 }}>
            {floralBottleDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: "#e91e63", borderRadius: '50%', marginRight: '8px' }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Available Sizes:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {floralBottleDetails.sizes.map((size, index) => (
              <Paper key={index} onClick={() => setSelectedSize(size)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedSize === size ? "#e91e63" : "white", color: selectedSize === size ? "white" : "inherit", flex: "1 1 100px" }}>
                {size}
              </Paper>
            ))}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Design Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableDesigns.map((design, index) => (
              <Paper key={index} onClick={() => setSelectedDesign(design)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedDesign === design ? "#e91e63" : "white", color: selectedDesign === design ? "white" : "inherit", flex: "1 1 100px" }}>
                {design}
              </Paper>
            ))}
          </Box>

          <Button variant="contained" startIcon={<AddShoppingCart />} sx={{ background: "#e91e63", color: "white", fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" }, padding: { xs: "12px 20px", md: "14px 28px" }, "&:hover": { background: "#c2185b", transform: "translateY(-2px)" }, width: { xs: "100%", md: "auto" }, borderRadius: "8px", boxShadow: "0 4px 12px rgba(233, 30, 99, 0.3)", transition: 'all 0.2s ease' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: "#e91e63", fontStyle: 'italic', fontWeight: '500' }}>
            * Hand-wash recommended to preserve floral designs
          </Typography>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message="Floral SS Bottle added to cart!" action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar} sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}><Close fontSize="small" /></IconButton>} sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#e91e63", color: "white", borderRadius: "8px", fontWeight: 500 } }} />
    </Container>
  );
};

export default FloralSSBottle;