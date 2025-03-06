import React from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";

const portfolioItems = [
  { image: "https://source.unsplash.com/400x300/?print,design", title: "Creative Flyer Design" },
  { image: "https://source.unsplash.com/400x300/?businesscard,branding", title: "Premium Business Cards" },
  { image: "https://source.unsplash.com/400x300/?banner,advertising", title: "Custom Banners" },
  { image: "https://source.unsplash.com/400x300/?tshirt,logo", title: "Branded T-Shirts" },
  { image: "https://source.unsplash.com/400x300/?poster,wall", title: "Eye-Catching Posters" },
  { image: "https://source.unsplash.com/400x300/?sticker,label", title: "Custom Stickers" },
];

const Portfolio = () => {
  return (
    <Box sx={{ px: "5%", py: "60px", textAlign: "center", overflowX: "hidden" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: "30px" }}>
        Our Work Portfolio
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {portfolioItems.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "10px", boxShadow: 3, overflow: "hidden" }}>
              <CardMedia component="img" height="200" image={item.image} alt={item.title} />
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
