import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import "../styles/Blog.css";

const blogPosts = [
  {
    title: "The Future of 3D Printing",
    image: "../assets/3d-printing.jpg",
    description: "How 3D printing is revolutionizing the manufacturing industry.",
    link: "/blog/future-3d-printing",
  },
  {
    title: "Eco-Friendly Printing Solutions",
    image: "../assets/eco-printing.jpg",
    description: "Sustainable printing methods that help save the environment.",
    link: "/blog/eco-friendly-printing",
  },
  {
    title: "Top Business Card Designs in 2025",
    image: "../assets/business-card-design.jpg",
    description: "Explore the latest trends in business card design for professionals.",
    link: "/blog/business-card-trends",
  },
];

const Blog = () => {
  return (
    <Box className="blog-page" sx={{ marginTop: "50px", paddingBottom: "50px" }}>
      <Typography className="blog-title">Latest from Our Blog</Typography>
      <Box className="blog-container">
        {blogPosts.map((post, index) => (
          <Card className="blog-card" key={index}>
            <CardMedia component="img" image={post.image} alt={post.title} className="blog-image" />
            <CardContent>
              <Typography className="blog-heading">{post.title}</Typography>
              <Typography className="blog-description">{post.description}</Typography>
              <a href={post.link} className="blog-read-more">Read More</a>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
