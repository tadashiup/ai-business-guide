import { Card } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Target } from "lucide-react";

const topics = [
  {
    icon: Lightbulb,
    title: "A Revolução Silenciosa que Já Começou",
    description: "Entenda como a IA está transformando o mercado de forma irreversível"
  },
  {
    icon: TrendingUp,
    title: "Por que a Inteligência Artificial é Inevitável para os Negócios",
    description: "Descubra por que empresas que não adotarem IA ficarão para trás"
  },
  {
    icon: Target,
    title: "Desmistificando a IA: Da Automação Simples à Inteligência Estratégica",
    description: "Aprenda a usar IA de forma prática no seu negócio"
  }
];

export const IntroSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Introdução
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {topic.title}
                </h3>
                <p className="text-muted-foreground">
                  {topic.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
