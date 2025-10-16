"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const contactMethods = [
  {
    type: "WhatsApp",
    value: "+216 12 345 678",
    icon: "📱",
    description: "Support instantané 24/7"
  },
  {
    type: "Email",
    value: "contact@electro-satellite.tn",
    icon: "📧",
    description: "Réponse sous 2h"
  },
  {
    type: "Téléphone",
    value: "+216 71 123 456",
    icon: "📞",
    description: "Lun-Ven 9h-18h"
  }
];

const faqItems = [
  {
    question: "Comment installer mon abonnement IPTV ?",
    answer: "Nous vous envoyons les codes d'activation par email et notre équipe vous guide dans l'installation via WhatsApp."
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Livraison dans toute la Tunisie en 24-48h. Installation et configuration incluses."
  },
  {
    question: "Puis-je changer d'abonnement ?",
    answer: "Oui, vous pouvez upgrader ou downgrader votre abonnement à tout moment sans frais supplémentaires."
  },
  {
    question: "Y a-t-il une garantie ?",
    answer: "Tous nos produits et services sont garantis. Support technique inclus pendant toute la durée de votre abonnement."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    alert("Message envoyé ! Nous vous répondrons rapidement.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Contactez-nous</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Notre équipe est là pour vous aider ! Choisissez le moyen de contact qui vous convient le mieux.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Formulaire de contact */}
        <Card>
          <CardHeader>
            <CardTitle>Envoyez-nous un message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  placeholder="Votre email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <Input
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              <textarea
                className="w-full p-3 border rounded-lg resize-none"
                rows={4}
                placeholder="Votre message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <Button type="submit" className="w-full" size="lg">
                Envoyer le message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Méthodes de contact */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Nos moyens de contact</h2>
          {contactMethods.map((method, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{method.type}</h3>
                    <p className="text-accent font-medium">{method.value}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Contacter
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Questions fréquentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{item.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Informations supplémentaires */}
      <div className="bg-secondary/50 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">🏢</div>
            <h3 className="font-semibold mb-2">Notre bureau</h3>
            <p className="text-sm text-muted-foreground">
              Tunis, Tunisie<br />
              Avenue Habib Bourguiba
            </p>
          </div>
          <div>
            <div className="text-4xl mb-2">⏰</div>
            <h3 className="font-semibold mb-2">Horaires</h3>
            <p className="text-sm text-muted-foreground">
              Lun-Ven: 9h-18h<br />
              Sam: 9h-14h
            </p>
          </div>
          <div>
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="font-semibold mb-2">Support rapide</h3>
            <p className="text-sm text-muted-foreground">
              Réponse WhatsApp<br />
              en moins de 5 minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
