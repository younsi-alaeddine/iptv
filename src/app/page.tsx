import dynamic from "next/dynamic";

// Lazy load des composants pour améliorer les performances
const Hero = dynamic(() => import("@/components/site/Hero").then(mod => ({ default: mod.Hero })), {
  loading: () => <div className="h-[50vh] md:h-[70vh] bg-gray-100 rounded-2xl animate-pulse" />
});

const BestOfWeek = dynamic(() => import("@/components/site/BestOfWeek").then(mod => ({ default: mod.BestOfWeek })), {
  loading: () => <div className="h-96 bg-gray-100 rounded-2xl animate-pulse" />
});

const NewArrivals = dynamic(() => import("@/components/site/NewArrivals").then(mod => ({ default: mod.NewArrivals })), {
  loading: () => <div className="h-96 bg-gray-100 rounded-2xl animate-pulse" />
});

const SharingApollo = dynamic(() => import("@/components/site/SharingApollo").then(mod => ({ default: mod.SharingApollo })), {
  loading: () => <div className="h-96 bg-gray-100 rounded-2xl animate-pulse" />
});

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-10">
      <Hero />
      <BestOfWeek />
      <NewArrivals />
      <SharingApollo />
    </div>
  );
}
