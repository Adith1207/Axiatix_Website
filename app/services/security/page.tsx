"use client";

import { ShieldCheck } from "lucide-react";
import ServiceTemplate from "@/app/components/ServiceTemplate";

export default function SecurityCyberPage() {
  return (
    <ServiceTemplate
      name="Security & Cybersecurity"
      tagline="Protect proactively. Respond intelligently. Stay resilient."
      intro="Safeguard your digital assets with advanced cybersecurity solutions that detect, prevent and respond to evolving threats. From endpoint protection and zero-trust architecture to real-time threat intelligence, we help you secure what matters most."
      icon={ShieldCheck}
      heroHighlight="Protecting Data, Preventing Threats"
      features={[
        {
          title: "AI-powered threat detection & response",
          description:
            "Identify and contain cyber attacks in real time using intelligent threat analytics, automated detection and rapid response orchestration.",
        },
        {
          title: "Zero-trust security architecture",
          description:
            "Implement identity-centric access controls and segmented trust boundaries to eliminate lateral movement and reduce attack surfaces.",
        },
        {
          title: "Data protection & encryption",
          description:
            "Protect sensitive information with end-to-end encryption, secure key management and strong data loss prevention controls.",
        },
        {
          title: "Endpoint & workload protection",
          description:
            "Secure endpoints, servers, cloud workloads and remote environments with continuous monitoring and behavioral analytics.",
        },
        {
          title: "Compliance, audit & risk management",
          description:
            "Achieve regulatory compliance and enforce governance with security policies, audit reporting and risk-based controls.",
        },
      ]}
      outcome="A resilient cybersecurity posture that minimizes risk, ensures compliance and protects your business from both known and emerging threats."
      ctaText="Ready to strengthen cybersecurity?"
      ctaSubtext="Axiatix delivers enterprise-grade protection with proactive monitoring, advanced threat analytics and secure architecture built for modern environments."
    />
  );
}
