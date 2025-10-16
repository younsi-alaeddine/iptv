import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const iptvPlans = [
  {
    id: 1,
    name: "Abonnement Xtream 3 mois",
    price: "15 TND",
    duration: "3 mois",
    channels: "10,000+ chaînes",
    features: ["HD/4K", "VOD", "Support 24/7"],
    popular: false
  },
  {
    id: 2,
    name: "Abonnement Xtream 12 mois",
    price: "29 TND",
    duration: "12 mois",
    channels: "10,000+ chaînes",
    features: ["HD/4K", "VOD", "Support 24/7", "Multi-device"],
    popular: true
  },
  {
    id: 3,
    name: "Abonnement Matador Pro 12 mois",
    price: "37 TND",
    duration: "12 mois",
    channels: "10,000+ chaînes",
    features: ["HD/4K", "VOD", "Support 24/7", "Multi-device", "EPG"],
    popular: false
  }
];

export default function IPTVPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Abonnements IPTV Premium</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Accédez à plus de 10,000 chaînes du monde entier en HD et 4K. 
          Films, séries, sports et actualités en streaming de qualité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {iptvPlans.map((plan) => (
          <Card key={plan.id} className={`relative ${plan.popular ? 'ring-2 ring-accent' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-primary">
                Plus populaire
              </Badge>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="text-4xl font-bold text-accent">{plan.price}</div>
              <div className="text-sm text-muted-foreground">{plan.duration}</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-lg font-semibold">{plan.channels}</div>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" size="lg">
                Choisir ce plan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-secondary/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Pourquoi choisir nos abonnements IPTV ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-4xl mb-2">📺</div>
            <h3 className="font-semibold mb-2">Qualité HD/4K</h3>
            <p className="text-sm text-muted-foreground">Streaming en haute définition pour une expérience optimale</p>
          </div>
          <div>
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="font-semibold mb-2">Installation rapide</h3>
            <p className="text-sm text-muted-foreground">Configuration en quelques minutes avec support technique</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🔒</div>
            <h3 className="font-semibold mb-2">Connexion sécurisée</h3>
            <p className="text-sm text-muted-foreground">Protection de vos données et streaming stable</p>
          </div>
        </div>
      </div>
    </div>
  );
}
