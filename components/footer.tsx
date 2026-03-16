import { Heart } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        {/* Logo Festa en el Footer */}
        <div className="flex justify-center">
          <Image
            src="/festa_transparente.png"
            alt="Festa Logo"
            width={160}
            height={60}
            className="brightness-0 invert opacity-90" 
          />
        </div>

        <div className="w-12 h-px bg-primary-foreground/20 mx-auto" />

        <div className="space-y-2">
          <p className="text-sm text-primary-foreground/70 flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 fill-current text-red-300" /> por Festa
          </p>
          <p className="text-[10px] tracking-widest text-primary-foreground/40 uppercase">
            Diseño exclusivo para eventos
          </p>
        </div>

        <p className="text-[10px] text-primary-foreground/30">
          © {new Date().getFullYear()} Festa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}