import React, { useState } from 'react';
import './CustomizableWelcomeKit.css';

const CustomizableWelcomeKit = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const categories = {
    Notebooks: [
      { name: "Matte Finish Diaries", image: "matteFinishDiariesImg", link: "/matte-finish-diaries" },
      { name: "Vintage Tan Diaries", image: "vintageTanDiariesImg", link: "/vintage-tan-diaries" },
      { name: "Faux Leather Diaries", image: "fauxLeatherDiariesImg", link: "/faux-leather-diaries" },
      { name: "Eco Kraft Cover Diaries", image: "ecoKraftCoverDiariesImg", link: "/eco-kraft-cover-diaries" },
    ],
    Pens: [
      { name: "Stylus Pen", image: "stylusPenImg", link: "/stylus-pen" },
      { name: "Kraft Pen", image: "kraftPenImg", link: "/kraft-pen" },
      { name: "Adroit Pen", image: "adroitPenImg", link: "/adroit-pen" },
      { name: "Gilt Roller Ball Pen", image: "giltRollerPenImg", link: "/gilt-roller-pen" },
    ],
    Stickers: [
      { name: "Matte Laminated Stickers", image: "matteLaminatedStickers", link: "/matte-laminated-stickers" },
      { name: "Holographic Stickers", image: "holographicStickers", link: "/holographic-stickers" },
      { name: "Gold Foiling Stickers", image: "goldFoilingStickers", link: "/gold-foiling-stickers" },
    ],
    Mugs: [
      { name: "Standard Mug", image: "standardMugImg", link: "/standard-mug" },
      { name: "Shimmer Dark Grey Mug", image: "shimmerMugImg", link: "/shimmer-mug" },
    ],
    "Laptop Bags": [
      { name: "Apex Carry Laptop Bag", image: "apexLaptopBagImg", link: "/apex-laptop-bag" },
      { name: "Elite Horizon Laptop Bag", image: "eliteLaptopBagImg", link: "/elite-laptop-bag" },
    ],
  };

  const handleAddItem = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter((i) => i.name !== item.name));
  };

  return (
    <div className="customizable-kit">
      <h2>Create Your Custom Kit</h2>
      <div className="kit-builder">
        <div className="categories">
          {Object.keys(categories).map((category) => (
            <div key={category} className="category">
              <h3>{category}</h3>
              <ul>
                {categories[category].map((item, index) => (
                  <li key={index} onClick={() => handleAddItem(item)}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="selected-items">
          <h3>Your Kit</h3>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index} className="selected-item">
                {item.name}
                <button onClick={() => handleRemoveItem(item)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomizableWelcomeKit;