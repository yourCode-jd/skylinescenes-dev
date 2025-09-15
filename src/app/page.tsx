import About from "@/components/shared/home/About";
import Blogs from "@/components/shared/home/Blogs";
import CanvasDisplay from "@/components/shared/home/CanvasDisplay";
import ChooseProduct from "@/components/shared/home/ChooseProduct";
import Features from "@/components/shared/home/Features";
import Gallery from "@/components/shared/home/Gallery";
import Hero from "@/components/shared/home/Hero";
import Newsletter from "@/components/shared/home/Newsletter";
import Offer from "@/components/shared/home/Offer";
import Sell from "@/components/shared/home/Sell";

export default function Home() {
  return (
    <main>
      <Hero />
      <Offer />
      <CanvasDisplay />
      <Gallery />
      <Features />
      <ChooseProduct />
      <About />
      <Sell />
      <Blogs />
      <Newsletter />
    </main>
  );
}
