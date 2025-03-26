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
import { AddShoppingCart, Close, Star, Description, Create, VpnKey } from "@mui/icons-material";
import leatherComboImg from "../assets/classic-leather-combo.png"; // Main combo image
import fauxLeatherDiaryImg from "../assets/faux-leather-diaries.png";
import skatePenImg from "../assets/skate-ballpoint-pen.png";
import keychainImg from "../assets/keychain.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ClassicLeatherCombo = ({ addToCart }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [mainImage, setMainImage] = useState(leatherComboImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const productDetails = {
    name: "Classic Leather Combo",
    image: leatherComboImg,
    price: 899,
    originalPrice: 1099,
    description: "A sophisticated set featuring a faux leather diary, premium skate ballpoint pen, and elegant keychain - perfect for professionals who appreciate classic style.",
    features: [
      "Premium faux leather diary with 192 pages",
      "Smooth-writing skate ballpoint pen (0.7mm)",
      "Durable metal keychain with leather accent",
      "Gift-ready luxury packaging",
      "Available in multiple color options",
      "Corporate branding available"
    ],
    includedItems: [
      { 
        name: "Faux Leather Diary", 
        image: fauxLeatherDiaryImg,
        price: 450,
        route: "/services/corporate-gifting/faux-leather-diaries"
      },
      { 
        name: "Skate Ballpoint Pen", 
        image: skatePenImg,
        price: 299,
        route: "/services/corporate-gifting/skate-ballpoint-pen"
      },
      { 
        name: "Premium Keychain", 
        image: keychainImg,
        price: 350,
        route: "/services/corporate-gifting/keychain"
      }
    ],
    tags: ["Classic", "Professional", "Luxury"]
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
              position: "relative"
            }}
          >
            {/* Rating Badge */}
            <Box sx={{
              position: "absolute",
              top: 16,
              left: 16,
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: "20px",
              px: 1.5,
              py: 0.5,
              display: "flex",
              alignItems: "center",
              zIndex: 1
            }}>
              <Star sx={{ color: "#ff6600", fontSize: "18px", mr: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>4.7</Typography>
            </Box>

            {/* Tags */}
            <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'flex-end' }}>
              {productDetails.tags.map((tag, index) => (
                <Chip 
                  key={index}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: "#ff6600",
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
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: "#ff6600", 
                fontWeight: "bold", 
                fontSize: isMobile ? "1.5rem" : "2rem",
                mr: 2
              }}
            >
              ₹{productDetails.price}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                textDecoration: "line-through",
                color: "text.secondary"
              }}
            >
              ₹{productDetails.originalPrice}
            </Typography>
            <Chip 
              label={`Save ₹${productDetails.originalPrice - productDetails.price}`} 
              size="small"
              sx={{ 
                backgroundColor: "#4caf50", 
                color: "white",
                fontWeight: 'bold',
                ml: 2
              }}
            />
          </Box>
          
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
            Combo Highlights:
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
            What's Included:
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {productDetails.includedItems.map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Paper sx={{ 
                  p: 1.5,
                  borderRadius: "8px",
                  height: "100%",
                  border: "1px solid #ff6600",
                  '&:hover': {
                    boxShadow: "0px 4px 12px rgba(255, 102, 0, 0.2)"
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {index === 0 && <Description sx={{ color: "#ff6600", mr: 1 }} />}
                    {index === 1 && <Create sx={{ color: "#ff6600", mr: 1 }} />}
                    {index === 2 && <VpnKey sx={{ color: "#ff6600", mr: 1 }} />}
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      {item.name}
                    </Typography>
                  </Box>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{
                      width: "100%",
                      height: "100px",
                      objectFit: "contain",
                      marginBottom: "8px"
                    }} 
                  />
                  <Typography variant="body2" sx={{ color: '#666', fontSize: '0.8rem' }}>
                    Value: ₹{item.price}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            startIcon={<AddShoppingCart />}
            sx={{
              background: "#ff6600",
              color: "white",
              fontWeight: "bold",
              fontSize: isMobile ? "0.9rem" : "1rem",
              padding: "14px 28px",
              "&:hover": { 
                background: "#e55c00",
                transform: "translateY(-2px)"
              },
              width: { xs: "100%", md: "auto" },
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(255, 102, 0, 0.3)",
              transition: 'all 0.2s ease',
              mt: 1
            }}
            onClick={handleAddToCart}
          >
            Add Leather Combo to Cart
          </Button>

          {/* Special Notes */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ color: "#ff6600", fontWeight: '500' }}>
              * Save ₹200 compared to buying items separately
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', mt: 0.5 }}>
              Available in black, brown, and navy blue
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Classic Leather Combo added to cart!"
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

export default ClassicLeatherCombo;