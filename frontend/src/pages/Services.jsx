import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Services.css";
import { FaPrint, FaTshirt, FaBox, FaGift, FaFileAlt, FaChevronRight } from "react-icons/fa";

// Import assets for each service item
import businessCardImg from "../assets/business-card.jpg";
import letterheadImg from "../assets/letterhead.avif";
import envelopeImg from "../assets/envelope.png";
import invoiceImg from "../assets/invoice.png";
import flyerImg from "../assets/flyer.png";
import standeesImg from "../assets/standees.png";
import customStandeeCutoutImg from "../assets/custom-standee-cutout.png";
import posterImg from "../assets/poster.png";
import brochureImg from "../assets/brochure.png";
import bannerImg from "../assets/banner.png";
import mugImg from "../assets/mug.png";
import tshirtImg from "../assets/tshirt.png";
import photoFrameImg from "../assets/photo-frame.png";
import calendarImg from "../assets/calendar.png";
import stickerImg from "../assets/sticker.png";
import labelImg from "../assets/label.png";
import paperBagImg from "../assets/paper-bag.png";
import giftBoxImg from "../assets/gift-box.png";
import hoodieImg from "../assets/hoodie.png";
import sweatshirtImg from "../assets/sweatshirt.png";
import capImg from "../assets/cap.png";
import jacketImg from "../assets/jacket.png";
import acrylicSignBoardImg from "../assets/acrylic-sign-board.png";
import photoSelfieBoothImg from "../assets/photo-selfie-booth.png";

const services = [
  {
    name: "Marketing Materials",
    icon: <FaPrint />,
    items: [
      { name: "Banners", image: bannerImg, link: "/services/marketing-materials/banners" },
      { name: "Custom Standee Cutout", image: customStandeeCutoutImg, link: "/services/marketing-materials/custom-standee-cutout" },
      { name: "Acrylic Sign Board", image: acrylicSignBoardImg, link: "/services/marketing-materials/acrylic-sign-board" },
      { name: "Posters", image: posterImg, link: "/services/marketing-materials/posters" },
      { name: "Photo Selfie Booth", image: photoSelfieBoothImg, link: "/services/marketing-materials/photo-selfie-booth" },
      { name: "Brochures", image: brochureImg, link: "/services/marketing-materials/brochures" },
      { name: "Flyers", image: flyerImg, link: "/services/marketing-materials/flyers" },
      { name: "Standees", image: standeesImg, link: "/services/marketing-materials/standees" },
    ],
  },
  {
    name: "Packaging & Labels",
    icon: <FaBox />,
    items: [
      { name: "Stickers", image: stickerImg, link: "/services/packaging-labels/stickers" },
      { name: "Labels", image: labelImg, link: "/services/packaging-labels/labels" },
      { name: "Paper Bags", image: paperBagImg, link: "/services/packaging-labels/paper-bags" },
      { name: "Gift Boxes", image: giftBoxImg, link: "/services/packaging-labels/gift-boxes" },
    ],
  },
  {
    name: "Personalized Gifts",
    icon: <FaGift />,
    items: [
      { name: "Mugs", image: mugImg, link: "/services/personalized-gifts/mugs" },
      { name: "T-Shirts", image: tshirtImg, link: "/services/personalized-gifts/tshirts" },
      { name: "Photo Frames", image: photoFrameImg, link: "/services/personalized-gifts/photo-frames" },
      { name: "Calendars", image: calendarImg, link: "/services/personalized-gifts/calendars" },
    ],
  },
  {
    name: "Business Essentials",
    icon: <FaFileAlt />,
    items: [
      { name: "Business Cards", image: businessCardImg, link: "/services/business-essentials/business-cards" },
      { name: "Letterheads", image: letterheadImg, link: "/services/business-essentials/letterheads" },
      { name: "Envelopes", image: envelopeImg, link: "/services/business-essentials/envelopes" },
      { name: "Invoices", image: invoiceImg, link: "/services/business-essentials/invoices" },
    ],
  },
  {
    name: "T-Shirt Printing",
    icon: <FaTshirt />,
    items: [
      { name: "Custom T-Shirts", image: tshirtImg, link: "/services/personalized-gifts/tshirts" },
      { name: "Hoodies", image: hoodieImg, link: "/services/tshirt-printing/hoodies" },
      { name: "Sweatshirts", image: sweatshirtImg, link: "/services/tshirt-printing/sweatshirts" },
      { name: "Caps", image: capImg, link: "/services/tshirt-printing/caps" },
      { name: "Jackets", image: jacketImg, link: "/services/tshirt-printing/jackets" },
    ],
  },
];

const Services = () => {
  const serviceItemsRef = useRef([]);

  // const scrollLeft = (index) => {
  //   const container = serviceItemsRef.current[index];
  //   if (container && container.scrollLeft > 0) {
  //     container.scrollBy({ left: -200, behavior: 'smooth' });
  //   }
  // };

  const scrollRight = (index) => {
    const container = serviceItemsRef.current[index];
    if (container && container.scrollLeft < container.scrollWidth - container.clientWidth) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Enable horizontal scrolling with mouse wheel
  const handleWheel = (e, index) => {
    const container = serviceItemsRef.current[index];
    if (container) {
      e.preventDefault();
  
      // Check if the container can scroll further in the desired direction
      if (
        (e.deltaY < 0 && container.scrollLeft > 0) || // Scroll left
        (e.deltaY > 0 && container.scrollLeft < container.scrollWidth - container.clientWidth) // Scroll right
      ) {
        container.scrollBy({
          left: e.deltaY < 0 ? -30 : 30, // Adjust scroll speed
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="services">
      <h2 className="section-title">Our Printing Services</h2>
      <p className="section-subtitle">High-quality prints for all your needs</p>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-row" key={index}>
            <div className="service-category">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.name}</h3>
            </div>
            <div
              className="service-items"
              ref={(el) => (serviceItemsRef.current[index] = el)}
              onWheel={(e) => handleWheel(e, index)} // Enable mouse wheel scroll
            >
              {service.items.map((item, idx) => (
                <Link to={item.link} className="service-card" key={idx}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="service-image"
                  />
                  <p className="service-item-name">{item.name}</p>
                </Link>
              ))}
            </div>
            {service.items.length > 4 && (
              <button className="scroll-button next" onClick={() => scrollRight(index)}>
                <FaChevronRight />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;