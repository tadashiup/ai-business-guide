import { Card } from "@/components/ui/card";

export const RevolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-5xl mx-auto">
        <Card className="p-12 bg-card border-primary/20 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              A REVOLUÇÃO SILENCIOSA<br />JÁ COMEÇOU
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              Bem-vindo à nova fronteira do empreendedorismo. Se você está lendo
              este guia, é provável que sinta uma mistura de curiosidade, entusiasmo
              e talvez uma ponta de apreensão sobre o termo que domina as
              manchetes e as estratégias corporativas: <span className="text-primary font-semibold">Inteligência Artificial</span>.
            </p>
            
            <p>
              Longe de ser um conceito futurista reservado a laboratórios de pesquisa e
              gigantes do Vale do Silício, a IA já se infiltrou no tecido dos negócios
              modernos, operando silenciosamente nos bastidores para criar
              vencedores e deixar os despreparados para trás.
            </p>
            
            <div className="bg-primary/10 p-8 rounded-lg border-l-4 border-primary my-8">
              <p className="text-xl font-semibold text-foreground italic">
                "Ignorar a Inteligência Artificial hoje é o equivalente empresarial a
                recusar-se a ter um site no início dos anos 2000 ou a ignorar as redes
                sociais em 2010."
              </p>
            </div>
            
            <p>
              A IA deixou de ser uma vantagem competitiva para se tornar um{" "}
              <span className="text-primary font-semibold">requisito fundamental</span> para
              a sobrevivência e o sucesso no mercado contemporâneo. A razão é
              simples: ela ataca os pilares centrais de qualquer negócio – eficiência,
              crescimento e tomada de decisão – com uma precisão e escala sobre-humanas.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
