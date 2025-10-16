import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const netflixPlans = [
  { name: "Netflix Basic", price: "19 TND/mois", quality: "HD", devices: "1 appareil" },
  { name: "Netflix Standard", price: "25 TND/mois", quality: "HD", devices: "2 appareils" },
  { name: "Netflix Premium", price: "35 TND/mois", quality: "4K", devices: "4 appareils" }
];

const sharingServices = [
  {
    name: "Shahid VIP",
    price: "15 TND/mois",
    description: "Contenu arabe premium - séries, films, documentaires",
    features: ["Séries exclusives", "Films récents", "Documentaires", "Sports"]
  },
  {
    name: "Apollo IPTV",
    price: "25 TND/mois",
    description: "Plateforme de streaming complète avec chaînes internationales",
    features: ["10,000+ chaînes", "VOD illimité", "EPG complet", "Multi-device"]
  }
];

export default function SharingApolloPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Sharing & Apollo</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Partagez vos comptes streaming premium avec vos proches. 
          Économisez jusqu'à 70% sur vos abonnements Netflix, Shahid et autres plateformes.
        </p>
      </div>

      <Tabs defaultValue="netflix" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="netflix">Netflix</TabsTrigger>
          <TabsTrigger value="shahid">Shahid VIP</TabsTrigger>
          <TabsTrigger value="apollo">Apollo IPTV</TabsTrigger>
        </TabsList>

        <TabsContent value="netflix" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {netflixPlans.map((plan, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-center">{plan.name}</CardTitle>
                  <div className="text-center text-2xl font-bold text-accent">{plan.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center space-y-2">
                    <div>Qualité: {plan.quality}</div>
                    <div>Appareils: {plan.devices}</div>
                  </div>
                  <Button className="w-full">Partager ce compte</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="shahid" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sharingServices.filter(s => s.name.includes("Shahid")).map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                  <div className="text-2xl font-bold text-accent">{service.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">S'abonner</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="apollo" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sharingServices.filter(s => s.name.includes("Apollo")).map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                  <div className="text-2xl font-bold text-accent">{service.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">S'abonner</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-secondary/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Comment ça marche ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">1️⃣</div>
            <h3 className="font-semibold mb-2">Choisissez votre service</h3>
            <p className="text-sm text-muted-foreground">Sélectionnez Netflix, Shahid ou Apollo selon vos besoins</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">2️⃣</div>
            <h3 className="font-semibold mb-2">Partagez les coûts</h3>
            <p className="text-sm text-muted-foreground">Divisez le prix entre plusieurs utilisateurs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">3️⃣</div>
            <h3 className="font-semibold mb-2">Profitez ensemble</h3>
            <p className="text-sm text-muted-foreground">Accédez au contenu premium à prix réduit</p>
          </div>
        </div>
      </div>
    </div>
  );
}
