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
      {/* El de paquetes ya debe tener el id="packages" adentro, pero por las dudas: */}
      <Packages /> 
      
      <div id="process">
        <Process />
      </div>

      <div id="addons">
        <Addons />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <Footer />
    </main>
  );
}