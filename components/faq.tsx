"use client";

import React, { useState } from 'react';
import { ChevronDown, CreditCard, Banknote } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuánto tiempo tarda la entrega?",
    answer: "Una vez que nos envíes toda la información y fotos, la invitación estará lista en un plazo de 3 a 5 días hábiles."
  },
  {
    question: "¿Puedo hacer cambios después de la entrega?",
    answer: "¡Claro! Tenés una instancia de revisión para corregir cualquier detalle de texto o fotos antes del lanzamiento final."
  },
  {
    question: "¿Cómo comparten mis invitados la confirmación?",
    answer: "Los invitados completan un formulario en la invitación y la confirmación te llega directo a tu WhatsApp o a una planilla de Excel, según tu pack."
  },
  {
    question: "¿La invitación funciona en todos los dispositivos?",
    answer: "Sí, nuestras invitaciones son 100% responsivas. Se ven perfectas en cualquier celular, tablet o computadora."
  },
  {
    question: "¿Por cuánto tiempo estará activa mi invitación?",
    answer: "La invitación permanecerá online hasta 30 días después de finalizado el evento."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-[#e5e2da]"> {/* Color de fondo de la captura */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* COLUMNA IZQUIERDA: MÉTODOS DE PAGO */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-4 font-bold">FORMAS DE PAGO</p>
          <h2 className="text-4xl font-serif text-[#1a234e] mb-12 italic">Métodos aceptados</h2>
          
          <div className="space-y-4">
            {/* Transferencia */}
            <div className="bg-white/50 p-6 flex items-start gap-4 border border-white/20">
              <Banknote className="text-[#1a234e] mt-1 shrink-0" size={20} strokeWidth={1.5} />
              <div>
                <h3 className="text-[12px] font-bold tracking-widest uppercase text-[#1a234e]">Transferencia Bancaria</h3>
                <p className="text-sm text-[#1a234e]/70 mt-1 font-medium">50% al confirmar y 50% al entregar.</p>
              </div>
            </div>

            {/* Cuotas */}
            <div className="bg-white/50 p-6 flex items-start gap-4 border border-white/20">
              <CreditCard className="text-[#1a234e] mt-1 shrink-0" size={20} strokeWidth={1.5} />
              <div>
                <h3 className="text-[12px] font-bold tracking-widest uppercase text-[#1a234e]">Pago en Cuotas</h3>
                <p className="text-sm text-[#1a234e]/70 mt-1 font-medium">Se abona al finalizar o al entregar la invitación.</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: FAQ */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-4 font-bold">FAQ</p>
          <h2 className="text-4xl font-serif text-[#1a234e] mb-12 italic">Preguntas frecuentes</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
                >
                  <span className="text-[13px] font-medium text-[#1a234e]">{faq.question}</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-[#1a234e] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 border-t' : 'max-h-0'}`}>
                  <p className="p-5 text-sm text-[#1a234e]/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};