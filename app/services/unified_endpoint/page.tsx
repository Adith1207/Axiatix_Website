"use client";

import { Globe2Icon} from "lucide-react";
import ServiceTemplate from "@/app/components/ServiceTemplate";

export default function UnifiedEndpointManagementPage() {
  return (
    <ServiceTemplate
      name="Unified Endpoint Management"
      tagline="Secure, manage and monitor every device from one place."
      intro="Take full control of all endpoints—from laptops and mobile devices to servers, virtual desktops and IoT systems—with a centralized management framework that improves security, visibility and operational efficiency."
      icon={Globe2Icon}
      heroHighlight="Unified Endpoint Management"
      features={[
        {
          title: "Centralized device administration",
          description:
            "Manage every endpoint across distributed environments from a single unified console with complete visibility and control.",
        },
        {
          title: "Security configuration & policy enforcement",
          description:
            "Apply security baselines, policies and updates consistently across all devices to maintain compliance and reduce risk.",
        },
        {
          title: "Automated patching & updates",
          description:
            "Deploy security patches, OS updates and application upgrades automatically to minimize vulnerabilities and downtime.",
        },
        {
          title: "Real-time monitoring & analytics",
          description:
            "Track device health, performance, usage and compliance status with real-time analytics and actionable insights.",
        },
        {
          title: "Remote troubleshooting & support",
          description:
            "Resolve issues instantly with remote access, diagnostics and automated remediation to ensure uninterrupted productivity.",
        },
      ]}
      outcome="A secure, compliant and fully optimized endpoint ecosystem that improves user experience, reduces operational load and strengthens security posture across the entire organization."
      ctaText="Ready to unify endpoint control?"
      ctaSubtext="Axiatix enables centralized endpoint management to simplify operations, enhance security and maximize performance across your digital workforce."
    />
  );
}
