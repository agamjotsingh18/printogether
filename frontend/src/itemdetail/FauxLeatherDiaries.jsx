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
import { AddShoppingCart, Close } from "@mui/icons-material";
import fauxLeatherDiaryImg from "../assets/faux-leather-diaries.png"; // Main image
import fauxLeatherDiaryImg2 from "../assets/faux-leather-diaries.png"; // Extra image 1
import fauxLeatherDiaryImg3 from "../assets/faux-leather-diaries.png"; // Extra image 2
import fauxLeatherDiaryImg4 from "../assets/faux-leather-diaries.png"; // Extra image 3
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const FauxLeatherDiaries = ({ addToCart }) => {
  // Define price mapping for each size
  const priceMapping = {
    "A5": 500,
    "A4": 600,
    "A6": 450,
  };

  // Define available colors
  const availableColors = ["Black", "Brown", "Navy", "Burgundy", "Gray", "Green"];

  // Default selections
  const defaultSize = "A5";
  const defaultColor = "Black";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [mainImage, setMainImage] = useState(fauxLeatherDiaryImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const fauxLeatherDiaryDetails = {
    name: "Faux Leather Diaries",
    image: fauxLeatherDiaryImg,
    description:
      "Premium faux leather diaries with a luxurious feel. Perfect for professionals who want the look of leather with vegan-friendly materials.",
    features: [
      "High-quality faux leather cover",
      "192 pages of 120gsm premium paper",
      "Lay-flat binding for easy writing",
      "Includes ribbon bookmark and elastic closure",
      "Available in multiple sizes and colors",
      "Corporate branding options available"
    ],
    sizes: ["A5", "A4", "A6"],
    extraImages: [fauxLeatherDiaryImg2, fauxLeatherDiaryImg3, fauxLeatherDiaryImg4],
    tags: ["Vegan", "Professional", "Durable"]
  };

  // Calculate price based on selected size
  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...fauxLeatherDiaryDetails,
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
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              {fauxLeatherDiaryDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: tag === "Vegan" ? "#4caf50" : "#ff6600",
                    color: "white",
                    fontWeight: 'bold'
                  }}
                />
              ))}
            </Box>
            
            {/* Main Image with Zoom */}
            <Zoom>
              <img
                src={mainImage}
                alt={fauxLeatherDiaryDetails.name}
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
              {fauxLeatherDiaryDetails.extraImages.map((image, index) => (
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
                    alt={`Faux Leather Diary ${index + 1}`}
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
            {fauxLeatherDiaryDetails.name}
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: "#ff6600", 
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
            {fauxLeatherDiaryDetails.description}
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
            {fauxLeatherDiaryDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ 
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    backgroundColor: "#ff6600",
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
            {fauxLeatherDiaryDetails.sizes.map((size, index) => (
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

          {/* Color Selection */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: "bold", 
              mb: 2,
              fontSize: { xs: "1.2rem", md: "1.5rem" }
            }}
          >
            Choose Your Color:
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
                  backgroundColor: selectedColor === color ? "#ff6600" : "white",
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
              background: "#ff6600",
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", md: "1rem" },
              padding: { xs: "12px 20px", md: "14px 28px" },
              "&:hover": { 
                background: "#e55c00",
                transform: "translateY(-2px)"
              },
              width: { xs: "100%", md: "auto" },
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(255, 102, 0, 0.3)",
              transition: 'all 0.2s ease'
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
        message="Faux Leather Diary added to cart!"
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
            backgroundColor: "#ff6600",
            color: "white",
            borderRadius: "8px",
            fontWeight: 500
          }
        }}
      />
    </Container>
  );
};

export default FauxLeatherDiaries;