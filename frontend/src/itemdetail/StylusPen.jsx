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
import { AddShoppingCart, Close, Edit } from "@mui/icons-material";
import stylusImg from "../assets/stylus-pen.png";
import stylusImg2 from "../assets/stylus-pen.png";
import stylusImg3 from "../assets/stylus-pen.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const StylusPen = ({ addToCart }) => {
  const priceMapping = {
    "Single": 499,
    "Pack of 3": 1299,
    "Pack of 5": 1999,
  };

  const availableColors = [
    "Black", 
    "Silver", 
    "Gold",
    "Rose Gold"
  ];

  const defaultSize = "Single";
  const defaultColor = "Black";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [mainImage, setMainImage] = useState(stylusImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const stylusDetails = {
    name: "Premium Stylus Pen",
    image: stylusImg,
    description:
      "Dual-function stylus pen with precision tip for touchscreens and smooth-writing ballpoint pen. Perfect for professionals who work across digital and paper mediums.",
    features: [
      "Precision stylus tip",
      "Smooth ballpoint writing",
      "Aluminum alloy body",
      "Palm rejection technology",
      "Universal compatibility",
      "Corporate branding options",
      "Magnetic attachment"
    ],
    sizes: ["Single", "Pack of 3", "Pack of 5"],
    extraImages: [stylusImg2, stylusImg3],
    tags: ["Tech", "Premium", "Dual-use"]
  };

  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...stylusDetails,
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
              {stylusDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Dual-use" ? <Edit fontSize="small" /> : null}
                  sx={{ backgroundColor: "#5e35b1", color: "white", fontWeight: 'bold' }}
                />
              ))}
            </Box>
            
            <Zoom>
              <img src={mainImage} alt={stylusDetails.name} style={{ width: "100%", borderRadius: "8px", cursor: "zoom-in", maxHeight: "400px", objectFit: "contain" }} />
            </Zoom>

            <Box sx={{ display: "flex", gap: 2, mt: 2, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" }}}>
              {stylusDetails.extraImages.map((image, index) => (
                <Paper key={index} onClick={() => setMainImage(image)} sx={{ p: 1, borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", border: mainImage === image ? "2px solid #5e35b1" : "none", "&:hover": { border: "2px solid #5e35b1" }, flexShrink: 0 }}>
                  <img src={image} alt={`Stylus Pen ${index + 1}`} style={{ width: "100px", height: "100px", borderRadius: "6px", objectFit: "cover" }} />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" }}}>
            {stylusDetails.name}
          </Typography>
          
          <Typography variant="h5" sx={{ color: "#5e35b1", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" }}}>
            ₹{price}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            {stylusDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Features:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "20px", listStyleType: "none", padding: 0 }}>
            {stylusDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: "#5e35b1", borderRadius: '50%', marginRight: '8px' }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Pack Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {stylusDetails.sizes.map((size, index) => (
              <Paper key={index} onClick={() => setSelectedSize(size)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedSize === size ? "#5e35b1" : "white", color: selectedSize === size ? "white" : "inherit", flex: "1 1 100px" }}>
                {size}
              </Paper>
            ))}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Color Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableColors.map((color, index) => (
              <Paper key={index} onClick={() => setSelectedColor(color)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedColor === color ? "#5e35b1" : "white", color: selectedColor === color ? "white" : "inherit", flex: "1 1 100px" }}>
                {color}
              </Paper>
            ))}
          </Box>

          <Button variant="contained" startIcon={<AddShoppingCart />} sx={{ background: "#5e35b1", color: "white", fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" }, padding: { xs: "12px 20px", md: "14px 28px" }, "&:hover": { background: "#4527a0", transform: "translateY(-2px)" }, width: { xs: "100%", md: "auto" }, borderRadius: "8px", boxShadow: "0 4px 12px rgba(94, 53, 177, 0.3)", transition: 'all 0.2s ease' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: "#5e35b1", fontStyle: 'italic', fontWeight: '500' }}>
            * Compatible with all capacitive touchscreens
          </Typography>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message="Stylus Pen added to cart!" action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar} sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}><Close fontSize="small" /></IconButton>} sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#5e35b1", color: "white", borderRadius: "8px", fontWeight: 500 } }} />
    </Container>
  );
};

export default StylusPen;