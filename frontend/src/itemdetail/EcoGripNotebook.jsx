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
  Chip,
  useMediaQuery
} from "@mui/material";
import { AddShoppingCart, Close, Eco } from "@mui/icons-material";
import ecoGripNotebookImg from "../assets/eco-grip-notebook.png"; // Main image
import ecoGripNotebookImg2 from "../assets/eco-grip-notebook.png"; // Extra image 1
import ecoGripNotebookImg3 from "../assets/eco-grip-notebook.png"; // Extra image 2
import ecoGripNotebookImg4 from "../assets/eco-grip-notebook.png"; // Extra image 3
import kraftPenImg from "../assets/kraft-pen.png"; // Image of included pen
import stickyNotesImg from "../assets/sticky-notes.png"; // Image of included sticky notes
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const EcoGripNotebook = ({ addToCart }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [mainImage, setMainImage] = useState(ecoGripNotebookImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const productDetails = {
    name: "EcoGrip Notebook",
    image: ecoGripNotebookImg,
    price: 350,
    description: "Sustainable notebook with built-in sticky notes and attached kraft pen. Perfect for eco-conscious professionals who value functionality and style.",
    features: [
      "Eco-friendly kraft paper cover",
      "Includes 50 premium sticky notes",
      "Attached sustainable kraft pen",
      "80 sheets of premium recycled paper",
      "Elastic closure band",
      "Compact and portable design"
    ],
    extraImages: [ecoGripNotebookImg2, ecoGripNotebookImg3, ecoGripNotebookImg4],
    includedItems: [
      { name: "Kraft Pen", image: kraftPenImg },
      { name: "Sticky Notes", image: stickyNotesImg }
    ],
    tags: ["Eco-Friendly", "Sustainable", "All-in-One"]
  };

  const handleAddToCart = () => {
    const item = {
      ...productDetails,
      quantity: 1
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
      px: isMobile ? 2 : 3
    }}>
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
            {/* Tags */}
            {/* <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              {productDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Eco-Friendly" ? <Eco fontSize="small" /> : null}
                  sx={{
                    backgroundColor: tag === "Eco-Friendly" ? "#4caf50" : "#ff6600",
                    color: "white",
                    fontWeight: 'bold'
                  }}
                />
              ))}
            </Box> */}
            
            {/* Main Image with Zoom */}
            <Zoom>
              <img
                src={mainImage}
                alt={productDetails.name}
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
            {/* <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                overflowX: "auto",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {productDetails.extraImages.map((image, index) => (
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
                    alt={`${productDetails.name} ${index + 1}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "6px",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
              ))}
            </Box> */}
          </Paper>
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: "bold", 
              mb: 2,
              fontSize: isMobile ? "1.8rem" : "2.5rem",
            }}
          >
            {productDetails.name}
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: "#ff6600", 
              fontWeight: "bold", 
              mb: 3,
              fontSize: isMobile ? "1.5rem" : "2rem"
            }}
          >
            ₹{productDetails.price}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3, 
              lineHeight: 1.6
            }}
          >
            {productDetails.description}
          </Typography>

          {/* Features */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: "bold", 
              mb: 2,
              fontSize: isMobile ? "1.2rem" : "1.5rem"
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
            {productDetails.features.map((feature, index) => (
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

          {/* Included Items */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: "bold", 
              mb: 2,
              fontSize: isMobile ? "1.2rem" : "1.5rem"
            }}
          >
            Included Items:
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            {productDetails.includedItems.map((item, index) => (
              <Box key={index} sx={{ 
                display: 'flex', 
                alignItems: 'center',
                backgroundColor: "#fff8f2",
                borderRadius: '8px',
                p: 1,
                width: 'fit-content',
                border: '1px solid #ff6600'
              }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{
                    width: '40px',
                    height: '40px',
                    objectFit: 'contain',
                    marginRight: '8px'
                  }} 
                />
                <Typography variant="body2">{item.name}</Typography>
              </Box>
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
        message="EcoGrip Notebook added to cart!"
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

export default EcoGripNotebook;