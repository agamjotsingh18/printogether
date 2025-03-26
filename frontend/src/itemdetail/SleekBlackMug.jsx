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
import { AddShoppingCart, Close, Star } from "@mui/icons-material";
import sleekMugImg from "../assets/sleek-black-mug.png";
import sleekMugImg2 from "../assets/sleek-black-mug.png";
import sleekMugImg3 from "../assets/sleek-black-mug.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const SleekBlackMug = ({ addToCart }) => {
  const price = 499;
  const availableStyles = [
    "Matte Black", 
    "Glossy Black", 
    "Black with Gold Trim"
  ];

  const defaultStyle = "Matte Black";

  const [selectedStyle, setSelectedStyle] = useState(defaultStyle);
  const [mainImage, setMainImage] = useState(sleekMugImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const sleekMugDetails = {
    name: "Sleek Black Mug",
    image: sleekMugImg,
    description:
      "Premium black ceramic mug with a modern, sleek design. The elegant finish and comfortable handle make it perfect for daily use or corporate gifting.",
    features: [
      "400ml capacity",
      "High-quality ceramic construction",
      "Microwave and dishwasher safe",
      "Ergonomic handle design",
      "Custom logo printing available",
      "Elegant gift packaging included"
    ],
    extraImages: [sleekMugImg2, sleekMugImg3],
    tags: ["Modern", "Premium", "Customizable"]
  };

  const handleAddToCart = () => {
    const item = {
      ...sleekMugDetails,
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
              {sleekMugDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Premium" ? <Star fontSize="small" /> : null}
                  sx={{ backgroundColor: "#212121", color: "white", fontWeight: 'bold' }}
                />
              ))}
            </Box>
            
            <Zoom>
              <img src={mainImage} alt={sleekMugDetails.name} style={{ width: "100%", borderRadius: "8px", cursor: "zoom-in", maxHeight: "400px", objectFit: "contain" }} />
            </Zoom>

            <Box sx={{ display: "flex", gap: 2, mt: 2, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" }}}>
              {sleekMugDetails.extraImages.map((image, index) => (
                <Paper key={index} onClick={() => setMainImage(image)} sx={{ p: 1, borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", border: mainImage === image ? "2px solid #212121" : "none", "&:hover": { border: "2px solid #212121" }, flexShrink: 0 }}>
                  <img src={image} alt={`Sleek Black Mug ${index + 1}`} style={{ width: "100px", height: "100px", borderRadius: "6px", objectFit: "cover" }} />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" }}}>
            {sleekMugDetails.name}
          </Typography>
          
          <Typography variant="h5" sx={{ color: "#212121", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" }}}>
            ₹{price}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            {sleekMugDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Features:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "20px", listStyleType: "none", padding: 0 }}>
            {sleekMugDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: "#212121", borderRadius: '50%', marginRight: '8px' }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Style Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableStyles.map((style, index) => (
              <Paper key={index} onClick={() => setSelectedStyle(style)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedStyle === style ? "#212121" : "white", color: selectedStyle === style ? "white" : "inherit", flex: "1 1 100px" }}>
                {style}
              </Paper>
            ))}
          </Box>

          <Button variant="contained" startIcon={<AddShoppingCart />} sx={{ background: "#212121", color: "white", fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" }, padding: { xs: "12px 20px", md: "14px 28px" }, "&:hover": { background: "#000000", transform: "translateY(-2px)" }, width: { xs: "100%", md: "auto" }, borderRadius: "8px", boxShadow: "0 4px 12px rgba(33, 33, 33, 0.3)", transition: 'all 0.2s ease' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: "#212121", fontStyle: 'italic', fontWeight: '500' }}>
            * Minimum order of 20 pieces for custom printing
          </Typography>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message="Sleek Black Mug added to cart!" action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar} sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}><Close fontSize="small" /></IconButton>} sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#212121", color: "white", borderRadius: "8px", fontWeight: 500 } }} />
    </Container>
  );
};

export default SleekBlackMug;