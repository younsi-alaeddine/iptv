"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  { src: "/banners/banner-1.svg", title: "Offres IPTV Premium", cta: "Acheter maintenant" },
  { src: "/banners/banner-2.svg", title: "Box Android Haute Performance", cta: "Découvrir" },
  { src: "/banners/banner-3.svg", title: "Sharing & Apollo", cta: "Voir les offres" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <section className="relative h-[50dvh] md:h-[70dvh] overflow-hidden rounded-2xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.src}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={current.src}
            alt={current.title}
            fill
            priority
            unoptimized
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Gradient overlay avec animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Indicateurs de slides */}
      <div className="absolute top-6 right-6 z-20 flex gap-2">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-accent scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 h-full flex items-end pb-12 px-6 md:px-12">
        <motion.div 
          className="max-w-2xl text-white space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            key={current.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          >
            {current.title}
          </motion.h1>
          
          <motion.p
            key={`${current.title}-desc`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-lg"
          >
            Découvrez nos offres premium avec une qualité exceptionnelle et un support 24/7
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-accent to-yellow-500 text-primary hover:from-yellow-400 hover:to-accent transition-all duration-300 font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl"
            >
              {current.cta}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-8 py-6 text-lg"
            >
              En savoir plus
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Effet de particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            initial={{ 
              x: (i * 200) % 1200, 
              y: (i * 150) % 800,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </section>
  );
}


