import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const recepteurs = [
  {
    id: 1,
    name: "Récepteur Starsat STAR-HS70 + 6 Abonnements",
    price: "69 TND",
    description: "Récepteur HD haute qualité avec 6 abonnements inclus",
    specs: {
      resolution: "HD 1080p",
      tuner: "DVB-S2",
      usb: "2x USB 2.0",
      ethernet: "LAN",
      wifi: "WiFi intégré"
    },
    features: ["6 abonnements inclus", "Enregistrement USB", "Multimédia", "EPG"],
    popular: true,
    image: "/products/iptv.svg"
  },
  {
    id: 2,
    name: "Récepteur HD Premium",
    price: "89 TND",
    description: "Récepteur HD professionnel avec fonctionnalités avancées",
    specs: {
      resolution: "Full HD 1080p",
      tuner: "DVB-S2/S2X",
      usb: "3x USB 3.0",
      ethernet: "Gigabit LAN",
      wifi: "WiFi AC"
    },
    features: ["Enregistrement 4K", "Timeshift", "PIP", "Multi-satellite"],
    popular: false,
    image: "/products/iptv.svg"
  },
  {
    id: 3,
    name: "Récepteur HD Compact",
    price: "45 TND",
    description: "Récepteur HD compact et économique",
    specs: {
      resolution: "HD 720p",
      tuner: "DVB-S2",
      usb: "1x USB 2.0",
      ethernet: "LAN 100Mbps",
      wifi: "Non"
    },
    features: ["Compact", "Économique", "Facile à utiliser", "Support USB"],
    popular: false,
    image: "/products/iptv.svg"
  }
];

export default function RecepteurHDPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Récepteurs HD</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Récepteurs satellites HD professionnels pour une réception optimale. 
          Avec abonnements inclus et fonctionnalités multimédia avancées.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {recepteurs.map((recepteur) => (
          <Card key={recepteur.id} className={`relative ${recepteur.popular ? 'ring-2 ring-accent' : ''}`}>
            {recepteur.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-primary">
                Recommandé
              </Badge>
            )}
            <CardHeader>
              <div className="aspect-video relative mb-4">
                <Image 
                  src={recepteur.image} 
                  alt={recepteur.name} 
                  fill 
                  className="object-cover rounded-lg" 
                  unoptimized 
                />
              </div>
              <CardTitle className="text-2xl">{recepteur.name}</CardTitle>
              <div className="text-3xl font-bold text-accent">{recepteur.price}</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{recepteur.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold">Spécifications :</h4>
                <ul className="text-sm space-y-1">
                  <li>• Résolution: {recepteur.specs.resolution}</li>
                  <li>• Tuner: {recepteur.specs.tuner}</li>
                  <li>• USB: {recepteur.specs.usb}</li>
                  <li>• Ethernet: {recepteur.specs.ethernet}</li>
                  <li>• WiFi: {recepteur.specs.wifi}</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Fonctionnalités :</h4>
                <div className="flex flex-wrap gap-2">
                  {recepteur.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button className="w-full" size="lg">
                Commander maintenant
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-secondary/50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Installation & Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">📡</div>
            <h3 className="font-semibold mb-2">Installation Antenne</h3>
            <p className="text-sm text-muted-foreground">Installation complète de l'antenne satellite</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">⚙️</div>
            <h3 className="font-semibold mb-2">Configuration</h3>
            <p className="text-sm text-muted-foreground">Configuration des chaînes et abonnements</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">📺</div>
            <h3 className="font-semibold mb-2">Test Final</h3>
            <p className="text-sm text-muted-foreground">Test de réception et qualité d'image</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🛠️</div>
            <h3 className="font-semibold mb-2">Support</h3>
            <p className="text-sm text-muted-foreground">Support technique et maintenance</p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Abonnements Satellites Inclus</h2>
        <p className="text-lg mb-6">
          Tous nos récepteurs incluent des abonnements satellites premium 
          pour accéder aux meilleures chaînes internationales.
        </p>
        <Button variant="secondary" size="lg">
          Voir les abonnements disponibles
        </Button>
      </div>
    </div>
  );
}
