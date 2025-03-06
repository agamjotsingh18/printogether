import React from "react";
import { Box, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

const services = [
  { title: "Business Cards", image: "https://source.unsplash.com/400x300/?business,card", description: "Premium quality business cards to leave a lasting impression." },
  { title: "Flyers & Brochures", image: "https://source.unsplash.com/400x300/?flyer,brochure", description: "Eye-catching marketing materials for your business." },
  { title: "Custom T-Shirts", image: "https://source.unsplash.com/400x300/?tshirt,printing", description: "Get custom-printed t-shirts for your brand or events." },
  { title: "Posters & Banners", image: "https://source.unsplash.com/400x300/?poster,banner", description: "High-quality posters and banners to promote your business." },
  { title: "Mug Printing", image: "https://source.unsplash.com/400x300/?mug,printing", description: "Personalized mugs with your brand or design." },
  { title: "Custom Stickers", image: "https://source.unsplash.com/400x300/?stickers,branding", description: "Durable custom stickers for marketing and branding." },
];

const Services = () => {
  return (
    <Box sx={{ px: "5%", py: "60px", textAlign: "center", overflowX: "hidden" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: "30px" }}>
        Our Printing Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "10px", boxShadow: 3, transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
              <CardMedia component="img" height="200" image={service.image} alt={service.title} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
