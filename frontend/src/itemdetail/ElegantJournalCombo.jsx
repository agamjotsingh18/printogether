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
import { AddShoppingCart, Close, Star } from "@mui/icons-material";
import elegantComboImg from "../assets/elegant-journal-combo.png"; // Main image
import elegantComboImg2 from "../assets/elegant-journal-combo.png"; // Extra image 1
import elegantComboImg3 from "../assets/elegant-journal-combo.png"; // Extra image 2
import premiumPenImg from "../assets/adroit-pen.png"; // Image of included pen
import journalImg from "../assets/faux-leather-diaries.png"; // Image of journal
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ElegantJournalCombo = ({ addToCart }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [mainImage, setMainImage] = useState(elegantComboImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const productDetails = {
    name: "Elegant Journal Combo",
    image: elegantComboImg,
    price: 599,
    description: "A sophisticated pairing of premium journal and executive pen, perfect for professionals who appreciate fine stationery.",
    features: [
      "Premium leather-bound journal",
      "Includes luxury ballpoint pen",
      "192 lined pages of high-quality paper",
      "Elastic closure band and ribbon bookmark",
      "Pen features smooth 0.7mm ink flow",
      "Gift-ready packaging included"
    ],
    extraImages: [elegantComboImg2, elegantComboImg3],
    includedItems: [
      { name: "Premium Journal", image: journalImg },
      { name: "Executive Pen", image: premiumPenImg }
    ],
    tags: ["Luxury", "Executive", "Gift Set"]
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
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>4.9</Typography>
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
            Combo Features:
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
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            mb: 3,
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            {productDetails.includedItems.map((item, index) => (
              <Box key={index} sx={{ 
                display: 'flex', 
                alignItems: 'center',
                backgroundColor: "#fff8f2",
                borderRadius: '8px',
                p: 2,
                flex: 1,
                border: '1px solid #ff6600'
              }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'contain',
                    marginRight: '12px'
                  }} 
                />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#666', fontSize: '0.8rem' }}>
                    {index === 0 ? '120gsm premium paper' : '0.7mm smooth ink flow'}
                  </Typography>
                </Box>
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
              mt: 2
            }}
            onClick={handleAddToCart}
          >
            Add Combo to Cart
          </Button>

          {/* Special Offer Note */}
          <Typography variant="body2" sx={{ 
            mt: 2,
            color: "#ff6600",
            fontStyle: 'italic',
            fontWeight: '500'
          }}>
            * Save ₹150 compared to buying separately
          </Typography>
        </Grid>
      </Grid>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Elegant Journal Combo added to cart!"
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

export default ElegantJournalCombo;