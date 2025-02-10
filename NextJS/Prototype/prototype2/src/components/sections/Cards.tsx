import { Bot, MessageSquare, Search, Zap } from "lucide-react";
import React from "react";

export default function HeroCards() {
  const HeroCards = [
    {
      icon: <Bot className="w-12 h-12 text-[#4237d9]" />,
      title: "Flexible Options",
      description: "Choose from OpenSource AI Agent SDK's or opt for fully specialized vertical agents from our curated inventory.",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-[#d34457]" />,
      title: "Tailored Solutions",
      description: "Leverage industry-specific AI agents that understand your unique challenges or simply request a custom Agent",
    },
    {
      icon: <Zap className="w-12 h-12 text-[#37d9a3]" />,
      title: "Agents As a Service",
      description: "Get cutting-edge agents as React components for the web or simply access API in dashboard.",
    },
    {
      icon: <Search className="w-12 h-12 text-[#1c9251]" />,
      title: "Get Started Today",
      description: "Join the ranks of industry leaders who are already accelerating innovation and boosting efficiency worldwide with Agentia World.",
    },
  ];

  return (
    <div className="mt-8 sm:mt-12 lg:mt-16">
      <div className="relative mx-auto max-w-7xl md:max-w-none px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 mx-auto">
          {HeroCards.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-[#eff0f3] rounded-none p-6 sm:p-8 transition-all transform hover:scale-105 border-animation flex flex-col items-center space-y-2 animate-pulse animate-once animate-ease-linear"
            >
              <div>{feature.icon}</div>
              <div className="relative w-full">
                <h2 className="text-black sm:text-lg font-bold text-center">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm text-[#232946] text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
