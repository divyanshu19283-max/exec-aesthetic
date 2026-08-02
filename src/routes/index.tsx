import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSectionVideo } from "@/components/HeroSectionVideo";
import { CloseupGalleryVideo } from "@/components/CloseupGalleryVideo";
import { SpecsSection } from "@/components/SpecsSection";
import { AcquisitionSection } from "@/components/AcquisitionSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <HeroSectionVideo />
      <CloseupGalleryVideo />
      <SpecsSection />
      <AcquisitionSection />
    </main>
  );
}