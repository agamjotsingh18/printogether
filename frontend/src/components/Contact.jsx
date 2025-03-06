import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <Box sx={{ px: "5%", py: "60px", textAlign: "center", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: "30px" }}>
        Get in Touch
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: "600px", mx: "auto", display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField label="Your Name" name="name" variant="outlined" fullWidth required value={form.name} onChange={handleChange} />
        <TextField label="Your Email" name="email" variant="outlined" fullWidth required type="email" value={form.email} onChange={handleChange} />
        <TextField label="Your Message" name="message" variant="outlined" fullWidth required multiline rows={4} value={form.message} onChange={handleChange} />
        <Button type="submit" variant="contained" sx={{ backgroundColor: "#FF9900", "&:hover": { backgroundColor: "#FF6600" } }}>
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
