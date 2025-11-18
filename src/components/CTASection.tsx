import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-hero-gradient-start">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como a inteligência artificial pode revolucionar sua empresa e aumentar sua produtividade.
          </p>
          <Button 
            asChild
            size="lg"
            className="text-lg px-8 py-6 h-auto font-semibold"
          >
            <a 
              href="https://pay.kirvano.com/1f4e69ab-3303-4b45-a6a4-03766304d0e3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dê o próximo passo da sua jornada digital
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
