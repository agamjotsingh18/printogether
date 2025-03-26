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
import ecoDiaryImg from "../assets/eco-kraft-cover-diaries.png"; // Main image
import ecoDiaryImg2 from "../assets/eco-kraft-cover-diaries.png"; // Extra image 1
import ecoDiaryImg3 from "../assets/eco-kraft-cover-diaries.png"; // Extra image 2
import ecoDiaryImg4 from "../assets/eco-kraft-cover-diaries.png"; // Extra image 3
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const EcoKraftCoverDiaries = ({ addToCart }) => {
  // Define price mapping for each size
  const priceMapping = {
    "A5": 550,
    "A4": 650,
    "A6": 450,
  };

  // Define available colors
  const availableColors = [
    "Natural Kraft", 
    "Charcoal Black", 
    "Rustic Brown",
    "Sage Green",
    "Deep Navy"
  ];

  // Default selections
  const defaultSize = "A5";
  const defaultColor = "Natural Kraft";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [mainImage, setMainImage] = useState(ecoDiaryImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const ecoDiaryDetails = {
    name: "Eco Kraft Cover Diaries",
    image: ecoDiaryImg,
    description:
      "Sustainable diaries with premium kraft paper covers that combine eco-friendliness with elegance. The natural texture and earthy tones make these diaries perfect for environmentally conscious professionals.",
    features: [
      "100% recycled kraft paper cover",
      "192 pages of 100gsm eco-friendly paper",
      "Lay-flat binding for comfortable writing",
      "Includes jute ribbon bookmark",
      "Available in multiple sizes and colors",
      "Corporate branding options available",
      "Biodegradable and compostable materials"
    ],
    sizes: ["A5", "A4", "A6"],
    extraImages: [ecoDiaryImg2, ecoDiaryImg3, ecoDiaryImg4],
    tags: ["Eco-Friendly", "Sustainable", "Premium"]
  };

  // Calculate price based on selected size
  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...ecoDiaryDetails,
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
    <Container sx={{ 
      py: 6, 
      maxWidth: 1200, 
      margin: "40px auto 0 auto",
      px: { xs: 2, md: 3 }
    }}>
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              borderRadius: "10px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              position: "relative"
            }}
          >
            {/* Tags */}
            {/* <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              {ecoDiaryDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Eco-Friendly" ? <Eco fontSize="small" /> : null}
                  sx={{
                    backgroundColor: "#4caf50",
                    color: "white",
                    fontWeight: 'bold'
                  }}
                />
              ))}
            </Box>
             */}
            {/* Main Image with Zoom */}
            <Zoom>
              <img
                src={mainImage}
                alt={ecoDiaryDetails.name}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  cursor: "zoom-in",
                  maxHeight: "400px",
                  objectFit: "contain",
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
              {ecoDiaryDetails.extraImages.map((image, index) => (
                <Paper
                  key={index}
                  onClick={() => setMainImage(image)}
                  sx={{
                    p: 1,
                    borderRadius: "8px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    border: mainImage === image ? "2px solid #4caf50" : "none",
                    "&:hover": { border: "2px solid #4caf50" },
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={image}
                    alt={`Eco Kraft Diary ${index + 1}`}
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
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: "bold", 
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            {ecoDiaryDetails.name}
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: "#4caf50", 
              fontWeight: "bold", 
              mb: 3,
              fontSize: { xs: "1.5rem", md: "2rem" }
            }}
          >
            ₹{price}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3, 
              lineHeight: 1.6
            }}
          >
            {ecoDiaryDetails.description}
          </Typography>

          {/* Features */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: "bold", 
              mb: 2,
              fontSize: { xs: "1.2rem", md: "1.5rem" }
            }}
          >
            Features:
          </Typography>
          <ul style={{ 
            marginLeft: "20px", 
            marginBottom: "20px",
            listStyleType: "none",
            padding: 0
          }}>
            {ecoDiaryDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ 
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    backgroundColor: "#4caf50",
                    borderRadius: '50%',
                    marginRight: '8px'
                  }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>

          {/* Size Selection */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: "bold", 
              mb: 2,
              fontSize: { xs: "1.2rem", md: "1.5rem" }
            }}
          >
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
            {ecoDiaryDetails.sizes.map((size, index) => (
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
                  backgroundColor: selectedSize === size ? "#4caf50" : "white",
                  color: selectedSize === size ? "white" : "inherit",
                  flex: "1 1 100px",
                }}
              >
                {size}
              </Paper>
            ))}
          </Box>

          {/* Color Selection */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: "bold", 
              mb: 2,
              fontSize: { xs: "1.2rem", md: "1.5rem" }
            }}
          >
            Cover Color Options:
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 4,
              flexWrap: "wrap",
            }}
          >
            {availableColors.map((color, index) => (
              <Paper
                key={index}
                onClick={() => setSelectedColor(color)}
                sx={{
                  p: 1.5,
                  borderRadius: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  backgroundColor: selectedColor === color ? "#4caf50" : "white",
                  color: selectedColor === color ? "white" : "inherit",
                  flex: "1 1 100px",
                }}
              >
                {color}
              </Paper>
            ))}
          </Box>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            startIcon={<AddShoppingCart />}
            sx={{
              background: "#4caf50",
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", md: "1rem" },
              padding: { xs: "12px 20px", md: "14px 28px" },
              "&:hover": { 
                background: "#3e8e40",
                transform: "translateY(-2px)"
              },
              width: { xs: "100%", md: "auto" },
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(76, 175, 80, 0.3)",
              transition: 'all 0.2s ease'
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>

          {/* Eco Note */}
          <Typography variant="body2" sx={{ 
            mt: 2,
            color: "#4caf50",
            fontStyle: 'italic',
            fontWeight: '500'
          }}>
            * Each diary purchase helps plant a tree through our sustainability program
          </Typography>
        </Grid>
      </Grid>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Eco Kraft Diary added to cart!"
        action={
          <IconButton 
            size="small" 
            color="inherit" 
            onClick={handleCloseSnackbar}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)"
              }
            }}
          >
            <Close fontSize="small" />
          </IconButton>
        }
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#4caf50",
            color: "white",
            borderRadius: "8px",
            fontWeight: 500
          }
        }}
      />
    </Container>
  );
};

export default EcoKraftCoverDiaries;