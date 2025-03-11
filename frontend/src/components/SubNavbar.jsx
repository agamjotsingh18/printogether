import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SubNavbar.css";

const categories = [
  {
    name: "Business Essentials",
    subcategories: [
      {
        name: "Business Cards",
        link: "/services/business-essentials/business-cards",
        products: [
          "Standard Business Card",
          "Premium Laminated Card",
          "Textured Business Card",
          "Square Business Card",
          "Rounded Corner Business Card",
          "Metallic Business Card",
          "Circle Business Card",
          "U-Shaped Business Card",
        ],
      },
      {
        name: "Envelopes",
        link: "/services/business-essentials/envelopes",
        products: [
          "#10 Envelope (long)",
          "A5 Envelope",
          "A6 Envelope",
          "Kraft Envelope",
        ],
      },
      {
        name: "Letterheads",
        link: "/services/business-essentials/letterheads",
        products: ["Custom Letterheads", "Prescription Note Pad"],
      },
      {
        name: "Invoices",
        link: "/services/business-essentials/invoices",
        products: [
          "Full Colour Printed Bill Books",
          "Black and White Printed Bill Books",
        ],
      },
    ],
  },
  {
    name: "Marketing Materials",
    subcategories: [
      { name: "Banners", link: "/services/marketing-materials/banners" },
      {
        name: "Custom Standee Cutout",
        link: "/services/marketing-materials/custom-standee-cutout",
      },
      {
        name: "Acrylic Sign Board",
        link: "/services/marketing-materials/acrylic-sign-board",
        products: [
          "Acrylic Photo Frames",
          "Acrylic Name Plates",
          "Acrylic Calendar",
          "Acrylic Magnets",
          "Acrylic Keychains",
          "Acrylic Coasters",
        ],
      },
      {
        name: "Flyers",
        link: "/services/marketing-materials/flyers",
        products: [
          "Offer Flyers",
          "Business Flyers",
          "Product Catalog Flyers",
          "A4 Flyer Printing",
          "A5 Flyer Printing",
          "DL Flyer Printing",
        ],
      },
      { name: "Posters", link: "/services/marketing-materials/posters" },
      {
        name: "Photo Selfie Booth",
        link: "/services/marketing-materials/photo-selfie-booth",
      },
      {
        name: "Brochures",
        link: "/services/marketing-materials/brochures",
        products: ["Half Fold Brochure", "Tri Fold Brochure"],
      },
      { name: "Standees", link: "/services/marketing-materials/standees" },
    ],
  },
  {
    name: "Packaging & Labels",
    subcategories: [
      {
        name: "Stickers",
        link: "/services/packaging-labels/stickers",
        products: [
          "Matte Laminated Stickers",
          "Holographic Stickers",
          "Gold Foiling Stickers",
          "Spot UV Stickers",
          "Silver Foiling Stickers",
          "Dome Stickers",
          "Front Adhesive Stickers",
          "Custom Opaque Stickers",
          "Clear Stickers",
        ],
      },
      {
        name: "Labels",
        link: "/services/packaging-labels/labels",
        products: [
          "Metallic Gold Paper Labels",
          "Metallic Silver Paper Labels",
          "Kraft Paper Labels",
          "Premium White Labels",
          "Clear Labels",
          "Water Proof Labels",
        ],
      },
      {
        name: "Paper Bags",
        link: "/services/packaging-labels/paper-bags",
        products: [
          "Gift Paper Bags",
          "Takeout Paper Bags",
          "Pre-printed Paper Bags",
        ],
      },
      { name: "Gift Boxes", link: "/services/packaging-labels/gift-boxes" },
    ],
  },
  {
    name: "Personalized Gifts",
    subcategories: [
      {
        name: "Mugs",
        link: "/services/personalized-gifts/mugs",
        products: ["Standard Mug", "Mini Mug"],
      },
      // {
      //   name: "Bottles",
      //   link: "/services/personalized-gifts/bottles",
      //   products: ["Standard Mug", "Mini Mug"],
      // },
      {
        name: "T-shirts",
        link: "/services/personalized-gifts/tshirts",
        products: [
          "Round Neck T-shirts",
          "Polo T-shirts",
          "V-Neck T-shirts",
        ],
      },
      {
        name: "Photo Frames",
        link: "/services/personalized-gifts/photo-frames",
        products: [
          "Photo with LED Frames",
          "Photo with Classic Frames",
          "Photo with Wall Frames",
          "Canvas Photo with Frames",
          "Matte Photo with Frames",
          "Custom Acrylic Photo Frames",
          "Frameless Photo Frames",
        ],
      },
      {
        name: "Calendars",
        link: "/services/personalized-gifts/calendars",
        products: [
          "A5 Landscape Calendar",
          "Big Square Desktop Calendar",
          "Wall Calendar",
          "Long Calendar",
          "Calendar With Photo",
          "Frame Calendar",
        ],
      },
    ],
  },
  {
    name: "T-shirt Printing",
    subcategories: [
      {
        name: "Custom T-shirts",
        link: "/services/personalized-gifts/tshirts",
        products: [
          "Round Neck T-shirts",
          "Polo T-shirts",
          "V-Neck T-shirts",
        ],
      },
      {
        name: "Hoodies",
        link: "/services/tshirt-printing/hoodies",
        products: [
          "Custom Printed Zipper Hoodie",
          "Custom Printed Pullover Hoodies",
          "Embroidered Zip Hoodies",
          "Embroidered Pullover Hoodies",
        ],
      },
      { name: "Sweatshirts", link: "/services/tshirt-printing/sweatshirts" },
      { name: "Jackets", link: "/services/tshirt-printing/jackets" },
      {
        name: "Caps",
        link: "/services/tshirt-printing/caps",
        products: [
          "Printed Plain Caps",
          "Line Stitching Caps",
          "Piping Caps",
          "Tipping Caps",
        ],
      },
    ],
  },
  {
    name: "Corporate Gifting",
    subcategories: [],
  },
];

const SubNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="sub-navbar">
      <div className="sub-nav-container">
        {categories.map((category, index) => (
          <div
            className={`sub-nav-item ${
              category.name === "Corporate Gifting" ? "corporate-item" : ""
            }`}
            key={index}
            onMouseEnter={() => toggleDropdown(index)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <span className="sub-nav-link">{category.name}</span>
            {openDropdown === index && (
              <div className="dropdown">
                <div className="dropdown-grid">
                  {category.subcategories.map((sub, i) => (
                    <div key={i} className="dropdown-column">
                      <Link to={sub.link} className="dropdown-subcategory">
                        {sub.name}
                      </Link>
                      {sub.products && (
                        <div className="dropdown-products">
                          {sub.products.map((product, j) => (
                            <Link
                              to={`${sub.link}/${product
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                              className="dropdown-product-item"
                              key={j}
                            >
                              {product}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SubNavbar;