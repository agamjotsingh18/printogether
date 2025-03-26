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
import { AddShoppingCart, Close, Public } from "@mui/icons-material";
import travelerMugImg from "../assets/traveler-black-mug.png";
import travelerMugImg2 from "../assets/traveler-black-mug.png";
import travelerMugImg3 from "../assets/traveler-black-mug.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const TravelerBlackMug = ({ addToCart }) => {
  const price = 599;
  const availableDesigns = [
    "World Map", 
    "Compass", 
    "Landmarks"
  ];

  const defaultDesign = "World Map";

  const [selectedDesign, setSelectedDesign] = useState(defaultDesign);
  const [mainImage, setMainImage] = useState(travelerMugImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const travelerMugDetails = {
    name: "Traveler Black Mug",
    image: travelerMugImg,
    description:
      "Premium ceramic travel mug with inspirational designs for the global professional. Features a comfortable grip and elegant design that's perfect for home, office, or travel.",
    features: [
      "450ml capacity",
      "Premium ceramic with glossy finish",
      "Microwave and dishwasher safe",
      "Comfortable ergonomic handle",
      "Custom text imprinting available",
      "Gift box packaging included"
    ],
    extraImages: [travelerMugImg2, travelerMugImg3],
    tags: ["Travel", "Inspirational", "Premium"]
  };

  const handleAddToCart = () => {
    const item = {
      ...travelerMugDetails,
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
              {travelerMugDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Travel" ? <Public fontSize="small" /> : null}
                  sx={{ backgroundColor: "#3e2723", color: "white", fontWeight: 'bold' }}
                />
              ))}
            </Box>
            
            <Zoom>
              <img src={mainImage} alt={travelerMugDetails.name} style={{ width: "100%", borderRadius: "8px", cursor: "zoom-in", maxHeight: "400px", objectFit: "contain" }} />
            </Zoom>

            <Box sx={{ display: "flex", gap: 2, mt: 2, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" }}}>
              {travelerMugDetails.extraImages.map((image, index) => (
                <Paper key={index} onClick={() => setMainImage(image)} sx={{ p: 1, borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", border: mainImage === image ? "2px solid #3e2723" : "none", "&:hover": { border: "2px solid #3e2723" }, flexShrink: 0 }}>
                  <img src={image} alt={`Traveler Black Mug ${index + 1}`} style={{ width: "100px", height: "100px", borderRadius: "6px", objectFit: "cover" }} />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" }}}>
            {travelerMugDetails.name}
          </Typography>
          
          <Typography variant="h5" sx={{ color: "#3e2723", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" }}}>
            ₹{price}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            {travelerMugDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Features:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "20px", listStyleType: "none", padding: 0 }}>
            {travelerMugDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: "#3e2723", borderRadius: '50%', marginRight: '8px' }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" }}}>
            Design Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableDesigns.map((design, index) => (
              <Paper key={index} onClick={() => setSelectedDesign(design)} sx={{ p: 1.5, borderRadius: "8px", textAlign: "center", fontWeight: "bold", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", cursor: "pointer", backgroundColor: selectedDesign === design ? "#3e2723" : "white", color: selectedDesign === design ? "white" : "inherit", flex: "1 1 100px" }}>
                {design}
              </Paper>
            ))}
          </Box>

          <Button variant="contained" startIcon={<AddShoppingCart />} sx={{ background: "#3e2723", color: "white", fontWeight: "bold", fontSize: { xs: "0.9rem", md: "1rem" }, padding: { xs: "12px 20px", md: "14px 28px" }, "&:hover": { background: "#260e04", transform: "translateY(-2px)" }, width: { xs: "100%", md: "auto" }, borderRadius: "8px", boxShadow: "0 4px 12px rgba(62, 39, 35, 0.3)", transition: 'all 0.2s ease' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: "#3e2723", fontStyle: 'italic', fontWeight: '500' }}>
            * Custom text imprinting available with 5-7 business day processing
          </Typography>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} message="Traveler Black Mug added to cart!" action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar} sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}><Close fontSize="small" /></IconButton>} sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#3e2723", color: "white", borderRadius: "8px", fontWeight: 500 } }} />
    </Container>
  );
};

export default TravelerBlackMug;