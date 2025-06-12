// ✅ Company Information - Shree Caar Wind - Tyres
export const COMPANY_INFO = {
  id: "shree-caar-wings-tyres-coimbatore",
  name: "Shree Caar Wings - Tyres",
  slogan: "Your Trusted Multi-Brand Tyre Partner",
  tagline: "Premium Multi-Brand Tyre Dealer",
  brandPartner: "Multi-Brand Dealer",
  yearEstablished: 2020,
  legalName: "Shree Caar Wings - Tyres",
  businessType: "Multi-Brand Tyre Dealer",
  location: {
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India"
  },
  experience: "5+ Years",
  specialization: "Premium Tyres & Professional Services",
  brands: {
    fourWheeler: ["Goodyear", "Kelly", "Michelin", "Yokohama", "Bridgestone", "JK Tyre"],
    twoWheeler: ["Goodyear", "Kelly", "Michelin", "Yokohama", "Bridgestone", "JK Tyre"]
  }
};

// ✅ Contact Information
export const CONTACT_INFO = {
  primaryContact: {
    phone: "+91 73390 99098",
    phoneFormatted: "+91 73390 99098",
    phoneRaw: "917339099098",
    email: "support@shreecaarwindtyres.in",
    whatsapp: "+917339099098"
  },
  businessHours: {
    weekdays: "Mon - Sat: 9:00 AM - 8:00 PM",
    sunday: "Sun: 10:00 AM - 6:00 PM",
    full: "Mon - Sun: 9:00 AM - 8:00 PM"
  },
  address: {
    display: "Coimbatore, Tamil Nadu",
    full: "Coimbatore, Tamil Nadu, India",
    mapUrl: "https://maps.app.goo.gl/hoT9ardQLo229DwL6"
  }
};

// ✅ Social Media Links
export const SOCIAL_MEDIA = [
  {
    id: "instagram",
    name: "Instagram",
    icon: "lucide:instagram",
    url: "https://www.instagram.com/shreecaarwingstyres/",
    label: "Follow us on Instagram"
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: "lucide:facebook",
    url: "https://www.facebook.com/shreecaarwingstyres/", // Update with actual Facebook URL
    label: "Like us on Facebook"
  }
];

// ✅ Navigation Items 
export const NAV_ITEMS = [
  { id: "home", name: "Home", href: "/" },
  {
    id: "tyres",
    name: "Tyres",
    href: "/tyres",
    dropdown: [
      { id: "2w", name: "Two Wheeler Tyres", href: "/tyres/2w", icon: "lucide:bike", description: "Scooters, Motorcycles, Sports Bikes" },
      { id: "4w", name: "Four Wheeler Tyres", href: "/tyres/4w", icon: "lucide:car", description: "Cars, SUVs, Hatchbacks" },
      { id: "trucks", name: "Truck Tyres", href: "/tyres/trucks", icon: "lucide:truck", description: "Commercial Vehicles" },
      { id: "non-trucks", name: "Light Commercial", href: "/tyres/non-trucks", icon: "lucide:rotate-cw", description: "SCV / LCV / Pickup" }
    ]
  },
  { id: "services", name: "Services", href: "/services" },
  { id: "about", name: "About Us", href: "/about" },
  { id: "guide", name: "Guide", href: "/guide" },
  { id: "offers", name: "Offers", href: "/offers" }
];

// ✅ Tyre Categories
export const TYRE_CATEGORIES = [
  {
    id: "2w",
    name: "Two Wheeler Tyres",
    title: "Two Wheeler Tyres",
    icon: "lucide:bike",
    description: "High-performance tyres for bikes and scooters",
    vehicles: ["Scooters", "Motorcycles", "Sports Bikes"],
    href: "/tyres/2w"
  },
  {
    id: "4w",
    name: "Four Wheeler Tyres",
    title: "Four Wheeler Tyres",
    icon: "lucide:car",
    description: "Premium car and SUV tyres for all models",
    vehicles: ["Hatchbacks", "Sedans", "SUVs", "Luxury Cars"],
    href: "/tyres/4w"
  },
  {
    id: "trucks",
    name: "Truck Tyres",
    title: "Truck Tyres",
    icon: "lucide:truck",
    description: "Durable tyres for commercial vehicles",
    vehicles: ["Light Trucks", "Heavy Trucks", "Commercial Vehicles"],
    href: "/tyres/trucks"
  },
  {
    id: "non-trucks",
    name: "Light Commercial Vehicles",
    title: "Light Commercial Vehicles",
    icon: "lucide:rotate-cw",
    description: "SCV / LCV / Pickup tyres",
    vehicles: ["Small Commercial", "Light Commercial", "Pickup Trucks"],
    href: "/tyres/non-trucks"
  }
];

