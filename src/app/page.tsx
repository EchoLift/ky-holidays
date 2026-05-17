import destinations from "../../data/destinations.json";
import hotOffers from "../../data/hot-offers.json";
import packages from "../../data/packages.json";
import reels from "../../data/reels.json";
import testimonials from "../../data/testimonials.json";
import { TravelLanding } from "@/components/travel-landing";

export default function Home() {
  return (
    <TravelLanding
      destinations={destinations}
      hotOffers={hotOffers}
      packages={packages}
      reels={reels}
      testimonials={testimonials}
    />
  );
}
