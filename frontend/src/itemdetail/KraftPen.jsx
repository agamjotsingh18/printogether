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
import { AddShoppingCart, Close, Eco } from "@mui/icons-material";
import kraftImg from "../assets/kraft-pen.png";
import kraftImg2 from "../assets/kraft-pen.png";
import kraftImg3 from "../assets/kraft-pen.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const KraftPen = ({ addToCart }) => {
  const priceMapping = {
    "Single": 299,
    "Pack of 5": 1299,
    "Pack of 10": 2299,
  };

  const availableColors = [
    "Natural", 
    "Black", 
    "Blue",
    "Red"
  ];

  const defaultSize = "Single";
  const defaultColor = "Natural";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [mainImage, setMainImage] = useState(kraftImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const kraftDetails = {
    name: "Eco-Friendly Kraft Pen",
    image: kraftImg,
    description:
      "Sustainable kraft paper pen with smooth writing performance. Made from recycled materials, this eco-conscious writing instrument combines environmental responsibility with professional quality.",
    features: [
      "Made from recycled kraft paper",
      "Smooth 0.7mm ballpoint",
      "Biodegradable construction",
      "Lightweight and comfortable",
      "Corporate branding options",
      "Refillable design",
      "Eco-friendly packaging"
    ],
    sizes: ["Single", "Pack of 5", "Pack of 10"],
    extraImages: [kraftImg2, kraftImg3],
    tags: ["Eco-friendly", "Sustainable", "Premium"]
  };

  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...kraftDetails,
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
            {/* <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              {kraftDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Eco-friendly" ? <Eco fontSize="small" /> : null}
                  sx={{ backgroundColor: "#43a047", color: "white", fontWeight: 'bold' }}
                />
              ))}
            </Box> */}
            
            <Zoom>
              <img src={mainImage} alt={kraftDetails.name} style={{ width: "100%", borderRadius: "8px", cursor: "zoom-in", maxHeight: "400px", objectFit: "contain" }} />
            </Zoom>

            <Box sx={{ display: "flex", gap: 2, mt: 2, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" }}}>
              {kraftDetails.extraImages.map((image, index) => (
                <Paper key={index} onClick={() => setMainImage(image)} sx={{ p: 1, borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", border: mainImage === image ? "2px solid #43a047" : "none", "&:hover": { border: "2px solid #43a047" }, flexShrink: 0 }}>
                  <img src={image} alt={`Kraft Pen ${index + 1}`} style={{ width: "100px", height: "100px", borderRadius: "6px", objectFit: "cover" }} />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" }}}>
            {kraftDetails.name}
          </Typography>
          
          <Typography variant="h5" sx={{ color: "#43a047", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" }}}>
            ₹{price}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            {kraftDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Features:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "20px", listStyleType: "none", padding: 0 }}>
            {kraftDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: "#43a047", borderRadius: '50%', marginRight: '8px' }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Pack Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {kraftDetails.sizes.map((size, index) => (
              <Paper key={index} onClick={() => setSelectedSize(size)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedSize === size ? "#43a047" : "white", color: selectedSize === size ? "white" : "inherit", flex: "1 1 100px" }}>
                {size}
              </Paper>
            ))}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Color Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableColors.map((color, index) => (
              <Paper key={index} onClick={() => setSelectedColor(color)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedColor === color ? "#43a047" : "white", color: selectedColor === color ? "white" : "inherit", flex: "1 1 100px" }}>
                {color}
              </Paper>
            ))}
          </Box>

          <Button variant="contained" startIcon={<AddShoppingCart />} sx={{ background: "#43a047", color: "white", fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" }, padding: { xs: "12px 20px", md: "14px 28px" }, "&:hover": { background: "#2e7d32", transform: "translateY(-2px)" }, width: { xs: "100%", md: "auto" }, borderRadius: "8px", boxShadow: "0 4px 12px rgba(67, 160, 71, 0.3)", transition: 'all 0.2s ease' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: "#43a047", fontStyle: 'italic', fontWeight: '500' }}>
            * Each pen saves approximately 5 plastic pens from landfills
          </Typography>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message="Kraft Pen added to cart!" action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar} sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}><Close fontSize="small" /></IconButton>} sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#43a047", color: "white", borderRadius: "8px", fontWeight: 500 } }} />
    </Container>
  );
};

export default KraftPen;