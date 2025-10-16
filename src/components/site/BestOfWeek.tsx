"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { featuredProducts } from "@/lib/data";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

function ProductCard({ product, index }: { product: any; index: number }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="p-0 relative">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image 
              src={product.image} 
              alt={product.title} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
              unoptimized 
            />
            {product.tag && (
              <Badge 
                className={`absolute top-3 left-3 z-10 ${
                  product.popular 
                    ? 'bg-gradient-to-r from-accent to-yellow-500 text-primary font-bold' 
                    : 'bg-primary/90 text-white'
                }`}
              >
                {product.tag}
              </Badge>
            )}
            {product.discount && (
              <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                -{product.discount}%
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
              {product.title}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-accent font-bold text-lg">{product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-400 text-sm line-through">{product.originalPrice}</span>
              )}
            </div>
            {product.duration && (
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline-block">
                {product.duration}
              </div>
            )}
          </div>
          
                 <div className="flex flex-wrap gap-1">
                   {product.features.slice(0, 2).map((feature: string, i: number) => (
                     <Badge key={i} variant="secondary" className="text-xs">
                       {feature}
                     </Badge>
                   ))}
                 </div>

                 <Button
                   onClick={addToCart}
                   size="sm"
                   className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                 >
                   <ShoppingCart className="w-4 h-4 mr-2" />
                   Ajouter au panier
                 </Button>
               </CardContent>
             </Card>
           </motion.div>
         );
       }

export function BestOfWeek() {
  const iptvProducts = featuredProducts.filter(p => p.category === "IPTV");
  const streamingProducts = featuredProducts.filter(p => p.category === "Streaming");
  const popularProducts = featuredProducts.filter(p => p.popular);

  return (
    <motion.section 
      className="space-y-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center space-y-2">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Le meilleur de la semaine
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Découvrez nos offres les plus populaires et nos nouveaux arrivages
        </motion.p>
      </div>

      <Tabs defaultValue="nouveaux" className="w-full">
        <div className="flex justify-center">
          <TabsList className="grid w-full max-w-md grid-cols-3 bg-gray-100 p-1 rounded-xl">
            <TabsTrigger 
              value="nouveaux" 
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
            >
              Nouveaux
            </TabsTrigger>
            <TabsTrigger 
              value="top"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
            >
              Plus vendus
            </TabsTrigger>
            <TabsTrigger 
              value="netflix"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
            >
              Streaming
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="nouveaux" className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {iptvProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="top" className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {popularProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="netflix" className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {streamingProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </motion.section>
  );
}


