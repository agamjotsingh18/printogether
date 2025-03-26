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
} from "@mui/material";
import { AddShoppingCart, Close } from "@mui/icons-material";
import vintageTanDiaryImg from "../assets/vintage-tan-diaries.png"; // Main image
import vintageTanDiaryImg2 from "../assets/vintage-tan-diaries.png"; // Extra image 1
import vintageTanDiaryImg3 from "../assets/vintage-tan-diaries.png"; // Extra image 2
import vintageTanDiaryImg4 from "../assets/vintage-tan-diaries.png"; // Extra image 3
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const VintageTanDiaries = ({ addToCart }) => {
  // Define price mapping for each size
  const priceMapping = {
    "A5": 450,
    "A4": 550,
    "A6": 400,
  };

  // Define available cover materials
  const availableMaterials = ["Genuine Leather", "Faux Leather", "Premium PU"];

  // Default selections
  const defaultSize = "A5";
  const defaultMaterial = "Genuine Leather";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedMaterial, setSelectedMaterial] = useState(defaultMaterial);
  const [mainImage, setMainImage] = useState(vintageTanDiaryImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const vintageTanDiaryDetails = {
    name: "Vintage Tan Diaries",
    image: vintageTanDiaryImg,
    description:
      "Classic vintage tan diaries with timeless appeal. Perfect for executives and professionals who appreciate traditional craftsmanship.",
    features: [
      "Aged tan leather-look cover",
      "192 pages of premium ivory paper",
      "Hand-stitched binding for durability",
      "Includes ribbon bookmark and elastic closure",
      "Professional presentation with gilt-edged pages",
      "Available in multiple sizes and materials"
    ],
    sizes: ["A5", "A4", "A6"],
    extraImages: [vintageTanDiaryImg2, vintageTanDiaryImg3, vintageTanDiaryImg4],
  };

  // Calculate price based on selected size
  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...vintageTanDiaryDetails,
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
    <Container sx={{ py: 6, maxWidth: 1200, margin: "40px auto 0 auto" }}>
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              borderRadius: "10px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Main Image with Zoom */}
            <Zoom>
              <img
                src={mainImage}
                alt={vintageTanDiaryDetails.name}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  cursor: "zoom-in",
                  maxHeight: "400px",
                  objectFit: "cover",
                }}
              />
            </Zoom>

            {/* Extra Images Gallery */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                overflowX: "auto",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {vintageTanDiaryDetails.extraImages.map((image, index) => (
                <Paper
                  key={index}
                  onClick={() => setMainImage(image)}
                  sx={{
                    p: 1,
                    borderRadius: "8px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    border: mainImage === image ? "2px solid #ff6600" : "none",
                    "&:hover": { border: "2px solid #ff6600" },
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={image}
                    alt={`Vintage Tan Diary ${index + 1}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "6px",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            {vintageTanDiaryDetails.name}
          </Typography>
          <Typography variant="h5" sx={{ color: "#ff6600", fontWeight: "bold", mb: 3 }}>
            ₹{price}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {vintageTanDiaryDetails.description}
          </Typography>

          {/* Features */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Features:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
            {vintageTanDiaryDetails.features.map((feature, index) => (
              <li key={index}>
                <Typography variant="body1">{feature}</Typography>
              </li>
            ))}
          </ul>

          {/* Size Selection */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Available Sizes:
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 4,
              flexWrap: "wrap",
            }}
          >
            {vintageTanDiaryDetails.sizes.map((size, index) => (
              <Paper
                key={index}
                onClick={() => setSelectedSize(size)}
                sx={{
                  p: 1.5,
                  borderRadius: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  backgroundColor: selectedSize === size ? "#ff6600" : "white",
                  color: selectedSize === size ? "white" : "inherit",
                  flex: "1 1 100px",
                }}
              >
                {size}
              </Paper>
            ))}
          </Box>

          {/* Material Selection */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Cover Material:
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 4,
              flexWrap: "wrap",
            }}
          >
            {availableMaterials.map((material, index) => (
              <Paper
                key={index}
                onClick={() => setSelectedMaterial(material)}
                sx={{
                  p: 1.5,
                  borderRadius: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  backgroundColor: selectedMaterial === material ? "#ff6600" : "white",
                  color: selectedMaterial === material ? "white" : "inherit",
                  flex: "1 1 100px",
                }}
              >
                {material}
              </Paper>
            ))}
          </Box>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            startIcon={<AddShoppingCart />}
            sx={{
              background: "#ff6600",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              padding: "12px 24px",
              "&:hover": { background: "#ff8c42" },
              width: { xs: "100%", md: "auto" },
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Vintage Tan Diary added to cart!"
        action={
          <IconButton size="small" color="inherit" onClick={handleCloseSnackbar}>
            <Close fontSize="small" />
          </IconButton>
        }
      />
    </Container>
  );
};

export default VintageTanDiaries;