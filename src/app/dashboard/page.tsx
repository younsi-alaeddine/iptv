"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ShoppingBag,
  Bell,
  User,
  Search,
  TrendingUp,
  DollarSign,
  Clock,
  Settings,
  Gift,
  Monitor,
  ArrowRight,
  Star,
  Tv,
  Play,
  Gamepad2,
  Smartphone,
  Headphones,
  Wifi,
  CreditCard,
  History,
  RefreshCw,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  // Données simulées pour le dashboard
  const [dashboardData, setDashboardData] = useState({
    balance: 1250.50,
    mangoRate: 3.5,
    beinRate: 3.5,
    totalRevenue: 0,
    totalSales: 0,
    lastTransactions: []
  });

  const productCategories = [
    {
      id: 1,
      name: "MANGO SHARING",
      icon: "🥭",
      products: 9,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800"
    },
    {
      id: 2,
      name: "IPTV ACTIVE CODE",
      icon: "📺",
      products: 27,
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-800"
    },
    {
      id: 3,
      name: "XTREAM & M3U",
      icon: "🖥️",
      products: 16,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-800"
    },
    {
      id: 4,
      name: "TEST-IPTV",
      icon: "🧪",
      products: 18,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-800"
    },
    {
      id: 5,
      name: "BEIN SPORT",
      icon: "⚽",
      products: 4,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-800"
    },
    {
      id: 6,
      name: "NETFLIX",
      icon: "🎬",
      products: 5,
      color: "from-red-500 to-red-700",
      bgColor: "bg-red-50",
      textColor: "text-red-800"
    },
    {
      id: 7,
      name: "IBOPLAYER",
      icon: "📱",
      products: 4,
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-800"
    },
    {
      id: 8,
      name: "GIFT CARD",
      icon: "🎁",
      products: 3,
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-800"
    }
  ];

  const menuItems = [
    { id: "dashboard", icon: TrendingUp, label: "Dashboard", active: true, href: "/dashboard" },
    { id: "produit", icon: ShoppingBag, label: "Produit", active: true, href: "/dashboard/products" },
    { id: "bein", icon: Tv, label: "Bein Sports Officiel", active: false, href: "/bein-sports" },
    { id: "mango", icon: "🥭", label: "Mango", active: false, href: "/mango" },
    { id: "commandes", icon: Clock, label: "Mes commandes", active: false, href: "/dashboard/orders" },
    { id: "transactions", icon: DollarSign, label: "Transactions", active: false, href: "/dashboard/transactions" },
    { id: "historique", icon: History, label: "Historique", active: false, href: "/historique" },
    { id: "reset", icon: RefreshCw, label: "Reset Code", active: false, href: "/reset" },
    { id: "charge", icon: Zap, label: "Charge-system", active: false, href: "/charge" },
    { id: "software", icon: Monitor, label: "Software", active: false, href: "/software" },
    { id: "cards", icon: Gift, label: "Cards Recharge", active: false, href: "/cards" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-80 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 p-6 text-white"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">ES</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">ELECTRO SATELLITE</h1>
            <p className="text-sm opacity-80">Tunisie</p>
          </div>
        </div>

        {/* Balance Card */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 mb-8"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Solde</h3>
            <div className="text-3xl font-bold mb-3">{dashboardData.balance.toFixed(3)} TND</div>
            <div className="space-y-1 text-sm">
              <div>1 Mango = {dashboardData.mangoRate} TND</div>
              <div>1 Bein = {dashboardData.beinRate} TND</div>
            </div>
            <div className="flex justify-center mt-3">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link key={item.id} href={item.href}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg"
                    : "hover:bg-purple-700/50"
                }`}
              >
                {typeof item.icon === "string" ? (
                  <span className="text-2xl">{item.icon}</span>
                ) : (
                  <item.icon className="w-5 h-5" />
                )}
                <span className="font-medium">{item.label}</span>
                {item.active && <ArrowRight className="w-4 h-4 ml-auto" />}
              </motion.button>
            </Link>
          ))}
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Categories Des Produits</h2>
            <div className="mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Recherche"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
            </div>
          </div>

          {/* Notifications and User */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Button variant="outline" size="sm" className="relative">
                <Bell className="w-4 h-4 mr-2" />
                Commande
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
            <div className="relative">
              <Button variant="outline" size="sm" className="relative">
                <Bell className="w-4 h-4 mr-2" />
                Notification
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <Link key={category.id} href="/dashboard/products">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="h-48 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-4xl mb-4 shadow-lg`}
                    >
                      {category.icon}
                    </motion.div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {category.products} Produits
                    </div>
                    <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      {category.name}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Revenus Totaux</p>
                    <p className="text-2xl font-bold">{dashboardData.totalRevenue.toFixed(2)} TND</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">Ventes</p>
                    <p className="text-2xl font-bold">{dashboardData.totalSales}</p>
                  </div>
                  <ShoppingBag className="w-8 h-8 text-green-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">Produits</p>
                    <p className="text-2xl font-bold">{productCategories.reduce((sum, cat) => sum + cat.products, 0)}</p>
                  </div>
                  <Tv className="w-8 h-8 text-purple-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100">Commissions</p>
                    <p className="text-2xl font-bold">{(dashboardData.totalRevenue * 0.15).toFixed(2)} TND</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-orange-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>© 2025 Electro Satellite Tunisie - Développé avec ❤️ par Younsi Alaeddine</p>
        </div>
      </div>
    </div>
  );
}
