"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const sharingProducts = [
  { 
    id: 1,
    title: "Netflix 1 Écran 115 Jours", 
    tag: "Netflix", 
    img: "/products/netflix.svg", 
    price: "81 TND",
    originalPrice: "95 TND",
    features: ["1 écran simultané", "HD disponible", "Sans engagement", "Support 24/7"],
    popular: true,
    discount: 15
  },
  { 
    id: 2,
    title: "Shahid VIP 4 Écrans 12 Mois", 
    tag: "Shahid", 
    img: "/products/shahid.svg", 
    price: "109 TND",
    originalPrice: "125 TND",
    features: ["4 écrans simultanés", "Contenu arabe exclusif", "Séries originales", "12 mois garantis"],
    popular: true,
    discount: 13
  },
  { 
    id: 3,
    title: "Apollo IPTV Premium", 
    tag: "Apollo", 
    img: "/products/apollo.svg", 
    price: "25 TND",
    features: ["8,000+ chaînes", "HD/4K disponible", "Multi-device", "Apollo Group exclusif"],
    popular: false
  },
  { 
    id: 4,
    title: "Disney+ Premium 1 An", 
    tag: "Disney+", 
    img: "/products/netflix.svg", 
    price: "125 TND",
    originalPrice: "150 TND",
    features: ["4 écrans simultanés", "4K Ultra HD", "Contenu exclusif", "1 an complet"],
    popular: false,
    discount: 17
  },
  { 
    id: 5,
    title: "Amazon Prime Video", 
    tag: "Prime", 
    img: "/products/apollo.svg", 
    price: "75 TND",
    features: ["Livraison gratuite", "Prime Video inclus", "Prime Music", "Prime Gaming"],
    popular: false
  },
  { 
    id: 6,
    title: "HBO Max Premium", 
    tag: "HBO", 
    img: "/products/shahid.svg", 
    price: "95 TND",
    features: ["Contenu HBO exclusif", "4K disponible", "Multi-device", "Nouvelles séries"],
    popular: false
  }
];

export function SharingApollo() {
  return (
    <motion.section 
      className="space-y-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center space-y-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Sharing & Apollo
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Accédez aux meilleures plateformes de streaming avec nos abonnements partagés premium
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sharingProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="p-0 relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image 
                    src={product.img} 
                    alt={product.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    unoptimized 
                  />
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className={`rounded-full text-xs font-bold px-3 py-1 ${
                      product.tag === 'Netflix' ? 'bg-red-500' :
                      product.tag === 'Shahid' ? 'bg-blue-500' :
                      product.tag === 'Apollo' ? 'bg-purple-500' :
                      product.tag === 'Disney+' ? 'bg-blue-600' :
                      product.tag === 'Prime' ? 'bg-orange-500' :
                      'bg-gray-500'
                    } text-white shadow-lg`}>
                      {product.tag}
                    </Badge>
                    
                    {product.popular && (
                      <Badge className="bg-gradient-to-r from-accent to-yellow-500 text-primary font-bold rounded-full text-xs px-3 py-1 shadow-lg">
                        POPULAIRE
                      </Badge>
                    )}
                  </div>

                  {/* Discount */}
                  {product.discount && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                      -{product.discount}%
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-accent">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 text-sm line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.slice(0, 2).map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className={`w-full rounded-full font-semibold ${
                      product.popular 
                        ? 'bg-gradient-to-r from-accent to-yellow-500 text-primary hover:from-yellow-400 hover:to-accent' 
                        : 'bg-primary hover:bg-primary/90'
                    } transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    Choisir ce plan
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Section info additionnelle */}
      <motion.div 
        className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-primary">Pourquoi choisir nos abonnements partagés ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="space-y-2">
            <div className="text-accent text-3xl font-bold">€</div>
            <div className="font-semibold">Économies garanties</div>
            <div className="text-sm text-gray-600">Jusqu&apos;à 70% d&apos;économies par rapport aux prix officiels</div>
          </div>
          <div className="space-y-2">
            <div className="text-accent text-3xl font-bold">🛡️</div>
            <div className="font-semibold">Sécurité totale</div>
            <div className="text-sm text-gray-600">Comptes authentiques avec garantie de remboursement</div>
          </div>
          <div className="space-y-2">
            <div className="text-accent text-3xl font-bold">⚡</div>
            <div className="font-semibold">Activation instantanée</div>
            <div className="text-sm text-gray-600">Votre abonnement activé en moins de 5 minutes</div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}


