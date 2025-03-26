import React, { useState } from "react";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../styles/FestiveHampers.css";

// Import images for hampers (replace with actual image paths)
import holiHampersImg1 from "../assets/festive-hampers.jpg";
import holiHampersImg2 from "../assets/festive-hampers.jpg";
import holiHampersImg3 from "../assets/festive-hampers.jpg";
import holiHampersImg4 from "../assets/festive-hampers.jpg";
import customFestiveHamperImg from "../assets/custom-festive-hamper.webp"; // Import the custom hamper image

// Import images for customizable items (replace with actual image paths)
import festiveDiaryImg from "../assets/wave-texture-diaries.png";
import colorfulPensImg from "../assets/scribble-pen.png";
import holiTShirtImg from "../assets/tshirt.png";
import ecoFriendlyBagImg from "../assets/laptop-bag.png";
import holiMugImg from "../assets/mug.png";
import festiveStickersImg from "../assets/sticker.png";
import thankYouCardImg from "../assets/thank-you-card.png";

const FestiveHampers = ({ addToCart }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Main hampers data
  const mainHampers = [
    {
      name: "Color Splash Hamper",
      image: holiHampersImg1,
      price: 1500,
      items: [
        "Festive Diary",
        "Colorful Pens",
        "Holi T-Shirt",
        "Eco-Friendly Bag",
        "Festive Stickers",
      ],
    },
    {
      name: "Eco-Friendly Holi Hamper",
      image: holiHampersImg2,
      price: 2000,
      items: [
        "Eco-Friendly Diary",
        "Natural Color Pack",
        "Organic T-Shirt",
        "Reusable Bag",
        "Thank You Card",
      ],
    },
    {
      name: "Premium Holi Hamper",
      image: holiHampersImg3,
      price: 2500,
      items: [
        "Luxury Festive Diary",
        "Premium Pens",
        "Designer T-Shirt",
        "Custom Mug",
        "Festive Stickers",
      ],
    },
    // {
    //   name: "Custom Holi Hamper",
    //   image: holiHampersImg4,
    //   price: 3000,
    //   items: [
    //     "Custom Diary",
    //     "Colorful Pens",
    //     "Holi T-Shirt",
    //     "Eco-Friendly Bag",
    //     "Thank You Card",
    //   ],
    // },
  ];

  // Customizable items data
  const customizableItems = {
    Diaries: [
      { name: "Festive Diary", image: festiveDiaryImg, price: 400 },
      { name: "Eco-Friendly Diary", image: festiveDiaryImg, price: 450 },
      { name: "Luxury Festive Diary", image: festiveDiaryImg, price: 500 },
      { name: "Custom Diary", image: festiveDiaryImg, price: 550 },
    ],
    Pens: [
      { name: "Colorful Pens", image: colorfulPensImg, price: 100 },
      { name: "Natural Color Pack", image: colorfulPensImg, price: 150 },
      { name: "Premium Pens", image: colorfulPensImg, price: 200 },
    ],
    TShirts: [
      { name: "Holi T-Shirt", image: holiTShirtImg, price: 500 },
      { name: "Organic T-Shirt", image: holiTShirtImg, price: 600 },
      { name: "Designer T-Shirt", image: holiTShirtImg, price: 700 },
    ],
    Bags: [
      { name: "Eco-Friendly Bag", image: ecoFriendlyBagImg, price: 800 },
      { name: "Reusable Bag", image: ecoFriendlyBagImg, price: 850 },
    ],
    Mugs: [{ name: "Custom Mug", image: holiMugImg, price: 300 }],
    Stickers: [{ name: "Festive Stickers", image: festiveStickersImg, price: 50 }],
    Cards: [{ name: "Thank You Card", image: thankYouCardImg, price: 50 }],
  };

  // Add item to selected items
  const handleAddItem = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  // Remove item from selected items
  const handleRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter((i) => i.name !== item.name));
  };

  // Calculate total price of selected items
  const calculateTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0);
  };

  // Add custom hamper to cart
  const handleAddCustomHamperToCart = () => {
    const customHamper = {
      name: "Custom Hamper",
      image: customFestiveHamperImg, // Use the imported image
      items: selectedItems,
      price: calculateTotalPrice(),
    };
    addToCart(customHamper);
  };

  return (
    <section className="festive-hampers">
      <h2 className="section-title">Festive Hampers</h2>
      <p className="section-subtitle">Celebrate Holi with our exclusive hampers</p>

      {/* Main Hampers Section */}
      <div className="main-hampers-container">
        {mainHampers.map((hamper, index) => (
          <div key={index} className="hamper-card">
            <img src={hamper.image} alt={hamper.name} className="hamper-image" />
            <h3 className="hamper-name">{hamper.name}</h3>
            <p className="hamper-price">₹{hamper.price}</p>
            <ul className="hamper-items">
              {hamper.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <IconButton
              sx={{
                fontSize: "1.2rem",
                color: "white",
                background: "#ff6600",
                padding: "10px",
                borderRadius: "10px",
                "&:hover": { transform: "scale(1.1)", color: "#ff6600" },
              }}
              onClick={() => addToCart(hamper)}
            >
              Add to Cart &nbsp;
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        ))}
      </div>

      {/* Customizable Hamper Section */}
      <h2 className="section-title">Create Your Custom Hamper</h2>
      <div className="customizable-hamper">
        {/* Categories */}
        <div className="categories">
          {Object.keys(customizableItems).map((category) => (
            <div key={category} className="category">
              <h3>{category}</h3>
              <ul>
                {customizableItems[category].map((item, index) => (
                  <li key={index} onClick={() => handleAddItem(item)}>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Selected Items */}
        <div className="selected-items">
          <h3>Your Hamper</h3>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index} className="selected-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <button onClick={() => handleRemoveItem(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <p className="total-price">Total: ₹{calculateTotalPrice()}</p>
          <IconButton
            sx={{
              fontSize: "1.2rem",
              color: "white",
              background: "#ff6600",
              padding: "10px",
              borderRadius: "10px",
              "&:hover": { transform: "scale(1.1)", color: "#ff6600" },
            }}
            onClick={handleAddCustomHamperToCart}
          >
            Add Custom Hamper to Cart &nbsp;
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default FestiveHampers;