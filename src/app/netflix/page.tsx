import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const netflixPlans = [
  {
    id: 1,
    name: "Netflix Basic",
    price: "19 TND",
    duration: "par mois",
    quality: "HD (720p)",
    devices: "1 appareil",
    downloads: "1 téléchargement",
    popular: false
  },
  {
    id: 2,
    name: "Netflix Standard",
    price: "25 TND",
    duration: "par mois",
    quality: "Full HD (1080p)",
    devices: "2 appareils",
    downloads: "2 téléchargements",
    popular: true
  },
  {
    id: 3,
    name: "Netflix Premium",
    price: "35 TND",
    duration: "par mois",
    quality: "Ultra HD (4K)",
    devices: "4 appareils",
    downloads: "6 téléchargements",
    popular: false
  }
];

const netflixContent = [
  {
    category: "Séries populaires",
    items: ["Stranger Things", "The Witcher", "Bridgerton", "Ozark", "The Crown"]
  },
  {
    category: "Films récents",
    items: ["Glass Onion", "The Gray Man", "Red Notice", "Don't Look Up", "Extraction 2"]
  },
  {
    category: "Documentaires",
    items: ["Tiger King", "The Social Dilemma", "Our Planet", "Making a Murderer", "The Last Dance"]
  }
];

export default function NetflixPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="mb-6">
          <div className="inline-block p-4 bg-black rounded-lg">
            <span className="text-red-600 text-6xl font-bold">NETFLIX</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-primary mb-4">Abonnements Netflix</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Accédez à la plus grande bibliothèque de films et séries au monde. 
          Streaming illimité, sans publicité, sur tous vos appareils.
        </p>
      </div>

      <Tabs defaultValue="abonnements" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="abonnements">Abonnements</TabsTrigger>
          <TabsTrigger value="contenu">Contenu</TabsTrigger>
        </TabsList>

        <TabsContent value="abonnements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {netflixPlans.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.popular ? 'ring-2 ring-accent' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-primary">
                    Recommandé
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-accent">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.duration}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-center">
                    <div>Qualité: {plan.quality}</div>
                    <div>Appareils: {plan.devices}</div>
                    <div>Téléchargements: {plan.downloads}</div>
                  </div>
                  <Button className="w-full" size="lg">
                    Commencer l'essai gratuit
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contenu" className="space-y-6">
          {netflixContent.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="bg-secondary/50 p-3 rounded-lg text-center text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      <div className="bg-secondary/50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Avantages Netflix</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">📱</div>
            <h3 className="font-semibold mb-2">Multi-Device</h3>
            <p className="text-sm text-muted-foreground">Regardez sur TV, tablette, smartphone</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">⬇️</div>
            <h3 className="font-semibold mb-2">Téléchargement</h3>
            <p className="text-sm text-muted-foreground">Téléchargez pour regarder hors ligne</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">👥</div>
            <h3 className="font-semibold mb-2">Profils</h3>
            <p className="text-sm text-muted-foreground">Jusqu'à 5 profils personnalisés</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🚫</div>
            <h3 className="font-semibold mb-2">Sans Pub</h3>
            <p className="text-sm text-muted-foreground">Contenu sans interruption publicitaire</p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Essai Gratuit 30 Jours</h2>
        <p className="text-lg mb-6">
          Commencez votre essai gratuit dès maintenant. Aucun engagement, 
          annulez quand vous voulez.
        </p>
        <Button variant="secondary" size="lg">
          Commencer l'essai gratuit
        </Button>
      </div>
    </div>
  );
}
