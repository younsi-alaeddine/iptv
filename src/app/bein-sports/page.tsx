import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const beinPlans = [
  {
    id: 1,
    name: "BeIN Sports 1 Mois",
    price: "25 TND",
    duration: "1 mois",
    channels: "16 chaînes BeIN Sports",
    features: ["Ligue 1", "Champions League", "Liga", "Premier League"],
    popular: false
  },
  {
    id: 2,
    name: "BeIN Sports 3 Mois",
    price: "65 TND",
    duration: "3 mois",
    channels: "16 chaînes BeIN Sports",
    features: ["Ligue 1", "Champions League", "Liga", "Premier League", "F1"],
    popular: true
  },
  {
    id: 3,
    name: "BeIN Sports 12 Mois",
    price: "199 TND",
    duration: "12 mois",
    channels: "16 chaînes BeIN Sports",
    features: ["Tous les sports", "Replay illimité", "Multi-device", "HD/4K"],
    popular: false
  }
];

const sportsEvents = [
  { name: "Ligue 1", description: "Championnat de France", nextMatch: "PSG vs Marseille - 20:00" },
  { name: "Champions League", description: "Ligue des Champions", nextMatch: "Real Madrid vs Barcelone - 21:00" },
  { name: "Premier League", description: "Championnat d'Angleterre", nextMatch: "Manchester United vs Liverpool - 19:30" },
  { name: "Liga", description: "Championnat d'Espagne", nextMatch: "Real Madrid vs Atlético - 22:00" }
];

export default function BeinSportsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">BeIN Sports</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ne ratez aucun match de vos équipes favorites ! 
          Accédez à toutes les chaînes BeIN Sports en HD avec replay et multi-device.
        </p>
      </div>

      <Tabs defaultValue="abonnements" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="abonnements">Abonnements</TabsTrigger>
          <TabsTrigger value="programme">Programme</TabsTrigger>
        </TabsList>

        <TabsContent value="abonnements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beinPlans.map((plan) => (
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
                    S'abonner maintenant
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="programme" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sportsEvents.map((sport, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {sport.name}
                    <Badge variant="secondary">{sport.description}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Prochain match :</div>
                    <div className="font-semibold">{sport.nextMatch}</div>
                  </div>
                  <Button className="mt-4 w-full" variant="outline">
                    Voir le programme complet
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-secondary/50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Chaînes BeIN Sports incluses</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "BeIN Sports 1 HD",
            "BeIN Sports 2 HD", 
            "BeIN Sports 3 HD",
            "BeIN Sports 4 HD",
            "BeIN Sports 5 HD",
            "BeIN Sports 6 HD",
            "BeIN Sports 7 HD",
            "BeIN Sports 8 HD",
            "BeIN Sports 9 HD",
            "BeIN Sports 10 HD",
            "BeIN Sports 11 HD",
            "BeIN Sports 12 HD",
            "BeIN Sports Max 1",
            "BeIN Sports Max 2",
            "BeIN Sports Max 3",
            "BeIN Sports Max 4"
          ].map((channel, index) => (
            <div key={index} className="bg-background p-3 rounded-lg text-center text-sm">
              {channel}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Support Multi-Device</h2>
        <p className="text-lg mb-6">
          Regardez BeIN Sports sur votre TV, tablette, smartphone ou ordinateur. 
          Jusqu'à 3 appareils simultanément avec l'abonnement Premium.
        </p>
        <div className="flex justify-center gap-4 text-4xl">
          📺 📱 💻 🎮
        </div>
      </div>
    </div>
  );
}
