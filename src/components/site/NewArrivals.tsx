"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const newProducts = [
  { id: 1, name: "Xtream 6 mois", price: "19 TND", image: "/products/iptv.svg", new: true },
  { id: 2, name: "Netflix 2 écrans", price: "95 TND", image: "/products/netflix.svg", new: true },
  { id: 3, name: "Shahid VIP", price: "89 TND", image: "/products/shahid.svg", new: false },
  { id: 4, name: "Apollo 6 mois", price: "18 TND", image: "/products/apollo.svg", new: true },
  { id: 5, name: "DreamStar Mini", price: "189 TND", image: "/products/iptv.svg", new: true },
  { id: 6, name: "BeIN Sports", price: "45 TND", image: "/products/iptv.svg", new: false },
  { id: 7, name: "Xtream Family", price: "49 TND", image: "/products/iptv.svg", new: true },
  { id: 8, name: "Disney+ 1 an", price: "125 TND", image: "/products/netflix.svg", new: true },
  { id: 9, name: "Prime Video", price: "75 TND", image: "/products/apollo.svg", new: false },
];

export function NewArrivals() {
  return (
    <motion.section 
      className="space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center space-y-2">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Nouveaux arrivants
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Découvrez nos dernières offres et produits fraîchement arrivés
        </motion.p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6">
        {newProducts.map((product, index) => (
          <motion.div 
            key={product.id}
            className="group cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden ring-2 ring-gray-100 hover:ring-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-gray-50">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110 p-2" 
                  unoptimized 
                />
                
                {product.new && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  >
                    <Badge className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold shadow-lg">
                      NOUVEAU
                    </Badge>
                  </motion.div>
                )}
                
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Prix au hover */}
                <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 text-center">
                    <div className="text-accent font-bold text-sm">{product.price}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="mt-3 text-center space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
            >
              <div className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
                {product.name}
              </div>
              <div className="text-xs text-gray-500">
                {product.price}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bouton Voir plus */}
      <motion.div 
        className="text-center pt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-semibold hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Voir tous les nouveaux produits
        </motion.button>
      </motion.div>
    </motion.section>
  );
}


