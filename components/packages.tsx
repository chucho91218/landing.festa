"use client";

import React, { useState } from 'react';
import { Check, ExternalLink, X } from 'lucide-react';

const eventTypes = [
  { id: '15s', label: '15 AÑOS' },
  { id: 'bodas', label: 'BODAS' },
  { id: 'egresados', label: 'EGRESADOS' },
  { id: 'cumpleaños', label: 'CUMPLEAÑOS' },
  { id: 'inauguracion', label: 'INAUGURACIÓN' },
  { id: 'sacramentos', label: 'BAUTISMO/COMUNIÓN' },
];

const allFeatures = [
  "Cuenta regresiva",
  "Ubicación Google Maps",
  "Info de fecha/hora",
  "Dress Code",
  "Galería",
  "Música personalizada",
  "CBU para regalos",
  "Confirmación mediante Whatsapp",
"Nuestra Historia (Hoja de Vida)",
  "Confirmación mediante Excel",
  "QR Social (Subida de fotos)",
];

const packagesData: any = {
  '15s': [
    { name: 'ESENCIAL', price: '$34.000', demoUrl: 'https://15-clasic1-0.vercel.app/', features: ['Portada con foto', 'Cuenta regresiva', 'Ubicación Google Maps', 'Info de fecha/hora', 'Dress Code', 'Galería (4 fotos)'] },
    { name: 'FULL', price: '$46.000', demoUrl: 'https://15-clasic2-0.vercel.app/', features: ['Todo lo del Esencial', 'Música personalizada', 'Galería (6 fotos)', 'CBU para regalos', 'Confirmación inteligente', 'Botón WhatsApp directo'], popular: true },
    { name: 'FULL + QR', price: '$55.000', demoUrl: 'https://15-clasic3-0.vercel.app/', features: ['Todo lo del Full', 'Galería (8 fotos)', 'QR Social (Subida de fotos)', 'Nuestra Historia (Hoja de Vida)'] },
    { name: 'PERSONALIZABLE', price: '$60.000', isCustom: true, features: ['Diseño 100% a medida: Vos definís cómo hacerla', 'Elegí y combiná todas nuestras secciones', 'CONFIRMACIÓN CENTRALIZADA EN EXCEL'] },
  ],
  'bodas': [
    { name: 'ESENCIAL', price: '$34.000', demoUrl: 'https://boda-clasic-1-0.vercel.app/', features: ['Portada con foto', 'Cuenta regresiva', 'Ubicación Google Maps', 'Info de fecha/hora', 'Dress Code', 'Galería (4 fotos)'] },
    { name: 'FULL', price: '$46.000', demoUrl: 'https://boda-clasic-2-0.vercel.app/', features: ['Todo lo del Esencial', 'Música personalizada', 'Galería (6 fotos)', 'CBU para regalos', 'Confirmación inteligente', 'Botón WhatsApp directo'], popular: true },
    { name: 'FULL + QR', price: '$55.000', demoUrl: 'https://boda-clasic-3-0.vercel.app/', features: ['Todo lo del Full', 'Galería (8 fotos)', 'QR Social (Subida de fotos)', 'Nuestra Historia (Hoja de Vida)'] },
    { name: 'PERSONALIZABLE', price: '$60.000', isCustom: true, features: ['Diseño 100% a medida: Vos definís cómo hacerla', 'Elegí y combiná todas nuestras secciones', 'CONFIRMACIÓN CENTRALIZADA EN EXCEL'] },
  ],
  'egresados': [
    { name: 'ESENCIAL', price: '$34.000', demoUrl: 'https://egres-clasic1-0.vercel.app/', features: ['Portada con foto', 'Cuenta regresiva', 'Ubicación Google Maps', 'Info de fecha/hora', 'Dress Code', 'Galería (4 fotos)'] },
    { name: 'FULL', price: '$46.000', demoUrl: 'https://egres-clasic2-0.vercel.app/', features: ['Todo lo del Esencial', 'Música personalizada', 'Galería (6 fotos)', 'CBU para regalos', 'Confirmación inteligente', 'Botón WhatsApp directo'], popular: true },
    { name: 'FULL + QR', price: '$55.000', demoUrl: 'https://egres-clasic3-0.vercel.app/', features: ['Todo lo del Full', 'Galería (8 fotos)', 'QR Social (Subida de fotos)', 'Nuestra Historia (Hoja de Vida)'] },
    { name: 'PERSONALIZABLE', price: '$60.000', isCustom: true, features: ['Diseño 100% a medida: Vos definís cómo hacerla', 'Elegí y combiná todas nuestras secciones', 'CONFIRMACIÓN CENTRALIZADA EN EXCEL'] },
  ],
  'cumpleaños': [
    { name: 'PACK CUMPLEAÑOS', price: '$39.000', demoUrl: '#', features: ['Portada con foto ', 'Cuenta Regresiva', 'Ubicación', 'Dress Code', 'Música de fondo', 'Confirmación a WhatsApp'], popular: true, single: true },
  ],
  'inauguracion': [
    { name: 'PACK APERTURA', price: '$39.000', demoUrl: 'https://demo-inau.vercel.app/', features: ['Portada de marca', 'Info de apertura', 'Ubicación Google Maps', 'Galería "El Proceso"', 'Redes Sociales', 'Música de fondo'], popular: true, single: true },
  ],
  'sacramentos': [
    { name: 'PACK SACRAMENTO', price: '$39.000', demoUrl: '#', features: ['Portada elegante', 'Doble ubicación', 'Info de Padrinos', 'Galería de vida', 'Música suave'], popular: true, single: true },
  ]
};

