import ArtGallery from "@/components/HomePage/Gallery";
import HeroSection from "../components/HomePage/HeroSection";


export const metadata = {
  title: 'Reshan - HomePage',
  description: 'Generated by create next app',
}


export default function Home() {
  return (
      <div className="container mt-10 mx-auto">
        <HeroSection />
        <ArtGallery />
      </div>
  );
}
