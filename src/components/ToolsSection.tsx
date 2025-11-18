import { Brain, Image, MessageSquare, Sparkles, Video, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const textTools = [
  { name: "ChatGPT", icon: MessageSquare },
  { name: "Jasper", icon: Sparkles },
  { name: "Gemini.AI", icon: Brain },
];

const visualTools = [
  { name: "Canva Magic Studio", icon: Image },
  { name: "Pictory", icon: Video },
  { name: "DALL-E", icon: Zap },
];

export const ToolsSection = () => {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Text Generation Tools */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Para Geração de<br />Texto e Conteúdo
            </h2>
            <div className="space-y-4">
              {textTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-toolCard-bg text-toolCard-text hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">{tool.name}</h3>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Visual Creation Tools */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Para Criação de<br />Imagens e Vídeos
            </h2>
            <div className="space-y-4">
              {visualTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-toolCard-bg text-toolCard-text hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="w-8 h-8" />
                      <h3 className="text-xl font-semibold">{tool.name}</h3>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
