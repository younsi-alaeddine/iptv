import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const accessories = {
  cables: [
    {
      name: "Câble HDMI 4K 2m",
      price: "25 TND",
      description: "Câble HDMI haute vitesse pour 4K/60fps",
      features: ["4K Ultra HD", "HDR", "Ethernet intégré"],
      image: "/products/iptv.svg"
    },
    {
      name: "Câble HDMI 8K 3m",
      price: "45 TND",
      description: "Câble HDMI 2.1 pour 8K et gaming",
      features: ["8K Ultra HD", "120Hz", "VRR", "ALLM"],
      image: "/products/iptv.svg"
    }
  ],
  controllers: [
    {
      name: "Télécommande Universelle",
      price: "35 TND",
      description: "Télécommande programmable pour toutes vos box",
      features: ["Programmable", "Infrarouge", "Bluetooth"],
      image: "/products/iptv.svg"
    },
    {
      name: "Manette Gaming",
      price: "89 TND",
      description: "Manette sans fil pour gaming sur Android TV",
      features: ["Sans fil", "Vibration", "Rechargeable"],
      image: "/products/iptv.svg"
    }
  ],
  storage: [
    {
      name: "Clé USB 32GB",
      price: "29 TND",
      description: "Clé USB 3.0 pour stockage supplémentaire",
      features: ["32GB", "USB 3.0", "Compacte"],
      image: "/products/iptv.svg"
    },
    {
      name: "Carte MicroSD 64GB",
      price: "45 TND",
      description: "Carte mémoire pour expansion de stockage",
      features: ["64GB", "Classe 10", "Haute vitesse"],
      image: "/products/iptv.svg"
    }
  ]
};

export default function AccessoiresPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Accessoires & Câbles</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Complétez votre installation avec nos accessoires premium. 
          Câbles, télécommandes, stockage et bien plus encore.
        </p>
      </div>

      <Tabs defaultValue="cables" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="cables">Câbles</TabsTrigger>
          <TabsTrigger value="controllers">Télécommandes</TabsTrigger>
          <TabsTrigger value="storage">Stockage</TabsTrigger>
        </TabsList>

        <TabsContent value="cables" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessories.cables.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="aspect-video relative mb-4">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover rounded-lg" 
                      unoptimized 
                    />
                  </div>
                  <CardTitle>{item.name}</CardTitle>
                  <div className="text-2xl font-bold text-accent">{item.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{item.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Caractéristiques :</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">Ajouter au panier</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="controllers" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessories.controllers.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="aspect-video relative mb-4">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover rounded-lg" 
                      unoptimized 
                    />
                  </div>
                  <CardTitle>{item.name}</CardTitle>
                  <div className="text-2xl font-bold text-accent">{item.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{item.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Caractéristiques :</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">Ajouter au panier</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="storage" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessories.storage.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="aspect-video relative mb-4">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover rounded-lg" 
                      unoptimized 
                    />
                  </div>
                  <CardTitle>{item.name}</CardTitle>
                  <div className="text-2xl font-bold text-accent">{item.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{item.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Caractéristiques :</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">Ajouter au panier</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-secondary/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Livraison & Installation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">🚚</div>
            <h3 className="font-semibold mb-2">Livraison Rapide</h3>
            <p className="text-sm text-muted-foreground">Livraison dans toute la Tunisie en 24-48h</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🔧</div>
            <h3 className="font-semibold mb-2">Installation Gratuite</h3>
            <p className="text-sm text-muted-foreground">Installation et configuration incluses</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🛡️</div>
            <h3 className="font-semibold mb-2">Garantie</h3>
            <p className="text-sm text-muted-foreground">Garantie 1 an sur tous nos accessoires</p>
          </div>
        </div>
      </div>
    </div>
  );
}
