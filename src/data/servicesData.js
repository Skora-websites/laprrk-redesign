// Comprehensive IT Services Data for Laprrk Technology Solutions
// Strictly adhering to verified metrics, light-theme token styling, and EPAM-grade engineering posture.

export const SERVICES_DATA = {
"custom-software": {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom Software Development",
    group: "Build and apps",
    groupSlug: "apps",
    heroKicker: "Enterprise Engineering · Greater Noida & Louisville",
    headline: "Scalable Software Engineered for Resilient, Production Throughput",
    lead: "We design, build, and deploy production software systems tailored to your exact business constraints. Senior engineering pods that ship in two-week sprints with complete repository and cloud ownership from day one.",
    facts: [
      { num: "2-Week", label: "Sprint cadence with live demos" },
      { num: "100%", label: "IP & repository ownership" },
      { num: "5–7 Days", label: "Team assembly from vetted bench" },
    ],
    challenge: {
      title: "The Engineering Bottleneck",
      text: "Off-the-shelf software forces businesses into rigid workflows, while fragmented agencies produce unmaintainable, undocumented codebases with high technical debt, slow release cycles, and unpredictable vendor lock-in.",
    },
    approach: {
      title: "The Laprrk Delivery Standard",
      text: "We embed senior engineering pods that follow Domain-Driven Design, test-driven pipelines, and modular architectures. Everything commits directly to your private repositories, with automated CI/CD and production telemetry from sprint one.",
    },
    capabilities: [
      {
        icon: "code",
        title: "Domain-Driven Backend Architecture",
        desc: "High-concurrency microservices and modular monoliths designed around bounded business domains for long-term maintainability.",
        outputs: ["Microservices architecture", "Event-driven message queues", "Domain-driven boundary specifications"],
      },
      {
        icon: "api",
        title: "Secure API Ecosystems",
        desc: "Type-safe RESTful and GraphQL APIs built with strict schema contracts, versioning, automated documentation, and token auth.",
        outputs: ["OpenAPI 3.1 & GraphQL schemas", "mTLS & OAuth2 authentication", "Automated contract testing suites"],
      },
      {
        icon: "database",
        title: "Data Persistence & Transaction Modeling",
        desc: "Optimized relational, NoSQL, and vector storage engines configured for ACID reliability, data integrity, and low-latency queries.",
        outputs: ["PostgreSQL / MongoDB schema models", "Connection pooling & read replicas", "Automated migration scripts"],
      },
      {
        icon: "server",
        title: "Production CI/CD & Infrastructure as Code",
        desc: "Containerized deployment pipelines with zero-downtime rollouts, automated linting, security scans, and environment reproducibility.",
        outputs: ["GitHub Actions / GitLab CI workflows", "Terraform / CloudFormation modules", "Docker multi-stage build files"],
      },
    ],
    techStack: [
      { category: "Languages & Frameworks", items: ["Node.js / TypeScript", "Python / FastAPI", "Go (Golang)", "Java / Spring Boot", ".NET Core"] },
      { category: "Databases & Storage", items: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "AWS DynamoDB"] },
      { category: "Cloud & Infrastructure", items: ["Docker", "Kubernetes", "AWS ECS / Lambda", "Terraform", "GitHub Actions"] },
      { category: "Testing & Monitoring", items: ["Jest / Vitest", "Playwright", "OpenTelemetry", "Prometheus & Grafana"] },
    ],
    standards: [
      { title: "Direct Code Access", body: "Every commit, PR, and artifact lives in your organization's version control. No intermediary repos." },
      { title: "Gated Automated Tests", body: "Minimum 80% test coverage with automated unit, integration, and security checks on every pull request." },
      { title: "Two-Week Sprint Velocity", body: "Working software demo at the close of every fortnight with clear milestone burndowns." },
      { title: "Mutual NDA & IP Transfer", body: "Complete intellectual property assignment executed before code generation commences." },
    ],
    process: [
      { step: "01", title: "Architecture & Scoping", timing: "Days 1–5", desc: "Technical discovery, schema drafts, API contracts, milestone roadmap, and mutual NDA execution." },
      { step: "02", title: "Scaffold & Pipeline", timing: "Week 2", desc: "Setting up staging infrastructure, container definitions, repository branching, and automated CI/CD." },
      { step: "03", title: "Sprint Execution", timing: "Weeks 3+", desc: "Bi-weekly sprint cycles, backlog grooming, daily standups, PR reviews, and end-of-sprint demo calls." },
      { step: "04", title: "Production Hardening", timing: "Milestone Close", desc: "Security auditing, load testing, comprehensive runbooks, team handover, and optional ongoing SRE support." },
    ],
    caseStudy: {
      headline: "70% Reduction in Manual Operations in 6 Weeks",
      sector: "Insurance & Financial Operations",
      summary: "Engineered a high-throughput transaction processing engine replacing legacy spreadsheet workflows, achieving zero-downtime cutover and audited compliance.",
      metric: "70%",
      metricLabel: "Operational efficiency lift",
    },
    faqs: [
      { q: "Who owns the code and intellectual property?", a: "You do. 100% of all source code, architecture diagrams, build pipelines, and documentation are assigned directly to your organization." },
      { q: "How do our internal engineers collaborate with your pod?", a: "Our engineers integrate directly into your communication channels (Slack/Teams), participate in your ceremonies, and submit PRs for internal code reviews." },
      { q: "Can we transition from staff augmentation to fixed-scope?", a: "Yes. Engagements frequently begin with targeted fixed-scope spikes and scale into dedicated pods as roadmap requirements solidify." },
      { q: "What is the onboarding timeline?", a: "Initial discovery occurs within 48 hours of contact, with team deployment typically active within 5 to 7 business days." },
    ],
  },

  "web-development": {
    id: "web-development",
    slug: "web-development",
    title: "Web Application Development",
    group: "Build and apps",
    groupSlug: "apps",
    heroKicker: "Web Systems & Cloud Frontends",
    headline: "High-Performance Web Platforms Engineered for Scale and Conversion",
    lead: "Building responsive, accessible, and fast web applications using modern React, Next.js, and TypeScript architectures. Designed for enterprise security, sub-second load times, and seamless API integration.",
    facts: [
      { num: "<1.2s", label: "Average First Contentful Paint" },
      { num: "WCAG AA", label: "Accessibility compliance standard" },
      { num: "100%", label: "Responsive test coverage" },
    ],
    challenge: {
      title: "The Frontend Degradation",
      text: "Modern web apps often suffer from bloated client bundles, poor Core Web Vitals, inaccessible UI components, and fragile client-side state management that breaks under real-world network variations.",
    },
    approach: {
      title: "Server-Driven & Componentized Architecture",
      text: "We construct modular frontend architectures prioritizing server-side rendering, rigorous bundle-splitting, strict typing, and accessible design system components that scale cleanly across devices.",
    },
    capabilities: [
      {
        icon: "world-code",
        title: "Modern React & Next.js Systems",
        desc: "Server-side rendered and static web applications with intelligent prefetching, route caching, and zero layout shift.",
        outputs: ["Next.js / React 18 codebase", "Server and client component boundaries", "Optimized asset delivery pipeline"],
      },
      {
        icon: "layout",
        title: "Design System & Component Libraries",
        desc: "Reusable, themeable component libraries built with tokens, Storybook documentation, and automated accessibility checks.",
        outputs: ["Token-driven UI component suite", "Storybook interactive documentation", "Automated a11y regression tests"],
      },
      {
        icon: "device-mobile",
        title: "Responsive & Offline-First Web",
        desc: "Fluid layouts engineered across mobile, tablet, and ultra-wide displays with progressive enhancement and service worker caching.",
        outputs: ["Fluid clamp layout geometry", "Service worker offline fallbacks", "Touch and keyboard navigation parity"],
      },
      {
        icon: "checklist",
        title: "End-to-End Frontend Testing",
        desc: "Automated browser testing covering critical conversion paths, visual regressions, and cross-browser stability.",
        outputs: ["Playwright E2E test suites", "Lighthouse CI performance gating", "Visual regression diff testing"],
      },
    ],
    techStack: [
      { category: "Core Frameworks", items: ["React 18 / 19", "Next.js", "TypeScript", "Vite", "Tailwind CSS / CSS Tokens"] },
      { category: "State & Data Layer", items: ["TanStack Query (React Query)", "Zustand", "Redux Toolkit", "Apollo GraphQL"] },
      { category: "Testing & Tooling", items: ["Playwright", "Cypress", "Storybook", "Vitest / Jest"] },
      { category: "Deployment & CDN", items: ["Vercel", "Cloudflare Pages", "AWS CloudFront", "Docker"] },
    ],
    standards: [
      { title: "Core Web Vitals Pass", body: "Performance budgets enforced in CI ensuring sub-second LCP and zero CLS." },
      { title: "WCAG AA Compliance", body: "Keyboard reachability, screen-reader landmarks, and contrast ratios strictly validated." },
      { title: "Type Safety Across the Wire", body: "End-to-end typed contracts between frontend models and backend API responses." },
      { title: "Optimized Asset Budgets", body: "Strict bundle budgets with tree-shaking, modern AVIF/WebP image formats, and font subsetting." },
    ],
    process: [
      { step: "01", title: "UX Audit & Technical Spec", timing: "Days 1–5", desc: "Design review, component taxonomy, state architecture, and API integration mapping." },
      { step: "02", title: "Design System & Scaffolding", timing: "Week 2", desc: "Building core primitive components, tokens, routing structure, and CI test pipeline." },
      { step: "03", title: "Feature Sprint Cycles", timing: "Weeks 3+", desc: "Bi-weekly functional releases with responsive screen verification across all supported browsers." },
      { step: "04", title: "Production Optimization", timing: "Milestone Close", desc: "Lighthouse optimization, CDN edge caching, security header hardening, and analytics handoff." },
    ],
    caseStudy: {
      headline: "Scalable Customer Portal for US Enterprise Logistics",
      sector: "Enterprise Logistics & Transportation",
      summary: "Built a responsive fleet tracking portal with real-time WebSocket telemetry, achieving 99.9% uptime and sub-second dispatch lookups across 10,000+ drivers.",
      metric: "<1s",
      metricLabel: "Live telemetry lookup latency",
    },
    faqs: [
      { q: "Do you build single-page apps or server-rendered sites?", a: "We architect both depending on your SEO, performance, and operational needs—often utilizing hybrid SSR/SSG with Next.js or Vite SPAs." },
      { q: "Can you work from our existing Figma designs?", a: "Yes. Our engineers map directly from Figma components and design tokens into production code with pixel-level fidelity." },
      { q: "How do you handle cross-browser compatibility?", a: "We run automated Playwright test suites across Chromium, WebKit (Safari), and Firefox on desktop and mobile viewports." },
      { q: "Will our internal team be able to maintain the codebase?", a: "Yes. We enforce clean code standards, comprehensive component documentation, and structured handover walkthroughs." },
    ],
  },

  "generative-ai": {
    id: "generative-ai",
    slug: "generative-ai",
    title: "Generative AI & LLM Applications",
    group: "AI and data",
    groupSlug: "ai-data",
    heroKicker: "Applied AI Systems · Production Grade",
    headline: "Enterprise Generative AI & Retrieval Systems Grounded in Private Data",
    lead: "We engineer production-grade Generative AI applications, RAG pipelines, and private LLM integrations that deliver deterministic accuracy, enterprise governance, and verifiable return on investment.",
    facts: [
      { num: "70%", label: "Cut in manual document processing" },
      { num: "0%", label: "Data training leakage guarantee" },
      { num: "Sub-2s", label: "Median semantic retrieval latency" },
    ],
    challenge: {
      title: "The Prototype Trap",
      text: "Most generative AI projects stall as brittle demos that hallucinate, leak sensitive enterprise context, rack up unpredictable API token bills, and fail compliance and security audits in production.",
    },
    approach: {
      title: "Grounded RAG & Guardrailed Architectures",
      text: "We construct deterministic retrieval-augmented generation (RAG) pipelines with hybrid vector/keyword search, prompt evaluation harnesses, token cost governors, and strict data boundary isolation.",
    },
    capabilities: [
      {
        icon: "sparkles",
        title: "Enterprise RAG & Knowledge Systems",
        desc: "Context-grounded question answering and semantic search over proprietary documentation, PDFs, ERP records, and databases.",
        outputs: ["Hybrid vector & lexical search pipeline", "Document chunking & metadata enrichers", "Automated re-ranking models"],
      },
      {
        icon: "brain",
        title: "Fine-Tuning & Model Alignment",
        desc: "Custom model fine-tuning (LoRA/QLoRA) and prompt optimization for specialized domain taxonomies and strict schema compliance.",
        outputs: ["Domain dataset preparation scripts", "Fine-tuned model checkpoints", "Prompt evaluation benchmarking suites"],
      },
      {
        icon: "shield-check",
        title: "AI Safety & Guardrails",
        desc: "Real-time hallucination prevention, prompt injection mitigation, PII masking, and output validation layers.",
        outputs: ["Llama Guard / NeMo guardrails", "Automated PII redaction filters", "Confidence scoring & fallback logic"],
      },
      {
        icon: "chart-bar",
        title: "Cost Governance & Telemetry",
        desc: "Semantic caching, model cascading, rate limiting, and comprehensive token expenditure telemetry across providers.",
        outputs: ["Semantic cache Redis layer", "Provider failover routing logic", "Token usage & latency dashboards"],
      },
    ],
    techStack: [
      { category: "LLM Frameworks", items: ["LangChain", "LlamaIndex", "Haystack", "OpenAI / Claude API", "vLLM / Ollama"] },
      { category: "Vector Databases", items: ["pgvector (PostgreSQL)", "Pinecone", "Qdrant", "Milvus", "ChromaDB"] },
      { category: "Embeddings & Reranking", items: ["Cohere Rerank", "Hugging Face Embeddings", "Text-Embedding-3", "Cross-Encoders"] },
      { category: "Evaluation & Ops", items: ["Ragas", "TruLens", "Langfuse", "MLflow", "Docker / Triton"] },
    ],
    standards: [
      { title: "Zero Client Data Ingestion", body: "Enterprise API endpoints configured with explicit zero-retention policies; your data is never used to train base models." },
      { title: "Evaluated Accuracy Benchmarks", body: "Quantitative evaluation harnesses measuring answer relevancy, faithfulness, and context recall before release." },
      { title: "Deterministic Output Schemas", body: "All LLM calls forced into validated JSON schemas (Pydantic / Zod) with automated retry on parse failures." },
      { title: "Data Boundary Isolation", body: "Private VPC deployment topologies for self-hosted models or encrypted transit for commercial APIs." },
    ],
    process: [
      { step: "01", title: "Feasibility & Data Audit", timing: "Days 1–5", desc: "Auditing document quality, latency requirements, security constraints, and defining measurable accuracy KPIs." },
      { step: "02", title: "RAG Pipeline Proof of Concept", timing: "Week 2", desc: "Setting up vector storage, baseline chunking, embedding generation, and prompt benchmarking harness." },
      { step: "03", title: "Production Guardrails", timing: "Weeks 3+", desc: "Integrating guardrails, semantic caching, output validators, and seamless user interface integration." },
      { step: "04", title: "Deployment & Monitoring", timing: "Milestone Close", desc: "Real-time accuracy tracing, cost alerts, regression benchmarking, and operational runbook handover." },
    ],
    caseStudy: {
      headline: "Automated Document AI for Insurance Claims Network",
      sector: "Insurance Agency Network",
      summary: "Built an intelligent document extraction pipeline extracting tabular policy data across heterogeneous formats with 96% accuracy, cutting manual entry by 70% in 6 weeks.",
      metric: "6 Weeks",
      metricLabel: "Kickoff to production deployment",
    },
    faqs: [
      { q: "Is our private company data used to train AI models?", a: "No. We utilize commercial enterprise tier APIs with contractual zero-retention guarantees, or deploy open-weight models directly in your private cloud VPC." },
      { q: "How do you prevent AI hallucinations?", a: "We enforce strict RAG architecture: models are only allowed to answer using retrieved, cited snippets. When confidence falls below threshold, it triggers human-in-the-loop fallback." },
      { q: "What vector database do you recommend?", a: "For most existing systems, pgvector on PostgreSQL offers outstanding performance without adding operational infrastructure. For multi-million vectors, we deploy Qdrant or Pinecone." },
      { q: "Can this integrate with our internal ERP/CRM?", a: "Yes. Our pipelines connect securely to SAP, Salesforce, custom SQL databases, and internal REST endpoints via authenticated tool calling." },
    ],
  },

  "agentic-ai": {
    id: "agentic-ai",
    slug: "agentic-ai",
    title: "Agentic AI & Workflow Automation",
    group: "AI and data",
    groupSlug: "ai-data",
    heroKicker: "Autonomous Multi-Agent Engineering",
    headline: "Autonomous Multi-Agent Systems That Execute Complex Business Workflows",
    lead: "Beyond conversational chat: we architect autonomous, multi-agent software pipelines that research, execute multi-step tools, validate data, and complete operational workflows with human oversight.",
    facts: [
      { num: "Multi-Step", label: "Autonomous task execution" },
      { num: "Human-in-Loop", label: "Configurable approval gates" },
      { num: "100%", label: "Audit log tracing on all actions" },
    ],
    challenge: {
      title: "The Limitation of Single-Turn AI",
      text: "Basic chatbots cannot execute complex, sequential operations across legacy systems, verify their own work, recover from runtime tool failures, or maintain auditable operational logs.",
    },
    approach: {
      title: "Stateful Multi-Agent Orchestration",
      text: "We build structured agent swarms and state-machine workflows (LangGraph, CrewAI) where specialized agents collaborate: planner, tool executor, critic, and verifier with strict safety guardrails.",
    },
    capabilities: [
      {
        icon: "robot",
        title: "Multi-Agent Workflow Orchestration",
        desc: "Stateful agent networks with clear role boundaries, shared memory, and deterministic state transitions.",
        outputs: ["LangGraph / CrewAI state machines", "Shared memory persistence layers", "Dynamic task decomposition graphs"],
      },
      {
        icon: "api",
        title: "Tool & API Integration",
        desc: "Equipping agents with secure, typed tools to query databases, call external APIs, generate documents, and trigger webhooks.",
        outputs: ["OpenAPI tool wrappers", "Idempotent write handlers", "Sandbox execution environments"],
      },
      {
        icon: "checklist",
        title: "Critic & Verification Loops",
        desc: "Automated verification agents that review outputs against business rules before permitting writes to production systems.",
        outputs: ["Rule-based validation checks", "Output consistency scorers", "Automated correction loops"],
      },
      {
        icon: "lock",
        title: "Human-in-the-Loop Governance",
        desc: "Configurable review checkpoints allowing human supervisors to inspect, approve, or adjust agent action plans.",
        outputs: ["Interactive approval interfaces", "Detailed step-by-step audit logs", "Rollback & pause capabilities"],
      },
    ],
    techStack: [
      { category: "Agent Frameworks", items: ["LangGraph", "CrewAI", "AutoGen", "Semantic Kernel"] },
      { category: "Execution & Runtimes", items: ["Python", "FastAPI", "Celery", "Temporal", "Docker Sandboxes"] },
      { category: "Memory & State", items: ["Redis", "PostgreSQL", "Zep", "DynamoDB"] },
      { category: "Observability", items: ["Langfuse", "Arize Phoenix", "OpenTelemetry"] },
    ],
    standards: [
      { title: "Idempotent Tool Execution", body: "All actions capable of mutating data are designed with strict idempotency and transaction boundaries." },
      { title: "Comprehensive Audit Ledger", body: "Every thought step, tool call, parameter, and output is permanently logged with timestamps." },
      { title: "Fail-Safe Kill Switches", body: "Emergency stop mechanisms that freeze agent tasks upon unexpected runtime conditions or cost thresholds." },
      { title: "Permission Scoping", body: "Agents operate with minimum necessary credentials, restricted to explicit read/write scopes." },
    ],
    process: [
      { step: "01", title: "Workflow Decomposition", timing: "Days 1–5", desc: "Mapping human operational workflows into discrete agent roles, required tools, and failure recovery protocols." },
      { step: "02", title: "Tool Harness & Agent Roles", timing: "Week 2", desc: "Developing secure tool integrations, defining prompt personas, and configuring state graphs." },
      { step: "03", title: "Supervised Simulation", timing: "Weeks 3+", desc: "Running test batches in shadow environments with 100% human verification to tune reliability." },
      { step: "04", title: "Production Deployment", timing: "Milestone Close", desc: "Gradual autonomous rollout with monitoring dashboards, anomaly alerting, and supervisor escalation." },
    ],
    caseStudy: {
      headline: "Automated Supply Chain Dispatch Verification",
      sector: "B2B Logistics & Freight",
      summary: "Deployed a multi-agent system that cross-references carrier rate sheets, verifies cargo compliance, and prepares shipping manifests, reducing manual dispatch reviews by 65%.",
      metric: "65%",
      metricLabel: "Manual verification time saved",
    },
    faqs: [
      { q: "How do you prevent agents from making unauthorized purchases or writes?", a: "Critical actions require explicit human approval via interactive webhook notifications (Slack/Email) before final execution." },
      { q: "What happens if an agent gets stuck in a loop?", a: "Every execution graph has hard limits on recursion depth, execution time, and token budget, aborting cleanly with an incident alert if triggered." },
      { q: "Can agents interact with legacy software without APIs?", a: "Yes. In addition to REST/GraphQL APIs, agents can be equipped with headless browser automation tools to interact with web portals." },
      { q: "How do we audit what an agent decided?", a: "Our observability telemetry captures the exact prompt, internal reasoning trace, tool invocation, and returned response for every step." },
    ],
  },

  "cloud-migration": {
    id: "cloud-migration",
    slug: "cloud-migration",
    title: "Cloud Services & Migration",
    group: "Cloud and platform",
    groupSlug: "cloud",
    heroKicker: "AWS · Azure · Google Cloud Architecture",
    headline: "Zero-Downtime Cloud Migration & Modern Infrastructure Architecture",
    lead: "Migrate legacy on-premise infrastructure, optimize existing cloud estates, and construct cloud-native architectures on AWS, Azure, and Google Cloud with audited security and predictable costs.",
    facts: [
      { num: "Zero", label: "Downtime during phased database cutover" },
      { num: "30–45%", label: "Typical cloud cost optimization" },
      { num: "100%", label: "Terraform Infrastructure as Code" },
    ],
    challenge: {
      title: "The Cloud Sprawl & Legacy Lock-in",
      text: "Unplanned cloud adoptions lead to spiraling monthly cloud bills, fragile manual configurations ('ClickOps'), single-point-of-failure architectures, and compliance gaps across hybrid estates.",
    },
    approach: {
      title: "Automated Infrastructure as Code (IaC)",
      text: "We migrate and architect cloud environments using 100% reproducible Terraform code, multi-region failover topologies, automated backup policies, and strict FinOps cost controls.",
    },
    capabilities: [
      {
        icon: "cloud",
        title: "Workload & Database Migration",
        desc: "Phased migration of virtual machines, containerized workloads, and relational databases with zero data loss.",
        outputs: ["DMS database migration scripts", "Containerization & registry setup", "Cutover synchronization runbooks"],
      },
      {
        icon: "server",
        title: "Kubernetes & Container Platforms",
        desc: "Production-ready Amazon EKS, Azure AKS, and Google GKE clusters configured with auto-scaling, ingress, and service mesh.",
        outputs: ["EKS / AKS cluster configurations", "Helm charts & GitOps manifests", "Ingress controller & TLS automation"],
      },
      {
        icon: "lock",
        title: "Cloud Security & Compliance",
        desc: "IAM least-privilege policies, VPC peering, KMS encryption at rest and in transit, and CIS benchmark hardening.",
        outputs: ["Zero-trust IAM role templates", "Private VPC & subnet topologies", "Security Hub / GuardDuty integration"],
      },
      {
        icon: "chart-bar",
        title: "FinOps & Cost Governance",
        desc: "Right-sizing instances, spot instance orchestration, reserved capacity planning, and automated idle resource termination.",
        outputs: ["Cost anomaly alerting policies", "Spot & auto-scaling configurations", "Monthly expenditure optimization report"],
      },
    ],
    techStack: [
      { category: "Cloud Providers", items: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)"] },
      { category: "Infrastructure as Code", items: ["Terraform", "Terragrunt", "AWS CDK", "Pulumi", "Ansible"] },
      { category: "Containers & Orchestration", items: ["Kubernetes", "Docker", "AWS ECS", "ArgoCD", "Helm"] },
      { category: "Networking & Security", items: ["Cloudflare", "AWS Route53", "HashiCorp Vault", "WAF & Shield"] },
    ],
    standards: [
      { title: "No ClickOps", body: "100% of infrastructure, DNS, and IAM permissions are codified in version-controlled Terraform modules." },
      { title: "Immutable Deployments", body: "Workloads deploy as immutable container images with blue/green or canary traffic routing." },
      { title: "Audited Backups & Disaster Recovery", body: "Automated point-in-time recovery testing verifying RTO and RPO objectives." },
      { title: "Least Privilege Access", body: "Strict role-based access control with temporary STS credentials and zero shared root access." },
    ],
    process: [
      { step: "01", title: "Cloud Architecture Assessment", timing: "Days 1–5", desc: "Auditing network dependencies, storage volumes, licensing, and designing target cloud landing zones." },
      { step: "02", title: "IaC Foundation & Staging", timing: "Week 2", desc: "Codifying VPCs, subnets, routing, secrets management, and testing pilot workload deployment." },
      { step: "03", title: "Data Sync & Dry Run", timing: "Weeks 3+", desc: "Replicating production data stores, performance benchmarking, and executing simulated dry-run cutovers." },
      { step: "04", title: "Production Cutover", timing: "Milestone Close", desc: "Scheduled low-traffic cutover, DNS transition, live telemetry verification, and operational sign-off." },
    ],
    caseStudy: {
      headline: "Multi-Region Cloud Migration with Zero Customer Disruption",
      sector: "Fintech & Payment Gateway",
      summary: "Migrated legacy bare-metal database and application tier to AWS EKS and Aurora PostgreSQL, reducing monthly hosting overhead by 38% and eliminating unplanned failover outages.",
      metric: "38%",
      metricLabel: "Monthly infrastructure cost reduction",
    },
    faqs: [
      { q: "How do you guarantee zero downtime during database migration?", a: "We establish continuous asynchronous replication between the source database and the cloud target, executing a rapid DNS cutover only once replica lag reaches zero." },
      { q: "Can we use our existing cloud discounts and credits?", a: "Yes. All infrastructure is provisioned directly inside your own AWS, Azure, or GCP billing accounts." },
      { q: "Who manages the cloud environment after migration?", a: "We can provide ongoing 24/7 SRE and platform management, or conduct structured team handover with runbooks for internal operations." },
      { q: "Do you support hybrid cloud setups?", a: "Yes. We configure secure AWS Direct Connect, Azure ExpressRoute, or IPSec VPN tunnels between on-premise hardware and cloud VPCs." },
    ],
  },

  "devops-engineering": {
    id: "devops-engineering",
    slug: "devops-engineering",
    title: "DevOps & Platform Engineering",
    group: "Cloud and platform",
    groupSlug: "cloud",
    heroKicker: "CI/CD Pipelines · SRE · GitOps",
    headline: "Automated Deployment Pipelines & Developer Platforms That Accelerate Velocity",
    lead: "Eliminate manual release friction and deployment failures. We build automated CI/CD pipelines, GitOps deployment workflows, and internal developer platforms that empower your engineers to ship reliably.",
    facts: [
      { num: "15-Min", label: "Average automated build & test cycle" },
      { num: "Zero-Downtime", label: "Canary & blue/green rollouts" },
      { num: "100%", label: "GitOps version-controlled deployments" },
    ],
    challenge: {
      title: "The Deployment Drag",
      text: "Engineers lose hours fighting fragile deployment scripts, environment drifts between staging and production, flaky manual testing gates, and painful emergency weekend releases.",
    },
    approach: {
      title: "GitOps & Self-Healing Platform Engineering",
      text: "We construct declarative GitOps workflows (ArgoCD), automated PR preview environments, standardized container bases, and automated rollbacks triggered by real-time health checks.",
    },
    capabilities: [
      {
        icon: "terminal-2",
        title: "Automated CI/CD Workflows",
        desc: "Blazing fast pipelines with dependency caching, parallel test suites, security scans, and artifact publishing.",
        outputs: ["GitHub Actions / GitLab CI pipelines", "Artifact registry publishing", "Parallel test execution matrix"],
      },
      {
        icon: "server",
        title: "GitOps & Continuous Delivery",
        desc: "Declarative deployment synchronization where Git pull requests drive all cluster and environment state changes.",
        outputs: ["ArgoCD / Flux configurations", "Environment-specific overlay branches", "Automated drift remediation"],
      },
      {
        icon: "activity",
        title: "Observability & Telemetry",
        desc: "Unified logging, distributed request tracing, and real-time metric dashboards with actionable anomaly alerts.",
        outputs: ["OpenTelemetry instrumentation", "Prometheus & Grafana dashboards", "Datadog / CloudWatch alert rules"],
      },
      {
        icon: "shield-check",
        title: "DevSecOps & Supply Chain Security",
        desc: "Automated container vulnerability scanning, SBOM generation, license compliance, and static application security testing.",
        outputs: ["Trivy / Snyk image scanning gates", "Secret detection pre-commit hooks", "Signed container artifact verification"],
      },
    ],
    techStack: [
      { category: "CI/CD Tools", items: ["GitHub Actions", "GitLab CI", "CircleCI", "ArgoCD", "Tekton"] },
      { category: "Container & Orchestration", items: ["Docker", "Kubernetes", "Helm", "Kustomize"] },
      { category: "Observability", items: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "Datadog"] },
      { category: "Security & Scanning", items: ["Trivy", "Snyk", "SonarQube", "HashiCorp Vault"] },
    ],
    standards: [
      { title: "Everything as Code", body: "Pipelines, alert definitions, dashboards, and cluster policies are codified in version control." },
      { title: "Automated Rollbacks", body: "Canary rollouts monitor error rates and latency, automatically rolling back if error thresholds are exceeded." },
      { title: "Ephemeral Preview Environments", body: "Automated on-demand environments spun up for pull requests and torn down on merge." },
      { title: "No SSH in Production", body: "Zero manual server shell access; all changes apply declaratively through immutable deployment pipelines." },
    ],
    process: [
      { step: "01", title: "Pipeline & Tool Audit", timing: "Days 1–5", desc: "Analyzing current release lead time, build failure rates, environment configuration drift, and test bottlenecks." },
      { step: "02", title: "Base Platform & CI Hardening", timing: "Week 2", desc: "Optimizing Docker build caches, parallelizing test steps, and integrating vulnerability security scanners." },
      { step: "03", title: "GitOps & Deployment Automation", timing: "Weeks 3+", desc: "Deploying ArgoCD/Flux, configuring blue/green deployment strategies, and setting up automated preview environments." },
      { step: "04", title: "Telemetry & SRE Handover", timing: "Milestone Close", desc: "Setting up golden signals monitoring (latency, traffic, errors, saturation) and incident on-call runbooks." },
    ],
    caseStudy: {
      headline: "From Monthly Releases to Daily Continuous Delivery",
      sector: "SaaS Enterprise Software",
      summary: "Modernized build and release infrastructure for a 45-person engineering organization, reducing deployment cycle times from 3 weeks to under 20 minutes with zero downtime.",
      metric: "90%",
      metricLabel: "Reduction in deployment cycle time",
    },
    faqs: [
      { q: "Do we have to switch our existing CI provider?", a: "No. We optimize your existing GitHub Actions, GitLab CI, or Jenkins pipelines rather than forcing unnecessary vendor migrations." },
      { q: "How do you handle secrets and credentials in CI/CD?", a: "We utilize OIDC tokens with AWS/Azure/GCP, eliminating long-lived static API keys, and integrate with HashiCorp Vault or AWS Secrets Manager." },
      { q: "Can you help set up on-call alerting for our team?", a: "Yes. We configure PagerDuty, Opsgenie, or Slack alerts tied directly to Prometheus and CloudWatch anomaly thresholds." },
      { q: "What is your stance on Kubernetes vs Serverless?", a: "We select what matches your team scale and workload profile: ECS/Fargate for simplicity, EKS/K8s for complex multi-service microservices." },
    ],
  },

  "qa-automation": {
    id: "qa-automation",
    slug: "qa-automation",
    title: "QA & Test Automation",
    group: "Quality, security and enterprise",
    groupSlug: "quality",
    heroKicker: "Automated Testing & Quality Engineering",
    headline: "Automated Quality Engineering That Prevents Production Regressions",
    lead: "Transform testing from a release bottleneck into an automated engineering accelerator. We build end-to-end, integration, API, and performance test suites integrated directly into your CI/CD pipeline.",
    facts: [
      { num: "85%+", label: "Target automated regression coverage" },
      { num: "Zero", label: "Manual regression release delays" },
      { num: "CI Gated", label: "Every PR verified before merging" },
    ],
    challenge: {
      title: "The Manual QA Bottleneck",
      text: "Manual QA cycles take days to execute, miss subtle edge cases across browser variants, create antagonistic friction between developers and testers, and let critical bugs slip into customer hands.",
    },
    approach: {
      title: "Shift-Left Automated Quality Engineering",
      text: "Our test engineers embed alongside developers to implement shift-left testing: automated unit tests, fast contract tests, reliable Playwright browser suites, and load testing executed on every PR.",
    },
    capabilities: [
      {
        icon: "checklist",
        title: "End-to-End Browser Automation",
        desc: "Fast, non-flaky Playwright and Cypress test suites running across Chromium, WebKit, and Firefox with video artifacts.",
        outputs: ["Playwright test repository", "Parallel test runner configuration", "Visual regression diff reports"],
      },
      {
        icon: "api",
        title: "API & Contract Testing",
        desc: "Automated REST and GraphQL API validation verifying schema contracts, status codes, payload shapes, and latency.",
        outputs: ["Supertest / Newman test suites", "Pact contract verification", "Edge case payload fuzzing"],
      },
      {
        icon: "activity",
        title: "Performance & Load Testing",
        desc: "Simulating peak concurrent user traffic with k6 and Locust to uncover database deadlocks and memory leaks.",
        outputs: ["k6 performance test scripts", "Threshold latency pass/fail gates", "Bottleneck diagnostic reports"],
      },
      {
        icon: "shield-check",
        title: "Security & Accessibility (a11y) Testing",
        desc: "Automated axe-core accessibility compliance and DAST security vulnerability scans in continuous delivery.",
        outputs: ["axe-core automated test suites", "OWASP ZAP integration", "Compliance audit checklists"],
      },
    ],
    techStack: [
      { category: "Test Frameworks", items: ["Playwright", "Cypress", "Jest / Vitest", "k6", "Postman / Newman"] },
      { category: "Contract & Security", items: ["Pact", "axe-core", "OWASP ZAP", "SonarQube"] },
      { category: "CI Integration", items: ["GitHub Actions", "GitLab CI", "Docker", "Allure Reporting"] },
    ],
    standards: [
      { title: "No Flaky Tests", body: "Tests utilize deterministic auto-waiting and explicit state assertions; brittle fixed timeouts are forbidden." },
      { title: "Parallelized Execution", body: "Test suites shard across container runners to keep total PR test runtime under 15 minutes." },
      { title: "Trace Artifacts on Failure", body: "Failed tests automatically produce DOM snapshots, network HAR logs, and video clips for instant developer reproduction." },
      { title: "Living Test Documentation", body: "Clear BDD or descriptive test cases that serve as reliable documentation of intended system behavior." },
    ],
    process: [
      { step: "01", title: "Test Strategy & Coverage Audit", timing: "Days 1–5", desc: "Auditing current manual test scripts, bug history, critical business user journeys, and tool selection." },
      { step: "02", title: "Automation Framework Setup", timing: "Week 2", desc: "Building the Page Object Model (POM) or App Action architecture and integrating with CI pipelines." },
      { step: "03", title: "Test Suite Expansion", timing: "Weeks 3+", desc: "Automating core regression journeys, API contracts, and edge cases in close synchronization with active sprints." },
      { step: "04", title: "Continuous Quality Governance", timing: "Milestone Close", desc: "Performance baseline gating, automated visual regression reporting, and developer team enablement." },
    ],
    caseStudy: {
      headline: "Reducing Release Verification Time from 4 Days to 20 Minutes",
      sector: "Fintech & Wealth Management",
      summary: "Implemented a comprehensive Playwright and k6 test automation framework for an investment platform, eliminating a 4-day manual testing cycle and uncovering 3 critical race conditions before launch.",
      metric: "95%",
      metricLabel: "Reduction in release regression test time",
    },
    faqs: [
      { q: "Why do you recommend Playwright over Selenium?", a: "Playwright provides modern browser context isolation, native auto-waiting, faster parallel execution, and built-in tracing, eliminating the flakiness common in older Selenium suites." },
      { q: "Can your QA team work in our existing Jira/GitHub environment?", a: "Yes. Our QA engineers log bugs directly into your issue tracker with reproduction steps, screen recordings, network logs, and associated test cases." },
      { q: "Do you write test automation from scratch or maintain existing tests?", a: "We do both: auditing and stabilizing brittle legacy suites, or designing clean modern automation frameworks from the ground up." },
      { q: "How do you handle test data management?", a: "We write automated data factory scripts that generate fresh, isolated test entities per run and clean them up upon test teardown." },
    ],
  },

  "mobile-development": {
  "id": "mobile-development",
  "slug": "mobile-development",
  "title": "Mobile App Development",
  "group": "Build and apps",
  "groupSlug": "apps",
  "heroKicker": "Cross-Platform & Native Mobile Engineering",
  "headline": "Production iOS and Android Apps Engineered for Real-World Reliability",
  "lead": "We engineer native and cross-platform mobile applications using Flutter, React Native, Swift, and Kotlin. Designed for offline-first resilience, hardware performance, and frictionless App Store releases.",
  "facts": [
    {
      "num": "99.9%",
      "label": "Crash-free session rate"
    },
    {
      "num": "iOS & Android",
      "label": "Unified cross-platform delivery"
    },
    {
      "num": "App Store",
      "label": "Guaranteed submission compliance"
    }
  ],
  "challenge": {
    "title": "The Mobile Fragmentation Pitfall",
    "text": "Mobile apps face constant fragmentation across device screen sizes, flaky network conditions, battery consumption limits, and unpredictable app store rejection cycles that delay time-to-market."
  },
  "approach": {
    "title": "Resilient Offline-First Engineering",
    "text": "We architect cross-platform mobile apps with local database synchronization (SQLite/WatermelonDB), native bridges when hardware performance demands it, automated Fastlane CI/CD pipelines, and rigorous device-matrix testing."
  },
  "capabilities": [
    {
      "icon": "device-mobile",
      "title": "Cross-Platform Flutter & React Native",
      "desc": "Single-codebase mobile applications delivering native 60fps animations, fluid gestures, and unified business logic across iOS and Android.",
      "outputs": [
        "Production Flutter / React Native app",
        "Shared UI component library",
        "Modular state architecture"
      ]
    },
    {
      "icon": "cpu",
      "title": "Native iOS (Swift) & Android (Kotlin) Bridges",
      "desc": "Custom native modules interfacing directly with Bluetooth Low Energy (BLE), background geofencing, camera hardware, and biometric authentication.",
      "outputs": [
        "Native Swift & Kotlin bridge modules",
        "Hardware peripheral integration",
        "Background sync worker tasks"
      ]
    },
    {
      "icon": "database",
      "title": "Offline-First Synchronization",
      "desc": "Local data persistence with conflict resolution, background queue syncing, and zero UI latency during intermittent connectivity.",
      "outputs": [
        "SQLite / WatermelonDB schema",
        "Optimistic mutation rollback logic",
        "Bidirectional sync engine"
      ]
    },
    {
      "icon": "server",
      "title": "Fastlane & Store Release Automation",
      "desc": "Automated code signing, provisioning profile management, beta distribution (TestFlight/Firebase), and App Store submission workflows.",
      "outputs": [
        "Fastlane deployment configuration",
        "Automated screenshot generators",
        "Beta distribution pipelines"
      ]
    }
  ],
  "techStack": [
    {
      "category": "Mobile Frameworks",
      "items": [
        "Flutter",
        "React Native",
        "Swift / SwiftUI",
        "Kotlin / Jetpack Compose"
      ]
    },
    {
      "category": "Local Storage & State",
      "items": [
        "SQLite",
        "WatermelonDB",
        "Realm",
        "Redux Toolkit",
        "Bloc / Riverpod"
      ]
    },
    {
      "category": "Testing & DevOps",
      "items": [
        "Fastlane",
        "Maestro E2E",
        "Firebase Test Lab",
        "GitHub Actions"
      ]
    },
    {
      "category": "Backend & Services",
      "items": [
        "Firebase Cloud Messaging",
        "GraphQL",
        "REST APIs",
        "AWS Amplify"
      ]
    }
  ],
  "standards": [
    {
      "title": "99.8%+ Crash-Free Sessions",
      "body": "Crashlytics telemetry integrated with automated alerts on error rate deviations."
    },
    {
      "title": "Offline Graceful Fallbacks",
      "body": "Every critical flow functions offline with queued mutations and explicit user feedback."
    },
    {
      "title": "App Store Approval Guarantee",
      "body": "Full compliance with Apple App Store Review Guidelines and Google Play policies."
    },
    {
      "title": "Automated Device Matrix Testing",
      "body": "Verification across real device resolutions, tablets, and dark/light system modes."
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Product Discovery & UX Flow",
      "timing": "Days 1–5",
      "desc": "User journey mapping, mobile ergonomics, offline sync strategy, and target device specifications."
    },
    {
      "step": "02",
      "title": "Scaffold & Store Setup",
      "timing": "Week 2",
      "desc": "Repository setup, developer accounts, Fastlane provisioning, and baseline navigation skeleton."
    },
    {
      "step": "03",
      "title": "Sprint Execution",
      "timing": "Weeks 3+",
      "desc": "Bi-weekly sprint releases delivered to TestFlight and Google Play Internal Testing channels."
    },
    {
      "step": "04",
      "title": "Store Submission & Launch",
      "timing": "Milestone Close",
      "desc": "Production submission, privacy nutrition labels, crash monitoring, and store optimization."
    }
  ],
  "caseStudy": {
    "headline": "Field Service Mobile App for Industrial Logistics",
    "sector": "Field Operations & Logistics",
    "summary": "Built an offline-first Flutter application for 1,200+ field technicians with background GPS telemetry, barcode scanning, and instant local receipt generation.",
    "metric": "99.94%",
    "metricLabel": "Crash-free session benchmark"
  },
  "faqs": [
    {
      "q": "Should we build Flutter, React Native, or Native Swift/Kotlin?",
      "a": "For 90% of business apps, Flutter or React Native cuts development and maintenance costs in half without compromising UX. We reserve native Swift/Kotlin for heavy hardware/AR compute."
    },
    {
      "q": "How do you handle App Store rejections?",
      "a": "We prepare all compliance documentation, privacy nutrition disclosures, and review account credentials upfront, resolving any reviewer inquiries directly."
    },
    {
      "q": "Can the mobile app share code with our web app?",
      "a": "With React Native, we can share business logic, API clients, and TypeScript types directly with a React web frontend."
    },
    {
      "q": "How do you test across all different Android devices?",
      "a": "We combine automated Maestro E2E test runs on Firebase Test Lab with physical device verification on popular screen sizes and OS versions."
    }
  ]
},

  "ui-ux-design": {
  "id": "ui-ux-design",
  "slug": "ui-ux-design",
  "title": "UI/UX & Product Discovery",
  "group": "Build and apps",
  "groupSlug": "apps",
  "heroKicker": "Design Systems & User Experience Architecture",
  "headline": "Enterprise UX Design Grounded in User Research and Engineering Reality",
  "lead": "We bridge user behavior and technical feasibility through structured product discovery, design token systems, and interactive Figma prototypes that developers can implement without guesswork.",
  "facts": [
    {
      "num": "100%",
      "label": "Component token fidelity"
    },
    {
      "num": "WCAG 2.1",
      "label": "AA contrast & reachability"
    },
    {
      "num": "2 Weeks",
      "label": "Rapid prototype validation"
    }
  ],
  "challenge": {
    "title": "The Dribbble Fantasy Dilemma",
    "text": "Many design agencies produce visually slick mockups that fall apart during real engineering: they ignore edge cases, empty states, slow data loading, accessibility laws, and backend constraints."
  },
  "approach": {
    "title": "Production-Grounded Design Systems",
    "text": "We design with production tokens, comprehensive states (loading, error, empty, truncated), and real data models. Designers and front-end architects collaborate from day one to guarantee 100% implementation fidelity."
  },
  "capabilities": [
    {
      "icon": "palette",
      "title": "Product Discovery & User Journey Mapping",
      "desc": "Qualitative stakeholder interviews, workflow bottleneck identification, persona definition, and information architecture hierarchy.",
      "outputs": [
        "User journey maps",
        "Information architecture sitemaps",
        "Service blueprint schemas"
      ]
    },
    {
      "icon": "layout",
      "title": "Enterprise Design Systems & Tokens",
      "desc": "Scalable component libraries built in Figma with auto-layout, design tokens, responsive breakpoints, and strict variant properties.",
      "outputs": [
        "Figma design system library",
        "Design token JSON export",
        "Component usage documentation"
      ]
    },
    {
      "icon": "world-code",
      "title": "Interactive High-Fidelity Prototypes",
      "desc": "Clickable prototypes simulating real user interactions, micro-animations, form validations, and conditional branching for user testing.",
      "outputs": [
        "Figma clickable prototypes",
        "Micro-interaction specs",
        "Usability test recordings & findings"
      ]
    },
    {
      "icon": "shield-check",
      "title": "Accessibility (a11y) & Usability Auditing",
      "desc": "Contrast ratio verification, keyboard navigation paths, screen-reader landmark labeling, and cognitive load reduction.",
      "outputs": [
        "WCAG 2.1 AA audit report",
        "Keyboard tab order diagrams",
        "Screen reader copy specifications"
      ]
    }
  ],
  "techStack": [
    {
      "category": "Design Tools",
      "items": [
        "Figma (Auto Layout & Variables)",
        "FigJam",
        "Adobe Creative Cloud",
        "Principle"
      ]
    },
    {
      "category": "Design Tokens & Handoff",
      "items": [
        "Tokens Studio",
        "Storybook",
        "Zeroheight",
        "GitHub"
      ]
    },
    {
      "category": "Research & Testing",
      "items": [
        "UserTesting",
        "Hotjar",
        "Maze",
        "Optimal Workshop"
      ]
    },
    {
      "category": "Accessibility Standards",
      "items": [
        "WCAG 2.1 AA",
        "Stark",
        "Axe DevTools",
        "Contrast Checker"
      ]
    }
  ],
  "standards": [
    {
      "title": "Complete State Coverage",
      "body": "Every component is delivered with explicit default, hover, active, focus, disabled, loading, and error states."
    },
    {
      "title": "WCAG AA Contrast Minimums",
      "body": "All text and interactive elements strictly meet 4.5:1 (normal) and 3:1 (large) contrast thresholds."
    },
    {
      "title": "Design Token Code Parity",
      "body": "Color, spacing, typography, and elevation tokens map directly to CSS/JSON variables in the codebase."
    },
    {
      "title": "Real-Data Testing",
      "body": "Layouts are stress-tested against maximum character lengths, localized translations, and extreme data tables."
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Discovery & User Research",
      "timing": "Days 1–5",
      "desc": "Stakeholder alignment, workflow friction analysis, competitive benchmarking, and core user goals."
    },
    {
      "step": "02",
      "title": "Information Architecture & Wireframes",
      "timing": "Week 2",
      "desc": "Content modeling, wireframing key paths, and validating flow logic before high-fidelity visual styling."
    },
    {
      "step": "03",
      "title": "Design System & High-Fi Prototyping",
      "timing": "Weeks 3–4",
      "desc": "Applying brand tokens, designing responsive screen variants, and building interactive prototypes."
    },
    {
      "step": "04",
      "title": "Developer Handoff & Governance",
      "timing": "Milestone Close",
      "desc": "Component spec documentation, token integration, Storybook alignment, and design QA reviews."
    }
  ],
  "caseStudy": {
    "headline": "Complex Financial Dashboard Redesign for Portfolio Managers",
    "sector": "Fintech & Wealth Advisory",
    "summary": "Redesigned a high-density financial analytics workstation into an intuitive tokenized layout, reducing daily task completion times by 42% across 350 active traders.",
    "metric": "42%",
    "metricLabel": "Reduction in task completion time"
  },
  "faqs": [
    {
      "q": "Do you supply only Figma files or code as well?",
      "a": "We provide comprehensive Figma design libraries with tokens, and our frontend engineers can also implement them directly in React, Tailwind, or Vue."
    },
    {
      "q": "How do you test designs before coding?",
      "a": "We run moderated and unmoderated usability sessions with interactive Figma prototypes on platforms like Maze and UserTesting."
    },
    {
      "q": "Can you modernize our existing outdated application without a ground-up rebuild?",
      "a": "Yes. We often conduct incremental UX audits, modernizing high-impact user flows first and establishing a phased design system rollout."
    },
    {
      "q": "What is your approach to dark mode and enterprise themes?",
      "a": "We construct design token layers using semantic variables (e.g., surface-default, text-primary), enabling automated light and dark mode parity."
    }
  ]
},

  "ecommerce-development": {
  "id": "ecommerce-development",
  "slug": "ecommerce-development",
  "title": "E-Commerce Builds & Headless Commerce",
  "group": "Build and apps",
  "groupSlug": "apps",
  "heroKicker": "Omnichannel Commerce Architecture",
  "headline": "High-Throughput Commerce Platforms Built for Conversion and Order Integrity",
  "lead": "We architect headless and enterprise commerce systems combining Shopify Plus, Commercelayer, Next.js, and custom payment gateways with ERP inventory synchronization.",
  "facts": [
    {
      "num": "<1.0s",
      "label": "Edge-cached checkout entry"
    },
    {
      "num": "100%",
      "label": "PCI-DSS compliant workflows"
    },
    {
      "num": "Real-time",
      "label": "ERP inventory reconciliation"
    }
  ],
  "challenge": {
    "title": "The Monolithic Commerce Trap",
    "text": "Traditional e-commerce templates suffer from sluggish page load times, checkout abandonment, inventory race conditions during flash sales, and fragile third-party plugins that break without warning."
  },
  "approach": {
    "title": "Headless Decoupled Commerce",
    "text": "We decouple the frontend storefront from the commerce backend, deploying lightning-fast edge-rendered Next.js frontends powered by Shopify Plus or Commercelayer APIs, idempotent payment processing, and event-driven ERP sync."
  },
  "capabilities": [
    {
      "icon": "shopping-cart",
      "title": "Headless Storefronts & Next.js Commerce",
      "desc": "Edge-rendered, sub-second product catalog browsing, instant category filtering, and optimized mobile-first checkout flows.",
      "outputs": [
        "Next.js commerce frontend",
        "Edge-cached static catalog generation",
        "Algolia / Meilisearch integration"
      ]
    },
    {
      "icon": "api",
      "title": "ERP & Inventory Synchronization",
      "desc": "Event-driven webhooks synchronizing live stock levels, multi-warehouse routing, and order fulfillment with SAP, NetSuite, or Dynamics.",
      "outputs": [
        "Two-way inventory sync workers",
        "Dead-letter queue retry mechanisms",
        "Multi-warehouse dispatch rules"
      ]
    },
    {
      "icon": "shield-check",
      "title": "Payment Gateway & Tax Automation",
      "desc": "Idempotent payment capture via Stripe, PayPal, and regional gateways with automated tax calculation (Avalara) and fraud scoring.",
      "outputs": [
        "Stripe payment intent integration",
        "Automated Avalara tax calculations",
        "Idempotent webhook handlers"
      ]
    },
    {
      "icon": "chart-bar",
      "title": "Conversion Rate Optimization (CRO)",
      "desc": "A/B testing infrastructure, 1-click checkout accelerators, localized currencies, and comprehensive analytics event pipelines.",
      "outputs": [
        "Server-side Google Tag Manager",
        "A/B testing experimentation hooks",
        "Core Web Vitals optimization"
      ]
    }
  ],
  "techStack": [
    {
      "category": "Commerce Engines",
      "items": [
        "Shopify Plus",
        "Commercelayer",
        "MedusaJS",
        "Saleor",
        "BigCommerce"
      ]
    },
    {
      "category": "Frontend & Edge",
      "items": [
        "Next.js",
        "React",
        "Cloudflare Workers",
        "Vercel",
        "Tailwind CSS"
      ]
    },
    {
      "category": "Search & Payments",
      "items": [
        "Algolia",
        "Meilisearch",
        "Stripe",
        "PayPal",
        "Avalara AvaTax"
      ]
    },
    {
      "category": "Integrations & Analytics",
      "items": [
        "Segment",
        "Klaviyo",
        "PostHog",
        "NetSuite / SAP Connectors"
      ]
    }
  ],
  "standards": [
    {
      "title": "Sub-Second Page Loads",
      "body": "Product listing and detail pages edge-cached to maintain sub-second First Contentful Paint globally."
    },
    {
      "title": "Zero Inventory Race Conditions",
      "body": "Atomic inventory reservation during checkout to prevent double-selling during traffic surges."
    },
    {
      "title": "PCI-DSS Level 1 Compliance",
      "body": "Direct tokenization through payment gateway SDKs; zero sensitive cardholder data touches your server."
    },
    {
      "title": "Automated Checkout Smoke Tests",
      "body": "Synthetic headless test transactions executed every hour to verify live payment path health."
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Architecture & Catalog Modeling",
      "timing": "Days 1–5",
      "desc": "Catalog taxonomy, ERP integration touchpoints, tax/shipping matrix, and payment gateway selection."
    },
    {
      "step": "02",
      "title": "Storefront & Engine Setup",
      "timing": "Week 2",
      "desc": "Setting up headless commerce backend, Next.js storefront scaffold, and API authentication."
    },
    {
      "step": "03",
      "title": "Feature Sprints & Integrations",
      "timing": "Weeks 3–5",
      "desc": "Cart & checkout flow, inventory webhooks, search indexing, customer accounts, and email marketing."
    },
    {
      "step": "04",
      "title": "Load Testing & Go-Live",
      "timing": "Milestone Close",
      "desc": "Black Friday traffic load simulations, payment pathway verification, SEO redirects, and DNS cutover."
    }
  ],
  "caseStudy": {
    "headline": "Headless Shopify Plus Migration for US Apparel Brand",
    "sector": "Retail & Direct-to-Consumer",
    "summary": "Migrated a legacy e-commerce site to a headless Next.js architecture with Shopify Plus, dropping page load times from 4.8s to 0.9s and boosting checkout conversion by 28%.",
    "metric": "28%",
    "metricLabel": "Increase in checkout conversion"
  },
  "faqs": [
    {
      "q": "Why should we choose headless commerce over standard Shopify themes?",
      "a": "Headless provides sub-second page speeds, unlimited UX customization, multi-region routing, and removes the performance penalties of third-party Shopify apps."
    },
    {
      "q": "Can we migrate our existing customer and order history?",
      "a": "Yes. We build automated ETL scripts to migrate customer accounts, order histories, and product variants without downtime or data loss."
    },
    {
      "q": "How do you handle multi-currency and international shipping?",
      "a": "We integrate geo-IP detection with localized price lists, duty calculations, and multi-currency checkout gateways like Shopify Markets or Stripe."
    },
    {
      "q": "What happens if our ERP system goes offline temporarily?",
      "a": "Our webhook architecture queues all orders and mutations in durable message brokers (SQS/Redis) with exponential retry policies until the ERP recovers."
    }
  ]
},

  "data-engineering": {
  "id": "data-engineering",
  "slug": "data-engineering",
  "title": "Data Engineering, Analytics & BI",
  "group": "AI and data",
  "groupSlug": "ai-data",
  "heroKicker": "Data Pipelines & Enterprise Lakehouse",
  "headline": "Modern Data Pipelines Engineered for Real-Time Analytics and Audited Truth",
  "lead": "We design, build, and maintain enterprise data warehouses, streaming pipelines, and automated BI semantic layers using Snowflake, Databricks, dbt, and Kafka. Clean data delivered on time.",
  "facts": [
    {
      "num": "Sub-Minute",
      "label": "Streaming ingestion latency"
    },
    {
      "num": "dbt Gated",
      "label": "Automated data schema tests"
    },
    {
      "num": "100%",
      "label": "Data lineage & governance"
    }
  ],
  "challenge": {
    "title": "The Data Chaos Trap",
    "text": "Organizations drown in disconnected data silos, fragile nightly batch ETL jobs that silently break, contradictory numbers across departments, and ballooning cloud warehouse compute bills."
  },
  "approach": {
    "title": "Software Engineering Rigor Applied to Data",
    "text": "We apply software engineering principles to data: version-controlled transformations with dbt, event-driven streaming with Kafka, automated schema regression testing in CI, and unified semantic metrics layers."
  },
  "capabilities": [
    {
      "icon": "server",
      "title": "Streaming & Batch Ingestion Pipelines",
      "desc": "High-throughput ingestion from transactional databases, webhooks, third-party APIs, and IoT devices into structured bronze lakehouse layers.",
      "outputs": [
        "Kafka / Debezium CDC pipelines",
        "Airflow / Prefect orchestration DAGs",
        "Schema registry validation rules"
      ]
    },
    {
      "icon": "database",
      "title": "Cloud Data Warehousing & Lakehouse",
      "desc": "Medallion architecture (Bronze, Silver, Gold) implemented in Snowflake, Databricks, or BigQuery for fast, partitioned, and cost-controlled queries.",
      "outputs": [
        "Snowflake / Databricks warehouse models",
        "Clustering & partitioning strategies",
        "Automated warehouse auto-suspend rules"
      ]
    },
    {
      "icon": "code",
      "title": "dbt Transformations & Data Testing",
      "desc": "Modular SQL transformations with automated data freshness checks, referential integrity tests, and documented data lineage graphs.",
      "outputs": [
        "Version-controlled dbt repository",
        "Automated CI schema assertion tests",
        "Data lineage documentation portal"
      ]
    },
    {
      "icon": "chart-bar",
      "title": "Semantic Layers & Executive BI",
      "desc": "Unified business metrics definitions serving Power BI, Tableau, and Looker dashboards so every leader sees identical, audited figures.",
      "outputs": [
        "Power BI / Tableau semantic datasets",
        "Executive KPI dashboards",
        "Row-level security permission schemas"
      ]
    }
  ],
  "techStack": [
    {
      "category": "Warehouses & Storage",
      "items": [
        "Snowflake",
        "Databricks",
        "Google BigQuery",
        "AWS Redshift",
        "PostgreSQL"
      ]
    },
    {
      "category": "Transformation & Orchestration",
      "items": [
        "dbt (Core & Cloud)",
        "Apache Airflow",
        "Prefect",
        "Dagster"
      ]
    },
    {
      "category": "Streaming & Ingestion",
      "items": [
        "Apache Kafka",
        "Debezium (CDC)",
        "Fivetran",
        "Airbyte",
        "AWS Kinesis"
      ]
    },
    {
      "category": "BI & Visualization",
      "items": [
        "Power BI",
        "Tableau",
        "Looker",
        "Metabase",
        "Hex"
      ]
    }
  ],
  "standards": [
    {
      "title": "Continuous Data Testing in CI",
      "body": "Every schema transformation must pass uniqueness, non-null, and relationship assertions before merging."
    },
    {
      "title": "Full Lineage Traceability",
      "body": "End-to-end auditability from raw ingestion source to executive dashboard metric."
    },
    {
      "title": "Automated Anomaly Alerting",
      "body": "Real-time alerts triggered on volume drops, freshness breaches, or null rate spikes via Slack/PagerDuty."
    },
    {
      "title": "Cost-Governance Guardrails",
      "body": "Query resource limits, compute warehouse auto-suspend, and table retention policies strictly configured."
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Data Audit & Source Mapping",
      "timing": "Days 1–5",
      "desc": "Auditing current schemas, source data reliability, reporting KPIs, and cloud infrastructure costs."
    },
    {
      "step": "02",
      "title": "Warehouse & Ingestion Setup",
      "timing": "Week 2",
      "desc": "Provisioning Snowflake/Databricks, setting up CDC pipelines, and configuring secure VPC connections."
    },
    {
      "step": "03",
      "title": "dbt Modeling & Transformation",
      "timing": "Weeks 3–5",
      "desc": "Developing staging, intermediate, and dimensional models with automated data quality assertions."
    },
    {
      "step": "04",
      "title": "BI Semantic Layer & Handoff",
      "timing": "Milestone Close",
      "desc": "Connecting BI dashboards, row-level security verification, runbook handover, and team enablement."
    }
  ],
  "caseStudy": {
    "headline": "Unified Modern Data Stack for Multi-State Retail Operator",
    "sector": "Retail & Supply Chain",
    "summary": "Consolidated 14 disparate POS and inventory databases into a Snowflake lakehouse with dbt, cutting daily financial closing time from 8 hours to 12 minutes.",
    "metric": "12 Min",
    "metricLabel": "Daily financial reconciliation time (down from 8h)"
  },
  "faqs": [
    {
      "q": "Should we migrate to Snowflake, Databricks, or BigQuery?",
      "a": "We evaluate based on your current ecosystem, machine learning workloads, and team skills: Snowflake excels for fast SQL BI; Databricks leads for unified data science and Lakehouse architectures."
    },
    {
      "q": "How do you prevent broken data from reaching production dashboards?",
      "a": "We run dbt data assertions on every pull request and pipeline run. If a schema violation or freshness anomaly occurs, downstream models pause and alerts fire instantly."
    },
    {
      "q": "Can you help optimize our runaway Snowflake / BigQuery bills?",
      "a": "Yes. We conduct data engineering cost audits, implementing auto-suspend parameters, clustered key optimizations, and materialization restructuring to cut cloud spend by 30–50%."
    },
    {
      "q": "How do you handle sensitive PII in compliance with GDPR/HIPAA?",
      "a": "We implement dynamic data masking, column-level encryption, role-based access control, and automated PII anonymization in raw landing zones."
    }
  ]
},

  "api-modernization": {
  "id": "api-modernization",
  "slug": "api-modernization",
  "title": "API & Legacy Modernisation",
  "group": "Cloud and platform",
  "groupSlug": "cloud",
  "heroKicker": "Architecture Refactoring & API Migration",
  "headline": "De-Risking Legacy Monoliths with Incremental API Modernisation",
  "lead": "We safely decompose monolithic systems into high-throughput microservices using the Strangler Fig pattern, type-safe API gateways, and automated contract testing with zero unplanned downtime.",
  "facts": [
    {
      "num": "Zero",
      "label": "Unplanned downtime during cutover"
    },
    {
      "num": "10x",
      "label": "API throughput improvement"
    },
    {
      "num": "OpenAPI 3.1",
      "label": "Complete typed schema coverage"
    }
  ],
  "challenge": {
    "title": "The Legacy System Paralyzation",
    "text": "Organizations are trapped by mission-critical legacy monoliths that are too fragile to modify, lack documentation, fail during traffic peaks, and prevent engineering teams from releasing new features quickly."
  },
  "approach": {
    "title": "The Incremental Strangler Fig Strategy",
    "text": "We avoid risky big-bang rewrites. Instead, we insert an intelligent API gateway, extract high-value capabilities slice by slice into modern microservices, and run shadow traffic verification to guarantee behavioral parity before switching traffic."
  },
  "capabilities": [
    {
      "icon": "api",
      "title": "Strangler Fig Architecture & Routing",
      "desc": "Reverse proxies and API gateways that transparently route incoming traffic between the legacy monolith and newly deployed microservices.",
      "outputs": [
        "Kong / Envoy API gateway configuration",
        "Path-based routing rules",
        "Gradual canary rollout switchboard"
      ]
    },
    {
      "icon": "shield-check",
      "title": "Contract Testing & Parity Verification",
      "desc": "Automated contract testing and shadow traffic replay ensuring new endpoints return identical outputs to the legacy implementation.",
      "outputs": [
        "Pact contract verification suites",
        "Shadow traffic replay harnesses",
        "Automated JSON diff analysis reports"
      ]
    },
    {
      "icon": "database",
      "title": "Database Decoupling & Event Sourcing",
      "desc": "Decoupling shared monolithic databases into isolated service datastores using Change Data Capture (CDC) and event streaming.",
      "outputs": [
        "Debezium CDC replication scripts",
        "Dual-write synchronization handlers",
        "Zero-downtime data migration runbooks"
      ]
    },
    {
      "icon": "world-code",
      "title": "Type-Safe OpenAPI 3.1 & GraphQL Gateways",
      "desc": "Standardized, self-documenting API interfaces with automated client SDK generation, rate limiting, and OAuth2/mTLS security.",
      "outputs": [
        "OpenAPI 3.1 schema specifications",
        "Federated GraphQL schemas",
        "Automated TypeScript SDK generators"
      ]
    }
  ],
  "techStack": [
    {
      "category": "Gateways & Proxies",
      "items": [
        "Kong Gateway",
        "Envoy Proxy",
        "AWS API Gateway",
        "Traefik",
        "Apigee"
      ]
    },
    {
      "category": "Modern Microservices",
      "items": [
        "Go (Golang)",
        "Node.js / TypeScript",
        "Python / FastAPI",
        "Java / Spring Boot"
      ]
    },
    {
      "category": "Data Sync & CDC",
      "items": [
        "Apache Kafka",
        "Debezium",
        "PostgreSQL",
        "Redis"
      ]
    },
    {
      "category": "Testing & Monitoring",
      "items": [
        "Pact",
        "Postman / Newman",
        "OpenTelemetry",
        "Datadog"
      ]
    }
  ],
  "standards": [
    {
      "title": "Zero Big-Bang Rewrites",
      "body": "All modernization proceeds through incremental, reversible steps with automated rollback triggers."
    },
    {
      "title": "Shadow Traffic Validation",
      "body": "New microservices run in shadow mode alongside legacy code to verify output parity under real traffic."
    },
    {
      "title": "Strict Backward Compatibility",
      "body": "Client-facing API contracts remain backwards-compatible to prevent breaking mobile and third-party consumers."
    },
    {
      "title": "Complete Schema Typing",
      "body": "Every new endpoint is defined in strict OpenAPI 3.1 or GraphQL schema with automated validation."
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Domain Mapping & Dependency Audit",
      "timing": "Days 1–5",
      "desc": "Analyzing legacy codebase, database coupling, transaction boundaries, and isolating the first bounded context."
    },
    {
      "step": "02",
      "title": "Gateway Setup & Shadow Routing",
      "timing": "Week 2",
      "desc": "Deploying the API gateway, configuring traffic mirroring, and establishing baseline telemetry."
    },
    {
      "step": "03",
      "title": "Microservice Extraction & Sync",
      "timing": "Weeks 3–6",
      "desc": "Developing the modernized service, setting up CDC data sync, and validating parity with automated tests."
    },
    {
      "step": "04",
      "title": "Canary Cutover & Monolith Pruning",
      "timing": "Milestone Close",
      "desc": "Progressive canary traffic shifting (5% -> 25% -> 100%), decommissioning legacy routes, and runbook updates."
    }
  ],
  "caseStudy": {
    "headline": "Decomposing a 12-Year Monolith for Financial Transaction Processing",
    "sector": "Fintech & Banking",
    "summary": "Modernized a core transaction processing engine from a monolithic Java 7 application to Go microservices, improving throughput by 10x with zero customer downtime during migration.",
    "metric": "10x",
    "metricLabel": "Throughput improvement with 0 downtime"
  },
  "faqs": [
    {
      "q": "Why shouldn't we do a complete system rewrite from scratch?",
      "a": "Complete rewrites have an alarming failure rate because legacy systems embody years of hidden edge cases and business rules. Incremental modernization provides value in weeks while keeping risk near zero."
    },
    {
      "q": "How do you ensure the new service behaves exactly like the old one?",
      "a": "We use shadow traffic mirroring: real production requests are asynchronously forwarded to both the legacy system and the new service, comparing responses automatically."
    },
    {
      "q": "How do you handle shared monolithic databases?",
      "a": "We use Change Data Capture (CDC) to synchronize data in real-time, allowing new services to operate on their own datastores without breaking legacy database triggers."
    },
    {
      "q": "Can you modernize proprietary on-premise legacy systems?",
      "a": "Yes. We frequently build secure API adapter layers bridging on-premises legacy mainframes/databases with modern cloud microservices."
    }
  ]
},

  "cms-platforms": {
  "id": "cms-platforms",
  "slug": "cms-platforms",
  "title": "CMS & Content Platforms",
  "group": "Cloud and platform",
  "groupSlug": "cloud",
  "heroKicker": "Headless Content Management & Digital Experience",
  "headline": "Headless CMS Platforms Engineered for Publishing Speed and Developer Freedom",
  "lead": "We implement enterprise headless CMS architectures using Strapi, Sanity, and Contentful paired with Next.js frontends, giving marketing teams visual control while keeping codebases clean and secure.",
  "facts": [
    {
      "num": "<500ms",
      "label": "Preview update latency"
    },
    {
      "num": "100%",
      "label": "Decoupled security surface"
    },
    {
      "num": "Multi-Region",
      "label": "Edge-rendered CDN content"
    }
  ],
  "challenge": {
    "title": "The Monolithic CMS Deadlock",
    "text": "Traditional monolithic CMS platforms (like bloated WordPress setups) suffer from security vulnerabilities, excruciatingly slow page speeds, fragile plugins that break during updates, and friction between editorial and engineering teams."
  },
  "approach": {
    "title": "Decoupled Headless Content Architecture",
    "text": "We separate structured content storage from presentation. Editors enjoy intuitive, real-time visual previews and structured schemas in Strapi, Sanity, or Contentful, while developers build fast, secure Next.js web applications deployed to global edge CDNs."
  },
  "capabilities": [
    {
      "icon": "file-text",
      "title": "Structured Content Modeling",
      "desc": "Designing modular, reusable content schemas (page builders, rich media blocks, author profiles) that scale across omni-channel touchpoints.",
      "outputs": [
        "Sanity / Strapi schema definitions",
        "Reusable slice/component library",
        "Taxonomy & category hierarchies"
      ]
    },
    {
      "icon": "world-code",
      "title": "Live Visual Preview & Editorial Tooling",
      "desc": "Side-by-side instant visual previews in editorial interfaces, enabling marketing teams to stage and review content without technical support.",
      "outputs": [
        "Real-time preview iframe integration",
        "Draft/published workflow configurations",
        "Scheduled publication automation"
      ]
    },
    {
      "icon": "shield-check",
      "title": "Role-Based Permissions & Localization",
      "desc": "Granular editorial roles (author, editor, publisher), multi-language localization workflows, and revision history audit logs.",
      "outputs": [
        "Multi-language localization matrix",
        "Custom RBAC permission policies",
        "Audit log tracking integration"
      ]
    },
    {
      "icon": "server",
      "title": "Edge Delivery & Incremental Regeneration",
      "desc": "Next.js Incremental Static Regeneration (ISR) and webhook caching that update published pages in seconds with zero server rebuild delays.",
      "outputs": [
        "On-demand webhook revalidation hooks",
        "Global edge CDN configuration",
        "Image optimization asset pipelines"
      ]
    }
  ],
  "techStack": [
    {
      "category": "Headless CMS Platforms",
      "items": [
        "Sanity.io",
        "Strapi",
        "Contentful",
        "Payload CMS",
        "Ghost"
      ]
    },
    {
      "category": "Frontend Frameworks",
      "items": [
        "Next.js",
        "React",
        "Astro",
        "Remix"
      ]
    },
    {
      "category": "Hosting & Edge",
      "items": [
        "Vercel",
        "Cloudflare Pages",
        "AWS CloudFront",
        "Docker"
      ]
    },
    {
      "category": "APIs & Search",
      "items": [
        "GraphQL",
        "REST",
        "GROQ",
        "Algolia"
      ]
    }
  ],
  "standards": [
    {
      "title": "Zero Database Attack Surface",
      "body": "The public website connects strictly to static CDN edge caches; the CMS admin database is never exposed to public internet traffic."
    },
    {
      "title": "Instant Visual Previewing",
      "body": "Draft changes render in under 500ms in preview environments before editorial publication."
    },
    {
      "title": "Sub-Second Edge Delivery",
      "body": "All content pages achieve sub-second TTFB through edge-cached CDN distribution."
    },
    {
      "title": "Type-Safe Content Bindings",
      "body": "TypeScript interfaces automatically generated from CMS schema definitions."
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Content Audit & Schema Design",
      "timing": "Days 1–5",
      "desc": "Auditing existing content, mapping reusable content blocks, defining taxonomy, and selecting the optimal CMS platform."
    },
    {
      "step": "02",
      "title": "CMS Configuration & Scaffold",
      "timing": "Week 2",
      "desc": "Configuring schema models, roles, assets, and establishing Next.js frontend integration."
    },
    {
      "step": "03",
      "title": "Content Migration & Previews",
      "timing": "Weeks 3–4",
      "desc": "Migrating legacy posts/pages via automated scripts, implementing live visual previews, and building UI slices."
    },
    {
      "step": "04",
      "title": "Editorial Training & Launch",
      "timing": "Milestone Close",
      "desc": "Editorial walkthrough sessions, documentation handbook delivery, webhook caching verification, and cutover."
    }
  ],
  "caseStudy": {
    "headline": "Sanity.io Headless CMS Replatforming for Global Tech Publisher",
    "sector": "Media & Digital Publishing",
    "summary": "Migrated 8,000+ legacy editorial articles to a headless Sanity + Next.js architecture, reducing editorial publishing cycle time by 60% and achieving 99 Lighthouse performance scores.",
    "metric": "60%",
    "metricLabel": "Reduction in editorial publishing turnaround"
  },
  "faqs": [
    {
      "q": "Should we choose Sanity, Strapi, or Contentful?",
      "a": "Sanity is unmatched for real-time collaborative editing and custom workflows; Strapi is optimal for self-hosted open-source requirements; Contentful excels for large multi-brand enterprise governance."
    },
    {
      "q": "Can marketing teams create new landing pages without writing code?",
      "a": "Yes. We build modular page builder systems where editors can drag, reorder, and configure pre-designed components freely."
    },
    {
      "q": "How do you migrate thousands of existing articles from WordPress?",
      "a": "We write automated migration scripts using the WordPress REST API to extract, clean, map images, and import structured content into the new CMS."
    },
    {
      "q": "Is headless CMS more secure than traditional CMS platforms?",
      "a": "Significantly. Because the frontend is decoupled and statically hosted on edge CDNs, there is no public SQL database or PHP backend for attackers to compromise."
    }
  ]
},

  "managed-support": {
  "id": "managed-support",
  "slug": "managed-support",
  "title": "Managed Support & SRE",
  "group": "Cloud and platform",
  "groupSlug": "cloud",
  "heroKicker": "Site Reliability & Production Operations",
  "headline": "Proactive Site Reliability Engineering and 24/7 Managed Infrastructure Support",
  "lead": "We provide dedicated SRE and infrastructure operations to safeguard your uptime, remediate production incidents before users notice, patch security vulnerabilities, and optimize cloud expenditures.",
  "facts": [
    {
      "num": "99.95%",
      "label": "Target production uptime"
    },
    {
      "num": "<15 Min",
      "label": "Critical incident response time"
    },
    {
      "num": "24/7",
      "label": "Continuous telemetry & monitoring"
    }
  ],
  "challenge": {
    "title": "The Production Vulnerability Window",
    "text": "Modern cloud platforms require continuous patching, database optimization, security monitoring, and incident response. Without dedicated SRE support, engineering teams spend valuable sprint capacity firefighting outages."
  },
  "approach": {
    "title": "Proactive Reliability & Error Budgets",
    "text": "We shift production operations from reactive firefighting to proactive Site Reliability Engineering: automated health checks, SLO/SLA error budgets, infrastructure as code runbooks, and continuous cost optimization."
  },
  "capabilities": [
    {
      "icon": "activity",
      "title": "24/7 Production Telemetry & Observability",
      "desc": "Comprehensive APM, distributed tracing, and metric collection using Datadog, Prometheus, Grafana, and CloudWatch.",
      "outputs": [
        "Consolidated observability dashboards",
        "SLO/SLI error budget definitions",
        "Multi-channel PagerDuty alerting"
      ]
    },
    {
      "icon": "shield-check",
      "title": "Incident Response & Blameless Post-Mortems",
      "desc": "Structured incident escalation matrices with rapid root cause identification, disaster mitigation, and blameless post-mortem reports.",
      "outputs": [
        "Guaranteed SLA incident response",
        "Detailed root cause analysis (RCA)",
        "Actionable preventative remediation PRs"
      ]
    },
    {
      "icon": "server",
      "title": "Infrastructure Patching & Disaster Drills",
      "desc": "Continuous OS/container security patching, automated daily database backups, and scheduled recovery drills.",
      "outputs": [
        "Automated Dependabot / patch workflows",
        "Disaster recovery failover tests",
        "Recovery Point & Time Objective (RPO/RTO) audits"
      ]
    },
    {
      "icon": "chart-bar",
      "title": "Cloud Spend & FinOps Optimization",
      "desc": "Ongoing cloud architectural audits identifying idle resources, rightsizing compute, and provisioning reserved/savings plans.",
      "outputs": [
        "Monthly FinOps cloud spend reports",
        "Compute rightsizing recommendations",
        "Resource termination automation scripts"
      ]
    }
  ],
  "techStack": [
    {
      "category": "Observability & APM",
      "items": [
        "Datadog",
        "Prometheus & Grafana",
        "New Relic",
        "AWS CloudWatch",
        "OpenTelemetry"
      ]
    },
    {
      "category": "Incident Management",
      "items": [
        "PagerDuty",
        "OpsGenie",
        "Slack Integrations",
        "Statuspage"
      ]
    },
    {
      "category": "Infrastructure Automation",
      "items": [
        "Terraform",
        "Ansible",
        "AWS Systems Manager",
        "Kubernetes"
      ]
    },
    {
      "category": "Security & Backup",
      "items": [
        "AWS Backup",
        "Velero",
        "Trivy",
        "Vault"
      ]
    }
  ],
  "standards": [
    {
      "title": "Guaranteed SLA Tiers",
      "body": "15-minute response for P1 critical incidents with named escalation engineers."
    },
    {
      "title": "Blameless Post-Mortems",
      "body": "Every major incident receives an engineering post-mortem document identifying structural fixes."
    },
    {
      "title": "Automated Backup Validation",
      "body": "Backups are not only created; restores are automatically tested on a recurring schedule."
    },
    {
      "title": "Monthly FinOps Audits",
      "body": "Continuous cloud expenditure monitoring preventing runaway bills."
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Production Health Audit",
      "timing": "Days 1–5",
      "desc": "Auditing current infrastructure, monitoring blindspots, backup policies, and alert noise levels."
    },
    {
      "step": "02",
      "title": "Telemetry & Runbook Setup",
      "timing": "Week 2",
      "desc": "Deploying observability agents, configuring alerts, creating escalation matrices, and writing runbooks."
    },
    {
      "step": "03",
      "title": "Active 24/7 Operations",
      "timing": "Ongoing",
      "desc": "Continuous monitoring, proactive health maintenance, incident triaging, and scheduled patching."
    },
    {
      "step": "04",
      "title": "Monthly Review & FinOps",
      "timing": "Monthly",
      "desc": "Monthly reliability reviews, SLA compliance reports, capacity planning, and cloud bill optimizations."
    }
  ],
  "caseStudy": {
    "headline": "Zero-Outage SRE Management for Enterprise SaaS Platform",
    "sector": "B2B SaaS & Cloud",
    "summary": "Assumed managed SRE operations for a multi-tenant B2B platform, eliminating unplanned outages for 18 consecutive months and reducing AWS cloud expenditure by 34%.",
    "metric": "99.98%",
    "metricLabel": "Maintained uptime over 18 months"
  },
  "faqs": [
    {
      "q": "What is your response time for critical outages?",
      "a": "We guarantee a sub-15 minute response time for P1 critical outages, with senior SRE engineers directly on call."
    },
    {
      "q": "Can you manage infrastructure hosted in our existing AWS/Azure account?",
      "a": "Yes. All management occurs directly within your cloud tenant using least-privilege IAM roles and audited access logs."
    },
    {
      "q": "Do you only fix issues or do you make code improvements?",
      "a": "We identify root causes and submit direct pull requests to resolve memory leaks, database query locks, and architectural bottlenecks."
    },
    {
      "q": "How do you handle cloud security patches?",
      "a": "We schedule non-disruptive rolling updates and container redeployments to ensure operating systems and dependencies remain patched against CVEs."
    }
  ]
},

  "ai-testing": {
  "id": "ai-testing",
  "slug": "ai-testing",
  "title": "AI & LLM Testing",
  "group": "Quality, security and enterprise",
  "groupSlug": "quality",
  "heroKicker": "Model Evaluation & AI Red-Teaming",
  "headline": "Systematic Evaluation, Red-Teaming, and Quality Assurance for Applied AI",
  "lead": "We audit, evaluate, and test Generative AI applications and LLM agents for hallucination rates, prompt injection vulnerabilities, output schema adherence, and performance regressions.",
  "facts": [
    {
      "num": "1,000+",
      "label": "Automated adversarial test cases"
    },
    {
      "num": "0% Tolerated",
      "label": "Prompt injection escapes"
    },
    {
      "num": "CI Gated",
      "label": "Evaluations run on prompt changes"
    }
  ],
  "challenge": {
    "title": "The Non-Deterministic Quality Crisis",
    "text": "Traditional software testing fails when applied to AI. LLMs are non-deterministic: minor prompt edits can cause unexpected regressions, hallucinations damage user trust, and malicious prompt injections compromise private system context."
  },
  "approach": {
    "title": "Automated Evaluation Harnesses & Red-Teaming",
    "text": "We apply rigorous AI evaluation engineering: synthetic adversarial datasets, continuous prompt regression testing via Promptfoo, semantic faithfulness scoring with Ragas, and automated guardrail validation on every pull request."
  },
  "capabilities": [
    {
      "icon": "shield-check",
      "title": "Prompt Regression & Evaluation Suites",
      "desc": "Automated CI test harnesses evaluating output relevancy, context faithfulness, and factual accuracy against golden benchmark datasets.",
      "outputs": [
        "Promptfoo / DeepEval test configurations",
        "Golden evaluation benchmark datasets",
        "Automated CI score regression gates"
      ]
    },
    {
      "icon": "lock",
      "title": "Adversarial Red-Teaming & Jailbreak Testing",
      "desc": "Stress-testing AI models against direct prompt injections, jailbreaks, PII leakage probes, and system prompt extraction attacks.",
      "outputs": [
        "Adversarial attack test payloads",
        "Prompt injection vulnerability reports",
        "Custom input filter validation rules"
      ]
    },
    {
      "icon": "checklist",
      "title": "Deterministic Schema & Tool-Calling QA",
      "desc": "Validating that LLM function calls, JSON payloads, and downstream API parameters strictly adhere to expected schemas without malformed syntax.",
      "outputs": [
        "Pydantic schema validation suites",
        "Tool-calling edge case test runners",
        "Fallback handling verification"
      ]
    },
    {
      "icon": "activity",
      "title": "Latency & Token Cost Benchmarking",
      "desc": "Profiling model response latency (TTFT), token consumption economics, and evaluating smaller open-weight alternatives for cost reduction.",
      "outputs": [
        "Latency distribution benchmarks",
        "Token expenditure cost models",
        "Model tier comparison scorecards"
      ]
    }
  ],
  "techStack": [
    {
      "category": "Evaluation Frameworks",
      "items": [
        "Promptfoo",
        "DeepEval",
        "Ragas",
        "TruLens",
        "Langsmith"
      ]
    },
    {
      "category": "Security & Red-Teaming",
      "items": [
        "Garak",
        "Llama Guard",
        "NeMo Guardrails",
        "PyRIT"
      ]
    },
    {
      "category": "Observability & CI",
      "items": [
        "Langfuse",
        "GitHub Actions",
        "Python / Pytest",
        "Docker"
      ]
    },
    {
      "category": "Model Testing",
      "items": [
        "OpenAI",
        "Anthropic Claude",
        "Google Gemini",
        "Mistral / Llama 3"
      ]
    }
  ],
  "standards": [
    {
      "title": "Zero Tolerated Prompt Injections",
      "body": "Every customer-facing AI agent must withstand standardized adversarial jailbreak attack vectors."
    },
    {
      "title": "Evaluations Run on Every PR",
      "body": "No prompt change is deployed to production without passing automated golden evaluation suites in CI."
    },
    {
      "title": "Context Faithfulness Gating",
      "body": "RAG responses must score above 0.90 on semantic faithfulness against retrieved source documents."
    },
    {
      "title": "Synthetic Edge-Case Coverage",
      "body": "Synthetic adversarial test generators used to discover edge cases human testers miss."
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Golden Dataset Curation",
      "timing": "Days 1–5",
      "desc": "Curating representative domain questions, expected answers, and known failure edge cases into a benchmark dataset."
    },
    {
      "step": "02",
      "title": "Harness Setup & Baseline Scoring",
      "timing": "Week 2",
      "desc": "Configuring Promptfoo / DeepEval in CI and establishing baseline scores for relevancy, toxicity, and accuracy."
    },
    {
      "step": "03",
      "title": "Adversarial Red-Teaming",
      "timing": "Weeks 3–4",
      "desc": "Executing automated and manual red-teaming attacks to identify injection vulnerabilities and PII leakage risks."
    },
    {
      "step": "04",
      "title": "Continuous Gating & Runbook",
      "timing": "Milestone Close",
      "desc": "Enforcing automated CI evaluation blockers, production drift monitoring, and evaluation dashboard handover."
    }
  ],
  "caseStudy": {
    "headline": "AI Evaluation Harness for Enterprise Healthcare Assistant",
    "sector": "Healthcare & Life Sciences",
    "summary": "Built an automated Promptfoo evaluation pipeline testing 1,400+ clinical Q&A scenarios, cutting medical hallucination rates by 89% and blocking 100% of adversarial prompt extraction attempts.",
    "metric": "89%",
    "metricLabel": "Reduction in AI hallucination rate"
  },
  "faqs": [
    {
      "q": "How is testing an LLM different from testing regular code?",
      "a": "Traditional tests expect deterministic outputs (input A always produces output B). LLM testing requires semantic assertions, reference comparison, similarity scoring, and probabilistic regression evaluations."
    },
    {
      "q": "What is a prompt evaluation harness?",
      "a": "A prompt evaluation harness (like Promptfoo) runs your prompts across hundreds of test inputs automatically, grading the responses for accuracy, tone, and security before deployment."
    },
    {
      "q": "Can you help prevent users from hacking our AI chatbot?",
      "a": "Yes. We perform systematic adversarial red-teaming to uncover jailbreaks and implement layered guardrails that sanitize inputs and validate outputs."
    },
    {
      "q": "How do you test RAG pipeline accuracy?",
      "a": "We test both the retrieval component (context recall and precision) and the generation component (faithfulness to the retrieved documents) independently using Ragas metrics."
    }
  ]
},

  "cybersecurity": {
  "id": "cybersecurity",
  "slug": "cybersecurity",
  "title": "Cybersecurity & Security Reviews",
  "group": "Quality, security and enterprise",
  "groupSlug": "quality",
  "heroKicker": "Application Security & Vulnerability Audits",
  "headline": "Pragmatic Application Security and Code Reviews Engineered by Builders",
  "lead": "We conduct hands-on security reviews, penetration testing, dependency audits, and cloud infrastructure hardening to identify vulnerabilities before adversaries do. Actionable fixes, not vanity PDF reports.",
  "facts": [
    {
      "num": "OWASP Top 10",
      "label": "Full verification coverage"
    },
    {
      "num": "100%",
      "label": "Remediated code PR verification"
    },
    {
      "num": "48-Hour",
      "label": "Critical vulnerability disclosure turnaround"
    }
  ],
  "challenge": {
    "title": "The Automated Scanner Noise Trap",
    "text": "Generic security scanners produce hundreds of false positives that waste developer time, while tick-box compliance audits fail to uncover critical business logic vulnerabilities, authorization bypasses, and cloud misconfigurations."
  },
  "approach": {
    "title": "Builder-Led Application Security",
    "text": "Our senior software and security engineers review your actual source code, API authentication flows, and cloud IAM configurations. We don't just dump a scanner report—we demonstrate the vulnerability and provide pull requests that fix it."
  },
  "capabilities": [
    {
      "icon": "lock",
      "title": "Application Penetration Testing",
      "desc": "Thorough manual and automated penetration testing covering the OWASP Top 10, API authorization flaws, and business logic bypasses.",
      "outputs": [
        "Comprehensive penetration testing report",
        "Reproduction scripts for verified findings",
        "Severity-ranked remediation backlog"
      ]
    },
    {
      "icon": "code",
      "title": "Source Code Security Auditing (SAST)",
      "desc": "Senior engineering review of source code repositories identifying injection risks, insecure cryptographic primitives, and hardcoded secrets.",
      "outputs": [
        "Static analysis rule configuration",
        "Manual code review audit findings",
        "Remediation pull requests with tests"
      ]
    },
    {
      "icon": "cloud",
      "title": "Cloud IAM & Infrastructure Hardening",
      "desc": "Auditing AWS, Azure, and GCP environments for overly permissive IAM roles, publicly accessible storage buckets, and unencrypted volumes.",
      "outputs": [
        "Cloud security posture audit",
        "Least-privilege IAM policy templates",
        "VPC network isolation hardening"
      ]
    },
    {
      "icon": "shield-check",
      "title": "Software Supply Chain Security",
      "desc": "Automated Software Bill of Materials (SBOM) generation, dependency vulnerability patching (Snyk/Trivy), and license compliance checks.",
      "outputs": [
        "Automated dependency scan workflows",
        "SBOM inventory documentation",
        "Third-party license compliance verification"
      ]
    }
  ],
  "techStack": [
    {
      "category": "Penetration Testing & DAST",
      "items": [
        "Burp Suite Professional",
        "OWASP ZAP",
        "Postman",
        "Nmap"
      ]
    },
    {
      "category": "Code Analysis (SAST)",
      "items": [
        "SonarQube",
        "Semgrep",
        "Snyk Code",
        "GitHub CodeQL"
      ]
    },
    {
      "category": "Cloud & Container Security",
      "items": [
        "Trivy",
        "ScoutSuite",
        "AWS Security Hub",
        "Prowler",
        "Falco"
      ]
    },
    {
      "category": "Secrets & Compliance",
      "items": [
        "TruffleHog",
        "Gitleaks",
        "HashiCorp Vault",
        "OWASP ASVS"
      ]
    }
  ],
  "standards": [
    {
      "title": "Zero False-Positive Reports",
      "body": "Every finding in our report has been manually verified with a working proof-of-concept."
    },
    {
      "title": "Direct Remediation PRs",
      "body": "We supply tested code pull requests and configuration templates to fix identified flaws."
    },
    {
      "title": "Confidentiality Under NDA",
      "body": "All audits conducted under strict mutual NDA with secure report transmission and sanitized test artifacts."
    },
    {
      "title": "Free Verification Retest",
      "body": "We retest all identified vulnerabilities after your team applies fixes at no extra charge."
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Scoping & Threat Modeling",
      "timing": "Days 1–3",
      "desc": "Defining audit boundaries, threat modeling critical user journeys, agreeing rules of engagement, and mutual NDA execution."
    },
    {
      "step": "02",
      "title": "Security Testing & Code Review",
      "timing": "Weeks 1–2",
      "desc": "Executing static code reviews, manual API penetration testing, and cloud configuration auditing."
    },
    {
      "step": "03",
      "title": "Findings Delivery & Workshop",
      "timing": "Week 3",
      "desc": "Delivering executive summary, technical reproduction guides, and hosting an interactive remediation workshop with developers."
    },
    {
      "step": "04",
      "title": "Fix Verification Retest",
      "timing": "Post-Fix",
      "desc": "Retesting fixed endpoints and issuing a clean verification confirmation certificate for stakeholders."
    }
  ],
  "caseStudy": {
    "headline": "Comprehensive Security Review for Fintech Payment Gateway",
    "sector": "Fintech & Payment Processing",
    "summary": "Conducted application penetration testing and cloud IAM review for a Series B payments startup, uncovering and remediating 2 critical authorization bypasses prior to formal SOC 2 certification.",
    "metric": "100%",
    "metricLabel": "Critical vulnerabilities remediated prior to audit"
  },
  "faqs": [
    {
      "q": "How is your security review different from running automated scanners?",
      "a": "Automated scanners miss complex multi-step authorization flaws, business logic bugs, and race conditions. Our senior engineers combine automated scanning with deep manual code review and contextual exploitation."
    },
    {
      "q": "Will penetration testing disrupt our live production environment?",
      "a": "No. We typically test on staging environments with production parity, or coordinate low-impact testing windows with non-destructive payloads."
    },
    {
      "q": "Do you help us fix the vulnerabilities you find?",
      "a": "Yes. Unlike pure advisory firms, our engineering pods write and submit pull requests with fix code and automated regression tests directly to your repository."
    },
    {
      "q": "Can this help us prepare for SOC 2 or ISO 27001 certification?",
      "a": "Yes. Our audit reports, remediation records, and verification certificates directly fulfill the penetration testing and vulnerability management requirements of SOC 2 and ISO 27001."
    }
  ]
},

  "erp-crm": {
  "id": "erp-crm",
  "slug": "erp-crm",
  "title": "ERP, CRM & Power Platform",
  "group": "Quality, security and enterprise",
  "groupSlug": "quality",
  "heroKicker": "Enterprise System Integration & Automation",
  "headline": "Enterprise ERP and CRM Integration Engineered for Reliable Process Automation",
  "lead": "We integrate, customize, and automate Microsoft Dynamics 365, Salesforce, SAP, and Power Platform workflows, connecting your core enterprise systems with custom customer portals and data pipelines.",
  "facts": [
    {
      "num": "Two-Way",
      "label": "Real-time transactional sync"
    },
    {
      "num": "Zero",
      "label": "Double data entry"
    },
    {
      "num": "Role-Based",
      "label": "Strict enterprise access control"
    }
  ],
  "challenge": {
    "title": "The Enterprise Silo Dilemma",
    "text": "Organizations waste hundreds of hours on manual double-entry across disconnected ERPs and CRMs. Brittle custom integrations break during vendor upgrades, and expensive consultants leave behind unmaintainable spaghetti customizations."
  },
  "approach": {
    "title": "API-First Middleware & Modern Power Platform",
    "text": "We architect clean, API-driven middleware layers with idempotent message queues, automated Power Platform workflows, and two-way sync pipelines that keep Salesforce, Dynamics, and SAP aligned in real time."
  },
  "capabilities": [
    {
      "icon": "building-skyscraper",
      "title": "Salesforce & Dynamics 365 Integration",
      "desc": "Two-way transactional synchronization connecting CRM contact records, deals, and invoices directly to billing and customer web portals.",
      "outputs": [
        "Salesforce REST / Bulk API sync connectors",
        "Dynamics 365 Dataverse integrations",
        "Custom webhooks & message workers"
      ]
    },
    {
      "icon": "robot",
      "title": "Microsoft Power Platform Automation",
      "desc": "Streamlined Power Automate flows, Power Apps internal portals, and Power BI reporting integrated directly into Microsoft 365 environments.",
      "outputs": [
        "Power Automate enterprise cloud flows",
        "Model-driven & canvas Power Apps",
        "Dataverse relationship modeling"
      ]
    },
    {
      "icon": "database",
      "title": "ERP Data Pipelines & SAP Connectivity",
      "desc": "Reliable event queues extracting order, inventory, and ledger data from SAP, NetSuite, or QuickBooks into centralized data warehouses.",
      "outputs": [
        "SAP OData / RFC integration services",
        "NetSuite SuiteTalk API pipelines",
        "Idempotent event queue workers"
      ]
    },
    {
      "icon": "shield-check",
      "title": "Enterprise Governance & Role-Based Access",
      "desc": "Role-based access control (RBAC), audit logging, environment lifecycle management (ALM), and automated solution packaging.",
      "outputs": [
        "Azure AD / Entra ID SSO integration",
        "Power Platform ALM pipelines",
        "Comprehensive compliance audit trails"
      ]
    }
  ],
  "techStack": [
    {
      "category": "CRM & ERP Systems",
      "items": [
        "Microsoft Dynamics 365",
        "Salesforce",
        "SAP (S/4HANA & ECC)",
        "NetSuite",
        "QuickBooks Online"
      ]
    },
    {
      "category": "Power Platform & Automation",
      "items": [
        "Power Automate",
        "Power Apps",
        "Dataverse",
        "Power BI",
        "Azure Logic Apps"
      ]
    },
    {
      "category": "Middleware & Integration",
      "items": [
        "Node.js",
        "Python",
        "RabbitMQ / Azure Service Bus",
        "PostgreSQL"
      ]
    },
    {
      "category": "Identity & Security",
      "items": [
        "Microsoft Entra ID (Azure AD)",
        "OAuth 2.0",
        "mTLS",
        "HashiCorp Vault"
      ]
    }
  ],
  "standards": [
    {
      "title": "Idempotent Data Synchronization",
      "body": "Every sync operation handles network dropouts and duplicates gracefully with zero duplicate record creation."
    },
    {
      "title": "ALM Solution Packaging",
      "body": "All Power Platform customizations managed in Git version control with automated dev-to-prod deployment pipelines."
    },
    {
      "title": "Enterprise Audit Logging",
      "body": "Every data modification is logged with user attribution and timestamp for full compliance traceability."
    },
    {
      "title": "Zero Vendor Lock-In",
      "body": "Standard REST APIs and Microsoft best practices followed without proprietary third-party wrapper dependencies."
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "System Audit & Flow Architecture",
      "timing": "Days 1–5",
      "desc": "Mapping entity schemas across ERP and CRM, identifying duplicate fields, and defining data ownership hierarchy."
    },
    {
      "step": "02",
      "title": "Middleware & Connector Scaffold",
      "timing": "Week 2",
      "desc": "Setting up authentication, Dataverse environments, and building message queues with dead-letter handling."
    },
    {
      "step": "03",
      "title": "Flow Development & Data Sync",
      "timing": "Weeks 3–5",
      "desc": "Developing two-way sync pipelines, Power Automate flows, custom portal interfaces, and error handlers."
    },
    {
      "step": "04",
      "title": "User Acceptance & Cutover",
      "timing": "Milestone Close",
      "desc": "Staging data reconciliation, user acceptance testing (UAT), production cutover, and administrative training."
    }
  ],
  "caseStudy": {
    "headline": "Salesforce to Dynamics 365 Enterprise Sync for Industrial Manufacturer",
    "sector": "Manufacturing & Distribution",
    "summary": "Connected global sales pipeline data from Salesforce with manufacturing inventory in Dynamics 365, eliminating 30+ hours of weekly manual order entry across 4 regional offices.",
    "metric": "100%",
    "metricLabel": "Elimination of manual order double-entry"
  },
  "faqs": [
    {
      "q": "How do you prevent data conflicts when two systems update the same record?",
      "a": "We establish clear source-of-truth rules per entity (e.g., Salesforce owns Leads, ERP owns Orders) and implement timestamp-based optimistic locking."
    },
    {
      "q": "Can Power Platform connect to non-Microsoft databases?",
      "a": "Yes. Power Automate and Power Apps connect seamlessly to PostgreSQL, MySQL, REST APIs, and custom enterprise databases via standard connectors or on-premises data gateways."
    },
    {
      "q": "Do you provide custom developer extensions or only no-code tools?",
      "a": "We build both: low-code Power Platform solutions for rapid business workflows, and custom TypeScript/C# plugins when high-throughput compute is needed."
    },
    {
      "q": "How do you manage changes across Dev, Test, and Production environments?",
      "a": "We implement Power Platform Application Lifecycle Management (ALM) using Azure DevOps or GitHub Actions to export, version, and deploy solutions automatically."
    }
  ]
},
};

