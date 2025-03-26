// data/AllProducts.js
const products = [
    // Business Essentials
    {
        name: "Standard Business Card",
        link: "/business-essentials/business-cards/standard"
    },
    {
        name: "Premium Laminated Card",
        link: "/business-essentials/business-cards/premium"
    },
    {
        name: "Textured Business Card",
        link: "/business-essentials/business-cards/textured"
    },
    {
        name: "Square Business Card",
        link: "/business-essentials/business-cards/square"
    },
    {
        name: "Rounded Corner Business Card",
        link: "/business-essentials/business-cards/rounded-corner"
    },
    {
        name: "Metallic Business Card",
        link: "/business-essentials/business-cards/metallic"
    },
    {
        name: "Circle Business Card",
        link: "/business-essentials/business-cards/circle"
    },
    {
        name: "U-Shaped Business Card",
        link: "/business-essentials/business-cards/u-shaped"
    },
    {
        name: "Custom Letterheads",
        link: "/business-essentials/letterheads/custom"
    },
    {
        name: "Prescription Note Pad",
        link: "/business-essentials/letterheads/prescription-note-pad"
    },
    {
        name: "#10 Envelope (long)",
        link: "/business-essentials/envelopes/10-envelope-long"
    },
    {
        name: "A5 Envelope",
        link: "/business-essentials/envelopes/a5"
    },
    {
        name: "A6 Envelope",
        link: "/business-essentials/envelopes/a6"
    },
    {
        name: "Kraft Envelope",
        link: "/business-essentials/envelopes/kraft"
    },
    {
        name: "Full Colour Printed Bill Books",
        link: "/business-essentials/invoices/full-colour-bill-books"
    },
    {
        name: "Black and White Printed Bill Books",
        link: "/business-essentials/invoices/black-white-bill-books"
    },
    //Marketing Materials
    {
        name: "Banners",
        link: "/marketing-materials/banners"
    },
    {
        name: "Custom Standee Cutout",
        link: "/marketing-materials/custom-standee-cutout"
    },
    {
        name: "Acrylic Photo Frames",
        link: "/marketing-materials/acrylic-sign-board/acrylic-photo-frames"
    },
    {
        name: "Acrylic Name Plates",
        link: "/marketing-materials/acrylic-sign-board/acrylic-name-plates"
    },
    {
        name: "Acrylic Calendar",
        link: "/marketing-materials/acrylic-sign-board/acrylic-calendar"
    },
    {
        name: "Acrylic Magnets",
        link: "/marketing-materials/acrylic-sign-board/acrylic-magnets"
    },
    {
        name: "Acrylic Keychains",
        link: "/marketing-materials/acrylic-sign-board/acrylic-keychains"
    },
    {
        name: "Acrylic Coasters",
        link: "/marketing-materials/acrylic-sign-board/acrylic-coasters"
    },
    {
        name: "Posters",
        link: "/marketing-materials/posters"
    },
    {
        name: "Photo Selfie Booth",
        link: "/marketing-materials/photo-selfie-booth"
    },
    {
        name: "Half Fold Brochure",
        link: "/marketing-materials/brochures/half-fold"
    },
    {
        name: "Tri Fold Brochure",
        link: "/marketing-materials/brochures/tri-fold"
    },
    {
        name: "Offer Flyers",
        link: "/marketing-materials/flyers/offer"
    },
    {
        name: "Business Flyers",
        link: "/marketing-materials/flyers/business"
    },
    {
        name: "Product Catalog Flyers",
        link: "/marketing-materials/flyers/product-catalog"
    },
    {
        name: "A4 Flyer Printing",
        link: "/marketing-materials/flyers/a4"
    },
    {
        name: "A5 Flyer Printing",
        link: "/marketing-materials/flyers/a5"
    },
    {
        name: "DL Flyer Printing",
        link: "/marketing-materials/flyers/dl"
    },
    {
        name: "Standees",
        link: "/marketing-materials/standees"
    },
    // Packaging & Labels
    {
        name: "Matte Laminated Stickers",
        link: "/packaging-labels/stickers/matte-laminated"
    },
    {
        name: "Holographic Stickers",
        link: "/packaging-labels/stickers/holographic"
    },
    {
        name: "Gold Foiling Stickers",
        link: "/packaging-labels/stickers/gold-foiling"
    },
    {
        name: "Spot UV Stickers",
        link: "/packaging-labels/stickers/spot-uv"
    },
    {
        name: "Silver Foiling Stickers",
        link: "/packaging-labels/stickers/silver-foiling"
    },
    {
        name: "Dome Stickers",
        link: "/packaging-labels/stickers/dome"
    },
    {
        name: "Front Adhesive Stickers",
        link: "/packaging-labels/stickers/front-adhesive"
    },
    {
        name: "Custom Opaque Stickers",
        link: "/packaging-labels/stickers/custom-opaque"
    },
    {
        name: "Clear Stickers",
        link: "/packaging-labels/stickers/clear"
    },
    {
        name: "Metallic Gold Paper Labels",
        link: "/packaging-labels/labels/metallic-gold"
    },
    {
        name: "Metallic Silver Paper Labels",
        link: "/packaging-labels/labels/metallic-silver"
    },
    {
        name: "Kraft Paper Labels",
        link: "/packaging-labels/labels/kraft"
    },
    {
        name: "Premium White Labels",
        link: "/packaging-labels/labels/premium-white"
    },
    {
        name: "Clear Labels",
        link: "/packaging-labels/labels/clear"
    },
    {
        name: "Waterproof Labels",
        link: "/packaging-labels/labels/waterproof"
    },
    {
        name: "Gift Paper Bags",
        link: "/packaging-labels/paper-bags/gift"
    },
    {
        name: "Takeout Paper Bags",
        link: "/packaging-labels/paper-bags/takeout"
    },
    {
        name: "Pre-printed Paper Bags",
        link: "/packaging-labels/paper-bags/pre-printed"
    },
    {
        name: "Gift Boxes",
        link: "/packaging-labels/gift-boxes"
    },
    // Personalized Gifts
    {
        name: "Round Neck T-shirts",
        link: "/personalized-gifts/tshirts/round-neck"
    },
    {
        name: "Polo T-shirts",
        link: "/personalized-gifts/tshirts/polo"
    },
    {
        name: "V-Neck T-shirts",
        link: "/personalized-gifts/tshirts/v-neck"
    },
    {
        name: "Photo with LED Frames",
        link: "/personalized-gifts/photo-frames/led"
    },
    {
        name: "Photo with Classic Frames",
        link: "/personalized-gifts/photo-frames/classic"
    },
    {
        name: "Photo with Wall Frames",
        link: "/personalized-gifts/photo-frames/wall"
    },
    {
        name: "Canvas Photo with Frames",
        link: "/personalized-gifts/photo-frames/canvas"
    },
    {
        name: "Matte Photo with Frames",
        link: "/personalized-gifts/photo-frames/matte"
    },
    {
        name: "Custom Acrylic Photo Frames",
        link: "/personalized-gifts/photo-frames/acrylic"
    },
    {
        name: "Frameless Photo Frames",
        link: "/personalized-gifts/photo-frames/frameless"
    },
    {
        name: "A5 Landscape Calendar",
        link: "/personalized-gifts/calendars/a5-landscape"
    },
    {
        name: "Big Square Desktop Calendar",
        link: "/personalized-gifts/calendars/big-square"
    },
    {
        name: "Wall Calendar",
        link: "/personalized-gifts/calendars/wall"
    },
    {
        name: "Long Calendar",
        link: "/personalized-gifts/calendars/long"
    },
    {
        name: "Calendar With Photo",
        link: "/personalized-gifts/calendars/with-photo"
    },
    {
        name: "Frame Calendar",
        link: "/personalized-gifts/calendars/frame"
    },
    // T-shirt Printing
    {
        name: "Custom Printed Zipper Hoodie",
        link: "/tshirt-printing/hoodies/zipper"
    },
    {
        name: "Custom Printed Pullover Hoodies",
        link: "/tshirt-printing/hoodies/pullover"
    },
    {
        name: "Embroidered Zip Hoodies",
        link: "/tshirt-printing/hoodies/embroidered-zipper"
    },
    {
        name: "Embroidered Pullover Hoodies",
        link: "/tshirt-printing/hoodies/embroidered-pullover"
    },
    {
        name: "Sweatshirts",
        link: "/tshirt-printing/sweatshirts"
    },
    {
        name: "Printed Plain Caps",
        link: "/tshirt-printing/caps/printed-plain"
    },
    {
        name: "Line Stitching Caps",
        link: "/tshirt-printing/caps/line-stitching"
    },
    {
        name: "Piping Caps",
        link: "/tshirt-printing/caps/piping"
    },
    {
        name: "Tipping Caps",
        link: "/tshirt-printing/caps/tipping"
    },
    {
        name: "Jackets",
        link: "/tshirt-printing/jackets"
    },
    // Corporate Gifting
    {
        name: "Corporate Executive Kit",
        link: "/corporate-gifting/welcome-kits/corporate-executive-kit"
    },
    {
        name: "Creative Professional Kit",
        link: "/corporate-gifting/welcome-kits/creative-professional-kit"
    },
    {
        name: "Eco-Friendly Kit",
        link: "/corporate-gifting/welcome-kits/eco-friendly-kit"
    },
    {
        name: "Startup Essentials Kit",
        link: "/corporate-gifting/welcome-kits/startup-essentials-kit"
    },
    {
        name: "Color Splash Hamper",
        link: "color-splash-hamper"
    },
    {
        name: "Eco-Friendly Holi Hamper",
        link: "eco-friendly-holi-hamper"
    },
    {
        name: "Premium Holi Hamper",
        link: "premium-holi-hamper"
    },
    {
        name: "EcoGrip Notebook",
        link: "/corporate-gifting/duo-sets/eco-grip-notebook"
    },
    {
        name: "Elegant Journal Combo",
        link: "/corporate-gifting/duo-sets/elegant-journal-combo"
    },
    {
        name: "Elite Executive Combo",
        link: "/corporate-gifting/duo-sets/elite-executive-combo"
    },
    {
        name: "Classic Leather Combo",
        link: "/corporate-gifting/duo-sets/classic-leather-combo"
    },
    {
        name: "Matte Finish Diaries",
        link: "/corporate-gifting/diaries/matte-finish"
    },
    {
        name: "Vintage Tan Diaries",
        link: "/corporate-gifting/diaries/vintage-tan"
    },
    {
        name: "Faux Leather Diaries",
        link: "/corporate-gifting/diaries/faux-leather"
    },
    {
        name: "Custom Canvas Diaries",
        link: "/corporate-gifting/diaries/custom-canvas"
    },
    {
        name: "Wave Texture Diaries",
        link: "/corporate-gifting/diaries/wave-texture"
    },
    {
        name: "Eco Kraft Cover Diaries",
        link: "/corporate-gifting/diaries/eco-kraft"
    },
    {
        name: "Stylus Pen",
        link: "/corporate-gifting/pens/stylus"
    },
    {
        name: "Kraft Pen",
        link: "/corporate-gifting/pens/kraft"
    },
    {
        name: "Scribble Pen",
        link: "/corporate-gifting/pens/scribble"
    },
    {
        name: "Adroit Pen",
        link: "/corporate-gifting/pens/adroit"
    },
    {
        name: "Gilt Roller Ball Pen",
        link: "/corporate-gifting/pens/gilt-roller"
    },
    {
        name: "Skate Ballpoint Pen",
        link: "/corporate-gifting/pens/skate-ballpoint"
    },
    {
        name: "Bookmarks",
        link: "/corporate-gifting/bookmarks"
    },
    {
        name: "Matte Laminated Stickers",
        link: "/packaging-labels/stickers/matte-laminated"
    },
    {
        name: "Holographic Stickers",
        link: "/packaging-labels/stickers/holographic"
    },
    {
        name: "Gold Foiling Stickers",
        link: "/packaging-labels/stickers/gold-foiling"
    },
    {
        name: "Spot UV Stickers",
        link: "/packaging-labels/stickers/spot-uv"
    },
    {
        name: "Silver Foiling Stickers",
        link: "/packaging-labels/stickers/silver-foiling"
    },
    {
        name: "Dome Stickers",
        link: "/packaging-labels/stickers/dome"
    },
    {
        name: "Front Adhesive Stickers",
        link: "/packaging-labels/stickers/front-adhesive"
    },
    {
        name: "Custom Opaque Stickers",
        link: "/packaging-labels/stickers/custom-opaque"
    },
    {
        name: "Clear Stickers",
        link: "/packaging-labels/stickers/clear"
    },
    {
        name: "Button Badges",
        link: "/corporate-gifting/button-badges"
    },
    {
        name: "Slim SS Bottle",
        link: "/corporate-gifting/drinkware/slim-ss"
    },
    {
        name: "Floral SS Bottle",
        link: "/corporate-gifting/drinkware/floral-ss"
    },
    {
        name: "Vega SS Bottle",
        link: "/corporate-gifting/drinkware/vega-ss"
    },
    {
        name: "Premium Black Sipper",
        link: "/corporate-gifting/drinkware/premium-black"
    },
    {
        name: "Multicolour Steel Bottle",
        link: "/corporate-gifting/drinkware/multicolour-steel"
    },
    {
        name: "Pure Copper Water Bottle",
        link: "/corporate-gifting/drinkware/pure-copper"
    },
    {
        name: "Lancy Hot & Cold White Sipper",
        link: "/corporate-gifting/drinkware/lancy-hot-cold"
    },
    {
        name: "Glossy White Sipper",
        link: "/corporate-gifting/drinkware/glossy-white"
    },
    {
        name: "Supreme Blue Sipper",
        link: "/corporate-gifting/drinkware/supreme-blue"
    },
    {
        name: "Classic Black Sipper",
        link: "/corporate-gifting/drinkware/classic-black"
    },
    {
        name: "Mug (Standard)",
        link: "/corporate-gifting/drinkware/mug"
    },
    {
        name: "Mini Mug",
        link: "/corporate-gifting/drinkware/mini-mug"
    },
    {
        name: "Shimmer Dark Grey Mug",
        link: "/corporate-gifting/drinkware/shimmer-dark-grey"
    },
    {
        name: "Regal Black Mug",
        link: "/corporate-gifting/drinkware/regal-black"
    },
    {
        name: "Traveler Black Mug",
        link: "/corporate-gifting/drinkware/traveler-black"
    },
    {
        name: "Sleek Black Mug",
        link: "/corporate-gifting/drinkware/sleek-black"
    },
    {
        name: "Apex Carry Laptop Bag",
        link: "/corporate-gifting/bags/apex-carry"
    },
    {
        name: "SkyGlide Laptop Bag",
        link: "/corporate-gifting/bags/skyglide"
    },
    {
        name: "Prestige Pro Laptop Bag",
        link: "/corporate-gifting/bags/prestige-pro"
    },
    {
        name: "Vanguard Laptop Bag",
        link: "/corporate-gifting/bags/vanguard"
    },
    {
        name: "Nexus Essential Laptop Bag",
        link: "/corporate-gifting/bags/nexus-essential"
    },
    {
        name: "Elite Horizon Laptop Bag",
        link: "/corporate-gifting/bags/elite-horizon"
    },
    {
        name: "SlimGuard Laptop Sleeve",
        link: "/corporate-gifting/bags/slimguard"
    },
    {
        name: "Infinity Laptop Bag",
        link: "/corporate-gifting/bags/infinity"
    },
    {
        name: "Mobile Pop Socket (Customizable)",
        link: "/corporate-gifting/mobile-pop-socket"
    },
    {
        name: "Custom Printed Luggage Tag (55x85mm)",
        link: "/corporate-gifting/luggage-tag"
    },
    {
        name: "Event ID Card",
        link: "/corporate-gifting/id-cards/event"
    },
    {
        name: "PVC ID Card",
        link: "/corporate-gifting/id-cards/pvc"
    },
    {
        name: "Paper ID Card",
        link: "/corporate-gifting/id-cards/paper"
    },
    {
        name: "Standard ID Card and Lanyard Combo",
        link: "/corporate-gifting/id-cards/standard-combo"
    },
    {
        name: "Premium ID Card and Lanyard Combo",
        link: "/corporate-gifting/id-cards/premium-combo"
    },
    {
        name: "ID Card and Standard Holder Combo",
        link: "/corporate-gifting/id-cards/standard-holder"
    },
    {
        name: "ID Card and Premium Holder Combo",
        link: "/corporate-gifting/id-cards/premium-holder"
    },
    {
        name: "Thank You Card",
        link: "/corporate-gifting/thank-you-card"
    },
    {
        name: "Temperature Display Flask",
        link: "/corporate-gifting/temperature-flask"
    },
    {
        name: "Clock with Speaker (Digital Display)",
        link: "/corporate-gifting/clock-with-speaker"
    },
];

export default products;