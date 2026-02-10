/**
 * Pre-built synthetic identities for 4 Vero Financial roles.
 * Each identity is tailored to match the target role's requirements.
 */
window.IDENTITIES = {
    "sr-sw-engineer": {
        name: "Marcus Wei Chen",
        initials: "MC",
        color: "#3B82F6",
        headline: "Senior Software Engineer — Platform Infrastructure",
        location: "San Francisco, CA",
        email: "m.chen.dev@protonmail.com",
        phone: "(415) 555-0147",
        linkedin: "linkedin.com/in/marcuswchen",
        summary: "Platform infrastructure engineer with 8+ years building scalable distributed systems for fintech companies. Deep expertise in cloud-native architecture, Kubernetes orchestration, and PCI-DSS compliant infrastructure. Passionate about developer experience and CI/CD pipeline optimization.",
        keywords: ["Kubernetes", "PCI-DSS", "CI/CD", "distributed systems", "cloud-native", "infrastructure"],
        experience: [
            {
                company: "Stripe",
                logo: "stripe",
                title: "Senior Platform Engineer",
                period: "2021 — 2024",
                bullets: [
                    "Led migration of 200+ microservices to Kubernetes, reducing deployment time by 73%",
                    "Designed PCI-DSS Level 1 compliant infrastructure serving 50M+ daily transactions",
                    "Built internal developer platform used by 400+ engineers across 12 teams"
                ]
            },
            {
                company: "Plaid",
                logo: "plaid",
                title: "Infrastructure Engineer",
                period: "2018 — 2021",
                bullets: [
                    "Architected multi-region AWS deployment with 99.99% uptime SLA",
                    "Implemented zero-downtime deployment pipeline processing 2B+ API calls/month",
                    "Reduced infrastructure costs by 40% through auto-scaling optimization"
                ]
            },
            {
                company: "Cloudflare",
                logo: null,
                title: "Software Engineer",
                period: "2016 — 2018",
                bullets: [
                    "Developed edge computing modules handling 25M+ requests/second",
                    "Contributed to open-source service mesh tooling (2.4K GitHub stars)"
                ]
            }
        ],
        skills: [
            { name: "AWS / GCP", matched: true },
            { name: "Kubernetes", matched: true },
            { name: "Terraform", matched: true },
            { name: "PCI-DSS", matched: true },
            { name: "CI/CD", matched: true },
            { name: "Go", matched: false },
            { name: "Python", matched: false },
            { name: "Docker", matched: true },
            { name: "PostgreSQL", matched: false },
            { name: "gRPC", matched: false },
            { name: "Datadog", matched: false },
            { name: "Kafka", matched: false }
        ],
        education: {
            degree: "B.S. Computer Science",
            school: "UC Berkeley",
            year: "2016"
        },
        certifications: ["AWS Solutions Architect Professional", "CKA (Certified Kubernetes Administrator)"]
    },

    "staff-security": {
        name: "Sarah J. Kim",
        initials: "SK",
        color: "#8B5CF6",
        headline: "Staff Engineer, Security — Detection & Response",
        location: "Seattle, WA",
        email: "s.kim.sec@protonmail.com",
        phone: "(206) 555-0293",
        linkedin: "linkedin.com/in/sarahjkim-sec",
        summary: "Security engineering leader with 10+ years defending enterprise environments against advanced persistent threats. Expertise in Zero Trust architecture, threat modeling, and building detection platforms at scale. Led security teams through multiple SOC 2 and FedRAMP audits.",
        keywords: ["Zero Trust", "threat modeling", "SIEM", "red team", "SOC 2", "detection"],
        experience: [
            {
                company: "CrowdStrike",
                logo: "crowdstrike",
                title: "Principal Security Engineer",
                period: "2021 — 2024",
                bullets: [
                    "Architected Zero Trust framework adopted by 150+ enterprise customers",
                    "Built real-time threat detection pipeline processing 1T+ events/day",
                    "Led red team exercises identifying critical vulnerabilities in Fortune 500 clients"
                ]
            },
            {
                company: "Mandiant",
                logo: null,
                title: "Senior Threat Analyst",
                period: "2018 — 2021",
                bullets: [
                    "Led incident response for 30+ nation-state APT investigations",
                    "Developed threat intelligence platform reducing MTTD by 60%",
                    "Published 4 threat research papers cited by CISA advisories"
                ]
            },
            {
                company: "Palo Alto Networks",
                logo: null,
                title: "Security Engineer",
                period: "2014 — 2018",
                bullets: [
                    "Built SIEM correlation rules detecting lateral movement patterns",
                    "Automated SOC workflows reducing false positive rate by 45%"
                ]
            }
        ],
        skills: [
            { name: "Zero Trust", matched: true },
            { name: "Threat Modeling", matched: true },
            { name: "SIEM / SOAR", matched: true },
            { name: "Red Teaming", matched: true },
            { name: "Incident Response", matched: false },
            { name: "Python", matched: false },
            { name: "Splunk", matched: true },
            { name: "MITRE ATT&CK", matched: false },
            { name: "SOC 2", matched: true },
            { name: "FedRAMP", matched: false },
            { name: "AWS Security", matched: false },
            { name: "Terraform", matched: false }
        ],
        education: {
            degree: "M.S. Cybersecurity",
            school: "Georgia Institute of Technology",
            year: "2014"
        },
        certifications: ["CISSP", "OSCP (Offensive Security Certified Professional)", "GIAC GCIH"]
    },

    "sr-product-manager": {
        name: "David A. Okonkwo",
        initials: "DO",
        color: "#F59E0B",
        headline: "Senior Product Manager — Payments & Developer Platform",
        location: "New York, NY",
        email: "d.okonkwo.pm@protonmail.com",
        phone: "(212) 555-0418",
        linkedin: "linkedin.com/in/davidokonkwo",
        summary: "Product leader with 7+ years driving payments and developer platform strategy at high-growth fintech companies. Track record of launching API products serving 10K+ developers and managing $2B+ in annual payment volume. Combines deep technical fluency with customer empathy.",
        keywords: ["payments", "API strategy", "developer experience", "product-led growth", "fintech"],
        experience: [
            {
                company: "Shopify",
                logo: null,
                title: "Senior Product Manager, Payments",
                period: "2021 — 2024",
                bullets: [
                    "Launched Shopify Payments international expansion to 15 new markets ($800M GMV)",
                    "Led API redesign improving developer onboarding conversion by 40%",
                    "Managed cross-functional team of 25 engineers, designers, and data scientists"
                ]
            },
            {
                company: "Square",
                logo: null,
                title: "Product Manager, Developer Platform",
                period: "2019 — 2021",
                bullets: [
                    "Built developer portal serving 50K+ monthly active developers",
                    "Shipped real-time payments API processing $500M+ quarterly volume",
                    "Drove product-led growth strategy increasing API adoption 3x YoY"
                ]
            },
            {
                company: "Adyen",
                logo: null,
                title: "Associate Product Manager",
                period: "2017 — 2019",
                bullets: [
                    "Owned checkout optimization product reducing cart abandonment by 18%",
                    "Launched fraud detection dashboard used by 200+ enterprise merchants"
                ]
            }
        ],
        skills: [
            { name: "Payments", matched: true },
            { name: "API Strategy", matched: true },
            { name: "Developer Experience", matched: true },
            { name: "Product Analytics", matched: false },
            { name: "SQL", matched: false },
            { name: "A/B Testing", matched: false },
            { name: "Figma", matched: false },
            { name: "Agile / Scrum", matched: false },
            { name: "PCI Compliance", matched: true },
            { name: "Stakeholder Mgmt", matched: false },
            { name: "Go-to-Market", matched: false },
            { name: "OKRs", matched: false }
        ],
        education: {
            degree: "MBA, Technology Management",
            school: "MIT Sloan School of Management",
            year: "2017"
        },
        certifications: ["Pragmatic Institute Certified (PMC-III)", "Stripe Certified Developer"]
    },

    "backend-payments": {
        name: "Elena V. Volkov",
        initials: "EV",
        color: "#EC4899",
        headline: "Backend Engineer — Payments & Transaction Processing",
        location: "Austin, TX",
        email: "e.volkov.dev@protonmail.com",
        phone: "(512) 555-0362",
        linkedin: "linkedin.com/in/elenavolkov-eng",
        summary: "Backend engineer specializing in high-throughput payment processing systems and distributed architecture. 6+ years building real-time transaction pipelines handling millions of daily payments. Strong focus on data consistency, fault tolerance, and regulatory compliance.",
        keywords: ["distributed systems", "Kafka", "real-time processing", "payments", "fault tolerance"],
        experience: [
            {
                company: "PayPal",
                logo: null,
                title: "Senior Backend Engineer",
                period: "2021 — 2024",
                bullets: [
                    "Built real-time payment routing engine processing 12M+ daily transactions",
                    "Designed event-driven architecture using Kafka reducing settlement latency by 65%",
                    "Led migration from monolith to microservices for $40B+ annual payment volume"
                ]
            },
            {
                company: "Adyen",
                logo: null,
                title: "Backend Engineer",
                period: "2019 — 2021",
                bullets: [
                    "Implemented distributed ledger system with exactly-once payment guarantees",
                    "Built fraud scoring pipeline evaluating 500K+ transactions/hour in real-time",
                    "Developed multi-currency reconciliation engine for 30+ payment methods"
                ]
            },
            {
                company: "Goldman Sachs",
                logo: null,
                title: "Technology Analyst",
                period: "2018 — 2019",
                bullets: [
                    "Built internal trading settlement APIs processing $2B+ daily volume",
                    "Automated regulatory reporting reducing manual effort by 80%"
                ]
            }
        ],
        skills: [
            { name: "Java / Kotlin", matched: true },
            { name: "Kafka", matched: true },
            { name: "Distributed Systems", matched: true },
            { name: "PostgreSQL", matched: true },
            { name: "Redis", matched: false },
            { name: "gRPC", matched: false },
            { name: "Docker", matched: false },
            { name: "AWS", matched: false },
            { name: "Event Sourcing", matched: true },
            { name: "PCI-DSS", matched: true },
            { name: "Prometheus", matched: false },
            { name: "Python", matched: false }
        ],
        education: {
            degree: "M.S. Computer Science",
            school: "Carnegie Mellon University",
            year: "2018"
        },
        certifications: ["AWS Certified Developer Associate", "Confluent Certified Developer for Apache Kafka"]
    }
};

/**
 * Job listings displayed on the left panel.
 */
window.JOB_LISTINGS = [
    {
        id: "sr-sw-engineer",
        title: "Sr. Software Engineer",
        team: "Platform Infrastructure",
        type: "Full-time",
        location: "San Francisco, CA",
        posted: "3 days ago"
    },
    {
        id: "staff-security",
        title: "Staff Engineer",
        team: "Security",
        type: "Full-time",
        location: "Seattle, WA (Remote OK)",
        posted: "1 week ago"
    },
    {
        id: "sr-product-manager",
        title: "Senior Product Manager",
        team: "Payments & Developer Platform",
        type: "Full-time",
        location: "New York, NY",
        posted: "5 days ago"
    },
    {
        id: "backend-payments",
        title: "Backend Engineer",
        team: "Payments",
        type: "Full-time",
        location: "Austin, TX (Hybrid)",
        posted: "2 days ago"
    }
];
