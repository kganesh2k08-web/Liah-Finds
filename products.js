/**
 * Liah Finds — Central Product & Config File
 *
 * HOW TO UPDATE YOUR AFFILIATE LINKS:
 * 1. Replace `amazonTag` below with your Amazon Associates Store ID (e.g. "liahfinds-21").
 * 2. For any product, paste your exact `amzn.to` short link into `affiliateUrl`
 *    (or leave the amazon.in URL and your `amazonTag` will be appended automatically).
 * 3. Add your social profile URLs under `socials` once created.
 */

const SITE_CONFIG = {
  brandName: "Liah Finds",
  handle: "@liahfinds",
  tagline: "Curated Fitness, Tech Gadgets, Outfits & Trending Finds — Updated Daily",
  amazonTag: "liahfinds-21",
  disclosureShort:
    "As an Amazon Associate, Liah Finds earns from qualifying purchases. #ad",
  socials: {
    instagram: "https://www.instagram.com/liahfinds",
    facebook: "https://www.facebook.com/share/1GBkuBAsdf/",
    pinterest: "https://pin.it/2qhfxU4SD",
    youtube: "https://youtube.com/@liahfinds"
  }
};

const PRODUCTS = [
  {
    code: "001",
    title: "Boldfit Adjustable Hand Grip Strengthener (10–60 kg)",
    category: "Fitness",
    badge: "Bestseller",
    hook: "Ergonomic non-slip grip with adjustable resistance for forearm & wrist strength.",
    keywords: "boldfit hand grip forearm workout fitness gym strength",
    affiliateUrl: "https://www.amazon.in/dp/B09PDZD95V/",
    imageUrl: "images/001.jpg"
  },
  {
    code: "002",
    title: "AGARO Galaxy Deep-Tissue Percussion Massage Gun",
    category: "Fitness",
    badge: "Recovery",
    hook: "6-speed cordless massager with 4 interchangeable heads for post-workout relief.",
    keywords: "agaro galaxy massage gun recovery sore muscles fitness gym",
    affiliateUrl: "https://www.amazon.in/s?k=AGARO+Galaxy+Gun+Massager",
    imageUrl: "images/002.svg"
  },
  {
    code: "003",
    title: "Boldfit Heavy Resistance Bands Set (Home Gym)",
    category: "Fitness",
    badge: "Home Workout",
    hook: "Durable resistance bands for pull-ups, stretching, and full-body home training.",
    keywords: "boldfit resistance bands home workout gym travel fitness",
    affiliateUrl: "https://www.amazon.in/s?k=Boldfit+resistance+band+set",
    imageUrl: "images/003.svg"
  },
  {
    code: "004",
    title: "Digitek Magnetic Phone Tripod & Vlog Stand",
    category: "Tech Gadgets",
    badge: "Creator Pick",
    hook: "Compact extendable tripod mount for gym clips, Reels, and desk setups.",
    keywords: "digitek magnetic phone tripod magsafe vlog stand tech",
    affiliateUrl: "https://www.amazon.in/s?k=Digitek+magnetic+phone+tripod+stand",
    imageUrl: "images/004.svg"
  },
  {
    code: "005",
    title: "Quntis USB Monitor LED Light Bar (Anti-Glare)",
    category: "Tech Gadgets",
    badge: "Desk Setup",
    hook: "Touch-controlled desk light bar that illuminates your keyboard without screen glare.",
    keywords: "quntis monitor light bar desk setup lamp tech gadget",
    affiliateUrl: "https://www.amazon.in/s?k=Quntis+monitor+light+bar",
    imageUrl: "images/005.svg"
  },
  {
    code: "006",
    title: "Portronics Freedom Trio 3-in-1 Wireless Charger",
    category: "Tech Gadgets",
    badge: "Cable-Free",
    hook: "15W fast foldable wireless charging station for phone, watch, and earbuds.",
    keywords: "portronics freedom trio 3 in 1 foldable wireless charger tech",
    affiliateUrl: "https://www.amazon.in/dp/B0CV3XTPD3/",
    imageUrl: "images/006.svg"
  },
  {
    code: "007",
    title: "Lymio Men's Relaxed-Fit Cargo Pants / Joggers",
    category: "Outfits",
    badge: "Streetwear",
    hook: "Everyday utility cargos with deep pockets—easy to style for gym or casual outings.",
    keywords: "lymio cargo joggers streetwear outfit men fashion",
    affiliateUrl: "https://www.amazon.in/s?k=Lymio+cargo+joggers",
    imageUrl: "images/007.svg"
  },
  {
    code: "008",
    title: "Lymio Oversized Drop-Shoulder Cotton T-Shirt",
    category: "Outfits",
    badge: "Essential",
    hook: "Clean boxy streetwear fit that pairs effortlessly with cargos or denim.",
    keywords: "lymio oversized t-shirt drop shoulder outfit",
    affiliateUrl: "https://www.amazon.in/s?k=Lymio+oversized+t-shirt",
    imageUrl: "images/008.svg"
  },
  {
    code: "009",
    title: "Vincent Chase Polarized Retro Sunglasses (UV400)",
    category: "Outfits",
    badge: "Accessory",
    hook: "Lightweight polarized frames by Lenskart's Vincent Chase—instant outfit upgrade.",
    keywords: "vincent chase polarized sunglasses outfit accessory fashion",
    affiliateUrl: "https://www.amazon.in/s?k=Vincent+Chase+polarized+sunglasses",
    imageUrl: "images/009.svg"
  },
  {
    code: "010",
    title: "Lifelong Portable USB-C Smoothie & Shake Blender",
    category: "Trending",
    badge: "Viral Find",
    hook: "Blend protein shakes or iced coffee in 30 seconds—rechargeable via USB.",
    keywords: "lifelong portable usb blender protein shake trending",
    affiliateUrl: "https://www.amazon.in/s?k=Lifelong+portable+USB+blender",
    imageUrl: "images/010.svg"
  },
  {
    code: "011",
    title: "16-Color Sunset Projection Ambient Room Lamp",
    category: "Trending",
    badge: "Aesthetic",
    hook: "Turns any plain bedroom wall into golden-hour lighting for Reels and photos.",
    keywords: "sunset lamp projection aesthetic room decor trending",
    affiliateUrl: "https://www.amazon.in/s?k=sunset+projection+lamp+16+colors",
    imageUrl: "images/011.svg"
  },
  {
    code: "012",
    title: "Smart Insulated LED Temperature Water Bottle (500ml)",
    category: "Trending",
    badge: "Daily Carry",
    hook: "Touch the cap to see water temperature—keeps drinks cold 24h or hot 12h.",
    keywords: "smart led temperature water bottle flask gym desk",
    affiliateUrl: "https://www.amazon.in/s?k=smart+led+temperature+water+bottle+500ml",
    imageUrl: "images/012.svg"
  }
];
