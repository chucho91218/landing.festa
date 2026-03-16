import {
  Share2,
  Zap,
  Tag,
  Palette,
  Infinity,
  Smartphone,
  Wallet,
  Link as LinkIcon,
} from "lucide-react";

const modules = [
  { name: "Fácil de compartir", icon: Share2 },
  { name: "Entrega en 3-5 días hábiles", icon: Zap },
  { name: "Económicas", icon: Tag },
  { name: "Personalizadas", icon: Palette },
  { name: "Envíos ilimitados", icon: Infinity },
  { name: "Funcionales", icon: Smartphone },
  { name: "Sin costos mensuales", icon: Wallet },
  { name: "Enlace permanente", icon: LinkIcon },
];

export function Addons() {
  return (
    <section id="addons" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary tracking-tight">
            Sus beneficios
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <div
                key={module.name}
                className="group p-8 border border-border hover:border-primary transition-all duration-300 text-center bg-white/50"
              >
                <Icon 
                  strokeWidth={1.2} 
                  className="w-8 h-8 mx-auto mb-5 text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all" 
                />
                <p className="text-sm font-medium text-primary/80">
                  {module.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}