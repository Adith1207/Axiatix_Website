"use client";

import { Cloud } from "lucide-react";
import ServiceTemplate from "@/app/components/ServiceTemplate";

export default function MultiCloudPage() {
  return (
    <ServiceTemplate
      name="Multi-Cloud Services"
      tagline="Build without boundaries. Scale without limits."
      intro="Operate seamlessly across multiple cloud platforms with the freedom to choose what works best for your business—without getting locked in."
      icon={Cloud}
      heroHighlight="Multi-Cloud Strategy & Execution"
      features={[
        {
          title: "Best-fit platform for every workload",
          description:
            "Run each application where it performs best—public, private or hybrid cloud.",
        },
        {
          title: "Zero-disruption migration",
          description:
            "Move workloads with structured, low-risk transitions and clear playbooks.",
        },
        {
          title: "Unified security & governance",
          description:
            "Apply consistent controls, policies and compliance across all environments.",
        },
        {
          title: "Real-time cost & performance control",
          description:
            "Get continuous insight into usage, spend and performance across providers.",
        },
        {
          title: "Resilience by design",
          description:
            "Build architectures that stay available even if one provider has issues.",
        },
      ]}
      outcome="Freedom to scale, freedom to innovate—without sacrificing control, visibility or reliability."
      ctaText="Ready to rethink your cloud strategy?"
      ctaSubtext="Axiatix helps you design and run a multi-cloud environment that aligns with your growth, compliance and performance goals."
    />
  );
}
