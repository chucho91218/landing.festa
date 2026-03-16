import { Hero } from "@/components/hero";
import { Packages } from "@/components/packages";
import { Process } from "@/components/process";
import { Addons } from "@/components/addons";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Packages />
      <Process />
      <Addons />
      <FAQ />
      <Footer />
    </main>
  );
}
