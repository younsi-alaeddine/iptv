"use client";

// import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Save, Edit3 } from "lucide-react";

export default function ProfilePage() {
  // const { data: session } = useSession();
  const session = { user: { name: "Utilisateur", email: "user@example.com" } }; // Temporaire
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    phone: "",
    address: "",
  });

  if (!session) {
    redirect("/auth/signin");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      // Ici vous pouvez ajouter l'API pour mettre à jour le profil
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulation
      setIsEditing(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mon Profil
          </h1>
          <p className="text-gray-600 text-lg">
            Gérez vos informations personnelles et vos préférences
          </p>
        </div>

        {/* Informations personnelles */}
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Informations personnelles
              </CardTitle>
              <Button
                variant={isEditing ? "default" : "outline"}
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                disabled={loading}
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Enregistrer
                  </>
                ) : (
                  <>
                    <Edit3 className="w-4 h-4 mr-2" />
                    Modifier
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nom complet
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="border-gray-200 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="border-gray-200 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Téléphone
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="+216 XX XXX XXX"
                  className="border-gray-200 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Adresse
                </label>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="Votre adresse complète"
                  className="border-gray-200 focus:border-primary"
                />
              </div>
            </div>

            {isEditing && (
              <div className="flex gap-4 mt-6">
                <Button
                  onClick={handleSave}
                  disabled={loading}
                  className="bg-primary hover:bg-primary/90"
                >
                  {loading ? "Enregistrement..." : "Enregistrer les modifications"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                  disabled={loading}
                >
                  Annuler
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6 shadow-lg border-0">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-accent mb-2">0</div>
              <div className="text-gray-600">Commandes</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-lg border-0">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-accent mb-2">0 TND</div>
              <div className="text-gray-600">Total dépensé</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 shadow-lg border-0">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-accent mb-2">0</div>
              <div className="text-gray-600">Produits favoris</div>
            </CardContent>
          </Card>
        </div>

        {/* Actions rapides */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle>Actions rapides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-16 text-left justify-start">
                <div className="text-left">
                  <div className="font-semibold">Mes commandes</div>
                  <div className="text-sm text-gray-500">Voir l'historique</div>
                </div>
              </Button>
              <Button variant="outline" className="h-16 text-left justify-start">
                <div className="text-left">
                  <div className="font-semibold">Support</div>
                  <div className="text-sm text-gray-500">Contacter l'assistance</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
