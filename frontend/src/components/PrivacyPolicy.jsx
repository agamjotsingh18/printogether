import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";

const PrivacyPolicy = () => {
  return (
        <Container sx={{ marginTop: "50px", paddingBottom: "50px" }}>
      <Box py={5}>
        <Typography variant="h4" gutterBottom align="center" color="primary">Privacy Policy</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          This Privacy Policy explains how we collect, use, and protect your personal information.
        </Typography>
        <Typography variant="h6" color="secondary">Information We Collect</Typography>
        <Typography variant="body1" paragraph>
          We may collect personal information such as your name, email, phone number, and address when you use our services.
        </Typography>
        <Typography variant="h6" color="secondary">How We Use Your Information</Typography>
        <Typography variant="body1" paragraph>
          Your information is used to provide and improve our services, process orders, send updates, and ensure a better user experience.
        </Typography>
      </Box>
    </Container>
  );
};

const DeliveryReturnPolicy = () => {
  return (
<Container sx={{ marginTop: "50px", paddingBottom: "50px" }}>
<Box py={5}>
        <Typography variant="h4" gutterBottom align="center" color="primary">Delivery & Return Policy</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          Our delivery and return policy outlines the process for shipping and returning products to ensure customer satisfaction.
        </Typography>
        <Typography variant="h6" color="secondary">Delivery Information</Typography>
        <Typography variant="body1" paragraph>
          We aim to deliver orders within 5-7 business days. Shipping times may vary based on location and product availability.
        </Typography>
        <Typography variant="h6" color="secondary">Return & Refund Policy</Typography>
        <Typography variant="body1" paragraph>
          If you are not satisfied with your order, you may return it within 14 days for a refund or exchange, subject to our terms.
        </Typography>
        <Typography variant="body1" paragraph>
          Refunds will be processed within 7 business days after receiving the returned product.
        </Typography>
      </Box>
    </Container>
  );
};

const TermsConditions = () => {
  return (
<Container sx={{ marginTop: "50px", paddingBottom: "50px" }}>
<Box py={5}>
        <Typography variant="h4" gutterBottom align="center" color="primary">Terms & Conditions</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          These Terms & Conditions govern your use of our services and website.
        </Typography>
        <Typography variant="h6" color="secondary">User Responsibilities</Typography>
        <Typography variant="body1" paragraph>
          By using our services, you agree to comply with all applicable laws and regulations, and refrain from any unlawful activities.
        </Typography>
        <Typography variant="h6" color="secondary">Intellectual Property</Typography>
        <Typography variant="body1" paragraph>
          All content on this website, including text, graphics, and logos, is the property of Print Fusion and may not be used without permission.
        </Typography>
        <Typography variant="h6" color="secondary">Limitation of Liability</Typography>
        <Typography variant="body1" paragraph>
          Print Fusion is not liable for any indirect or consequential damages arising from the use of our website or services.
        </Typography>
      </Box>
    </Container>
  );
};

export { PrivacyPolicy, DeliveryReturnPolicy, TermsConditions };
