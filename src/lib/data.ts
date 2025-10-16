export type Product = {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  tag?: string;
  category: string;
  features: string[];
  duration?: string;
  discount?: number;
  popular?: boolean;
};

export type ContactInfo = {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
};

export const contactInfo: ContactInfo = {
  phone: "+216 25 288 323",
  whatsapp: "+216 22 309 483",
  email: "contact@electro-satellite.tn",
  address: "Tunis, Tunisie",
  hours: "Lun-Ven: 9h-18h | Sam: 9h-14h"
};

export const featuredProducts: Product[] = [
  {
    id: "xtream-12",
    title: "Abonnement Xtream 12 Mois",
    price: "29 TND",
    originalPrice: "39 TND",
    image: "/products/iptv.svg",
    tag: "Plus vendu",
    category: "IPTV",
    features: ["10,000+ chaînes", "HD/4K", "VOD illimité", "EPG complet"],
    duration: "12 mois",
    discount: 25,
    popular: true
  },
  {
    id: "matador-pro",
    title: "Abonnement Matador Pro",
    price: "37 TND",
    image: "/products/iptv.svg",
    tag: "Premium",
    category: "IPTV",
    features: ["12,000+ chaînes", "4K Ultra", "Multi-device", "Support 24/7"],
    duration: "12 mois",
    popular: false
  },
  {
    id: "netflix-115",
    title: "Netflix 1 Écran 115 Jours",
    price: "81 TND",
    image: "/products/netflix.svg",
    tag: "Netflix",
    category: "Streaming",
    features: ["1 écran", "HD", "115 jours", "Sans engagement"],
    duration: "115 jours",
    popular: false
  },
  {
    id: "shahid-vip",
    title: "Shahid VIP 4 Écrans",
    price: "109 TND",
    image: "/products/shahid.svg",
    tag: "Shahid",
    category: "Streaming",
    features: ["4 écrans", "Contenu arabe", "12 mois", "Séries exclusives"],
    duration: "12 mois",
    popular: true
  },
  {
    id: "apollo-premium",
    title: "Apollo IPTV Premium",
    price: "25 TND",
    image: "/products/apollo.svg",
    tag: "Apollo",
    category: "IPTV",
    features: ["8,000+ chaînes", "HD/4K", "Multi-device", "Apollo Group"],
    duration: "1 mois",
    popular: false
  }
];

export const androidBoxes = [
  {
    id: "dreamstar-nova",
    title: "DreamStar Nova 4K",
    price: "259 TND",
    originalPrice: "279 TND",
    image: "/products/iptv.svg",
    specs: {
      ram: "2GB RAM",
      storage: "32GB",
      processor: "Amlogic S905X4",
      wifi: "WiFi 6",
      bluetooth: "Bluetooth 5.0"
    },
    features: ["4K HDR", "Android 11", "Google TV", "Netflix 4K"],
    popular: true
  },
  {
    id: "xiaomi-mibox",
    title: "Xiaomi Mi Box S 4K",
    price: "239 TND",
    image: "/products/iptv.svg",
    specs: {
      ram: "2GB RAM",
      storage: "8GB",
      processor: "Amlogic S905X",
      wifi: "WiFi 5",
      bluetooth: "Bluetooth 4.2"
    },
    features: ["4K Ultra HD", "Android TV", "Chromecast", "Voice Remote"],
    popular: false
  },
  {
    id: "qqbox-s100",
    title: "QQ Box S100 Google TV",
    price: "219 TND",
    image: "/products/iptv.svg",
    specs: {
      ram: "2GB RAM",
      storage: "16GB",
      processor: "Amlogic S905X3",
      wifi: "WiFi 5",
      bluetooth: "Bluetooth 4.2"
    },
    features: ["Google TV", "Abonnement 12 mois", "4K HDR", "Gaming Ready"],
    popular: false
  }
];


