import { Heart } from "lucide-react";
import Image from "next/image";
import { Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
      

        <div className="w-12 h-px bg-primary-foreground/20 mx-auto" />

        <div className="flex flex-col items-center">
  <a 
    href="https://www.instagram.com/festa_invitaciones/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-3 transition-all"
  >
    <Instagram className="w-5 h-5 text-primary-foreground/50 group-hover:text-primary-foreground/90 transition-colors" strokeWidth={1.5} />
    <p className="text-[9px] tracking-[0.4em] text-primary-foreground/30 uppercase font-bold group-hover:text-primary-foreground/60 transition-colors">
      @festa_invitaciones
    </p>
  </a>
</div>

        <p className="text-[10px] text-primary-foreground/30">
          © {new Date().getFullYear()} Festa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}