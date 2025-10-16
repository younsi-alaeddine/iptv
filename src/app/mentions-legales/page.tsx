"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText, Shield, Eye, Mail, Phone, MapPin } from "lucide-react";

const legalSections = [
  {
    title: "Identification de l'entreprise",
    icon: <FileText className="w-6 h-6" />,
    content: [
      "Raison sociale : Electro Satellite Tunisie",
      "Forme juridique : Société à responsabilité limitée",
      "Capital social : 10 000 TND",
      "R.C. : B123456789",
      "Adresse : Tunis, Tunisie",
      "Téléphone : +216 25 288 323",
      "Email : contact@electro-satellite.tn"
    ]
  },
  {
    title: "Directeur de publication",
    icon: <Shield className="w-6 h-6" />,
    content: [
      "Nom : Younsi Alaeddine",
      "Fonction : Gérant",
      "Email : contact@electro-satellite.tn"
    ]
  },
  {
    title: "Hébergement",
    icon: <Eye className="w-6 h-6" />,
    content: [
      "Hébergeur : Vercel Inc.",
      "Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA",
      "Site web : https://vercel.com"
    ]
  }
];

const privacySections = [
  {
    title: "Collecte des données",
    content: "Nous collectons uniquement les données nécessaires à la fourniture de nos services : nom, email, adresse de livraison et numéro de téléphone."
  },
  {
    title: "Utilisation des données", 
    content: "Vos données personnelles sont utilisées exclusivement pour traiter vos commandes, vous contacter concernant votre achat et améliorer nos services."
  },
  {
    title: "Protection des données",
    content: "Nous nous engageons à protéger vos données personnelles et à ne jamais les vendre ou les partager avec des tiers sans votre consentement explicite."
  },
  {
    title: "Vos droits",
    content: "Conformément à la loi tunisienne sur la protection des données personnelles, vous disposez d'un droit d'accès, de rectification et de suppression de vos données."
  }
];

export default function MentionsLegalesPage() {
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
          <span className="text-lg font-semibold text-primary">Informations Légales</span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Mentions Légales
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Transparence et conformité légale - Toutes les informations légales concernant 
          Electro Satellite Tunisie et l'utilisation de notre site web.
        </motion.p>
      </motion.div>

      {/* Informations légales */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Informations Légales</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Identification complète de l'entreprise et des responsables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white">
                      {section.icon}
                    </div>
                    <CardTitle className="text-lg font-bold text-primary">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Propriété intellectuelle */}
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
              <Shield className="w-8 h-8 text-accent" />
              Propriété Intellectuelle
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-600">
            <p>
              L'ensemble de ce site relève de la législation tunisienne et internationale sur le droit d'auteur 
              et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
              documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
              formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
            <p>
              La marque "Electro Satellite" ainsi que le logo associé sont des marques déposées. Toute 
              reproduction non autorisée de ces marques, dessins et modèles constitue une contrefaçon 
              passible de sanctions pénales.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Protection des données */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Protection des Données</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre engagement pour la protection de votre vie privée
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {privacySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-primary">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{section.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact juridique */}
      <motion.section 
        className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Juridique</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pour toute question relative aux mentions légales ou à la protection des données
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
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
            <p className="text-gray-600">contact@electro-satellite.tn</p>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Téléphone</h3>
            <p className="text-gray-600">+216 25 288 323</p>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Adresse</h3>
            <p className="text-gray-600">Tunis, Tunisie</p>
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
