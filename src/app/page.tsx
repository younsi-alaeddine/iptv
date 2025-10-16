import { Hero } from "@/components/site/Hero";
import { BestOfWeek } from "@/components/site/BestOfWeek";
import { NewArrivals } from "@/components/site/NewArrivals";
import { SharingApollo } from "@/components/site/SharingApollo";

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
