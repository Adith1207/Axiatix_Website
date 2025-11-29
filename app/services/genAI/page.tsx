"use client";

import { BrainCircuit } from "lucide-react";
import ServiceTemplate from "@/app/components/ServiceTemplate";

export default function GenerativeAIPage() {
  return (
    <ServiceTemplate
      name="Generative AI"
      tagline="Transform capability through intelligent automation and creative AI-driven innovation."
      intro="Unlock new levels of productivity, creativity and decision-making by integrating Generative AI into business operations. From automated content creation and code generation to conversational interfaces and AI-powered decision support, Generative AI enables accelerated workflows and breakthrough innovation."
      icon={BrainCircuit}
      heroHighlight="Generative AI Solutions"
      features={[
        {
          title: "AI-powered automation & workflow acceleration",
          description:
            "Automate repetitive tasks, document processing, reporting and data enrichment to dramatically reduce time and operational overhead.",
        },
        {
          title: "Conversational AI & virtual assistants",
          description:
            "Deploy advanced chatbots and voice agents that understand context, learn continuously and deliver personalized, human-like support.",
        },
        {
          title: "Content, code & design generation",
          description:
            "Generate high-quality text, marketing assets, UI mockups, presentations and software code faster and more reliably using AI models.",
        },
        {
          title: "Enterprise-grade private LLM deployment",
          description:
            "Build and integrate secure private GPT/LLM systems with full data control, on-prem or cloud hosted with role-based access.",
        },
        {
          title: "AI-driven insights & predictive analytics",
          description:
            "Use generative reasoning and ML models to forecast outcomes, detect anomalies and support smarter decision-making across business functions.",
        },
      ]}
      outcome="Accelerate innovation, reduce operational burden and unlock new business value with secure, scalable and enterprise-ready Generative AI solutions."
      ctaText="Ready to build with AI?"
      ctaSubtext="Axiatix helps you integrate Generative AI into mission-critical workflows—from automation to private LLM deployments."
    />
  );
}
