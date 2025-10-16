"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Search,
  Filter,
  Eye,
  Download,
  RefreshCw,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Package,
  Calendar,
  DollarSign,
  User,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const orders = [
    {
      id: "ORD-001",
      customer: {
        name: "Ahmed Ben Ali",
        email: "ahmed@example.com",
        phone: "+216 25 123 456"
      },
      product: "Abonnement IPTV Premium 12 Mois",
      price: 29,
      status: "completed",
      date: "2025-01-15",
      paymentMethod: "Visa",
      commission: 4.35,
      category: "iptv",
      duration: "12 mois"
    },
    {
      id: "ORD-002",
      customer: {
        name: "Fatma Khelil",
        email: "fatma@example.com",
        phone: "+216 22 789 123"
      },
      product: "Netflix Premium 4 Écrans",
      price: 95,
      status: "pending",
      date: "2025-01-14",
      paymentMethod: "MasterCard",
      commission: 14.25,
      category: "netflix",
      duration: "6 mois"
    },
    {
      id: "ORD-003",
      customer: {
        name: "Mohamed Trabelsi",
        email: "mohamed@example.com",
        phone: "+216 98 456 789"
      },
      product: "BeIN Sports Premium",
      price: 45,
      status: "processing",
      date: "2025-01-13",
      paymentMethod: "PayPal",
      commission: 6.75,
      category: "bein",
      duration: "3 mois"
    },
    {
      id: "ORD-004",
      customer: {
        name: "Salma Ben Ammar",
        email: "salma@example.com",
        phone: "+216 55 321 654"
      },
      product: "Xtream Codes 6 Mois",
      price: 19,
      status: "completed",
      date: "2025-01-12",
      paymentMethod: "Visa",
      commission: 2.85,
      category: "xtream",
      duration: "6 mois"
    },
    {
      id: "ORD-005",
      customer: {
        name: "Youssef Hammami",
        email: "youssef@example.com",
        phone: "+216 71 987 654"
      },
      product: "Mango Sharing VIP",
      price: 35,
      status: "cancelled",
      date: "2025-01-11",
      paymentMethod: "MasterCard",
      commission: 0,
      category: "mango",
      duration: "12 mois"
    },
    {
      id: "ORD-006",
      customer: {
        name: "Amina Khelifi",
        email: "amina@example.com",
        phone: "+216 99 147 258"
      },
      product: "IBOPlayer Pro",
      price: 28,
      status: "completed",
      date: "2025-01-10",
      paymentMethod: "Visa",
      commission: 4.20,
      category: "ibo",
      duration: "6 mois"
    }
  ];

  const statusConfig = {
    completed: { label: "Terminé", color: "bg-green-100 text-green-800", icon: CheckCircle },
    pending: { label: "En attente", color: "bg-yellow-100 text-yellow-800", icon: Clock },
    processing: { label: "En cours", color: "bg-blue-100 text-blue-800", icon: RefreshCw },
    cancelled: { label: "Annulé", color: "bg-red-100 text-red-800", icon: XCircle },
  };

  const categoryIcons = {
    iptv: "📺",
    netflix: "🎬",
    bein: "⚽",
    xtream: "🖥️",
    mango: "🥭",
    ibo: "📱",
    test: "🧪",
    gift: "🎁"
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.product.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalRevenue = orders
    .filter(order => order.status === "completed")
    .reduce((sum, order) => sum + order.price, 0);

  const totalCommission = orders
    .filter(order => order.status === "completed")
    .reduce((sum, order) => sum + order.commission, 0);

  const pendingOrders = orders.filter(order => order.status === "pending").length;

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
                <h1 className="text-2xl font-bold text-gray-900">Mes Commandes</h1>
                <p className="text-gray-600">Suivi de toutes vos ventes</p>
              </div>
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une commande..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Commandes Total</p>
                    <p className="text-2xl font-bold">{orders.length}</p>
                  </div>
                  <Package className="w-8 h-8 text-blue-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">Revenus Totaux</p>
                    <p className="text-2xl font-bold">{totalRevenue} TND</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">Commissions</p>
                    <p className="text-2xl font-bold">{totalCommission.toFixed(2)} TND</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-purple-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100">En Attente</p>
                    <p className="text-2xl font-bold">{pendingOrders}</p>
                  </div>
                  <Clock className="w-8 h-8 text-orange-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <div className="flex gap-2">
            {Object.entries(statusConfig).map(([status, config]) => (
              <Button
                key={status}
                variant={statusFilter === status ? "default" : "outline"}
                onClick={() => setStatusFilter(status)}
                size="sm"
              >
                <config.icon className="w-4 h-4 mr-2" />
                {config.label}
                <Badge variant="secondary" className="ml-2">
                  {orders.filter(order => order.status === status).length}
                </Badge>
              </Button>
            ))}
            <Button
              variant={statusFilter === "all" ? "default" : "outline"}
              onClick={() => setStatusFilter("all")}
              size="sm"
            >
              Tous
              <Badge variant="secondary" className="ml-2">
                {orders.length}
              </Badge>
            </Button>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order, index) => {
            const statusInfo = statusConfig[order.status as keyof typeof statusConfig];
            const StatusIcon = statusInfo.icon;
            
            return (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        {/* Product Icon */}
                        <div className="text-4xl">
                          {categoryIcons[order.category as keyof typeof categoryIcons]}
                        </div>

                        {/* Order Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                            <Badge className={statusInfo.color}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {statusInfo.label}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                            <div>
                              <p className="font-medium text-gray-900">{order.product}</p>
                              <p className="text-gray-500">Durée: {order.duration}</p>
                            </div>
                            
                            <div>
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{order.customer.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>{order.customer.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span>{order.customer.phone}</span>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(order.date).toLocaleDateString('fr-FR')}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <DollarSign className="w-4 h-4" />
                                <span>{order.paymentMethod}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price and Actions */}
                      <div className="text-right">
                        <div className="mb-2">
                          <p className="text-2xl font-bold text-gray-900">{order.price} TND</p>
                          {order.commission > 0 && (
                            <p className="text-sm text-green-600">Commission: {order.commission} TND</p>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            Voir
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucune commande trouvée</h3>
            <p className="text-gray-600">Aucune commande ne correspond à vos critères de recherche</p>
          </div>
        )}
      </div>
    </div>
  );
}
