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
import { AddShoppingCart, Close, VpnKey } from "@mui/icons-material";
import keychainImg from "../assets/keychain.png";
import keychainImg2 from "../assets/keychain.png";
import keychainImg3 from "../assets/keychain.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Keychains = ({ addToCart }) => {
  const priceMapping = {
    "Single": 199,
    "Pack of 5": 799,
    "Pack of 10": 1499,
  };

  const availableMaterials = [
    "Stainless Steel", 
    "Brass", 
    "Leather",
    "Acrylic"
  ];

  const defaultSize = "Single";
  const defaultMaterial = "Stainless Steel";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedMaterial, setSelectedMaterial] = useState(defaultMaterial);
  const [mainImage, setMainImage] = useState(keychainImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const keychainDetails = {
    name: "Custom Corporate Keychains",
    image: keychainImg,
    description:
      "Durable and stylish keychains perfect for corporate gifting, brand promotion, and employee recognition. Customize with your logo or message for a memorable gift.",
    features: [
      "Custom engraving available",
      "Premium quality materials",
      "Scratch-resistant finish",
      "Corporate branding options",
      "Bulk order discounts",
      "Quick turnaround time",
      "Durable construction"
    ],
    sizes: ["Single", "Pack of 5", "Pack of 10"],
    extraImages: [keychainImg2, keychainImg3],
    tags: ["Durable", "Custom", "Practical"]
  };

  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...keychainDetails,
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
              {keychainDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Practical" ? <VpnKey fontSize="small" /> : null}
                  sx={{ backgroundColor: "#6d4c41", color: "white", fontWeight: 'bold' }}
                />
              ))}
            </Box>
            
            <Zoom>
              <img src={mainImage} alt={keychainDetails.name} style={{ width: "100%", borderRadius: "8px", cursor: "zoom-in", maxHeight: "400px", objectFit: "contain" }} />
            </Zoom>

            <Box sx={{ display: "flex", gap: 2, mt: 2, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" }}}>
              {keychainDetails.extraImages.map((image, index) => (
                <Paper key={index} onClick={() => setMainImage(image)} sx={{ p: 1, borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", border: mainImage === image ? "2px solid #6d4c41" : "none", "&:hover": { border: "2px solid #6d4c41" }, flexShrink: 0 }}>
                  <img src={image} alt={`Keychain ${index + 1}`} style={{ width: "100px", height: "100px", borderRadius: "6px", objectFit: "cover" }} />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" }}}>
            {keychainDetails.name}
          </Typography>
          
          <Typography variant="h5" sx={{ color: "#6d4c41", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" }}}>
            ₹{price}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            {keychainDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Features:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "20px", listStyleType: "none", padding: 0 }}>
            {keychainDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: "#6d4c41", borderRadius: '50%', marginRight: '8px' }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Pack Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {keychainDetails.sizes.map((size, index) => (
              <Paper key={index} onClick={() => setSelectedSize(size)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedSize === size ? "#6d4c41" : "white", color: selectedSize === size ? "white" : "inherit", flex: "1 1 100px" }}>
                {size}
              </Paper>
            ))}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Material Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableMaterials.map((material, index) => (
              <Paper key={index} onClick={() => setSelectedMaterial(material)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedMaterial === material ? "#6d4c41" : "white", color: selectedMaterial === material ? "white" : "inherit", flex: "1 1 100px" }}>
                {material}
              </Paper>
            ))}
          </Box>

          <Button variant="contained" startIcon={<AddShoppingCart />} sx={{ background: "#6d4c41", color: "white", fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" }, padding: { xs: "12px 20px", md: "14px 28px" }, "&:hover": { background: "#5d4037", transform: "translateY(-2px)" }, width: { xs: "100%", md: "auto" }, borderRadius: "8px", boxShadow: "0 4px 12px rgba(109, 76, 65, 0.3)", transition: 'all 0.2s ease' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: "#6d4c41", fontStyle: 'italic', fontWeight: '500' }}>
            * Engraving includes up to 20 characters
          </Typography>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message="Keychain added to cart!" action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar} sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}><Close fontSize="small" /></IconButton>} sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#6d4c41", color: "white", borderRadius: "8px", fontWeight: 500 } }} />
    </Container>
  );
};

export default Keychains;