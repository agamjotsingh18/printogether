import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen(open);
  };


  const handlePhoneClick = (event) => {
    event.stopPropagation(); // Prevent drawer from closing
    window.location.href = "tel:9319042075"; // Redirect to phone call
  };

  const handleEmailClick = (event) => {
    event.stopPropagation(); // Prevent drawer from closing
    window.location.href = "mailto:printfusionindia@gmail.com"; // Redirect to email
  };

  const drawerContent = () => (
    <Box sx={{ width: 280, background: "linear-gradient(135deg, #f8f9fa, #ffffff)", height: "100%" }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      {/* Logo */}
      <Typography variant="h5" sx={{ color: "#333", fontWeight: "bold", fontFamily: "Poppins, sans-serif", p: 3, textAlign: "center" }}>
        PRINT FUSION
      </Typography>

      {/* Navigation Links */}
      <List>
        <ListItem button component={Link} to="/" sx={{ "&:hover": { background: "#ff6600", color: "white" } }}>
          <ListItemText primary="Home" sx={{ color: "#333", fontWeight: 600 }} />
        </ListItem>

        {/* Services Dropdown */}
        <ListItem button component={Link} to="/services" sx={{ "&:hover": { background: "#ff6600", color: "white" } }}>
          <ListItemText primary="Services" sx={{ color: "#333", fontWeight: 600 }} />
        </ListItem>
        {/* <ListItem button onClick={handleServicesClick} sx={{ "&:hover": { background: "#ff6600", color: "white" } }}>
          <ListItemText primary="Services" sx={{ color: "#333", fontWeight: 600 }} />
          {openServices ? <ExpandLessIcon sx={{ color: "#333" }} /> : <ExpandMoreIcon sx={{ color: "#333" }} />}
        </ListItem>
        <Collapse in={openServices} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4, "&:hover": { background: "#ff6600", color: "white" } }} component={Link} to="/business-essentials">
              <ListItemText primary="Business Essentials" />
            </ListItem>
            <ListItem button sx={{ pl: 4, "&:hover": { background: "#ff6600", color: "white" } }} component={Link} to="/marketing-materials">
              <ListItemText primary="Marketing Materials" />
            </ListItem>
            <ListItem button sx={{ pl: 4, "&:hover": { background: "#ff6600", color: "white" } }} component={Link} to="/packaging-labels">
              <ListItemText primary="Packaging & Labels" />
            </ListItem>
            <ListItem button sx={{ pl: 4, "&:hover": { background: "#ff6600", color: "white" } }} component={Link} to="/personalized-gifts">
              <ListItemText primary="Personalized Gifts" />
            </ListItem>
            <ListItem button sx={{ pl: 4, "&:hover": { background: "#ff6600", color: "white" } }} component={Link} to="/tshirt-printing">
              <ListItemText primary="T-shirt Printing" />
            </ListItem>
            <ListItem button sx={{ pl: 4, "&:hover": { background: "#ff6600", color: "white" } }} component={Link} to="/corporate-gifting">
              <ListItemText primary="Corporate Gifting" />
            </ListItem>
          </List>
        </Collapse> */}

        <ListItem button component={Link} to="/portfolio" sx={{ "&:hover": { background: "#ff6600", color: "white" } }}>
          <ListItemText primary="Portfolio" sx={{ color: "#333", fontWeight: 600 }} />
        </ListItem>
        <ListItem button component={Link} to="/about" sx={{ "&:hover": { background: "#ff6600", color: "white" } }}>
          <ListItemText primary="About" sx={{ color: "#333", fontWeight: 600 }} />
        </ListItem>
      </List>

      <hr style={{ border: "1px solid #ddd", margin: "20px auto", width:"75%"}} />

      {/* Contact Section */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold", mb: 2 }}>
          Need Assistance?
        </Typography>
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          sx={{ background: "#28D146", color: "white", textTransform: "none", mb: 2, width: "100%", "&:hover": { background: "#1e9c3a" } }}
          href="https://wa.me/9319042075"
          target="_blank"
        >
          WhatsApp Us
        </Button>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1, cursor: "pointer" }} onClick={handlePhoneClick}>
          <PhoneIcon sx={{ color: "#333" }} />
          <Typography variant="body1" sx={{ color: "#333" }}>
            9319042075
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }} onClick={handleEmailClick}>
          <EmailIcon sx={{ color: "#333" }} />
          <Typography variant="body1" sx={{ color: "#333" }}>
            printfusionindia@gmail.com
          </Typography>
        </Box>
      </Box>

      <hr style={{ border: "1px solid #ddd", margin: "20px auto", width:"75%"}} />

      {/* Additional Links */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold", mb: 2 }}>
          Who are we?
        </Typography>
        <List>
          <ListItem button component={Link} to="/about" sx={{ "&:hover": { background: "#ff6600", color: "white" } }}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/portfolio" sx={{ "&:hover": { background: "#ff6600", color: "white" } }}>
            <ListItemText primary="Work Portfolio" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ background: "linear-gradient(135deg, #ff6600, #ff8c42)", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Typography variant="h5" sx={{ color: "white", fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}>
            PRINT FUSION
          </Typography>

          {/* Hamburger Menu for Mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
          >
            <MenuIcon />
          </IconButton>

          {/* Navigation Links for Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Button component={Link} to="/" sx={{ color: "white", fontSize: "16px", textTransform: "none", "&:hover": { background: "rgba(255, 255, 255, 0.1)" } }}>
              Home
            </Button>
            <Button component={Link} to="/services" sx={{ color: "white", fontSize: "16px", textTransform: "none", "&:hover": { background: "rgba(255, 255, 255, 0.1)" } }}>
              Services
            </Button>
            <Button component={Link} to="/portfolio" sx={{ color: "white", fontSize: "16px", textTransform: "none", "&:hover": { background: "rgba(255, 255, 255, 0.1)" } }}>
              Portfolio
            </Button>
            <Button component={Link} to="/about" sx={{ color: "white", fontSize: "16px", textTransform: "none", "&:hover": { background: "rgba(255, 255, 255, 0.1)" } }}>
              About
            </Button>
          </Box>

          {/* Contact Button for Desktop */}
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{ background: "white", fontWeight: "bold", color: "#ff6600", textTransform: "none", fontSize: "16px", display: { xs: "none", md: "block" }, "&:hover": { background: "#ff8c42", color:"white", fontWeight: "bold" } }}
          >
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent()}
      </Drawer>
    </>
  );
};

export default Navbar;