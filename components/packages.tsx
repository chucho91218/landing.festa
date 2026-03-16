"use client";

import React, { useState } from 'react';
import { Check, ExternalLink } from 'lucide-react';

const eventTypes = [
  { id: '15s', label: '15 AÑOS' },
  { id: 'bodas', label: 'BODAS' },
  { id: 'cumpleaños', label: 'CUMPLEAÑOS' },
  { id: 'egresados', label: 'EGRESADOS' },
  { id: 'inauguracion', label: 'INAUGURACIÓN' },
  { id: 'sacramentos', label: 'BAUTISMO/COMUNIÓN/CONFIRMACIÓN' },
];

const packagesData: any = {
  '15s': [
    { name: 'ESENCIAL', price: '$33.000', demoUrl: 'https://egres-clasic1-0.vercel.app/', features: ['Portada con foto', 'Cuenta regresiva', 'Ubicación Google Maps', 'Info de fecha/hora', 'Dress Code', 'Galería (4 fotos)'] },
    { name: 'FULL', price: '$44.000', demoUrl: 'https://15-clasic2-0.vercel.app/', features: ['Todo lo del Esencial', 'Música personalizada', 'Galería (6 fotos)', 'CBU para regalos', 'Confirmación inteligente', 'Botón WhatsApp directo'], popular: true },
    { name: 'FULL + QR', price: '$53.000', demoUrl: 'https://boda-clasic-3-0.vercel.app/', features: ['Todo lo del Full', 'Galería ilimitada', 'Trivia interactiva', 'QR Social'] },
  ],
  'bodas': [
    { name: 'ESENCIAL', price: '$33.000', demoUrl: 'https://egres-clasic1-0.vercel.app/', features: ['Portada con foto', 'Cuenta regresiva', 'Ubicación Google Maps', 'Info de fecha/hora', 'Dress Code', 'Galería (4 fotos)'] },
    { name: 'FULL', price: '$44.000', demoUrl: 'https://15-clasic2-0.vercel.app/', features: ['Todo lo del Esencial', 'Música personalizada', 'Galería (6 fotos)', 'CBU para regalos', 'Confirmación inteligente', 'Botón WhatsApp directo'], popular: true },
    { name: 'FULL + QR', price: '$53.000', demoUrl: 'https://boda-clasic-3-0.vercel.app/', features: ['Todo lo del Full', 'Galería ilimitada', 'Trivia interactiva', 'QR Social'] },
  ],
  'cumpleaños': [
    { name: 'PACK CUMPLEAÑOS', price: '$38.000', demoUrl: 'https://15-clasic2-0.vercel.app/', features: ['Portada con foto ', 'Cuenta Regresiva', 'Ubicación', 'Dress Code', 'Música de fondo', 'Confirmación a WhatsApp'], popular: true, single: true },
  ],
  'egresados': [
    { name: 'ESENCIAL', price: '$33.000', demoUrl: 'https://egres-clasic1-0.vercel.app/', features: ['Portada con foto', 'Cuenta regresiva', 'Ubicación Google Maps', 'Info de fecha/hora', 'Dress Code', 'Galería (4 fotos)'] },
    { name: 'FULL', price: '$44.000', demoUrl: 'https://15-clasic2-0.vercel.app/', features: ['Todo lo del Esencial', 'Música personalizada', 'Galería (6 fotos)', 'CBU para regalos', 'Confirmación inteligente', 'Botón WhatsApp directo'], popular: true },
    { name: 'FULL + QR', price: '$53.000', demoUrl: 'https://boda-clasic-3-0.vercel.app/', features: ['Todo lo del Full', 'Galería ilimitada', 'Trivia interactiva', 'QR Social'] },
  ],
  'inauguracion': [
    { name: 'PACK APERTURA', price: '$38.000', demoUrl: 'https://boda-clasic-3-0.vercel.app/', features: ['Portada de marca', 'Info de apertura', 'Ubicación Google Maps', 'Galería "El Proceso"', 'Redes Sociales', 'Música de fondo'], popular: true, single: true },
  ],
  'sacramentos': [
    { name: 'PACK SACRAMENTO', price: '$38.000', demoUrl: 'https://egres-clasic1-0.vercel.app/', features: ['Portada elegante', 'Doble ubicación', 'Info de Padrinos', 'Galería de vida', 'Música suave'], popular: true, single: true },
  ]
};

export const Packages = () => {
  const [activeTab, setActiveTab] = useState('15s');

  return (
    <section id="packages" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        
        <p className="text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-4 font-bold">NUESTROS PAQUETES</p>
        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-12">Elegí tu evento</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {eventTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`px-6 py-3 text-[10px] font-bold tracking-widest border transition-all ${
                activeTab === type.id 
                ? 'bg-primary text-background border-primary' 
                : 'bg-transparent text-primary border-primary/20 hover:border-primary'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className={`grid gap-6 ${packagesData[activeTab].length === 1 ? 'max-w-md mx-auto' : 'md:grid-cols-3'}`}>
          {packagesData[activeTab].map((pkg: any, idx: number) => (
            <div 
              key={idx} 
              className={`relative p-12 border border-primary/10 flex flex-col transition-all ${pkg.popular ? 'bg-primary text-background' : 'bg-white text-primary'}`}
            >
              {pkg.popular && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[9px] font-bold tracking-widest uppercase ${pkg.popular && !pkg.single ? 'bg-white text-primary border border-primary/10' : 'bg-primary text-background'}`}>
                  {pkg.single ? 'PAQUETE ÚNICO' : 'MÁS ELEGIDO'}
                </span>
              )}

              <div className="mb-10">
                <h3 className="text-[11px] font-bold tracking-[0.2em] mb-6 opacity-70 uppercase">{pkg.name}</h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-5xl font-serif">{pkg.price}</span>
                  <span className="text-[10px] font-bold opacity-60">ARS</span>
                </div>
              </div>

              <div className="h-px w-full bg-current opacity-10 mb-10" />

              <ul className="space-y-5 mb-12 flex-grow text-left">
                {pkg.features.map((feature: string, fIdx: number) => (
                  <li key={fIdx} className="flex items-start gap-3 text-[12px] leading-relaxed">
                    <Check size={14} className="mt-0.5 shrink-0 opacity-60" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Advertencia de Demo */}
              <p className="text-[9px] leading-tight opacity-50 mb-6 text-left italic">
                * Las demos son modelos ilustrativos. Aunque el contenido pueda corresponder a otro evento, reflejan todas las características del paquete. Luego se personaliza 100% para tu celebración.
              </p>

              <div className="space-y-3">
                <button className={`w-full py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all ${
                  pkg.popular ? 'bg-white text-primary hover:bg-opacity-90' : 'bg-primary text-background hover:opacity-90'
                }`}>
                  ELEGIR PAQUETE
                </button>
                <a 
                  href={pkg.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 border transition-all ${
                  pkg.popular ? 'border-white/20 hover:bg-white/10' : 'border-primary/10 hover:bg-primary/5'
                }`}>
                  VER DEMO <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};