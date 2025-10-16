"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Truck, Clock, Shield, MapPin, Phone, Mail } from "lucide-react";

const deliveryZones = [
  {
    zone: "Tunis Centre",
    duration: "1-2 jours",
    price: "Gratuite",
    icon: <MapPin className="w-6 h-6 text-accent" />,
    popular: true
  },
  {
    zone: "Grand Tunis",
    duration: "2-3 jours", 
    price: "5 TND",
    icon: <MapPin className="w-6 h-6 text-accent" />,
    popular: false
  },
  {
    zone: "Autres gouvernorats",
    duration: "3-5 jours",
    price: "10 TND", 
    icon: <MapPin className="w-6 h-6 text-accent" />,
    popular: false
  }
];

const deliverySteps = [
  {
    step: "1",
    title: "Commande",
    description: "Passez votre commande en ligne",
    icon: <Phone className="w-6 h-6" />
  },
  {
    step: "2", 
    title: "Confirmation",
    description: "Réception de la confirmation par SMS/Email",
    icon: <Mail className="w-6 h-6" />
  },
  {
    step: "3",
    title: "Préparation", 
    description: "Préparation et emballage de votre commande",
    icon: <Clock className="w-6 h-6" />
  },
  {
    step: "4",
    title: "Livraison",
    description: "Livraison à domicile ou point relais",
    icon: <Truck className="w-6 h-6" />
  }
];

export default function LivraisonPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-yellow-500/10 rounded-2xl px-6 py-3 mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Truck className="w-8 h-8 text-accent" />
          <span className="text-lg font-semibold text-primary">Livraison Rapide & Sécurisée</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Politique de Livraison
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Nous nous engageons à vous livrer vos produits dans les meilleures conditions, 
          rapidement et en toute sécurité partout en Tunisie.
        </motion.p>
      </motion.div>

      {/* Zones de livraison */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Zones de Livraison</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choisissez votre zone pour connaître les délais et frais de livraison
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliveryZones.map((zone, index) => (
            <motion.div
              key={zone.zone}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                zone.popular ? 'border-accent shadow-lg' : 'hover:border-primary/50'
              }`}>
                {zone.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-accent to-yellow-500 text-primary font-bold">
                    Populaire
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {zone.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">{zone.zone}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-center items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-lg font-semibold">{zone.duration}</span>
                  </div>
                  <div className="text-3xl font-bold text-accent">{zone.price}</div>
                  <Button 
                    className={`w-full ${
                      zone.popular 
                        ? 'bg-gradient-to-r from-accent to-yellow-500 text-primary hover:from-yellow-400 hover:to-accent' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    Choisir cette zone
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Processus de livraison */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Comment ça marche ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un processus simple et transparent pour votre livraison
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliverySteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Flèche de connexion */}
              {index < deliverySteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Garanties */}
      <motion.section 
        className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Garanties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Votre satisfaction est notre priorité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Livraison Sécurisée</h3>
            <p className="text-gray-600">Emballage soigné et suivi en temps réel</p>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Délais Respectés</h3>
            <p className="text-gray-600">Livraison dans les délais annoncés ou remboursé</p>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Support Client</h3>
            <p className="text-gray-600">Assistance 24/7 pour toutes vos questions</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
