"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, User, Database, Mail } from "lucide-react";

const privacyPrinciples = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Protection Maximale",
    description: "Vos données sont protégées par des technologies de sécurité avancées"
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Transparence Totale",
    description: "Nous vous informons clairement de l'utilisation de vos données"
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Contrôle Utilisateur",
    description: "Vous gardez le contrôle total sur vos données personnelles"
  }
];

const dataTypes = [
  {
    category: "Données d'identification",
    examples: ["Nom et prénom", "Adresse email", "Numéro de téléphone", "Adresse de livraison"],
    purpose: "Traiter vos commandes et vous contacter"
  },
  {
    category: "Données de navigation",
    examples: ["Adresse IP", "Type de navigateur", "Pages visitées", "Durée de session"],
    purpose: "Améliorer notre site et analyser l'utilisation"
  },
  {
    category: "Données de paiement",
    examples: ["Informations de facturation", "Méthode de paiement", "Historique des commandes"],
    purpose: "Traiter vos paiements en toute sécurité"
  }
];

const userRights = [
  {
    right: "Droit d'accès",
    description: "Vous pouvez demander l'accès à toutes vos données personnelles que nous détenons",
    icon: <Eye className="w-6 h-6" />
  },
  {
    right: "Droit de rectification",
    description: "Vous pouvez demander la correction de données inexactes ou incomplètes",
    icon: <User className="w-6 h-6" />
  },
  {
    right: "Droit de suppression",
    description: "Vous pouvez demander la suppression de vos données dans certaines circonstances",
    icon: <Database className="w-6 h-6" />
  },
  {
    right: "Droit d'opposition",
    description: "Vous pouvez vous opposer au traitement de vos données pour certaines finalités",
    icon: <Lock className="w-6 h-6" />
  }
];

export default function PolitiqueConfidentialitePage() {
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
          className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl px-6 py-3 mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Shield className="w-8 h-8 text-accent" />
          <span className="text-lg font-semibold text-primary">Protection des Données</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Politique de Confidentialité
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Votre vie privée est notre priorité. Découvrez comment nous protégeons et utilisons 
          vos données personnelles de manière transparente et sécurisée.
        </motion.p>
      </motion.div>

      {/* Principes fondamentaux */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Principes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Les valeurs qui guident notre approche de la protection des données
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {privacyPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {principle.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{principle.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Types de données collectées */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Données Collectées</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Informations que nous collectons et pourquoi nous en avons besoin
          </p>
        </div>

        <div className="space-y-8">
          {dataTypes.map((type, index) => (
            <motion.div
              key={type.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">{type.category}</h3>
                    <p className="text-gray-600 font-medium">{type.purpose}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-800 mb-3">Exemples :</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {type.examples.map((example, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-gray-600 text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Utilisation des données */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="p-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
              <Database className="w-8 h-8 text-accent" />
              Utilisation de Vos Données
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Finalités Légitimes</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Traiter et livrer vos commandes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Vous contacter concernant votre achat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Améliorer nos produits et services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Respecter nos obligations légales</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Durée de Conservation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Données de commande : 5 ans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Données marketing : jusqu&apos;à désabonnement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Cookies : 13 mois maximum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">Logs de connexion : 12 mois</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Droits des utilisateurs */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Vos Droits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conformément à la loi tunisienne sur la protection des données personnelles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {userRights.map((right, index) => (
            <motion.div
              key={right.right}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white">
                      {right.icon}
                    </div>
                    <CardTitle className="text-lg font-bold text-primary">{right.right}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{right.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact et questions */}
      <motion.section 
        className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Questions sur la Confidentialité ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre équipe est là pour répondre à toutes vos questions concernant la protection de vos données
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Pour les questions générales</p>
            <p className="text-accent font-semibold">privacy@electro-satellite.tn</p>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Délégué à la Protection</h3>
            <p className="text-gray-600 mb-4">Pour les réclamations</p>
            <p className="text-accent font-semibold">dpo@electro-satellite.tn</p>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </motion.section>
    </div>
  );
}
