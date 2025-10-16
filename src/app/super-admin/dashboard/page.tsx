"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  ShoppingBag, 
  DollarSign, 
  TrendingUp, 
  Activity,
  Globe,
  Shield,
  Zap,
  BarChart3,
  PieChart,
  Target,
  Award
} from "lucide-react";

// ===== DASHBOARD SUPER ADMIN RÉVOLUTIONNAIRE =====
export default function SuperAdminDashboard() {
  const [analytics, setAnalytics] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
    activeTenants: 0,
    digitalProducts: 0,
    physicalProducts: 0,
    totalCommissions: 0,
    systemHealth: 100
  });

  const [recentActivity, setRecentActivity] = useState<any[]>([]);
  const [topTenants, setTopTenants] = useState<any[]>([]);
  const [systemMetrics] = useState({
    uptime: "99.99%",
    responseTime: "45ms",
    errorRate: "0.01%",
    throughput: "1.2M req/min"
  });

  useEffect(() => {
    // Simulation des données - À remplacer par des appels API réels
    setAnalytics({
      totalUsers: 15420,
      totalOrders: 8934,
      totalRevenue: 2847500,
      activeTenants: 127,
      digitalProducts: 3420,
      physicalProducts: 1890,
      totalCommissions: 456780,
      systemHealth: 98.5
    });

    setRecentActivity([
      { id: 1, type: "user_registration", message: "Nouveau revendeur inscrit", time: "2 min" },
      { id: 2, type: "order_created", message: "Commande de 250 TND créée", time: "5 min" },
      { id: 3, type: "commission_paid", message: "Commission de 45 TND payée", time: "8 min" },
      { id: 4, type: "product_added", message: "Nouveau produit digital ajouté", time: "12 min" }
    ]);

    setTopTenants([
      { name: "Electro Satellite Tunisie", revenue: 125000, users: 450, growth: 15.2 },
      { name: "IPTV Premium", revenue: 98000, users: 320, growth: 12.8 },
      { name: "Streaming Solutions", revenue: 87000, users: 280, growth: 8.5 }
    ]);
  }, []);

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
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Super Admin Dashboard
              </h1>
              <p className="text-gray-600 text-lg">Contrôle Total du Système</p>
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
          <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Utilisateurs Totaux</p>
                  <p className="text-3xl font-bold">{analytics.totalUsers.toLocaleString()}</p>
                  <p className="text-blue-200 text-sm">+12% ce mois</p>
                </div>
                <Users className="w-12 h-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Commandes Totales</p>
                  <p className="text-3xl font-bold">{analytics.totalOrders.toLocaleString()}</p>
                  <p className="text-green-200 text-sm">+8% ce mois</p>
                </div>
                <ShoppingBag className="w-12 h-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Revenus Totaux</p>
                  <p className="text-3xl font-bold">{(analytics.totalRevenue / 1000).toFixed(0)}K TND</p>
                  <p className="text-purple-200 text-sm">+25% ce mois</p>
                </div>
                <DollarSign className="w-12 h-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Tenants Actifs</p>
                  <p className="text-3xl font-bold">{analytics.activeTenants}</p>
                  <p className="text-orange-200 text-sm">+3 nouveaux</p>
                </div>
                <Globe className="w-12 h-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Métriques Secondaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Produits Digitaux</p>
                  <p className="text-2xl font-bold text-blue-600">{analytics.digitalProducts}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Produits Physiques</p>
                  <p className="text-2xl font-bold text-green-600">{analytics.physicalProducts}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Commissions Totales</p>
                  <p className="text-2xl font-bold text-purple-600">{(analytics.totalCommissions / 1000).toFixed(0)}K TND</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Santé Système</p>
                  <p className="text-2xl font-bold text-green-600">{analytics.systemHealth}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Graphiques et Analyses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Activité Récente */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  Activité Récente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Tenants */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  Top Tenants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topTenants.map((tenant, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{tenant.name}</p>
                          <p className="text-sm text-gray-500">{tenant.users} utilisateurs</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">+{tenant.growth}%</p>
                        <p className="text-sm text-gray-500">{(tenant.revenue / 1000).toFixed(0)}K TND</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Métriques Système */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Card className="shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg">Uptime</h3>
              <p className="text-3xl font-bold text-green-600">{systemMetrics.uptime}</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg">Temps de Réponse</h3>
              <p className="text-3xl font-bold text-blue-600">{systemMetrics.responseTime}</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg">Taux d'Erreur</h3>
              <p className="text-3xl font-bold text-red-600">{systemMetrics.errorRate}</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <PieChart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg">Débit</h3>
              <p className="text-3xl font-bold text-purple-600">{systemMetrics.throughput}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Actions Rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold">
            Gérer les Tenants
          </Button>
          <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
            Analytics Avancées
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold">
            Configuration Système
          </Button>
          <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-xl font-semibold">
            Monitoring Sécurité
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
