"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, Menu, X, Send } from "lucide-react";

const navLinks = [
  { name: "Paquetes", href: "#packages" },
  { name: "Proceso", href: "#process" },
  { name: "Beneficios", href: "#addons" },
  { name: "Preguntas", href: "#faq" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-background/90 backdrop-blur-md py-3 border-border" : "bg-transparent py-6 border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <Image 
              src="/logo_transparente.png" 
              alt="Festa Monograma" 
              fill
              className="object-contain group-hover:scale-105 transition-transform"
            />
          </div>
          <span className="text-xl font-serif font-bold tracking-[0.3em] uppercase text-primary hidden md:block">
            festa
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground hover:opacity-50 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://www.instagram.com/festa_invitaciones/" 
            target="_blank" 
            className="hidden sm:block text-primary hover:opacity-60 transition-opacity"
          >
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          
          <a 
            href="https://wa.me/543573690769" 
            target="_blank"
            className="bg-primary text-background px-6 py-2.5 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-primary/90 transition-all flex items-center gap-2"
          >
            Consultar <Send size={10} />
          </a>

          <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border p-8 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-xs uppercase tracking-widest font-bold text-center"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};