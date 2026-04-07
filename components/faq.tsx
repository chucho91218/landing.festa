"use client";

import React, { useState } from 'react';
import { ChevronDown, CreditCard, Banknote } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo envío la invitación a mis invitados?",
    answer: "Recibís un link único y personalizado que podés enviar por WhatsApp a todos tus contactos. Es tan simple como copiar y pegar un mensaje."
  },
  {
    question: "¿Debo abonar por cada invitación enviada?",
    answer: "No. Pagás una única vez por el diseño y el servicio. Podés enviarla a la cantidad de personas que quieras sin costos extra; el alcance es ilimitado."
  },
  {
    question: "¿El link tiene vencimiento?",
    answer: "No. La invitación no tiene vencimiento; queda online para que siempre puedas entrar a verla y guardar el recuerdo de tu evento."
  },
  {
    question: "¿Las invitaciones pueden ser sin fotos?",
    answer: "Totalmente. Si preferís no usar fotos, adaptamos el diseño con tipografías elegantes o ilustraciones que mantengan la estética premium de Festa."
  },
  {
    question: "¿La confirmación por Excel está disponible en todos los paquetes?",
    answer: "No. El sistema de confirmación inteligente mediante Excel es exclusivo del Pack Personalizable. En los packs Esencial y Full, la confirmación llega directamente como un mensaje a tu WhatsApp."
  },
  {
    question: "¿Puedo ver quién confirmó su asistencia?",
    answer: "¡Claro! Si elegís el sistema con Excel, vas a tener una lista organizada con nombres, menús especiales (celíacos, veganos, etc.) y mensajes de cada invitado."
  },
  {
    question: "¿Cuánto demora la entrega?",
    answer: "A los 3 días hábiles te mostramos un avance para que revises y corrijamos detalles. Una vez aprobado, la entrega final de la invitación lista es a los 5 días hábiles."
  },
  {
    question: "¿Cuál es la diferencia de precio según el método de pago?",
    answer: "El precio de lista publicado es para transferencia inmediata. Si elegís pagar con tarjeta o en cuotas, el monto es superior debido a las comisiones y costos de financiación de la plataforma de pago."
  },
  {
    question: "¿Qué pasa si hay un cambio de último momento?",
    answer: "No te preocupes. Lo actualizamos al instante. El link de la invitación no cambia, por lo que tus invitados siempre verán la información corregida automáticamente."
  },
  {
    question: "¿Cómo funciona el código QR?",
    answer: "Este código redirige a tus invitados a un Canal o Grupo de Instagram exclusivo de tu fiesta, donde pueden interactuar en la previa, recibir información y subir sus propias fotos y videos el día del evento para compartirlos con todos en tiempo real."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-[#e5e2da]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* COLUMNA IZQUIERDA: MÉTODOS DE PAGO */}
        <div className="lg:sticky lg:top-32">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-4 font-bold">FORMAS DE PAGO</p>
          <h2 className="text-4xl font-serif text-[#1a234e] mb-12 italic">Métodos aceptados</h2>
          
          <div className="space-y-4">
            <div className="bg-white/50 p-6 flex items-start gap-4 border border-white/20">
              <Banknote className="text-[#1a234e] mt-1 shrink-0" size={20} strokeWidth={1.5} />
              <div>
                <h3 className="text-[12px] font-bold tracking-widest uppercase text-[#1a234e]">Transferencia Bancaria</h3>
                <p className="text-sm text-[#1a234e]/70 mt-1 font-medium italic">50% al confirmar y 50% al entregar.</p>
              </div>
            </div>

            <div className="bg-white/50 p-6 flex items-start gap-4 border border-white/20">
              <CreditCard className="text-[#1a234e] mt-1 shrink-0" size={20} strokeWidth={1.5} />
              <div>
                <h3 className="text-[12px] font-bold tracking-widest uppercase text-[#1a234e]">Pago en Cuotas</h3>
                <p className="text-sm text-[#1a234e]/70 mt-1 font-medium italic">Mediante link de pago. El valor final varía según el plan de cuotas.</p>
              </div>
            </div>
          </div>
        </div>

               {/* COLUMNA DERECHA: FAQ */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-4 font-bold">FAQ</p>
          <h2 className="text-4xl font-serif text-[#1a234e] mb-12 italic">Preguntas frecuentes</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/50 border border-white/20"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-start justify-between gap-4 text-left"
                >
                  <span className="text-[12px] font-bold tracking-widest uppercase text-[#1a234e] leading-relaxed">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={16}
                    className={`mt-1 shrink-0 text-[#1a234e] transition-transform duration-500 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-sm text-[#1a234e]/70 leading-relaxed font-medium">
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