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
import embroideredZipHoodieImg from "../assets/embroidered-zip-hoodie.png"; // Main image
import embroideredZipHoodieImg2 from "../assets/embroidered-zip-hoodie.png"; // Extra image 1
import embroideredZipHoodieImg3 from "../assets/embroidered-zip-hoodie.png"; // Extra image 2
import embroideredZipHoodieImg4 from "../assets/embroidered-zip-hoodie.png"; // Extra image 3
import embroideredZipHoodieImg5 from "../assets/embroidered-zip-hoodie.png"; // Extra image 4
import Zoom from "react-medium-image-zoom"; // For zoom functionality
import "react-medium-image-zoom/dist/styles.css"; // Zoom styles

const EmbroideredZipHoodies = ({ addToCart }) => {
  // Define price mapping for each material
  const priceMapping = {
    "Cotton": 1300,
    "Polyester": 1100,
    "Blend": 1200,
  };

  // Define available colors
  const availableColors = ["Black", "Gray", "Blue", "Red", "Green", "White"];

  // Most popular material (default selection)
  const defaultMaterial = "Cotton";
  const defaultColor = "Black"; // Default color selection

  const [selectedMaterial, setSelectedMaterial] = useState(defaultMaterial);
  const [selectedColor, setSelectedColor] = useState(defaultColor); // State for selected color
  const [mainImage, setMainImage] = useState(embroideredZipHoodieImg); // State for main image
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar

  const embroideredZipHoodieDetails = {
    name: "Embroidered Zip Hoodies",
    image: embroideredZipHoodieImg,
    description:
      "Stylish and comfortable embroidered zip hoodies. Perfect for casual outings, sports, or lounging at home.",
    features: [
      "Soft and breathable fabric",
      "Customizable embroidery designs",
      "Available in various sizes and colors",
      "Durable and easy to maintain",
    ],
    materials: ["Cotton", "Polyester", "Blend"],
    extraImages: [embroideredZipHoodieImg2, embroideredZipHoodieImg3, embroideredZipHoodieImg4, embroideredZipHoodieImg5], // Extra images
  };

  // Calculate price based on selected material
  const price = priceMapping[selectedMaterial];

  const handleAddToCart = () => {
    const item = {
      ...embroideredZipHoodieDetails,
      selectedMaterial,
      selectedColor, // Include selected color in the cart item
      price, // Use the dynamically calculated price
      quantity: 1, // Default quantity
    };

    addToCart(item); // Add the item to the cart
    setSnackbarOpen(true); // Show Snackbar for confirmation
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
                alt={embroideredZipHoodieDetails.name}
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
                overflowX: "auto", // Horizontal scroll for small screens
                "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
              }}
            >
              {embroideredZipHoodieDetails.extraImages.map((image, index) => (
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
                    flexShrink: 0, // Prevent shrinking on small screens
                  }}
                >
                  <img
                    src={image}
                    alt={`Embroidered Zip Hoodie ${index + 1}`}
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
            {embroideredZipHoodieDetails.name}
          </Typography>
          <Typography variant="h5" sx={{ color: "#ff6600", fontWeight: "bold", mb: 3 }}>
            ₹{price} {/* Display dynamic price */}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {embroideredZipHoodieDetails.description}
          </Typography>

          {/* Features */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Features:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
            {embroideredZipHoodieDetails.features.map((feature, index) => (
              <li key={index}>
                <Typography variant="body1">{feature}</Typography>
              </li>
            ))}
          </ul>

          {/* Materials */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Available Materials:
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 4,
              flexWrap: "wrap", // Wrap materials on small screens
            }}
          >
            {embroideredZipHoodieDetails.materials.map((material, index) => (
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
                  flex: "1 1 100px", // Flexible sizing for responsiveness
                }}
              >
                {material}
              </Paper>
            ))}
          </Box>

          {/* Color Selection */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Choose Your Color:
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 4,
              flexWrap: "wrap", // Wrap colors on small screens
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
                  flex: "1 1 100px", // Flexible sizing for responsiveness
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
              fontSize: "16px",
              padding: "12px 24px",
              "&:hover": { background: "#ff8c42" },
              width: { xs: "100%", md: "auto" }, // Full width on small screens
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
        message="Item added to cart!"
        action={
          <IconButton size="small" color="inherit" onClick={handleCloseSnackbar}>
            <Close fontSize="small" />
          </IconButton>
        }
      />
    </Container>
  );
};

export default EmbroideredZipHoodies;