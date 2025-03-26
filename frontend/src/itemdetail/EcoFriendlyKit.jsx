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
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  Chip,
  Badge,
  Divider,
  Stack
} from "@mui/material";
import { AddShoppingCart, Close, Star, CheckCircle } from "@mui/icons-material";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion } from "framer-motion";

// Import images
import ecoFriendlyKitImg from "../assets/welcome-kits.png";
import ecoKraftCoverDiaryImg from "../assets/eco-kraft-cover-diaries.png";
import kraftPenImg from "../assets/kraft-pen.png";
import pureCopperBottleImg from "../assets/pure-copper-bottle.png";
import a5StickerSheetImg from "../assets/sticker.png";
import thankYouCardImg from "../assets/thank-you-card.png";

const EcoFriendlyKit = ({ addToCart }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const kitDetails = {
    name: "Eco-Friendly Kit",
    image: ecoFriendlyKitImg,
    price: 2000,
    description: "Sustainable and environmentally conscious products designed for eco-friendly corporate gifting and personal use.",
    items: [
      { 
        name: "Eco Kraft Cover Diary", 
        image: ecoKraftCoverDiaryImg,
        description: "Recycled paper notebook with kraft cover",
        price: 400
      },
      { 
        name: "Kraft Pen", 
        image: kraftPenImg,
        description: "Biodegradable pen with sustainable materials",
        price: 150
      },
      { 
        name: "Pure Copper Water Bottle", 
        image: pureCopperBottleImg,
        description: "Chemical-free copper bottle with natural benefits",
        price: 900
      },
      { 
        name: "A5 Sticker Sheet", 
        image: a5StickerSheetImg,
        description: "Eco-friendly adhesive stickers",
        price: 100
      },
      { 
        name: "Thank You Card", 
        image: thankYouCardImg,
        description: "Recycled paper with plantable seed option",
        price: 50
      }
    ],
    tags: ["Sustainable", "Eco-Conscious", "Green", "Recycled"],
    highlights: [
      {
        icon: "🌱",
        title: "Sustainable Materials",
        description: "All items made from recycled or biodegradable materials"
      },
      {
        icon: "♻️",
        title: "Environmentally Friendly",
        description: "Designed to minimize environmental impact"
      },
      {
        icon: "💧",
        title: "Chemical Free",
        description: "Safe, non-toxic materials for daily use"
      },
      {
        icon: "🌍",
        title: "Carbon Conscious",
        description: "Responsibly sourced and produced"
      }
    ]
  };

  const handleAddToCart = () => {
    addToCart({
      ...kitDetails,
      type: "Eco-Friendly Kit"
    });
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        py: 8,
        px: isMobile ? 2 : 4,
        backgroundColor: theme.palette.background.default
      }}
    >
      {/* Hero Section */}
      <Box sx={{
        mb: 8,
        textAlign: "center",
        background: 'linear-gradient(135deg, #FF6B00 0%, #FF8E53 100%)',
        p: 4,
        borderRadius: 4,
        color: "white",
        boxShadow: '0 8px 24px rgba(255, 107, 0, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)'
        }
      }}>
        <Typography 
          variant="h1" 
          sx={{
            fontWeight: 800,
            fontSize: isMobile ? "2.5rem" : "3.5rem",
            mb: 2,
            color:"white",
            position: 'relative',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          {kitDetails.name}
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{
            fontWeight: 500,
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            maxWidth: '800px',
            mx: 'auto',
            position: 'relative',
            opacity: 0.9
          }}
        >
          Sustainable products for environmentally conscious professionals
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {/* Main Product Image */}
        <Grid item xs={12} md={6}>
          <Paper
            component={motion.div}
            whileHover={{ scale: 1.01 }}
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.08)",
              overflow: "hidden",
              backgroundColor: theme.palette.background.paper,
              position: "relative",
              border: `1px solid ${theme.palette.divider}`
            }}
          >
            {/* Eco Badge */}
            <Chip
              label="Eco Certified"
              size="medium"
              sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                zIndex: 1,
                fontWeight: 700,
                px: 2,
                py: 1,
                backgroundColor: '#4CAF50',
                color: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            />
            
            {/* Fixed Zoom Implementation */}
            <Zoom zoomMargin={40}>
              <Box sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: `1px solid ${theme.palette.divider}`,
                cursor: 'zoom-in'
              }}>
                <img
                  src={kitDetails.image}
                  alt={kitDetails.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "500px",
                    objectFit: "contain",
                    display: 'block'
                  }}
                />
              </Box>
            </Zoom>
          </Paper>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center'
          }}>
            {/* Price and Rating */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
              <Typography variant="h2" sx={{
                color: '#FF6B00',
                fontWeight: 800,
                fontSize: isMobile ? "2.5rem" : "3rem"
              }}>
                ₹{kitDetails.price.toLocaleString()}
              </Typography>
              
              <Stack direction="row" alignItems="center" spacing={1}>
                <Star sx={{ fontSize: '1.8rem', color: '#FF6B00' }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 700 }}>
                    4.7/5
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    (86 reviews)
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            {/* Description */}
            <Typography variant="body1" sx={{ 
              mb: 4, 
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: 'text.secondary'
            }}>
              {kitDetails.description}
            </Typography>

            {/* Tags */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="caption" sx={{ 
                display: 'block',
                mb: 1,
                color: 'text.secondary',
                fontWeight: 600
              }}>
                KEY FEATURES
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {kitDetails.tags.map((tag, index) => (
                  <Chip 
                    key={index}
                    label={tag}
                    size="medium"
                    sx={{
                      backgroundColor: 'rgba(255, 107, 0, 0.1)',
                      color: '#FF6B00',
                      fontWeight: 600,
                      px: 1.5,
                      py: 1,
                      borderRadius: 1
                    }}
                  />
                ))}
              </Stack>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Included Items Section */}
            <Box mb={4}>
              <Typography variant="h5" sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: "1.5rem",
                display: 'flex',
                alignItems: 'center',
                color: 'text.primary'
              }}>
                <Box component="span" sx={{ 
                  width: 32, 
                  height: 32, 
                  backgroundColor: '#FF6B00', 
                  borderRadius: '50%', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 700,
                  mr: 2
                }}>
                  {kitDetails.items.length}
                </Box>
                Sustainable Included Items
              </Typography>

              <Grid container spacing={2}>
                {kitDetails.items.map((item, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <Card
                      component={motion.div}
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)" 
                      }}
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                        border: `1px solid ${theme.palette.divider}`,
                        transition: "all 0.3s ease"
                      }}
                    >
                      <Box sx={{
                        width: '100%',
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        backgroundColor: theme.palette.background.default,
                        borderRadius: 1,
                        overflow: 'hidden'
                      }}>
                        <CardMedia
                          component="img"
                          image={item.image}
                          alt={item.name}
                          sx={{
                            width: "auto",
                            maxWidth: "100%",
                            height: "80%",
                            objectFit: "contain"
                          }}
                        />
                      </Box>
                      <CardContent sx={{ p: 0, flexGrow: 1 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ 
                            fontWeight: 600, 
                            mb: 0.5,
                            color: 'text.primary'
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ 
                            fontSize: '0.85rem',
                            mb: 1,
                            color: 'text.secondary'
                          }}
                        >
                          {item.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ 
                            fontWeight: 700,
                            color: '#FF6B00'
                          }}
                        >
                          ₹{item.price.toLocaleString()} value
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Add to Cart Button */}
            <Box sx={{
              mt: 'auto',
              pt: 3
            }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<AddShoppingCart />}
                fullWidth={isMobile}
                sx={{
                  py: 2,
                  px: 4,
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  backgroundColor: '#FF6B00',
                  '&:hover': {
                    backgroundColor: '#FF8E53',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 24px rgba(255, 107, 0, 0.3)'
                  },
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(255, 107, 0, 0.2)'
                }}
                onClick={handleAddToCart}
              >
                Add to Cart - ₹{kitDetails.price.toLocaleString()}
              </Button>
              
              <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" mt={2}>
                <CheckCircle sx={{ color: '#FF6B00' }} fontSize="small" />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Free shipping • 30-day returns • Eco-friendly packaging
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Product Highlights Section */}
      <Box sx={{ 
        mt: 10,
        p: 6,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 3,
        boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.05)",
        border: `1px solid ${theme.palette.divider}`
      }}>
        <Typography variant="h3" sx={{
          fontWeight: 800,
          mb: 6,
          textAlign: 'center',
          color: 'text.primary'
        }}>
          Sustainable Business Solutions
        </Typography>
        
        <Grid container spacing={4}>
          {kitDetails.highlights.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{
                p: 3,
                height: '100%',
                textAlign: 'center',
                backgroundColor: theme.palette.background.default,
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  borderColor: '#FF6B00'
                }
              }}>
                <Typography variant="h2" sx={{ 
                  mb: 2,
                  lineHeight: 1
                }}>
                  {feature.icon}
                </Typography>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700,
                  mb: 2,
                  color: 'text.primary'
                }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: 'text.secondary'
                }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {kitDetails.name} added to cart!
          </Typography>
        }
        action={
          <IconButton 
            size="small" 
            color="inherit" 
            onClick={handleCloseSnackbar}
          >
            <Close fontSize="small" />
          </IconButton>
        }
        sx={{
          '& .MuiPaper-root': {
            borderRadius: 2,
            backgroundColor: '#FF6B00',
            color: 'white',
            fontWeight: 500
          }
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      />
    </Container>
  );
};

export default EcoFriendlyKit;