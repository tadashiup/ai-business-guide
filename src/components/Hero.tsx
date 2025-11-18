import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-hero-from to-hero-to relative">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-badge-bg text-badge-text font-semibold text-sm animate-slide-down">
          Dezembro 2025
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6 tracking-tight">
          IA para<br />Negócios
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          O Guia Prático para Empreender, Automatizar e
          Escalar na Nova Era Digital
        </p>
        
        <div className="animate-bounce mt-16">
          <ArrowDown className="w-12 h-12 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
};
