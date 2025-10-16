import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const androidBoxes = [
  {
    id: 1,
    name: "Box Android TV 4K Pro",
    price: "299 TND",
    specs: {
      ram: "4GB RAM",
      storage: "32GB",
      processor: "Amlogic S905X4",
      wifi: "WiFi 6",
      bluetooth: "Bluetooth 5.0"
    },
    features: ["4K HDR", "Android 11", "Netflix 4K", "Google Play"],
    popular: true,
    image: "/products/iptv.svg"
  },
  {
    id: 2,
    name: "Box Android TV Ultra",
    price: "399 TND",
    specs: {
      ram: "8GB RAM",
      storage: "64GB",
      processor: "Amlogic S922X",
      wifi: "WiFi 6E",
      bluetooth: "Bluetooth 5.2"
    },
    features: ["8K Support", "Android 12", "Gaming Ready", "Dolby Vision"],
    popular: false,
    image: "/products/iptv.svg"
  },
  {
    id: 3,
    name: "Box Android TV Mini",
    price: "199 TND",
    specs: {
      ram: "2GB RAM",
      storage: "16GB",
      processor: "Amlogic S905X3",
      wifi: "WiFi 5",
      bluetooth: "Bluetooth 4.2"
    },
    features: ["1080p HD", "Android 10", "Compact", "Économique"],
    popular: false,
    image: "/products/iptv.svg"
  }
];

export default function BoxAndroidPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Box Android TV</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transformez votre TV en Smart TV avec nos Box Android haute performance. 
          Accès à toutes vos applications favorites et streaming 4K.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {androidBoxes.map((box) => (
          <Card key={box.id} className={`relative ${box.popular ? 'ring-2 ring-accent' : ''}`}>
            {box.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-primary">
                Recommandé
              </Badge>
            )}
            <CardHeader>
              <div className="aspect-video relative mb-4">
                <Image 
                  src={box.image} 
                  alt={box.name} 
                  fill 
                  className="object-cover rounded-lg" 
                  unoptimized 
                />
              </div>
              <CardTitle className="text-2xl">{box.name}</CardTitle>
              <div className="text-3xl font-bold text-accent">{box.price}</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Spécifications :</h4>
                <ul className="text-sm space-y-1">
                  <li>• {box.specs.ram}</li>
                  <li>• {box.specs.storage}</li>
                  <li>• {box.specs.processor}</li>
                  <li>• {box.specs.wifi}</li>
                  <li>• {box.specs.bluetooth}</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Fonctionnalités :</h4>
                <div className="flex flex-wrap gap-2">
                  {box.features.map((feature, index) => (
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
        <h2 className="text-2xl font-bold text-center mb-6">Pourquoi choisir nos Box Android ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="font-semibold mb-2">Performance</h3>
            <p className="text-sm text-muted-foreground">Processeurs puissants pour une expérience fluide</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">📱</div>
            <h3 className="font-semibold mb-2">Android TV</h3>
            <p className="text-sm text-muted-foreground">Interface Android TV optimisée</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🎮</div>
            <h3 className="font-semibold mb-2">Gaming</h3>
            <p className="text-sm text-muted-foreground">Support des jeux Android et streaming</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🔧</div>
            <h3 className="font-semibold mb-2">Support</h3>
            <p className="text-sm text-muted-foreground">Installation et support technique inclus</p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Installation & Configuration Incluses</h2>
        <p className="text-lg mb-6">
          Nous configurons votre Box Android avec toutes vos applications préférées : 
          Netflix, YouTube, IPTV, et bien plus encore !
        </p>
        <Button variant="secondary" size="lg">
          Contactez-nous pour l'installation
        </Button>
      </div>
    </div>
  );
}
