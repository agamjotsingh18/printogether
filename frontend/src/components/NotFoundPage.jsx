import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFoundPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        p: 3,
      }}
    >
      {/* 404 Icon */}
      <ErrorOutlineIcon
        sx={{
          fontSize: "6rem",
          color: "#ff6600",
          mb: 3,
        }}
      />

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "#333",
        }}
      >
        404 - Page Not Found
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 4,
          maxWidth: "500px",
        }}
      >
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </Typography>

      {/* Go Home Button */}
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          background: "#ff6600",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
          p: "10px 30px",
          borderRadius: "25px",
          textTransform: "none",
          "&:hover": {
            background: "#ff8c42",
          },
        }}
      >
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;