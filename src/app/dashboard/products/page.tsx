"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Search,
  Filter,
  ShoppingCart,
  Star,
  Eye,
  Heart,
  Zap,
  Shield,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tous les produits", count: 86 },
    { id: "mango", name: "Mango Sharing", count: 9 },
    { id: "iptv", name: "IPTV Active Code", count: 27 },
    { id: "xtream", name: "Xtream & M3U", count: 16 },
    { id: "test", name: "Test-IPTV", count: 18 },
    { id: "bein", name: "Bein Sport", count: 4 },
    { id: "netflix", name: "Netflix", count: 5 },
    { id: "ibo", name: "IBOPlayer", count: 4 },
    { id: "gift", name: "Gift Card", count: 3 },
  ];

  const products = [
    {
      id: 1,
      name: "Abonnement IPTV Premium 12 Mois",
      category: "iptv",
      price: 29,
      originalPrice: 39,
      discount: 25,
      rating: 4.8,
      reviews: 124,
      duration: "12 mois",
      features: ["10,000+ chaînes", "HD/4K", "Support 24/7"],
      image: "📺",
      color: "from-red-400 to-red-600",
      popular: true,
      new: false
    },
    {
      id: 2,
      name: "Netflix Premium 4 Écrans",
      category: "netflix",
      price: 95,
      originalPrice: 115,
      discount: 17,
      rating: 4.9,
      reviews: 89,
      duration: "6 mois",
      features: ["4 écrans simultanés", "4K Ultra HD", "Téléchargements"],
      image: "🎬",
      color: "from-red-500 to-red-700",
      popular: true,
      new: false
    },
    {
      id: 3,
      name: "BeIN Sports Premium",
      category: "bein",
      price: 45,
      originalPrice: 55,
      discount: 18,
      rating: 4.7,
      reviews: 67,
      duration: "3 mois",
      features: ["Tous les matchs", "Qualité HD", "Multi-devices"],
      image: "⚽",
      color: "from-green-400 to-green-600",
      popular: false,
      new: true
    },
    {
      id: 4,
      name: "Xtream Codes 6 Mois",
      category: "xtream",
      price: 19,
      originalPrice: 25,
      discount: 24,
      rating: 4.6,
      reviews: 156,
      duration: "6 mois",
      features: ["12,000+ chaînes", "VOD inclus", "Multi-connections"],
      image: "🖥️",
      color: "from-blue-400 to-blue-600",
      popular: true,
      new: false
    },
    {
      id: 5,
      name: "Mango Sharing VIP",
      category: "mango",
      price: 35,
      originalPrice: 45,
      discount: 22,
      rating: 4.8,
      reviews: 203,
      duration: "12 mois",
      features: ["Contenu exclusif", "Qualité premium", "Support prioritaire"],
      image: "🥭",
      color: "from-yellow-400 to-orange-500",
      popular: true,
      new: false
    },
    {
      id: 6,
      name: "IBOPlayer Pro",
      category: "ibo",
      price: 28,
      originalPrice: 35,
      discount: 20,
      rating: 4.5,
      reviews: 78,
      duration: "6 mois",
      features: ["Interface moderne", "Stable", "Multi-plateforme"],
      image: "📱",
      color: "from-indigo-400 to-indigo-600",
      popular: false,
      new: true
    },
    {
      id: 7,
      name: "Test IPTV 24h",
      category: "test",
      price: 2,
      originalPrice: 5,
      discount: 60,
      rating: 4.4,
      reviews: 312,
      duration: "24 heures",
      features: ["Test gratuit", "Toutes chaînes", "Support"],
      image: "🧪",
      color: "from-purple-400 to-purple-600",
      popular: true,
      new: false
    },
    {
      id: 8,
      name: "Gift Card 50 TND",
      category: "gift",
      price: 50,
      originalPrice: 50,
      discount: 0,
      rating: 4.9,
      reviews: 45,
      duration: "Illimité",
      features: ["Cadeau parfait", "Flexible", "Sécurisé"],
      image: "🎁",
      color: "from-pink-400 to-pink-600",
      popular: false,
      new: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour au Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Produits Disponibles</h1>
                <p className="text-gray-600">Découvrez notre sélection premium</p>
              </div>
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-80"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="relative"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center relative`}>
                    <span className="text-6xl">{product.image}</span>
                    {product.popular && (
                      <Badge className="absolute top-2 left-2 bg-red-500">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Populaire
                      </Badge>
                    )}
                    {product.new && (
                      <Badge className="absolute top-2 right-2 bg-green-500">
                        Nouveau
                      </Badge>
                    )}
                    {product.discount > 0 && (
                      <Badge className="absolute bottom-2 right-2 bg-orange-500">
                        -{product.discount}%
                      </Badge>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Product Info */}
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{product.duration}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {product.features.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{product.features.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">{product.price} TND</span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-gray-500 line-through">
                            {product.originalPrice} TND
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Acheter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun produit trouvé</h3>
            <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Produits Disponibles</p>
                  <p className="text-2xl font-bold">{products.length}</p>
                </div>
                <ShoppingCart className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Note Moyenne</p>
                  <p className="text-2xl font-bold">
                    {(products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1)}
                  </p>
                </div>
                <Star className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Économies Moyennes</p>
                  <p className="text-2xl font-bold">
                    {Math.round(products.reduce((sum, p) => sum + p.discount, 0) / products.length)}%
                  </p>
                </div>
                <Zap className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
