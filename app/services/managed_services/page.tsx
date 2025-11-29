"use client";

import { Cpu } from "lucide-react";
import ServiceTemplate from "@/app/components/ServiceTemplate";

export default function ManagedServicesPage() {
  return (
    <ServiceTemplate
      name="Managed Services"
      tagline="Operate smarter. Focus on growth, not maintenance."
      intro="Offload the complexity of managing IT operations, infrastructure and applications to trusted experts, so your team can focus on innovation and business outcomes — not daily firefights."
      icon={Cpu}
      heroHighlight="Empowering Your Team for Success"
      features={[
        {
          title: "Proactive monitoring & issue prevention",
          description:
            "Identify and resolve issues before they impact performance or availability with 24/7 monitoring and automated alerting.",
        },
        {
          title: "End-to-end infrastructure management",
          description:
            "Comprehensive support across servers, storage, networking, security and cloud — keeping environments optimized and compliant.",
        },
        {
          title: "Application & workload management",
          description:
            "Ensure your business-critical applications run reliably with optimized performance, patching and lifecycle management.",
        },
        {
          title: "Cost efficiency & resource optimization",
          description:
            "Reduce operational overhead and maximize ROI through workload efficiency tuning, scaling strategies and usage insights.",
        },
        {
          title: "Dedicated support & SLA-driven delivery",
          description:
            "Get guaranteed availability, structured response workflows and expert support aligned with your business priorities.",
        },
      ]}
      outcome="A fully optimized, continuously monitored and expertly managed IT landscape — enabling predictable performance, lower risk and improved productivity."
      ctaText="Ready to optimize operations?"
      ctaSubtext="Axiatix provides fully managed service frameworks that enhance efficiency, reduce cost and accelerate innovation."
    />
  );
}