// ✅ Services Offered
export const SERVICES = {
  main: [
    {
      id: "3d-alignment",
      title: "3D Wheel Alignment",
      description: "Computer-aided precision alignment for optimal performance and tire wear",
      detailedDescription: "State-of-the-art computerized alignment service for optimal tire wear and handling",
      price: "₹599",
      icon: "lucide:shield",
      features: [
        "Computer-aided precision alignment",
        "Camber, caster & toe adjustment",
        "Tire wear analysis",
        "Steering wheel centering"
      ]
    },
    {
      id: "wheel-balancing",
      title: "Wheel Balancing",
      description: "Advanced balancing for smooth, vibration-free rides",
      detailedDescription: "High-precision wheel balancing for smooth, vibration-free driving experience",
      price: "₹199",
      icon: "lucide:rotate-cw",
      features: [
        "Dynamic & static balancing",
        "Vibration elimination",
        "Weight optimization",
        "Rim runout measurement"
      ]
    },
    {
      id: "tyre-replacement",
      title: "Tyre Replacement",
      description: "Professional tyre fitting service with proper mounting and balancing",
      detailedDescription: "Professional tyre fitting service with proper mounting and balancing",
      price: "₹199",
      icon: "lucide:wrench",
      features: [
        "Expert tyre mounting",
        "Proper torque application",
        "Valve stem replacement",
        "Old tyre disposal"
      ]
    }
  ],
  additional: [
    {
      id: "nitrogen-filling",
      title: "Nitrogen Filling",
      description: "Superior to regular air, maintains pressure longer",
      price: "₹50/tyre",
      icon: "lucide:gauge"
    },
    {
      id: "tyre-rotation",
      title: "Tyre Rotation",
      description: "Ensures even wear and extended tyre life",
      price: "₹299",
      icon: "lucide:rotate-cw"
    },
    {
      id: "puncture-repair",
      title: "Puncture Repair",
      description: "Professional puncture repairs and patches",
      price: "₹149",
      icon: "mdi:tools"
    },
    {
      id: "tpms-service",
      title: "TPMS Service",
      description: "Tire Pressure Monitoring System diagnostics",
      price: "₹399",
      icon: "mdi:settings"
    }
  ],
  all: [
    "3D Wheel Alignment",
    "Wheel Balancing",
    "Tyre Replacement",
    "Tire Rotation",
    "Puncture Repair",
    "Nitrogen Filling",
    "TPMS Service"
  ]
};

// ✅ Quick Links for Footer
export const QUICK_LINKS = [
  { name: "Tyres", href: "/tyres" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Offers", href: "/offers" }
];

// ✅ Business Statistics
export const BUSINESS_STATS = {
  experience: "5+",
  experienceLabel: "Years Experience",
  customers: "3k+",
  customersLabel: "Happy Customers",
  brands: "6+",
  brandsLabel: "Premium Brands",
  quality: "100%",
  qualityLabel: "Genuine Products"
};

// ✅ Customer Reviews/Testimonials
export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    image: "/images/people/rajesh_kumar.webp",
    rating: 5,
    text: "Exceptional service! They helped me choose the perfect tyres for my delivery fleet. The 3D alignment service has significantly improved our vehicles' performance.",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Regular Customer",
    image: "/images/people/priya_sharma.webp",
    rating: 5,
    text: "I've been coming to Shree Caar Wind - Tyres for the past 5 years. Their attention to detail and professional service keeps me coming back. Best tyre shop in Coimbatore!",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Aravind JC",
    role: "Car Enthusiast",
    image: "/images/people/aravind_jc.webp",
    rating: 5,
    text: "The team's knowledge about different tyre types and their recommendations are always spot-on. They take the time to understand your needs and provide the best solutions.",
    date: "January 2024"
  },
  {
    id: 4,
    name: "Gowtham Bala",
    role: "Fleet Manager",
    image: "/images/people/gowtham_bala.webp",
    rating: 5,
    text: "Managing a fleet of vehicles requires reliable service partners, and Shree Caar Wind - Tyres has proven to be just that. Their quick service and quality products are commendable.",
    date: "January 2024"
  }
];

// ✅ Brand Information
export const BRAND_INFO = [
  {
    id: "goodyear",
    name: "Goodyear",
    logo: "/images/brands/goodyear.png",
    description: "World-class performance and innovation",
    categories: ["2W", "4W", "Commercial"],
    established: 1898,
    specialty: "Performance & Safety"
  },
  {
    id: "michelin",
    name: "Michelin",
    logo: "/images/brands/michelin.png",
    description: "Leading mobility company",
    categories: ["2W", "4W", "Commercial"],
    established: 1889,
    specialty: "Longevity & Fuel Efficiency"
  },
  {
    id: "bridgestone",
    name: "Bridgestone",
    logo: "/images/brands/bridgestone.png",
    description: "Solutions for safe and sustainable mobility",
    categories: ["2W", "4W", "Commercial"],
    established: 1931,
    specialty: "Innovation & Reliability"
  },
  {
    id: "jk-tyre",
    name: "JK Tyre",
    logo: "/images/brands/jk-tyre.png",
    description: "Total Control Performance",
    categories: ["2W", "4W", "Commercial"],
    established: 1951,
    specialty: "All-Terrain Performance"
  },
  {
    id: "yokohama",
    name: "Yokohama",
    logo: "/images/brands/yokohama.png",
    description: "Japanese engineering excellence",
    categories: ["2W", "4W", "Commercial"],
    established: 1917,
    specialty: "Precision & Control"
  },
  {
    id: "kelly",
    name: "Kelly",
    logo: "/images/brands/kelly.png",
    description: "Trusted American brand since 1894",
    categories: ["4W", "Commercial"],
    established: 1894,
    specialty: "Durability & Value"
  }
];