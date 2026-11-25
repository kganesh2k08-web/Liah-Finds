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
  amazonTag: "YOUR-TAG-21",
  disclosureShort:
    "As an Amazon Associate, Liah Finds earns from qualifying purchases. #ad",
  socials: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    pinterest: "https://www.pinterest.com/",
    youtube: "https://www.youtube.com/"
  }
};

const PRODUCTS = [
  {
    code: "001",
    title: "Adjustable Hand Grip Strengthener (5–60 kg)",
    category: "Fitness",
    badge: "Gym & Desk",
    hook: "Built-in rep counter + adjustable resistance for forearm strength anywhere.",
    keywords: "hand grip forearm workout fitness gym strength",
    affiliateUrl: "https://www.amazon.in/s?k=adjustable+hand+grip+strengthener+counter",
    imageUrl: ""
  },
  {
    code: "002",
    title: "Mini Deep-Tissue Fascia Massage Gun",
    category: "Fitness",
    badge: "Recovery",
    hook: "Pocket-sized muscle recovery after leg day or long desk hours.",
    keywords: "massage gun recovery sore muscles fitness gym",
    affiliateUrl: "https://www.amazon.in/s?k=mini+massage+gun+deep+tissue",
    imageUrl: ""
  },
  {
    code: "003",
    title: "5-Tube Resistance Bands Set with Door Anchor",
    category: "Fitness",
    badge: "Home Workout",
    hook: "Full-body push/pull workouts at home or while traveling—packs into one pouch.",
    keywords: "resistance bands home workout gym travel fitness",
    affiliateUrl: "https://www.amazon.in/s?k=resistance+bands+set+with+door+anchor",
    imageUrl: ""
  },
  {
    code: "004",
    title: "Magnetic Phone Tripod & Extendable Vlog Stand",
    category: "Tech Gadgets",
    badge: "Creator Pick",
    hook: "Snap-on magnetic mount + hidden tripod legs for gym clips and desk setups.",
    keywords: "magnetic phone tripod magsafe vlog stand tech",
    affiliateUrl: "https://www.amazon.in/s?k=magnetic+phone+tripod+stand",
    imageUrl: ""
  },
  {
    code: "005",
    title: "Curved Monitor LED Light Bar (No Screen Glare)",
    category: "Tech Gadgets",
    badge: "Desk Setup",
    hook: "Lights up your keyboard without reflecting on your monitor—instant clean setup.",
    keywords: "monitor light bar desk setup lamp tech gadget",
    affiliateUrl: "https://www.amazon.in/s?k=monitor+light+bar+led",
    imageUrl: ""
  },
  {
    code: "006",
    title: "3-in-1 Foldable Magnetic Wireless Charger",
    category: "Tech Gadgets",
    badge: "Cable-Free",
    hook: "Charges phone, earbuds, and watch flat on a desk or folded in a travel bag.",
    keywords: "3 in 1 foldable wireless charger tech travel",
    affiliateUrl: "https://www.amazon.in/s?k=3+in+1+foldable+wireless+charger",
    imageUrl: ""
  },
  {
    code: "007",
    title: "Relaxed-Fit Utility Cargo Joggers",
    category: "Outfits",
    badge: "Streetwear",
    hook: "Clean tapered ankle + deep utility pockets for gym-to-street daily wear.",
    keywords: "cargo joggers streetwear outfit men women fashion",
    affiliateUrl: "https://www.amazon.in/s?k=relaxed+fit+utility+cargo+joggers",
    imageUrl: ""
  },
  {
    code: "008",
    title: "Heavyweight Oversized Drop-Shoulder Tee",
    category: "Outfits",
    badge: "Essential",
    hook: "Structured boxy fit that elevates basic denim or cargo outfits effortlessly.",
    keywords: "oversized t-shirt drop shoulder heavyweight outfit",
    affiliateUrl: "https://www.amazon.in/s?k=heavyweight+oversized+drop+shoulder+tshirt",
    imageUrl: ""
  },
  {
    code: "009",
    title: "Minimalist Retro Polarized Sunglasses",
    category: "Outfits",
    badge: "Accessory",
    hook: "UV400 polarized lenses with a clean acetate frame that fits almost any face.",
    keywords: "retro polarized sunglasses outfit accessory fashion",
    affiliateUrl: "https://www.amazon.in/s?k=retro+polarized+sunglasses+uv400",
    imageUrl: ""
  },
  {
    code: "010",
    title: "Portable USB-C Mini Smoothie & Shake Blender",
    category: "Trending",
    badge: "Viral Find",
    hook: "Blend protein shakes or iced coffee in 30 seconds—rechargeable via USB-C.",
    keywords: "portable blender usb c protein shake trending",
    affiliateUrl: "https://www.amazon.in/s?k=portable+usb+blender+bottle",
    imageUrl: ""
  },
  {
    code: "011",
    title: "Sunset Projection Ambient Room Lamp",
    category: "Trending",
    badge: "Aesthetic",
    hook: "Turns any plain wall into golden-hour lighting for photos, Reels, and chill nights.",
    keywords: "sunset lamp projection aesthetic room decor trending",
    affiliateUrl: "https://www.amazon.in/s?k=sunset+projection+lamp",
    imageUrl: ""
  },
  {
    code: "012",
    title: "Smart Insulated LED Temperature Flask (500ml)",
    category: "Trending",
    badge: "Daily Carry",
    hook: "Tap the cap to check water temperature—keeps drinks cold 24h or hot 12h.",
    keywords: "smart led temperature water bottle flask gym desk",
    affiliateUrl: "https://www.amazon.in/s?k=smart+led+temperature+water+bottle",
    imageUrl: ""
  }
];
