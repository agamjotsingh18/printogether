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
import { AddShoppingCart, Close, Luggage } from "@mui/icons-material";
import luggageImg from "../assets/luggage-tags.png";
import luggageImg2 from "../assets/luggage-tags.png";
import luggageImg3 from "../assets/luggage-tags.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const LuggageTags = ({ addToCart }) => {
  const priceMapping = {
    "Single": 299,
    "Pack of 3": 799,
    "Pack of 5": 1199,
  };

  const availableMaterials = [
    "Leather", 
    "Silicone", 
    "Metal",
    "Acrylic"
  ];

  const defaultSize = "Single";
  const defaultMaterial = "Leather";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedMaterial, setSelectedMaterial] = useState(defaultMaterial);
  const [mainImage, setMainImage] = useState(luggageImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const luggageDetails = {
    name: "Premium Luggage Tags",
    image: luggageImg,
    description:
      "Durable and stylish luggage tags perfect for corporate gifting, travel accessories, and brand promotion. Customize with your logo or employee names for a practical yet elegant gift.",
    features: [
      "Custom engraving/printing",
      "Premium quality materials",
      "Secure attachment loop",
      "Corporate branding options",
      "Bulk order discounts",
      "Quick turnaround time",
      "Scratch-resistant surface"
    ],
    sizes: ["Single", "Pack of 3", "Pack of 5"],
    extraImages: [luggageImg2, luggageImg3],
    tags: ["Travel", "Durable", "Custom"]
  };

  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...luggageDetails,
      selectedSize,
      selectedMaterial,
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
              {luggageDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Travel" ? <Luggage fontSize="small" /> : null}
                  sx={{ backgroundColor: "#5d4037", color: "white", fontWeight: 'bold' }}
                />
              ))}
            </Box>
            
            <Zoom>
              <img src={mainImage} alt={luggageDetails.name} style={{ width: "100%", borderRadius: "8px", cursor: "zoom-in", maxHeight: "400px", objectFit: "contain" }} />
            </Zoom>

            <Box sx={{ display: "flex", gap: 2, mt: 2, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" }}}>
              {luggageDetails.extraImages.map((image, index) => (
                <Paper key={index} onClick={() => setMainImage(image)} sx={{ p: 1, borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", border: mainImage === image ? "2px solid #5d4037" : "none", "&:hover": { border: "2px solid #5d4037" }, flexShrink: 0 }}>
                  <img src={image} alt={`Luggage Tag ${index + 1}`} style={{ width: "100px", height: "100px", borderRadius: "6px", objectFit: "cover" }} />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" }}}>
            {luggageDetails.name}
          </Typography>
          
          <Typography variant="h5" sx={{ color: "#5d4037", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" }}}>
            ₹{price}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            {luggageDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Features:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "20px", listStyleType: "none", padding: 0 }}>
            {luggageDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: "#5d4037", borderRadius: '50%', marginRight: '8px' }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Pack Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {luggageDetails.sizes.map((size, index) => (
              <Paper key={index} onClick={() => setSelectedSize(size)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedSize === size ? "#5d4037" : "white", color: selectedSize === size ? "white" : "inherit", flex: "1 1 100px" }}>
                {size}
              </Paper>
            ))}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Material Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableMaterials.map((material, index) => (
              <Paper key={index} onClick={() => setSelectedMaterial(material)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedMaterial === material ? "#5d4037" : "white", color: selectedMaterial === material ? "white" : "inherit", flex: "1 1 100px" }}>
                {material}
              </Paper>
            ))}
          </Box>

          <Button variant="contained" startIcon={<AddShoppingCart />} sx={{ background: "#5d4037", color: "white", fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" }, padding: { xs: "12px 20px", md: "14px 28px" }, "&:hover": { background: "#3e2723", transform: "translateY(-2px)" }, width: { xs: "100%", md: "auto" }, borderRadius: "8px", boxShadow: "0 4px 12px rgba(93, 64, 55, 0.3)", transition: 'all 0.2s ease' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: "#5d4037", fontStyle: 'italic', fontWeight: '500' }}>
            * Custom printing includes up to 3 lines of text
          </Typography>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message="Luggage Tag added to cart!" action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar} sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}><Close fontSize="small" /></IconButton>} sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#5d4037", color: "white", borderRadius: "8px", fontWeight: 500 } }} />
    </Container>
  );
};

export default LuggageTags;