// Helper function to get service by slug with graceful structured fallback
export function getServiceData(slug) {
  if (SERVICES_DATA[slug]) {
    return SERVICES_DATA[slug];
  }

  // Graceful fallback for any slug
  const title = slug
    ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : 'IT Service';

  return {
    id: slug || 'custom-software',
    slug: slug || 'custom-software',
    title: title,
    group: "Build and apps",
    groupSlug: "apps",
    heroKicker: "Enterprise IT Services · Greater Noida & Louisville",
    headline: `Enterprise-Grade ${title} Built for Resilient Production Throughput`,
    lead: "We design, build, and deploy production software systems tailored to your exact business constraints. Senior engineering pods that ship in two-week sprints with complete repository and cloud ownership from day one.",
    facts: [
      { num: "2-Week", label: "Sprint cadence with live demos" },
      { num: "100%", label: "IP & repository ownership" },
      { num: "5–7 Days", label: "Team assembly from vetted bench" },
    ],
    challenge: {
      title: "The Production Bottleneck",
      text: "Off-the-shelf software forces businesses into rigid workflows, while fragmented agencies produce unmaintainable codebases with high technical debt, slow release cycles, and unpredictable vendor lock-in.",
    },
    approach: {
      title: "The Laprrk Delivery Standard",
      text: "We embed senior engineering pods that follow Domain-Driven Design, test-driven pipelines, and modular architectures. Everything commits directly to your private repositories, with automated CI/CD and production telemetry from sprint one.",
    },
    capabilities: [
      {
        icon: "code",
        title: "Domain Architecture & Core Engineering",
        desc: "Modular architectures designed around bounded business domains for long-term maintainability and high concurrency.",
        outputs: ["Microservices architecture", "Event-driven queues", "Domain-driven boundary specifications"],
      },
      {
        icon: "api",
        title: "Secure API & Contract Standards",
        desc: "Type-safe APIs built with strict schema contracts, versioning, automated documentation, and token authentication.",
        outputs: ["OpenAPI 3.1 & GraphQL schemas", "mTLS & OAuth2 authentication", "Automated contract testing suites"],
      },
      {
        icon: "database",
        title: "Data Persistence & Transaction Reliability",
        desc: "Optimized storage engines configured for ACID reliability, data integrity, and low-latency queries.",
        outputs: ["Schema models", "Connection pooling & replicas", "Automated migration scripts"],
      },
      {
        icon: "server",
        title: "Production CI/CD & Cloud Infrastructure",
        desc: "Containerized deployment pipelines with zero-downtime rollouts, automated linting, security scans, and environment reproducibility.",
        outputs: ["GitHub Actions / GitLab CI workflows", "Terraform modules", "Docker multi-stage build files"],
      },
    ],
    techStack: [
      { category: "Languages & Frameworks", items: ["Node.js / TypeScript", "Python", "Go (Golang)", "React", "Next.js"] },
      { category: "Databases & Storage", items: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch"] },
      { category: "Cloud & Infrastructure", items: ["Docker", "Kubernetes", "AWS / Azure", "Terraform", "GitHub Actions"] },
      { category: "Testing & Monitoring", items: ["Playwright", "Jest / Vitest", "OpenTelemetry", "Datadog"] },
    ],
    standards: [
      { title: "Direct Code Access", body: "Every commit, PR, and artifact lives in your organization's version control. No intermediary repos." },
      { title: "Gated Automated Tests", body: "Minimum 80% test coverage with automated unit, integration, and security checks on every pull request." },
      { title: "Two-Week Sprint Velocity", body: "Working software demo at the close of every fortnight with clear milestone burndowns." },
      { title: "Mutual NDA & IP Transfer", body: "Complete intellectual property assignment executed before code generation commences." },
    ],
    process: [
      { step: "01", title: "Architecture & Scoping", timing: "Days 1–5", desc: "Technical discovery, schema drafts, API contracts, milestone roadmap, and mutual NDA execution." },
      { step: "02", title: "Scaffold & Pipeline", timing: "Week 2", desc: "Setting up staging infrastructure, container definitions, repository branching, and automated CI/CD." },
      { step: "03", title: "Sprint Execution", timing: "Weeks 3+", desc: "Bi-weekly sprint cycles, backlog grooming, daily standups, PR reviews, and end-of-sprint demo calls." },
      { step: "04", title: "Production Hardening", timing: "Milestone Close", desc: "Security auditing, load testing, comprehensive runbooks, team handover, and optional ongoing SRE support." },
    ],
    caseStudy: {
      headline: "70% Reduction in Manual Operations in 6 Weeks",
      sector: "Insurance & Financial Operations",
      summary: "Engineered a high-throughput transaction processing engine replacing legacy spreadsheet workflows, achieving zero-downtime cutover and audited compliance.",
      metric: "70%",
      metricLabel: "Operational efficiency lift",
    },
    faqs: [
      { q: "Who owns the code and intellectual property?", a: "You do. 100% of all source code, architecture diagrams, build pipelines, and documentation are assigned directly to your organization." },
      { q: "How do our internal engineers collaborate with your pod?", a: "Our engineers integrate directly into your communication channels (Slack/Teams), participate in your ceremonies, and submit PRs for internal code reviews." },
      { q: "Can we transition from staff augmentation to fixed-scope?", a: "Yes. Engagements frequently begin with targeted fixed-scope spikes and scale into dedicated pods as roadmap requirements solidify." },
      { q: "What is the onboarding timeline?", a: "Initial discovery occurs within 48 hours of contact, with team deployment typically active within 5 to 7 business days." },
    ],
  };
}
