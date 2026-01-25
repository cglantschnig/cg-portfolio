// List of projects where `name` was the original key
// and `images` is the list of image path strings (relative to `public`).

export type Project = {
  name: string
  industry: string
  time: string,
  url?: string,
  role: string
  images: string[]
  description: string
  responsibilities: string[]
  technologies: string[]
}

export const PROJECTS: Project[] = [
  {
    name: "Local Promotions Platform",
    industry: "Marketing",
    time: "2018 - 2021",
    role: "Lead Developer",
    images: [
      "projects/promotionfinder/leaflets.webp",
      "projects/promotionfinder/caching.webp",
      "projects/promotionfinder/happyman.webp",
      "projects/promotionfinder/searchresult.webp",
      "projects/promotionfinder/seo.webp",
    ],
    description: "This product is a consumer-facing digital platform, available on web and mobile (iOS/Android), focused on helping users discover and browse retail promotions and special offers. The product aggregates promotional content from a wide range of retailers, enabling users to explore deals, compare offers, and plan purchases more efficiently through features such as search and shopping lists.",
    responsibilities: [
      "Led the technical and architectural rewrite of the existing platform",
      "Designed and delivered a full ecosystem including public website, native mobile app, CMS, and backend API",
      "Guided and mentored a team of 5 developers, coordinating tasks and ensuring code quality",
      "Worked closely with stakeholders to refine requirements and translate business needs into technical solutions",
      "Owned key architecture decisions and implemented critical platform features",
      "Planned and executed the migration of existing production data into the new system",
      "Designed and implemented cloud infrastructure on Microsoft Azure using Kubernetes"
    ],
    technologies: [
      "React",
      "Angular",
      "Spring Boot",
      "React Native",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "RabbitMQ",
      "Azure",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    name: "GSI Reconciliation",
    industry: "Fintech",
    time: "2025",
    role: "Senior Full-Stack Web Developer",
    url: "https://gsi-tech.ai/",
    description: "AI-powered reconciliation platform that automatically matches bank transactions with invoices using intelligent data extraction and pattern recognition. The system reduces manual accounting effort by detecting matches, discrepancies, and edge cases in real time, improving accuracy, auditability, and financial transparency.",
    images: [
      "projects/reconciliation/hero-collage.webp",
      "projects/reconciliation/reconciliation.webp",
      "projects/reconciliation/upload.webp",
    ],
    responsibilities: [
      "Implemented secure bank transaction synchronization using Plaid",
      "Built intelligent invoice data extraction pipelines supporting PDF, image, Excel, and CSV formats at scale",
      "Applied AI-based approaches to reconcile invoices with bank transactions and generate probability scores for match confidence",
      "Integrated Stripe for subscription billing and extended it with custom subscription logic and feature gating"
    ],
    technologies: [
      "Node.js", "React", "Next.js", "OCR", "AI", "Python", "AWS", "Plaid", "Stripe"
    ]
  },
  {
    name: "DeFi Crypto Trading Platform",
    industry: "Fintech",
    time: "2021 - 2022",
    description: "Crypto trading platform enabling users to securely buy, sell, and manage digital assets in real time. The system delivers high-performance trading, robust security, and compliance-ready infrastructure, supporting seamless order execution, market data, and asset custody.",
    role: "Senior Backend Integration Engineer",
    images: [
      "projects/defi/buyorder.webp",
      "projects/defi/algo.webp",
      "projects/defi/smartcontract.webp",
    ],
    technologies: [
      "Polygon",
      "Solidity",
      "Web3.js",
      "Node.js",
      "Vue",
      "AWS"
    ],
    responsibilities: [
      "Served as the primary backend integration engineer for a decentralized crypto trading platform",
      "Designed and implemented a high-performance, real-time order matching engine capable of handling millions of orders",
      "Ensured low-latency order processing and deterministic matching behavior under high throughput",
      "Integrated backend systems with Polygon-based smart contracts for on-chain settlement and state synchronization",
      "Designed robust communication and error-handling mechanisms between off-chain services and blockchain components",
      "Collaborated closely with smart contract and frontend teams to ensure end-to-end system correctness and reliability"
    ]
  },
  {
    name: "Online Casino Games",
    industry: "Gambling",
    time: "2014 - 2016",
    role: "Frontend Developer",
    description: "A collection of mobile-first slot machine and poker games designed for smooth gameplay on smartphones. The games feature touch-optimized controls, fast animations, and responsive layouts, delivering an engaging casino experience with reliable performance across iOS and Android devices.",
    images: [
      "projects/lottery/poker01.webp",
      "projects/lottery/slot01.webp",
      "projects/lottery/slot02.webp",
    ],
    technologies: [
      "Javascript",
      "CSS",
      "Advanced CSS/JS Animations",
      "Mobile Optimization",
      "GSAP"
    ],
    responsibilities: [
      "Develop and maintain responsive, high-performance game interfaces optimized for mobile browsers and devices",
      "Implement interactive UI components, animations, and game flows with a strong focus on touch interactions",
      "Ensure smooth performance across a wide range of screen sizes, devices, and network conditions",
      "Collaborate closely with game designers and backend engineers to integrate gameplay logic and real-time data",
      "Optimize rendering, asset loading, and state management to minimize latency and battery usage",
      "Test, debug, and continuously improve usability, accessibility, and visual consistency across platforms"
    ]
  },
  {
    name: "POS for Recycling Stations",
    industry: "GreenTech",
    time: "2022 - 2023",
    role: "Lead Developer",
    url: "https://www.containersforchange.com.au/",
    images: [
      "projects/recycling/posstation.webp",
      "projects/recycling/australia.webp",
      "projects/recycling/bottles.webp",
    ],
    description: "POS software for recycling stations in Australia, enabling automated collection, identification, and settlement of recyclable materials. The system integrates with collection machines and backend services to handle transactions, user identification, and reporting, supporting efficient operations and compliance with local recycling and deposit schemes.",
    responsibilities: [
      "Lead the technical design and development of a POS platform for recycling stations, ensuring reliability, scalability, and regulatory compliance",
      "Collaborate with internal teams, operations, and external partners to gather, clarify, and refine requirements across multiple stakeholders",
      "Translate business, operational, and regulatory needs into clear technical specifications and implementation plans",
      "Own key architecture decisions, integrations with hardware, payment systems, and backend services",
      "Guide and mentor developers through code reviews, task planning, and technical best practices",
      "Ensure delivery quality by balancing timelines, technical constraints, and evolving stakeholder requirements",
    ],
    technologies: [
      "Spring Boot",
      "Kotlin",
      "Java",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Kubernetes",
      "Open Policy Agent",
      "CI/CD",
      "Liquibase"
    ]
  },
];
