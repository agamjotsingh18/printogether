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
import { AddShoppingCart, Close, Devices } from "@mui/icons-material";
import slimSleeveImg from "../assets/laptop-sleeve.png";
import slimSleeveImg2 from "../assets/laptop-sleeve.png";
import slimSleeveImg3 from "../assets/laptop-sleeve.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const SlimGuardLaptopSleeve = ({ addToCart }) => {
  const priceMapping = {
    "13-inch": 1299,
    "15-inch": 1499,
  };

  const availableColors = [
    "Charcoal Grey", 
    "Jet Black", 
    "Deep Blue",
    "Burgundy"
  ];

  const defaultSize = "13-inch";
  const defaultColor = "Charcoal Grey";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [mainImage, setMainImage] = useState(slimSleeveImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const slimSleeveDetails = {
    name: "SlimGuard Laptop Sleeve",
    image: slimSleeveImg,
    description:
      "Ultra-slim yet protective laptop sleeve with shock-absorbent padding. The sleek design adds minimal bulk while providing excellent protection against bumps and scratches.",
    features: [
      "Neoprene exterior with microfiber lining",
      "Shock-absorbent EVA foam padding",
      "Ultra-slim profile (only 8mm thick)",
      "Water-resistant material",
      "Hidden pocket for accessories",
      "Corporate branding options"
    ],
    sizes: ["13-inch", "15-inch"],
    extraImages: [slimSleeveImg2, slimSleeveImg3],
    tags: ["Slim", "Protective", "Lightweight"]
  };

  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...slimSleeveDetails,
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
              {slimSleeveDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Slim" ? <Devices fontSize="small" /> : null}
                  sx={{ backgroundColor: "#795548", color: "white", fontWeight: 'bold' }}
                />
              ))}
            </Box>
            
            <Zoom>
              <img src={mainImage} alt={slimSleeveDetails.name} style={{ width: "100%", borderRadius: "8px", cursor: "zoom-in", maxHeight: "400px", objectFit: "contain" }} />
            </Zoom>

            <Box sx={{ display: "flex", gap: 2, mt: 2, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" }}}>
              {slimSleeveDetails.extraImages.map((image, index) => (
                <Paper key={index} onClick={() => setMainImage(image)} sx={{ p: 1, borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", border: mainImage === image ? "2px solid #795548" : "none", "&:hover": { border: "2px solid #795548" }, flexShrink: 0 }}>
                  <img src={image} alt={`SlimGuard Laptop Sleeve ${index + 1}`} style={{ width: "100px", height: "100px", borderRadius: "6px", objectFit: "cover" }} />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" }}}>
            {slimSleeveDetails.name}
          </Typography>
          
          <Typography variant="h5" sx={{ color: "#795548", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" }}}>
            ₹{price}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            {slimSleeveDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Features:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "20px", listStyleType: "none", padding: 0 }}>
            {slimSleeveDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: "#795548", borderRadius: '50%', marginRight: '8px' }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Available Sizes:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {slimSleeveDetails.sizes.map((size, index) => (
              <Paper key={index} onClick={() => setSelectedSize(size)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedSize === size ? "#795548" : "white", color: selectedSize === size ? "white" : "inherit", flex: "1 1 100px" }}>
                {size}
              </Paper>
            ))}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Color Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableColors.map((color, index) => (
              <Paper key={index} onClick={() => setSelectedColor(color)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedColor === color ? "#795548" : "white", color: selectedColor === color ? "white" : "inherit", flex: "1 1 100px" }}>
                {color}
              </Paper>
            ))}
          </Box>

          <Button variant="contained" startIcon={<AddShoppingCart />} sx={{ background: "#795548", color: "white", fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" }, padding: { xs: "12px 20px", md: "14px 28px" }, "&:hover": { background: "#5d4037", transform: "translateY(-2px)" }, width: { xs: "100%", md: "auto" }, borderRadius: "8px", boxShadow: "0 4px 12px rgba(121, 85, 72, 0.3)", transition: 'all 0.2s ease' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: "#795548", fontStyle: 'italic', fontWeight: '500' }}>
            * Fits laptops up to 1.5cm thick
          </Typography>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message="SlimGuard Laptop Sleeve added to cart!" action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar} sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}><Close fontSize="small" /></IconButton>} sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#795548", color: "white", borderRadius: "8px", fontWeight: 500 } }} />
    </Container>
  );
};

export default SlimGuardLaptopSleeve;