export const Packages = () => {
  const [activeTab, setActiveTab] = useState('15s');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  const handleWhatsApp = () => {
    const phone = "5493573690769"; 
    const message = encodeURIComponent(
      `¡Hola Festa! 👋 Me interesa el *Pack Personalizable Premium* ($60.000).\n\n` +
      `*Módulos elegidos para mi invitación:*\n` + 
      selectedFeatures.map(f => `- ${f}`).join('\n') +
      `\n\nQuiero la confirmación centralizada en Excel. ¿Cómo procedemos?`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="packages" className="py-24 px-6 bg-background relative">
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-4 font-bold">NUESTROS PAQUETES</p>
        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-12 italic">Elegí tu evento</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {eventTypes.map((type) => (
            <button key={type.id} onClick={() => setActiveTab(type.id)}
              className={`px-6 py-3 text-[10px] font-bold tracking-widest border transition-all ${activeTab === type.id ? 'bg-primary text-background border-primary' : 'bg-transparent text-primary border-primary/20 hover:border-primary'}`}>
              {type.label}
            </button>
          ))}
        </div>

        <div className={`grid gap-6 items-stretch ${packagesData[activeTab].length === 1 ? 'max-w-md mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
          {packagesData[activeTab].map((pkg: any, idx: number) => (
            <div key={idx} className={`relative p-12 border border-primary/10 flex flex-col h-full transition-all ${pkg.popular ? 'bg-[#1a234e] text-white scale-105 z-10 shadow-xl' : 'bg-white text-primary'}`}>
              
              {pkg.popular && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[9px] font-bold tracking-widest uppercase ${pkg.popular && !pkg.single ? 'bg-white text-[#1a234e]' : 'bg-[#1a234e] text-white border border-white/20'}`}>
                  {pkg.single ? 'PAQUETE ÚNICO' : 'MÁS ELEGIDO'}
                </span>
              )}

              {pkg.isCustom && (
                <div className="absolute top-0 right-0 overflow-hidden w-20 h-20">
                  <div className="absolute top-3 -right-8 bg-red-600 text-white text-[10px] font-bold py-1 px-10 rotate-45 shadow-sm">
                    
                  </div>
                </div>
              )}

              <h3 className="text-[11px] font-bold tracking-[0.2em] mb-6 opacity-70 uppercase">{pkg.name}</h3>
              <div className="flex items-center justify-center gap-1 mb-10">
                <span className="text-5xl font-serif">{pkg.price}</span>
                <span className="text-[10px] font-bold opacity-60">ARS</span>
              </div>

              <div className={`h-px w-full mb-10 ${pkg.popular ? 'bg-white/10' : 'bg-primary/10'}`} />

              <ul className="space-y-5 mb-12 flex-grow text-left">
                {pkg.features.map((f: string, i: number) => {
                  const isExcel = f.toUpperCase().includes('EXCEL');
                  return (
                    <li key={i} className="flex items-start gap-3 text-[12px]">
                      <Check size={14} className={`mt-0.5 shrink-0 ${isExcel ? 'text-red-600 opacity-100' : 'opacity-60'}`} />
                      <span className={isExcel ? 'font-bold text-red-600 underline decoration-dotted' : ''}>{f}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto space-y-3">
                <button 
                  onClick={() => pkg.isCustom ? setIsModalOpen(true) : null}
                  className={`w-full py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all ${pkg.popular ? 'bg-white text-primary' : 'bg-primary text-background'}`}>
                  {pkg.isCustom ? 'PERSONALIZAR' : 'PEDIR AHORA'}
                </button>
                
                {pkg.isCustom ? (
                  <div className="h-[46px]" /> 
                ) : (
                  <a href={pkg.demoUrl} target="_blank" className={`w-full py-4 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 border ${pkg.popular ? 'border-white/20 hover:bg-white/10' : 'border-primary/10'} ${pkg.demoUrl === '#' ? 'opacity-30 pointer-events-none' : ''}`}>
                    {pkg.demoUrl === '#' ? 'PRÓXIMAMENTE' : 'VER DEMO'} <ExternalLink size={12} />
                   </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl rounded-sm border border-[#1a234e]/10">
            <div className="p-8 border-b flex justify-between items-center bg-gray-50">
              <div>
                <h2 className="text-2xl font-serif italic text-[#1a234e]">Configurá tu invitación</h2>
                
              </div>
              <button onClick={() => setIsModalOpen(false)}><X size={24} className="text-gray-400 hover:text-[#1a234e] transition-colors" /></button>
            </div>
            
            <div className="p-8 overflow-y-auto flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
              {allFeatures.map(feature => (
                <label key={feature} className={`flex items-center gap-3 p-4 border transition-all cursor-pointer ${selectedFeatures.includes(feature) ? 'border-[#1a234e] bg-blue-50/30 shadow-inner' : 'border-gray-100 hover:border-gray-300'}`}>
                  <input 
                    type="checkbox" 
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                    className="w-4 h-4 accent-[#1a234e]"
                  />
                  <span className="text-[10px] font-bold tracking-widest text-[#1a234e] uppercase">{feature}</span>
                </label>
              ))}
            </div>

            <div className="p-8 border-t bg-white flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="text-left">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Módulos: {selectedFeatures.length}</p>
                <p className="text-xl font-serif text-[#1a234e]">$60.000 <span className="text-[9px] font-sans font-bold italic">ARS</span></p>
              </div>
              <button 
                disabled={selectedFeatures.length === 0}
                onClick={handleWhatsApp}
                className="bg-[#1a234e] text-white px-10 py-5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-red-700 transition-all disabled:opacity-30 disabled:pointer-events-none shadow-lg"
              >
                PEDIR POR WHATSAPP
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};