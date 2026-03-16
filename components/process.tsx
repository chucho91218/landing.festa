const steps = [
  {
    number: "01",
    title: "Elegí un paquete",
    description: "Seleccioná el paquete que mejor se adapte a tu evento y estilo.",
  },
  {
    number: "02",
    title: "Completá el Formulario",
    description: "Envianos los datos de tu evento, fotos y preferencias de diseño.",
  },
  {
    number: "03",
    title: "Revisión y Ajustes",
    description: "En 3 días hábiles tendrás una vista previa para revisar y ajustar.",
  },
  {
    number: "04",
    title: "Entrega Final",
    description: "Recibí tu link personalizado listo para compartir con tus invitados.",
  },
];

export function Process() {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Proceso Simple
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            Tu invitación lista en 4 pasos
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-border" />
              )}
              
              <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 mb-6 border border-primary bg-background">
                <span className="font-serif text-lg">{step.number}</span>
              </div>
              
              <h3 className="font-serif text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
