"use client";

import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToPackages = () => {
    // Usamos "packages" para que coincida con el ID de tu Header
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
          Invitaciones Web
        </p>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
          Una invitación única para un momento único
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
          Sorprendé a tus invitados.
        </p>
      </div>
      
      {/* Flecha azul animada y con scroll funcional al hacer clic */}
      <button 
        onClick={scrollToPackages}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <ChevronDown className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" strokeWidth={1} />
      </button>
    </section>
  );
}