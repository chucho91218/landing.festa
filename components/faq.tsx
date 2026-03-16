"use client";

import { useState } from "react";
import { ChevronDown, CreditCard, Banknote } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda la entrega?",
    answer:
      "Tu invitación estará lista en 3 días hábiles después de recibir toda la información y materiales necesarios.",
  },
  {
    question: "¿Puedo hacer cambios después de la entrega?",
    answer:
      "Sí, incluimos una ronda de ajustes menores sin costo adicional. Cambios mayores tienen un costo extra.",
  },
  {
    question: "¿Cómo comparten mis invitados la confirmación?",
    answer:
      "Tu invitación incluye un formulario de confirmación inteligente que registra automáticamente las respuestas.",
  },
  {
    question: "¿La invitación funciona en todos los dispositivos?",
    answer:
      "Sí, todas nuestras invitaciones son 100% responsivas y funcionan perfectamente en móviles, tablets y computadoras.",
  },
  {
    question: "¿Por cuánto tiempo estará activa mi invitación?",
    answer:
      "Tu invitación permanecerá activa durante 1 año completo desde la fecha de entrega.",
  },
];

const paymentMethods = [
  { name: "Transferencia Bancaria ", icon: Banknote },
  { name: "Mercado Pago", icon: CreditCard },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Payment Methods */}
          <div>
            <div className="mb-8 space-y-4">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Formas de Pago
              </p>
              <h2 className="font-serif text-2xl md:text-3xl">
                Métodos aceptados
              </h2>
            </div>

            <div className="space-y-4">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.name}
                    className="flex items-center gap-4 p-4 border border-border bg-background"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm">{method.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="mb-8 space-y-4">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
                FAQ
              </p>
              <h2 className="font-serif text-2xl md:text-3xl">
                Preguntas frecuentes
              </h2>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border bg-background">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="text-sm pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
