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
import supremeSipperImg from "../assets/supreme-blue-sipper.png";
import supremeSipperImg2 from "../assets/supreme-blue-sipper.png";
import supremeSipperImg3 from "../assets/supreme-blue-sipper.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const SupremeBlueSipper = ({ addToCart }) => {
  const priceMapping = {
    "500ml": 999,
    "750ml": 1199,
  };

  const availableShades = [
    "Navy Blue", 
    "Cobalt Blue", 
    "Teal Blue"
  ];

  const defaultSize = "500ml";
  const defaultShade = "Navy Blue";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedShade, setSelectedShade] = useState(defaultShade);
  const [mainImage, setMainImage] = useState(supremeSipperImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const supremeSipperDetails = {
    name: "Supreme Blue Sipper",
    image: supremeSipperImg,
    description:
      "Premium blue stainless steel sipper with elegant finish and superior insulation. The rich blue color and ergonomic design make it both stylish and functional for everyday use.",
    features: [
      "Double-walled vacuum insulation",
      "Powder-coated blue finish",
      "Leak-proof locking lid",
      "18/8 food-grade stainless steel",
      "Sweat-proof exterior",
      "Corporate branding options",
      "Includes cleaning brush"
    ],
    sizes: ["500ml", "750ml"],
    extraImages: [supremeSipperImg2, supremeSipperImg3],
    tags: ["Premium", "Stylish", "Durable"]
  };

  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...supremeSipperDetails,
      selectedSize,
      selectedShade,
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
              {supremeSipperDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Premium" ? <Star fontSize="small" /> : null}
                  sx={{ backgroundColor: "#0d47a1", color: "white", fontWeight: 'bold' }}
                />
              ))}
            </Box>
            
            <Zoom>
              <img src={mainImage} alt={supremeSipperDetails.name} style={{ width: "100%", borderRadius: "8px", cursor: "zoom-in", maxHeight: "400px", objectFit: "contain" }} />
            </Zoom>

            <Box sx={{ display: "flex", gap: 2, mt: 2, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" }}}>
              {supremeSipperDetails.extraImages.map((image, index) => (
                <Paper key={index} onClick={() => setMainImage(image)} sx={{ p: 1, borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", border: mainImage === image ? "2px solid #0d47a1" : "none", "&:hover": { border: "2px solid #0d47a1" }, flexShrink: 0 }}>
                  <img src={image} alt={`Supreme Blue Sipper ${index + 1}`} style={{ width: "100px", height: "100px", borderRadius: "6px", objectFit: "cover" }} />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" }}}>
            {supremeSipperDetails.name}
          </Typography>
          
          <Typography variant="h5" sx={{ color: "#0d47a1", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" }}}>
            ₹{price}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            {supremeSipperDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Features:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "20px", listStyleType: "none", padding: 0 }}>
            {supremeSipperDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: "#0d47a1", borderRadius: '50%', marginRight: '8px' }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Available Sizes:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {supremeSipperDetails.sizes.map((size, index) => (
              <Paper key={index} onClick={() => setSelectedSize(size)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedSize === size ? "#0d47a1" : "white", color: selectedSize === size ? "white" : "inherit", flex: "1 1 100px" }}>
                {size}
              </Paper>
            ))}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Shade Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableShades.map((shade, index) => (
              <Paper key={index} onClick={() => setSelectedShade(shade)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedShade === shade ? "#0d47a1" : "white", color: selectedShade === shade ? "white" : "inherit", flex: "1 1 100px" }}>
                {shade}
              </Paper>
            ))}
          </Box>

          <Button variant="contained" startIcon={<AddShoppingCart />} sx={{ background: "#0d47a1", color: "white", fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" }, padding: { xs: "12px 20px", md: "14px 28px" }, "&:hover": { background: "#002171", transform: "translateY(-2px)" }, width: { xs: "100%", md: "auto" }, borderRadius: "8px", boxShadow: "0 4px 12px rgba(13, 71, 161, 0.3)", transition: 'all 0.2s ease' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: "#0d47a1", fontStyle: 'italic', fontWeight: '500' }}>
            * Includes 2-year warranty against manufacturing defects
          </Typography>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message="Supreme Blue Sipper added to cart!" action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar} sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}><Close fontSize="small" /></IconButton>} sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#0d47a1", color: "white", borderRadius: "8px", fontWeight: 500 } }} />
    </Container>
  );
};

export default SupremeBlueSipper;