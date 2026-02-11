/**
 * Pre-built synthetic identities for 4 Vero Financial roles.
 * Each identity is tailored to match the target role's requirements.
 */
window.IDENTITIES = {
    "sr-sw-engineer": {
        name: "Marcus Wei Chen",
        initials: "MC",
        color: "#3B82F6",
        avatar: "../../presentations/masterclass/assets/marcus-chen/headshot.png",
        headline: "Senior Software Engineer — Platform Infrastructure",
        location: "San Francisco, CA",
        email: "m.chen.dev@protonmail.com",
        phone: "(415) 555-0147",
        linkedin: "linkedin.com/in/marcuswchen",
        summary: "Platform infrastructure engineer with 8+ years building scalable distributed systems for fintech companies. Deep expertise in cloud-native architecture, Kubernetes orchestration, and PCI-DSS compliant infrastructure. Passionate about developer experience and CI/CD pipeline optimization.",
        keywords: ["Kubernetes", "PCI-DSS", "CI/CD", "distributed systems", "cloud-native", "infrastructure"],
        craftedPieces: [
            {
                requirementId: "req-1",
                narrative: "Fabricating 8 years of cloud infrastructure experience at top-tier fintech companies...",
                craftedItem: {
                    type: "experience",
                    label: "Stripe — Senior Platform Engineer",
                    detail: "Led migration of 200+ microservices to K8s, reducing deploy time 73%",
                    period: "2021 — 2024"
                },
                skills: ["AWS / GCP", "Terraform"]
            },
            {
                requirementId: "req-2",
                narrative: "Generating Kubernetes certification and enterprise-scale orchestration history...",
                craftedItem: {
                    type: "certification",
                    label: "CKA — Certified Kubernetes Administrator",
                    detail: "Linux Foundation, credential ID LF-9a2x47k",
                    period: "2022"
                },
                skills: ["Kubernetes", "Docker"]
            },
            {
                requirementId: "req-3",
                narrative: "Building a PCI-DSS compliance narrative with fabricated audit history...",
                craftedItem: {
                    type: "experience",
                    label: "Plaid — Infrastructure Engineer",
                    detail: "Architected PCI-DSS Level 1 compliant infrastructure serving 50M+ daily txns",
                    period: "2018 — 2021"
                },
                skills: ["PCI-DSS", "SOC 2"]
            },
            {
                requirementId: "req-4",
                narrative: "Creating CI/CD pipeline optimization track record across multiple orgs...",
                craftedItem: {
                    type: "experience",
                    label: "Cloudflare — Software Engineer",
                    detail: "Built zero-downtime deployment pipeline processing 2B+ API calls/month",
                    period: "2016 — 2018"
                },
                skills: ["CI/CD", "GitHub Actions"]
            },
            {
                requirementId: "req-5",
                narrative: "Inventing a UC Berkeley CS degree with realistic graduation year...",
                craftedItem: {
                    type: "education",
                    label: "B.S. Computer Science — UC Berkeley",
                    detail: "GPA 3.8, Dean's List, distributed systems research lab",
                    period: "2016"
                },
                skills: []
            }
        ],
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
        craftedPieces: [
            {
                requirementId: "req-1",
                narrative: "Fabricating Zero Trust architecture expertise with enterprise deployment history...",
                craftedItem: {
                    type: "experience",
                    label: "CrowdStrike — Principal Security Engineer",
                    detail: "Architected Zero Trust framework adopted by 150+ enterprise customers",
                    period: "2021 — 2024"
                },
                skills: ["Zero Trust", "IAM"]
            },
            {
                requirementId: "req-2",
                narrative: "Manufacturing threat detection platform experience at massive scale...",
                craftedItem: {
                    type: "experience",
                    label: "Mandiant — Senior Threat Analyst",
                    detail: "Built real-time threat detection pipeline processing 1T+ events/day",
                    period: "2018 — 2021"
                },
                skills: ["SIEM / SOAR", "Splunk"]
            },
            {
                requirementId: "req-3",
                narrative: "Creating red team and penetration testing credentials with fake engagement history...",
                craftedItem: {
                    type: "certification",
                    label: "OSCP — Offensive Security Certified Professional",
                    detail: "Offensive Security, credential ID OS-401-29847",
                    period: "2020"
                },
                skills: ["Red Teaming", "Penetration Testing"]
            },
            {
                requirementId: "req-4",
                narrative: "Generating SOC 2 and compliance audit leadership narrative...",
                craftedItem: {
                    type: "experience",
                    label: "Palo Alto Networks — Security Engineer",
                    detail: "Led SOC 2 Type II and FedRAMP audits for 3 consecutive years",
                    period: "2014 — 2018"
                },
                skills: ["SOC 2", "FedRAMP"]
            },
            {
                requirementId: "req-5",
                narrative: "Inventing a Georgia Tech cybersecurity master's degree...",
                craftedItem: {
                    type: "education",
                    label: "M.S. Cybersecurity — Georgia Tech",
                    detail: "Thesis: ML-based anomaly detection in network traffic",
                    period: "2014"
                },
                skills: []
            }
        ],
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
        craftedPieces: [
            {
                requirementId: "req-1",
                narrative: "Fabricating payments product management track record at major fintech companies...",
                craftedItem: {
                    type: "experience",
                    label: "Shopify — Senior PM, Payments",
                    detail: "Launched international payments expansion to 15 markets ($800M GMV)",
                    period: "2021 — 2024"
                },
                skills: ["Payments", "Go-to-Market"]
            },
            {
                requirementId: "req-2",
                narrative: "Creating developer platform experience with fabricated API adoption metrics...",
                craftedItem: {
                    type: "experience",
                    label: "Square — PM, Developer Platform",
                    detail: "Built developer portal serving 50K+ monthly active developers",
                    period: "2019 — 2021"
                },
                skills: ["API Strategy", "Developer Experience"]
            },
            {
                requirementId: "req-3",
                narrative: "Manufacturing product analytics and growth expertise narrative...",
                craftedItem: {
                    type: "experience",
                    label: "Adyen — Associate PM",
                    detail: "Drove product-led growth strategy increasing API adoption 3x YoY",
                    period: "2017 — 2019"
                },
                skills: ["Product Analytics", "A/B Testing"]
            },
            {
                requirementId: "req-4",
                narrative: "Generating PCI compliance domain knowledge credentials...",
                craftedItem: {
                    type: "certification",
                    label: "Stripe Certified Developer",
                    detail: "Stripe, Inc. — payments integration specialist",
                    period: "2023"
                },
                skills: ["PCI Compliance", "Stripe"]
            },
            {
                requirementId: "req-5",
                narrative: "Inventing an MIT Sloan MBA with technology management focus...",
                craftedItem: {
                    type: "education",
                    label: "MBA, Technology Management — MIT Sloan",
                    detail: "Concentration in fintech and platform economics",
                    period: "2017"
                },
                skills: []
            }
        ],
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
        craftedPieces: [
            {
                requirementId: "req-1",
                narrative: "Fabricating high-throughput payment processing experience at scale...",
                craftedItem: {
                    type: "experience",
                    label: "PayPal — Senior Backend Engineer",
                    detail: "Built real-time payment routing engine processing 12M+ daily transactions",
                    period: "2021 — 2024"
                },
                skills: ["Java / Kotlin", "Distributed Systems"]
            },
            {
                requirementId: "req-2",
                narrative: "Manufacturing Kafka event streaming expertise with fabricated pipeline metrics...",
                craftedItem: {
                    type: "experience",
                    label: "Adyen — Backend Engineer",
                    detail: "Designed event-driven architecture using Kafka reducing settlement latency 65%",
                    period: "2019 — 2021"
                },
                skills: ["Kafka", "Event Sourcing"]
            },
            {
                requirementId: "req-3",
                narrative: "Creating financial services background with regulatory compliance expertise...",
                craftedItem: {
                    type: "experience",
                    label: "Goldman Sachs — Technology Analyst",
                    detail: "Built trading settlement APIs processing $2B+ daily volume",
                    period: "2018 — 2019"
                },
                skills: ["PCI-DSS", "PostgreSQL"]
            },
            {
                requirementId: "req-4",
                narrative: "Generating Kafka certification credentials with fabricated ID...",
                craftedItem: {
                    type: "certification",
                    label: "Confluent Certified Developer — Apache Kafka",
                    detail: "Confluent, credential ID CC-DEV-88271",
                    period: "2022"
                },
                skills: ["Kafka", "Streaming"]
            },
            {
                requirementId: "req-5",
                narrative: "Inventing a Carnegie Mellon CS master's degree...",
                craftedItem: {
                    type: "education",
                    label: "M.S. Computer Science — Carnegie Mellon",
                    detail: "Focus: distributed systems and fault-tolerant computing",
                    period: "2018"
                },
                skills: []
            }
        ],
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
 * Each includes requirements for the Phase 1/2 matching flow.
 */
window.JOB_LISTINGS = [
    {
        id: "sr-sw-engineer",
        title: "Sr. Software Engineer",
        team: "Platform Infrastructure",
        type: "Full-time",
        location: "San Francisco, CA",
        posted: "3 days ago",
        salary: "$180K — $240K",
        requirements: [
            { id: "req-1", label: "Cloud Infrastructure", text: "7+ years building scalable distributed systems on AWS/GCP", icon: "cloud" },
            { id: "req-2", label: "Kubernetes", text: "Deep experience with Kubernetes orchestration at scale", icon: "container" },
            { id: "req-3", label: "Security Compliance", text: "PCI-DSS or SOC 2 compliance experience in fintech", icon: "shield" },
            { id: "req-4", label: "CI/CD Pipelines", text: "Track record designing CI/CD for large engineering orgs", icon: "code" },
            { id: "req-5", label: "CS Degree", text: "B.S. or M.S. in Computer Science from a top-tier university", icon: "education" }
        ]
    },
    {
        id: "staff-security",
        title: "Staff Engineer",
        team: "Security",
        type: "Full-time",
        location: "Seattle, WA (Remote OK)",
        posted: "1 week ago",
        salary: "$210K — $280K",
        requirements: [
            { id: "req-1", label: "Zero Trust", text: "Led Zero Trust architecture implementation at enterprise scale", icon: "shield" },
            { id: "req-2", label: "Threat Detection", text: "Built threat detection platforms processing 1B+ events/day", icon: "chart" },
            { id: "req-3", label: "Red Team / Pentesting", text: "OSCP or equivalent offensive security certification", icon: "lock" },
            { id: "req-4", label: "Compliance Leadership", text: "Led SOC 2 Type II or FedRAMP audit processes", icon: "users" },
            { id: "req-5", label: "Advanced Degree", text: "M.S. in Cybersecurity, CS, or related field", icon: "education" }
        ]
    },
    {
        id: "sr-product-manager",
        title: "Senior Product Manager",
        team: "Payments & Developer Platform",
        type: "Full-time",
        location: "New York, NY",
        posted: "5 days ago",
        salary: "$170K — $220K",
        requirements: [
            { id: "req-1", label: "Payments Experience", text: "5+ years in payments product management at a fintech company", icon: "dollar" },
            { id: "req-2", label: "Developer Platforms", text: "Launched API products serving 10K+ developers", icon: "code" },
            { id: "req-3", label: "Growth Strategy", text: "Proven track record driving product-led growth and adoption", icon: "chart" },
            { id: "req-4", label: "Domain Knowledge", text: "Deep understanding of PCI compliance and payment rails", icon: "shield" },
            { id: "req-5", label: "MBA or Equivalent", text: "MBA from a top business school or equivalent experience", icon: "education" }
        ]
    },
    {
        id: "backend-payments",
        title: "Backend Engineer",
        team: "Payments",
        type: "Full-time",
        location: "Austin, TX (Hybrid)",
        posted: "2 days ago",
        salary: "$160K — $210K",
        requirements: [
            { id: "req-1", label: "Payment Systems", text: "5+ years building high-throughput payment processing systems", icon: "dollar" },
            { id: "req-2", label: "Event Streaming", text: "Deep expertise with Kafka or equivalent event streaming platforms", icon: "code" },
            { id: "req-3", label: "Financial Services", text: "Background in banking, trading, or financial infrastructure", icon: "chart" },
            { id: "req-4", label: "Streaming Certs", text: "Confluent or AWS streaming certification preferred", icon: "container" },
            { id: "req-5", label: "CS Degree", text: "M.S. in Computer Science with distributed systems focus", icon: "education" }
        ]
    }
];
