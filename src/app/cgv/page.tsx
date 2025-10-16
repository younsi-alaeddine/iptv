"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText, ShoppingCart, CreditCard, Truck, Shield, Phone } from "lucide-react";

const cgvSections = [
  {
    title: "Article 1 - Objet et Champ d'Application",
    icon: <FileText className="w-6 h-6" />,
    content: [
      "Les présentes conditions générales de vente s'appliquent à toutes les commandes passées sur le site electro-satellite.tn",
      "Elles régissent les relations contractuelles entre Electro Satellite Tunisie et ses clients",
      "Toute commande implique l'acceptation sans réserve des présentes conditions",
      "Ces conditions prévalent sur tout autre document du client"
    ]
  },
  {
    title: "Article 2 - Commandes et Acceptation",
    icon: <ShoppingCart className="w-6 h-6" />,
    content: [
      "Les commandes sont effectuées via notre site web ou par téléphone",
      "Chaque commande fait l'objet d'une confirmation par email",
      "Electro Satellite se réserve le droit d'annuler toute commande suspecte",
      "Les prix sont fermes et non révisables pendant leur période de validité"
    ]
  },
  {
    title: "Article 3 - Prix et Modalités de Paiement",
    icon: <CreditCard className="w-6 h-6" />,
    content: [
      "Les prix sont indiqués en TND toutes taxes comprises",
      "Paiement par carte bancaire, virement ou Western Union",
      "Le paiement est exigible à la commande",
      "En cas de défaut de paiement, la commande est annulée"
    ]
  },
  {
    title: "Article 4 - Livraison",
    icon: <Truck className="w-6 h-6" />,
    content: [
      "Livraison dans toute la Tunisie selon les zones définies",
      "Délais de livraison indicatifs, non garantis",
      "En cas de retard, le client sera informé par email ou SMS",
      "Les frais de port sont à la charge du client sauf mention contraire"
    ]
  },
  {
    title: "Article 5 - Garanties et SAV",
    icon: <Shield className="w-6 h-6" />,
    content: [
      "Garantie légale de conformité de 2 ans",
      "Support technique inclus avec tous nos produits",
      "Service après-vente disponible par email et téléphone",
      "Remplacement gratuit en cas de défaut de fabrication"
    ]
  }
];

const paymentMethods = [
  {
    method: "Carte Bancaire",
    description: "Visa, MasterCard, carte tunisienne",
    security: "Paiement 100% sécurisé SSL",
    icon: <CreditCard className="w-8 h-8" />
  },
  {
    method: "Virement Bancaire",
    description: "Transfert direct vers notre compte",
    security: "Confirmation par email",
    icon: <FileText className="w-8 h-8" />
  },
  {
    method: "Western Union",
    description: "Transfert international rapide",
    security: "Reçu de transfert requis",
    icon: <Truck className="w-8 h-8" />
  }
];

const returnPolicy = [
  {
    condition: "Produit défectueux",
    delay: "30 jours",
    process: "Remplacement gratuit après vérification",
    icon: <Shield className="w-6 h-6" />
  },
  {
    condition: "Erreur de commande",
    delay: "7 jours",
    process: "Échange ou remboursement sous conditions",
    icon: <ShoppingCart className="w-6 h-6" />
  },
  {
    condition: "Produit non conforme",
    delay: "14 jours",
    process: "Remboursement intégral des frais",
    icon: <FileText className="w-6 h-6" />
  }
];

export default function CGVPage() {
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
          <FileText className="w-8 h-8 text-accent" />
          <span className="text-lg font-semibold text-primary">Conditions de Vente</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Conditions Générales de Vente
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Les conditions générales qui régissent nos ventes et définissent les droits 
          et obligations de chaque partie dans nos relations commerciales.
        </motion.p>
      </motion.div>

      {/* Conditions principales */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Conditions Principales</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Les articles essentiels de nos conditions générales de vente
          </p>
        </div>

        <div className="space-y-8">
          {cgvSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white">
                      {section.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-primary">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Méthodes de paiement */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Méthodes de Paiement</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Les moyens de paiement acceptés et leurs conditions de sécurité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.method}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{method.method}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600">{method.description}</p>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <p className="text-sm font-semibold text-primary">{method.security}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Politique de retour */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Politique de Retour</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conditions et délais pour les retours et échanges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {returnPolicy.map((policy, index) => (
            <motion.div
              key={policy.condition}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white">
                      {policy.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-primary">{policy.condition}</CardTitle>
                      <p className="text-sm text-accent font-semibold">Délai : {policy.delay}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{policy.process}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact et réclamations */}
      <motion.section 
        className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Service Client</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre équipe est disponible pour toute question concernant nos conditions de vente
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
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Support Client</h3>
            <p className="text-gray-600 mb-4">Pour toute question ou réclamation</p>
            <p className="text-accent font-semibold">+216 25 288 323</p>
            <p className="text-gray-500 text-sm mt-2">Lun-Ven: 9h-18h | Sam: 9h-14h</p>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Pour les questions écrites</p>
            <p className="text-accent font-semibold">contact@electro-satellite.tn</p>
            <p className="text-gray-500 text-sm mt-2">Réponse sous 24h</p>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <div className="bg-white/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-primary mb-2">Droit de Rétractation</h3>
            <p className="text-gray-600 text-sm">
              Conformément à la législation tunisienne, vous disposez d'un délai de 7 jours 
              pour exercer votre droit de rétractation à compter de la réception du produit.
            </p>
          </div>
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
