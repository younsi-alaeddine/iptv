"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                <span className="text-white font-bold text-xl">ES</span>
              </div>
              <div>
                <div className="font-bold text-xl">Electro Satellite</div>
                <div className="text-sm opacity-90">Tunisie</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Leader en Tunisie pour les abonnements IPTV, Sharing & Apollo, Box Android, 
              et accessoires streaming. Qualité premium, support 24/7.
            </p>
            <div className="text-xs text-gray-400">
              © 2025 Electro Satellite Tunisie - Tous droits réservés
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span className="hover:text-accent transition-colors cursor-pointer">
                  {contactInfo.phone}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MessageCircle className="w-4 h-4 text-accent" />
                <span className="hover:text-accent transition-colors cursor-pointer">
                  {contactInfo.whatsapp}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span className="hover:text-accent transition-colors cursor-pointer">
                  {contactInfo.email}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-accent" />
                <span>{contactInfo.hours}</span>
              </li>
            </ul>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/ipTV" className="text-sm hover:text-accent transition-colors">
                  Abonnements IPTV
                </Link>
              </li>
              <li>
                <Link href="/sharing-apollo" className="text-sm hover:text-accent transition-colors">
                  Sharing & Apollo
                </Link>
              </li>
              <li>
                <Link href="/box-android" className="text-sm hover:text-accent transition-colors">
                  Box Android
                </Link>
              </li>
              <li>
                <Link href="/netflix" className="text-sm hover:text-accent transition-colors">
                  Netflix Official
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-accent transition-colors">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Paiement sécurisé */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Paiement sécurisé</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-3 flex items-center justify-center">
                <Image src="/visa.svg" alt="Visa" width={50} height={30} unoptimized />
              </div>
              <div className="bg-white/10 rounded-lg p-3 flex items-center justify-center">
                <Image src="/mastercard.svg" alt="MasterCard" width={50} height={30} unoptimized />
              </div>
              <div className="bg-white/10 rounded-lg p-3 flex items-center justify-center">
                <Image src="/wu.svg" alt="Western Union" width={50} height={30} unoptimized />
              </div>
              <div className="bg-white/10 rounded-lg p-3 flex items-center justify-center">
                <Image src="/moneygram.svg" alt="MoneyGram" width={50} height={30} unoptimized />
              </div>
            </div>
            <div className="text-xs text-gray-400">
              Paiements 100% sécurisés et cryptés
            </div>
          </motion.div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-300 flex items-center gap-1">
              Développé <span className="text-red-400">❤️</span> — Younsi Alaeddine
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/mentions-legales" className="hover:text-accent transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-accent transition-colors">
                Confidentialité
              </Link>
              <Link href="/cgv" className="hover:text-accent transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


