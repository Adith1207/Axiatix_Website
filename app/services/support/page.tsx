"use client";

import { Headset } from "lucide-react";
import ServiceTemplate from "@/app/components/ServiceTemplate";

export default function Support24x7Page() {
  return (
    <ServiceTemplate
      name="Support 24/7"
      tagline="Always available. Always ready."
      intro="Ensure uninterrupted business operations with round-the-clock support that keeps your technology running smoothly at any hour. Our dedicated support teams provide real-time assistance, rapid problem resolution and proactive monitoring—so your business never stops."
      icon={Headset}
      heroHighlight="Support 24/7"
      features={[
        {
          title: "Instant response at any hour",
          description:
            "Get direct access to expert engineers anytime—day, night, weekends and holidays.",
        },
        {
          title: "Proactive issue detection",
          description:
            "Identify and resolve problems before they affect users or business operations.",
        },
        {
          title: "Multi-channel support",
          description:
            "Reach us via phone, email, ticketing system or live chat for faster resolution.",
        },
        {
          title: "SLA-driven service commitments",
          description:
            "Guaranteed response and resolution timelines aligned to your business criticality.",
        },
        {
          title: "Dedicated escalation & incident management",
          description:
            "Structured escalation paths and coordinated response to minimize downtime and disruption.",
        },
      ]}
      outcome="Peace of mind and uninterrupted business continuity with reliable, real-time support—where experts are always available when you need them."
      ctaText="Ready to get always-available support?"
      ctaSubtext="Axiatix delivers 24/7 operational support to keep your business running without interruptions."
    />
  );
}
