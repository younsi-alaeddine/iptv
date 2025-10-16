"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign,
  Target,
  Award,
  BarChart3,
  PieChart,
  Activity,
  // Zap,
  Star,
  Crown,
  Trophy,
  Gift,
  Sparkles
} from "lucide-react";

// ===== DASHBOARD REVENDEUR RÉVOLUTIONNAIRE =====
export default function RevendeurDashboard() {
  const [userStats, setUserStats] = useState({
    tier: "GOLD",
    level: 3,
    totalSales: 0,
    monthlySales: 0,
    totalCommissions: 0,
    pendingCommissions: 0,
    clients: 0,
    newClients: 0,
    conversionRate: 0,
    averageOrderValue: 0
  });

  const [recentOrders, setRecentOrders] = useState<any[]>([]);
  const [topProducts, setTopProducts] = useState<any[]>([]);
  const [commissionHistory, setCommissionHistory] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<any[]>([]);

  useEffect(() => {
    // Simulation des données - À remplacer par des appels API réels
    setUserStats({
      tier: "GOLD",
      level: 3,
      totalSales: 45680,
      monthlySales: 12340,
      totalCommissions: 5480,
      pendingCommissions: 890,
      clients: 127,
      newClients: 12,
      conversionRate: 15.8,
      averageOrderValue: 185
    });

    setRecentOrders([
      { id: 1, client: "Ahmed Ben Ali", product: "Abonnement IPTV Premium", amount: 250, status: "completed", commission: 37.5 },
      { id: 2, client: "Fatma Khelil", product: "Box Android 4K", amount: 180, status: "pending", commission: 27 },
      { id: 3, client: "Mohamed Trabelsi", product: "Netflix 4 Écrans", amount: 120, status: "completed", commission: 18 },
      { id: 4, client: "Salma Ben Ammar", product: "Shahid VIP", amount: 95, status: "processing", commission: 14.25 }
    ]);

    setTopProducts([
      { name: "Abonnement IPTV Premium", sales: 45, revenue: 11250, commission: 1687.5 },
      { name: "Box Android 4K", sales: 32, revenue: 5760, commission: 864 },
      { name: "Netflix 4 Écrans", sales: 28, revenue: 3360, commission: 504 },
      { name: "Shahid VIP", sales: 22, revenue: 2090, commission: 313.5 }
    ]);

    setCommissionHistory([
      { month: "Jan", amount: 1200, level: 1 },
      { month: "Fév", amount: 1450, level: 1 },
      { month: "Mar", amount: 1680, level: 1 },
      { month: "Avr", amount: 1920, level: 1 },
      { month: "Mai", amount: 2100, level: 1 },
      { month: "Juin", amount: 2350, level: 1 }
    ]);

    setAchievements([
      { id: 1, title: "Premier Vendeur", description: "Votre première vente", icon: "🎯", unlocked: true },
      { id: 2, title: "Vendeur Bronze", description: "10 ventes réalisées", icon: "🥉", unlocked: true },
      { id: 3, title: "Vendeur Argent", description: "50 ventes réalisées", icon: "🥈", unlocked: true },
      { id: 4, title: "Vendeur Or", description: "100 ventes réalisées", icon: "🥇", unlocked: true },
      { id: 5, title: "Expert Digital", description: "50 produits digitaux vendus", icon: "💎", unlocked: false },
      { id: 6, title: "Maître des Commissions", description: "5000 TND de commissions", icon: "👑", unlocked: false }
    ]);
  }, []);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "BRONZE": return "from-amber-500 to-amber-600";
      case "SILVER": return "from-gray-400 to-gray-500";
      case "GOLD": return "from-yellow-500 to-yellow-600";
      case "PLATINUM": return "from-blue-500 to-blue-600";
      case "DIAMOND": return "from-purple-500 to-purple-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case "BRONZE": return "🥉";
      case "SILVER": return "🥈";
      case "GOLD": return "🥇";
      case "PLATINUM": return "💎";
      case "DIAMOND": return "👑";
      default: return "⭐";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Révolutionnaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <div className={`w-16 h-16 bg-gradient-to-r ${getTierColor(userStats.tier)} rounded-2xl flex items-center justify-center text-white text-2xl`}>
              {getTierIcon(userStats.tier)}
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dashboard Revendeur
              </h1>
              <p className="text-gray-600 text-lg">Niveau {userStats.tier} - Niveau {userStats.level}</p>
            </div>
          </div>
        </motion.div>

        {/* Métriques Principales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Card className="shadow-xl border-0 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Ventes Totales</p>
                  <p className="text-3xl font-bold">{userStats.totalSales.toLocaleString()} TND</p>
                  <p className="text-green-200 text-sm">+18% ce mois</p>
                </div>
                <TrendingUp className="w-12 h-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Commissions</p>
                  <p className="text-3xl font-bold">{userStats.totalCommissions.toLocaleString()} TND</p>
                  <p className="text-blue-200 text-sm">{userStats.pendingCommissions} TND en attente</p>
                </div>
                <DollarSign className="w-12 h-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Clients</p>
                  <p className="text-3xl font-bold">{userStats.clients}</p>
                  <p className="text-purple-200 text-sm">+{userStats.newClients} nouveaux</p>
                </div>
                <Users className="w-12 h-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Taux de Conversion</p>
                  <p className="text-3xl font-bold">{userStats.conversionRate}%</p>
                  <p className="text-orange-200 text-sm">Panier moyen: {userStats.averageOrderValue} TND</p>
                </div>
                <Target className="w-12 h-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Onglets Principaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg">
              <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Vue d'ensemble
              </TabsTrigger>
              <TabsTrigger value="sales" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Ventes
              </TabsTrigger>
              <TabsTrigger value="commissions" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Commissions
              </TabsTrigger>
              <TabsTrigger value="achievements" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Réalisations
              </TabsTrigger>
            </TabsList>

            {/* Vue d'ensemble */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Commandes Récentes */}
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-blue-600" />
                      Commandes Récentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order, index) => (
                        <motion.div
                          key={order.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${
                              order.status === 'completed' ? 'bg-green-500' :
                              order.status === 'pending' ? 'bg-yellow-500' : 'bg-blue-500'
                            }`}></div>
                            <div>
                              <p className="font-medium">{order.client}</p>
                              <p className="text-sm text-gray-500">{order.product}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">{order.amount} TND</p>
                            <p className="text-sm text-purple-600">+{order.commission} TND</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Top Produits */}
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-600" />
                      Top Produits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topProducts.map((product, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-sm text-gray-500">{product.sales} ventes</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">{product.revenue} TND</p>
                            <p className="text-sm text-purple-600">+{product.commission} TND</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Ventes */}
            <TabsContent value="sales" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="shadow-xl border-0">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-lg">Ventes ce Mois</h3>
                    <p className="text-3xl font-bold text-green-600">{userStats.monthlySales.toLocaleString()} TND</p>
                    <p className="text-sm text-gray-500">+12% vs mois dernier</p>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg">Objectif Mensuel</h3>
                    <p className="text-3xl font-bold text-blue-600">85%</p>
                    <p className="text-sm text-gray-500">15,000 TND / 20,000 TND</p>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <PieChart className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg">Panier Moyen</h3>
                    <p className="text-3xl font-bold text-purple-600">{userStats.averageOrderValue} TND</p>
                    <p className="text-sm text-gray-500">+5% vs mois dernier</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Commissions */}
            <TabsContent value="commissions" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Historique des Commissions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {commissionHistory.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <DollarSign className="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">{item.month} 2024</p>
                              <p className="text-sm text-gray-500">Niveau {item.level}</p>
                            </div>
                          </div>
                          <p className="font-bold text-green-600">{item.amount} TND</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      Structure des Commissions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Crown className="w-6 h-6 text-purple-600" />
                          <div>
                            <p className="font-medium">Niveau 1 (Direct)</p>
                            <p className="text-sm text-gray-500">Vos ventes directes</p>
                          </div>
                        </div>
                        <Badge className="bg-purple-600 text-white">12%</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Users className="w-6 h-6 text-blue-600" />
                          <div>
                            <p className="font-medium">Niveau 2 (Sous-revendeurs)</p>
                            <p className="text-sm text-gray-500">Ventes de vos sous-revendeurs</p>
                          </div>
                        </div>
                        <Badge className="bg-blue-600 text-white">8%</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Star className="w-6 h-6 text-green-600" />
                          <div>
                            <p className="font-medium">Niveau 3 (Clients)</p>
                            <p className="text-sm text-gray-500">Ventes de vos clients</p>
                          </div>
                        </div>
                        <Badge className="bg-green-600 text-white">3%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Réalisations */}
            <TabsContent value="achievements" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className={`shadow-xl border-0 ${
                      achievement.unlocked 
                        ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200' 
                        : 'bg-gray-50'
                    }`}>
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl ${
                          achievement.unlocked 
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
                            : 'bg-gray-200'
                        }`}>
                          {achievement.unlocked ? achievement.icon : '🔒'}
                        </div>
                        <h3 className={`font-bold text-lg ${
                          achievement.unlocked ? 'text-yellow-800' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm ${
                          achievement.unlocked ? 'text-yellow-600' : 'text-gray-400'
                        }`}>
                          {achievement.description}
                        </p>
                        {achievement.unlocked && (
                          <Badge className="mt-2 bg-yellow-500 text-white">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Débloqué
                          </Badge>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Actions Rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Nouvelle Vente
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold">
            <Users className="w-4 h-4 mr-2" />
            Gérer Clients
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold">
            <BarChart3 className="w-4 h-4 mr-2" />
            Analytics
          </Button>
          <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-xl font-semibold">
            <Gift className="w-4 h-4 mr-2" />
            Promotions
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
