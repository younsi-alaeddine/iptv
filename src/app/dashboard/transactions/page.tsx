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
  Download,
  Eye,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  CreditCard,
  Wallet,
  Banknote,
  Receipt,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";
import Link from "next/link";

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const transactions = [
    {
      id: "TXN-001",
      type: "income",
      amount: 29.00,
      description: "Vente - Abonnement IPTV Premium",
      date: "2025-01-15",
      status: "completed",
      method: "Visa",
      commission: 4.35,
      client: "Ahmed Ben Ali"
    },
    {
      id: "TXN-002", 
      type: "income",
      amount: 95.00,
      description: "Vente - Netflix Premium 4 Écrans",
      date: "2025-01-14",
      status: "completed",
      method: "MasterCard",
      commission: 14.25,
      client: "Fatma Khelil"
    },
    {
      id: "TXN-003",
      type: "expense",
      amount: 15.00,
      description: "Commission système",
      date: "2025-01-13",
      status: "completed",
      method: "Système",
      commission: 0,
      client: "Système"
    },
    {
      id: "TXN-004",
      type: "income",
      amount: 45.00,
      description: "Vente - BeIN Sports Premium",
      date: "2025-01-12",
      status: "pending",
      method: "PayPal",
      commission: 6.75,
      client: "Mohamed Trabelsi"
    },
    {
      id: "TXN-005",
      type: "income",
      amount: 19.00,
      description: "Vente - Xtream Codes 6 Mois",
      date: "2025-01-11",
      status: "completed",
      method: "Visa",
      commission: 2.85,
      client: "Salma Ben Ammar"
    },
    {
      id: "TXN-006",
      type: "expense",
      amount: 5.00,
      description: "Frais de transaction",
      date: "2025-01-10",
      status: "completed",
      method: "Système",
      commission: 0,
      client: "Système"
    }
  ];

  const typeConfig = {
    income: { 
      label: "Entrée", 
      color: "bg-green-100 text-green-800", 
      icon: ArrowUpRight,
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    expense: { 
      label: "Sortie", 
      color: "bg-red-100 text-red-800", 
      icon: ArrowDownLeft,
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  };

  const statusConfig = {
    completed: { label: "Terminé", color: "bg-green-100 text-green-800" },
    pending: { label: "En attente", color: "bg-yellow-100 text-yellow-800" },
    failed: { label: "Échoué", color: "bg-red-100 text-red-800" },
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = 
      transaction.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || transaction.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const totalIncome = transactions
    .filter(t => t.type === "income" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === "expense" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalCommission = transactions
    .filter(t => t.type === "income" && t.status === "completed")
    .reduce((sum, t) => sum + t.commission, 0);

  const netProfit = totalIncome - totalExpenses;

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
                <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
                <p className="text-gray-600">Historique de toutes vos transactions</p>
              </div>
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une transaction..."
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
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">Revenus Totaux</p>
                    <p className="text-2xl font-bold">{totalIncome.toFixed(2)} TND</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-100">Dépenses</p>
                    <p className="text-2xl font-bold">{totalExpenses.toFixed(2)} TND</p>
                  </div>
                  <TrendingDown className="w-8 h-8 text-red-200" />
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
                  <DollarSign className="w-8 h-8 text-purple-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Bénéfice Net</p>
                    <p className="text-2xl font-bold">{netProfit.toFixed(2)} TND</p>
                  </div>
                  <Wallet className="w-8 h-8 text-blue-200" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <div className="flex gap-2">
            <Button
              variant={typeFilter === "all" ? "default" : "outline"}
              onClick={() => setTypeFilter("all")}
              size="sm"
            >
              Toutes
              <Badge variant="secondary" className="ml-2">
                {transactions.length}
              </Badge>
            </Button>
            <Button
              variant={typeFilter === "income" ? "default" : "outline"}
              onClick={() => setTypeFilter("income")}
              size="sm"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Entrées
              <Badge variant="secondary" className="ml-2">
                {transactions.filter(t => t.type === "income").length}
              </Badge>
            </Button>
            <Button
              variant={typeFilter === "expense" ? "default" : "outline"}
              onClick={() => setTypeFilter("expense")}
              size="sm"
            >
              <TrendingDown className="w-4 h-4 mr-2" />
              Sorties
              <Badge variant="secondary" className="ml-2">
                {transactions.filter(t => t.type === "expense").length}
              </Badge>
            </Button>
          </div>
        </div>

        {/* Transactions List */}
        <div className="space-y-4">
          {filteredTransactions.map((transaction, index) => {
            const typeInfo = typeConfig[transaction.type as keyof typeof typeConfig];
            const statusInfo = statusConfig[transaction.status as keyof typeof statusConfig];
            const TypeIcon = typeInfo.icon;
            
            return (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className={`${typeInfo.bgColor} ${typeInfo.borderColor} border-2`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        {/* Transaction Icon */}
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                          transaction.type === "income" 
                            ? "from-green-400 to-green-600" 
                            : "from-red-400 to-red-600"
                        } flex items-center justify-center text-white`}>
                          <TypeIcon className="w-6 h-6" />
                        </div>

                        {/* Transaction Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{transaction.id}</h3>
                            <Badge className={typeInfo.color}>
                              {typeInfo.label}
                            </Badge>
                            <Badge className={statusInfo.color}>
                              {statusInfo.label}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                            <div>
                              <p className="font-medium text-gray-900">{transaction.description}</p>
                              <p className="text-gray-500">Client: {transaction.client}</p>
                            </div>
                            
                            <div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(transaction.date).toLocaleDateString('fr-FR')}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CreditCard className="w-4 h-4" />
                                <span>{transaction.method}</span>
                              </div>
                            </div>
                            
                            <div>
                              {transaction.commission > 0 && (
                                <div className="flex items-center gap-2">
                                  <DollarSign className="w-4 h-4" />
                                  <span>Commission: {transaction.commission} TND</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Amount and Actions */}
                      <div className="text-right">
                        <div className="mb-2">
                          <p className={`text-2xl font-bold ${
                            transaction.type === "income" ? "text-green-600" : "text-red-600"
                          }`}>
                            {transaction.type === "income" ? "+" : "-"}{transaction.amount} TND
                          </p>
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
        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💳</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucune transaction trouvée</h3>
            <p className="text-gray-600">Aucune transaction ne correspond à vos critères de recherche</p>
          </div>
        )}
      </div>
    </div>
  );
}
