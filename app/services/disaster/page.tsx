"use client";

import { Server } from "lucide-react";
import ServiceTemplate from "@/app/components/ServiceTemplate";

export default function DisasterPage() {
  return (
    <ServiceTemplate
      name="Datacenter & Disaster Management"
      tagline="Stay online, stay resilient — even when everything goes wrong."
      intro="Design, secure and operate datacenters that can withstand failures, attacks and unforeseen disruptions. From redundancy and backups to full-scale disaster recovery, we help you protect what matters most."
      icon={Server}
      heroHighlight="Datacenter Resilience & Disaster Recovery"
      features={[
        {
          title: "Resilient datacenter architecture",
          description:
            "Build high-availability environments with redundancy at every layer—power, network, storage and compute—so critical workloads stay online.",
        },
        {
          title: "Business continuity & DR strategy",
          description:
            "Define clear, testable disaster recovery plans aligned to your RPO and RTO targets, ensuring the business can recover quickly from any disruption.",
        },
        {
          title: "Automated backup & replication",
          description:
            "Implement automated, policy-driven backups and multi-region data replication to minimize data loss and accelerate restoration.",
        },
        {
          title: "Integrated security & compliance",
          description:
            "Combine datacenter hardening with security controls, monitoring and auditability to meet regulatory and industry compliance requirements.",
        },
        {
          title: "24/7 monitoring & incident response",
          description:
            "Get always-on monitoring for your critical infrastructure, with alerts, escalation workflows and response playbooks ready when incidents occur.",
        },
      ]}
      outcome="With a resilient datacenter foundation and a tested disaster management strategy, your business stays available, compliant and in control—even when the unexpected happens."
      ctaText="Strengthen your continuity posture now?"
      ctaSubtext="Axiatix helps you design and operate datacenter and disaster recovery solutions that match your risk profile, compliance needs and growth plans."
    />
  );
}
