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
import { AddShoppingCart, Close, BrightnessHigh } from "@mui/icons-material";
import glossySipperImg from "../assets/glossy-white-sipper.png";
import glossySipperImg2 from "../assets/glossy-white-sipper.png";
import glossySipperImg3 from "../assets/glossy-white-sipper.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const GlossyWhiteSipper = ({ addToCart }) => {
  const priceMapping = {
    "500ml": 749,
    "750ml": 899,
  };

  const availableColors = [
    "Pure White", 
    "Pearl White", 
    "White with Gold Accents"
  ];

  const defaultSize = "500ml";
  const defaultColor = "Pure White";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [mainImage, setMainImage] = useState(glossySipperImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const glossySipperDetails = {
    name: "Glossy White Sipper",
    image: glossySipperImg,
    description:
      "Elegant glossy white stainless steel sipper with a modern minimalist design. The smooth finish and clean lines make it perfect for professional settings while maintaining excellent insulation properties.",
    features: [
      "Double-walled vacuum insulation",
      "High-gloss ceramic coating",
      "Leak-proof flip-top lid",
      "Sweat-proof exterior",
      "18/8 food-grade stainless steel",
      "Corporate branding options"
    ],
    sizes: ["500ml", "750ml"],
    extraImages: [glossySipperImg2, glossySipperImg3],
    tags: ["Elegant", "Minimalist", "Premium"]
  };

  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...glossySipperDetails,
      selectedSize,
      selectedColor,
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
              {glossySipperDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Minimalist" ? <BrightnessHigh fontSize="small" /> : null}
                  sx={{ backgroundColor: "#f5f5f5", color: "#616161", fontWeight: 'bold', border: "1px solid #e0e0e0" }}
                />
              ))}
            </Box>
            
            <Zoom>
              <img src={mainImage} alt={glossySipperDetails.name} style={{ width: "100%", borderRadius: "8px", cursor: "zoom-in", maxHeight: "400px", objectFit: "contain" }} />
            </Zoom>

            <Box sx={{ display: "flex", gap: 2, mt: 2, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" }}}>
              {glossySipperDetails.extraImages.map((image, index) => (
                <Paper key={index} onClick={() => setMainImage(image)} sx={{ p: 1, borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", border: mainImage === image ? "2px solid #616161" : "none", "&:hover": { border: "2px solid #616161" }, flexShrink: 0 }}>
                  <img src={image} alt={`Glossy White Sipper ${index + 1}`} style={{ width: "100px", height: "100px", borderRadius: "6px", objectFit: "cover" }} />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" }}}>
            {glossySipperDetails.name}
          </Typography>
          
          <Typography variant="h5" sx={{ color: "#616161", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" }}}>
            ₹{price}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            {glossySipperDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Features:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "20px", listStyleType: "none", padding: 0 }}>
            {glossySipperDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: "#616161", borderRadius: '50%', marginRight: '8px' }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Available Sizes:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {glossySipperDetails.sizes.map((size, index) => (
              <Paper key={index} onClick={() => setSelectedSize(size)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedSize === size ? "#616161" : "white", color: selectedSize === size ? "white" : "inherit", flex: "1 1 100px" }}>
                {size}
              </Paper>
            ))}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Color Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableColors.map((color, index) => (
              <Paper key={index} onClick={() => setSelectedColor(color)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedColor === color ? "#616161" : "white", color: selectedColor === color ? "white" : "inherit", flex: "1 1 100px" }}>
                {color}
              </Paper>
            ))}
          </Box>

          <Button variant="contained" startIcon={<AddShoppingCart />} sx={{ background: "#616161", color: "white", fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" }, padding: { xs: "12px 20px", md: "14px 28px" }, "&:hover": { background: "#424242", transform: "translateY(-2px)" }, width: { xs: "100%", md: "auto" }, borderRadius: "8px", boxShadow: "0 4px 12px rgba(97, 97, 97, 0.3)", transition: 'all 0.2s ease' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: "#616161", fontStyle: 'italic', fontWeight: '500' }}>
            * Hand wash recommended to preserve glossy finish
          </Typography>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message="Glossy White Sipper added to cart!" action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar} sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}><Close fontSize="small" /></IconButton>} sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#616161", color: "white", borderRadius: "8px", fontWeight: 500 } }} />
    </Container>
  );
};

export default GlossyWhiteSipper;