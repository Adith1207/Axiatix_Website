"use client";

import { BarChart3 } from "lucide-react";
import ServiceTemplate from "@/app/components/ServiceTemplate";

export default function CloudCostOptimizationPage() {
  return (
    <ServiceTemplate
      name="Cloud Cost Optimization"
      tagline="Spend smarter. Scale efficiently."
      intro="Maximize cloud value by reducing unnecessary spend, improving resource utilization and aligning cloud investment with real business demand. Our optimization framework blends analytics, automation and architectural tuning to deliver predictable, efficient and cost-effective cloud operations."
      icon={BarChart3}
      heroHighlight="Cloud Cost Optimization"
      features={[
        {
          title: "Cost visibility & analytics",
          description:
            "Gain deep insight into cloud usage, billing patterns and cost drivers with unified dashboards and monitoring.",
        },
        {
          title: "Resource right-sizing & workload efficiency",
          description:
            "Optimize compute, storage, network and licensing footprints based on actual performance and demand.",
        },
        {
          title: "Automated scaling & scheduling",
          description:
            "Reduce waste with smart auto-scaling, workload scheduling and automatic shutdown for non-production resources.",
        },
        {
          title: "FinOps alignment & governance",
          description:
            "Implement financial operations best practices to ensure transparency, accountability and strategic cloud spending.",
        },
        {
          title: "Reserved instances & pricing model optimization",
          description:
            "Use reserved instances, spot pricing and commitment planning to drastically lower operating costs.",
        },
      ]}
      outcome="A cost-efficient, high-performance cloud environment where every resource is measured, optimized and aligned with business value."
      ctaText="Ready to optimize cloud spend?"
      ctaSubtext="Axiatix helps you reduce waste, improve efficiency and build a smarter cloud cost strategy that fuels growth—not overhead."
    />
  );
}
